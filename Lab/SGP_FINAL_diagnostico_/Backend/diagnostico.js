// =====================================================
// diagnostico.js
// Ejecuta: node diagnostico.js
// Identifica la causa exacta del error 500 en /login
// =====================================================

require('dotenv').config();
const mysql = require('mysql2/promise');

console.log('\n🔍  DIAGNÓSTICO SGP – Buscando la causa del error 500\n');
console.log('═'.repeat(52));

// ── 1. Verificar variables de entorno ────────────────
console.log('\n📋  1. Variables de entorno (.env):\n');

const vars = {
  PORT:         process.env.PORT,
  DB_HOST:      process.env.DB_HOST,
  DB_PORT:      process.env.DB_PORT,
  DB_NAME:      process.env.DB_NAME,
  DB_USER:      process.env.DB_USER,
  DB_PASSWORD:  process.env.DB_PASSWORD ? '***' + process.env.DB_PASSWORD.slice(-2) : '(VACÍA)',
  JWT_SECRET:   process.env.JWT_SECRET  ? '✅ definido' : '❌ NO DEFINIDO',
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN,
  FRONTEND_URL: process.env.FRONTEND_URL,
};

let hayProblemas = false;

for (const [k, v] of Object.entries(vars)) {
  const estado = v ? '✅' : '⚠️ ';
  console.log(`   ${estado}  ${k.padEnd(18)} = ${v || '(no definido)'}`);
}

if (!process.env.JWT_SECRET) {
  console.log('\n   ❌  PROBLEMA ENCONTRADO: JWT_SECRET no está definido en .env');
  console.log('       El login falla porque jwt.sign() recibe "undefined" como secreto.');
  console.log('       SOLUCIÓN: Abre el archivo .env y agrega:');
  console.log('       JWT_SECRET=sgp_sena_secreto_super_seguro_2025\n');
  hayProblemas = true;
}

if (!process.env.DB_PASSWORD && process.env.DB_PASSWORD !== '') {
  console.log('\n   ⚠️   DB_PASSWORD no definida — se usará cadena vacía (OK si MySQL no tiene contraseña)');
}

// ── 2. Probar conexión a MySQL ─────────────────────
console.log('\n📡  2. Conexión a MySQL:\n');

const dbConfig = {
  host:     process.env.DB_HOST     || 'localhost',
  port:     parseInt(process.env.DB_PORT) || 3306,
  database: process.env.DB_NAME     || 'SistemaGestionProyectosSENA',
  user:     process.env.DB_USER     || 'root',
  password: process.env.DB_PASSWORD || '',
};

console.log(`   Intentando: ${dbConfig.user}@${dbConfig.host}:${dbConfig.port}/${dbConfig.database}`);

(async () => {
  let conn;
  try {
    conn = await mysql.createConnection(dbConfig);
    console.log('   ✅  Conexión exitosa a MySQL\n');

    // ── 3. Verificar que las tablas existen ───────────
    console.log('📦  3. Tablas en la base de datos:\n');
    const tablas = ['roles','usuarios','proyectos','fases_proyecto','tareas',
                    'equipos_proyecto','mensajes','notificaciones','repositorios',
                    'entregables','historial_cambios'];

    for (const tabla of tablas) {
      const [r] = await conn.execute(`SELECT COUNT(*) AS n FROM \`${tabla}\``);
      console.log(`   ✅  ${tabla.padEnd(22)} → ${r[0].n} registro(s)`);
    }

    // ── 4. Verificar usuarios y hash ──────────────────
    console.log('\n👤  4. Usuarios en la BD:\n');
    const [usuarios] = await conn.execute(
      'SELECT id_usuario, nombres, correo, id_rol, estado, LEFT(contrasena,10) AS hash_inicio FROM usuarios LIMIT 10'
    );

    if (usuarios.length === 0) {
      console.log('   ❌  PROBLEMA: No hay usuarios en la tabla.');
      console.log('       SOLUCIÓN: Ejecuta:  node database/seed.js\n');
      hayProblemas = true;
    } else {
      for (const u of usuarios) {
        const hashOk = u.hash_inicio.startsWith('$2a$') || u.hash_inicio.startsWith('$2b$');
        const estadoOk = u.estado === 1 || u.estado === true;
        console.log(`   ${hashOk ? '✅' : '❌'}  ${u.correo.padEnd(22)} | hash: ${hashOk ? 'bcrypt ✅' : 'TEXTO PLANO ❌ (falta seed.js)'} | estado: ${estadoOk ? 'activo ✅' : 'INACTIVO ❌'}`);
        if (!hashOk) hayProblemas = true;
        if (!estadoOk) hayProblemas = true;
      }
    }

    // ── 5. Verificar bcryptjs ─────────────────────────
    console.log('\n🔐  5. Librería bcryptjs:\n');
    try {
      const bcrypt = require('bcryptjs');
      const testHash = await bcrypt.hash('test', 4);
      const testOk   = await bcrypt.compare('test', testHash);
      console.log(`   ✅  bcryptjs funciona correctamente (hash + compare: ${testOk})`);
    } catch (e) {
      console.log(`   ❌  Error con bcryptjs: ${e.message}`);
      console.log('       SOLUCIÓN: Ejecuta:  npm install');
      hayProblemas = true;
    }

    // ── 6. Verificar jsonwebtoken ────────────────────
    console.log('\n🔑  6. Librería jsonwebtoken:\n');
    try {
      const jwt = require('jsonwebtoken');
      const secret = process.env.JWT_SECRET || 'test_secret';
      const token = jwt.sign({ test: true }, secret, { expiresIn: '1h' });
      jwt.verify(token, secret);
      console.log(`   ✅  jsonwebtoken funciona correctamente`);
      if (!process.env.JWT_SECRET) {
        console.log('   ⚠️   Pero JWT_SECRET no está en .env — esto CAUSA el error 500');
      }
    } catch (e) {
      console.log(`   ❌  Error con jsonwebtoken: ${e.message}`);
      hayProblemas = true;
    }

    await conn.end();

  } catch (err) {
    console.log(`   ❌  PROBLEMA: No se pudo conectar a MySQL`);
    console.log(`       Error: ${err.message}\n`);

    if (err.code === 'ER_ACCESS_DENIED_ERROR') {
      console.log('   💡  SOLUCIÓN: Usuario o contraseña incorrectos.');
      console.log('       Abre el .env y corrige DB_USER y DB_PASSWORD.\n');
    } else if (err.code === 'ECONNREFUSED') {
      console.log('   💡  SOLUCIÓN: MySQL no está corriendo.');
      console.log('       Inicia el servicio MySQL y vuelve a intentarlo.\n');
    } else if (err.code === 'ER_BAD_DB_ERROR') {
      console.log('   💡  SOLUCIÓN: La base de datos no existe.');
      console.log('       Importa el schema.sql en MySQL Workbench primero.\n');
    }
    hayProblemas = true;
  }

  // ── Resumen final ──────────────────────────────────
  console.log('\n' + '═'.repeat(52));
  if (hayProblemas) {
    console.log('\n❌  Se encontraron problemas. Léelos arriba y corrígelos.');
    console.log('    Luego reinicia el servidor:  npm run dev\n');
  } else {
    console.log('\n✅  Todo parece correcto.');
    console.log('    Si el error 500 persiste, copia el mensaje exacto');
    console.log('    de la consola del servidor y compártelo.\n');
  }
})();
