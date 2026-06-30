# 🎓 SGP – Sistema de Gestión de Proyectos SENA

Sistema web completo para la gestión de proyectos académicos del SENA.  
**Stack:** Node.js + Express + MySQL (Backend) · React + Vite (Frontend)

---

## 📁 Estructura del proyecto

```
SGP/
├── Backend/                  ← API REST (Node.js / Express)
│   ├── src/
│   │   ├── config/db.js      ← Conexión MySQL (pool de conexiones)
│   │   ├── controllers/      ← Lógica de negocio por módulo
│   │   ├── middlewares/      ← Auth JWT + control de roles
│   │   ├── routes/           ← Endpoints de la API
│   │   └── services/         ← Servicios (historial, etc.)
│   ├── database/
│   │   └── schema.sql        ← Script SQL completo (tablas + datos demo)
│   ├── server.js             ← Punto de entrada del servidor
│   ├── .env.example          ← Plantilla de variables de entorno
│   └── package.json
│
├── Frontend/                 ← Interfaz React
│   ├── src/
│   │   ├── context/          ← Estado global de autenticación
│   │   ├── services/api.js   ← Cliente Axios + todos los servicios
│   │   ├── components/       ← Componentes reutilizables + helpers
│   │   ├── pages/            ← Páginas de la aplicación
│   │   └── index.css         ← Tokens de diseño + estilos globales
│   ├── index.html
│   └── vite.config.js        ← Proxy /api → localhost:3000
│
└── README.md                 ← Este archivo
```

---

## ⚡ Inicio rápido (desarrollo local)

### Requisitos previos

| Herramienta | Versión mínima | Descarga |
|-------------|----------------|----------|
| Node.js     | 18+            | https://nodejs.org |
| MySQL       | 8.0+           | https://dev.mysql.com/downloads/ |
| npm         | 9+             | Incluido con Node.js |

---

### Paso 1 – Base de datos

1. Abre tu cliente MySQL (MySQL Workbench, DBeaver, terminal, etc.)
2. Ejecuta el script completo:

```sql
SOURCE ruta/a/SGP/Backend/database/schema.sql;
```

Esto crea la base de datos `SistemaGestionProyectosSENA` con todas las tablas y **datos de ejemplo listos para usar**.

---

### Paso 2 – Backend

```bash
cd SGP/Backend

# 1. Copiar y configurar variables de entorno
cp .env.example .env
# Edita .env con tu contraseña de MySQL y un JWT_SECRET seguro

# 2. Instalar dependencias
npm install

# 3. Iniciar servidor
npm run dev          # Modo desarrollo (auto-recarga con nodemon)
# ó
npm start            # Modo producción
```

El servidor arranca en **http://localhost:3000**  
Verifica: `GET http://localhost:3000/` → debe devolver `{ success: true, status: "online" }`

---

### Paso 3 – Frontend

```bash
cd SGP/Frontend

# 1. Instalar dependencias
npm install

# 2. Iniciar servidor de desarrollo
npm run dev
```

El frontend arranca en **http://localhost:5173**  
Las peticiones a `/api/v1/*` se redirigen automáticamente al backend en el puerto 3000 (configurado en `vite.config.js`).

---

## 🔑 Cuentas de demo

Todos los usuarios de ejemplo tienen la contraseña: **`123`**

| Correo              | Nombre          | Rol           |
|---------------------|-----------------|---------------|
| juan@mail.com       | Juan Perez      | Administrador |
| maria@mail.com      | Maria Gomez     | Instructor    |
| luis@mail.com       | Luis Rodriguez  | Instructor    |
| carlos@mail.com     | Carlos Lopez    | Aprendiz      |
| ana@mail.com        | Ana Martinez    | Aprendiz      |

---

## 🗺️ Módulos del sistema

| Módulo          | Descripción                                              | Acceso         |
|-----------------|----------------------------------------------------------|----------------|
| **Dashboard**   | Resumen de proyectos, tareas y estadísticas              | Todos          |
| **Proyectos**   | Listado, creación y detalle de proyectos                 | Todos (crear: Admin/Instructor) |
| **Fases**       | Fases de cada proyecto con avance                        | Dentro del proyecto |
| **Tareas**      | Asignación, seguimiento y estado de tareas               | Todos          |
| **Equipo**      | Miembros del proyecto y sus roles                        | Dentro del proyecto |
| **Mensajes**    | Chat en tiempo de carga por proyecto                     | Dentro del proyecto |
| **Repositorios**| Vincular URLs de GitHub a proyectos                      | Admin/Instructor |
| **Usuarios**    | Gestión de usuarios (edición, desactivación)             | Admin/Instructor |
| **Historial**   | Auditoría de todos los cambios del sistema               | Admin/Instructor |
| **Notificaciones** | Alertas de tareas asignadas y mensajes nuevos         | Todos          |

---

## 🌐 API – Endpoints principales

Todos los endpoints (excepto auth) requieren header:  
`Authorization: Bearer <token>`

### Auth
```
POST /api/v1/auth/login     → { correo, contrasena }
POST /api/v1/auth/register  → { nombres, apellidos, correo, contrasena, id_rol }
```

### Proyectos
```
GET    /api/v1/proyectos
POST   /api/v1/proyectos
GET    /api/v1/proyectos/:id
PUT    /api/v1/proyectos/:id
DELETE /api/v1/proyectos/:id  (eliminación lógica → estado "Cancelado")
```

### Fases, Tareas, Equipos, Entregables, Mensajes, etc.
Todos siguen el mismo patrón REST. Ver `Backend/src/routes/index.js` para la lista completa.

---

## 🔒 Reglas de negocio implementadas

| Código | Regla                                                       |
|--------|-------------------------------------------------------------|
| RN-001 | Un aprendiz no puede estar en más de 2 proyectos activos    |
| RN-002 | Un instructor no puede supervisar más de 10 proyectos activos |
| RN-004 | Los proyectos duran entre 1 y 6 meses                       |
| RN-007 | Los usuarios se desactivan lógicamente (no se eliminan)     |
| RN-008 | El correo electrónico es único en el sistema                |
| RN-009 | Estado inicial de un proyecto: "En Planificación"           |
| RN-011 | La fecha de fin debe ser posterior a la fecha de inicio     |
| RN-012 | Los proyectos se cancelan lógicamente (no se borran)        |
| RN-013 | El avance de proyecto/tarea/fase debe estar entre 0% y 100% |
| RN-014 | El avance de un proyecto no puede disminuir                 |
| RN-017 | Toda tarea debe tener un responsable asignado               |
| RN-021 | Se generan notificaciones al asignar tareas y enviar mensajes |
| RN-022 | Las notificaciones se pueden marcar como leídas             |

---

## 🏗️ Arquitectura técnica

```
Frontend (React)
      │
      │  HTTP / JSON  (proxy Vite en desarrollo)
      ▼
Backend (Express)
      │  JWT Middleware → verifica token en cada ruta protegida
      │
      ├── Routes → Controllers → Services
      │
      ▼
MySQL (pool de conexiones mysql2/promise)
```

**Autenticación:** JWT almacenado en `localStorage`. El interceptor de Axios lo inyecta automáticamente en cada petición.  
**Roles:** `Administrador`, `Instructor`, `Aprendiz` — controlados en middleware y en el frontend para mostrar/ocultar opciones.

---

## 🛠️ Comandos útiles

```bash
# Backend – ver logs de peticiones HTTP
npm run dev

# Frontend – construir para producción
npm run build

# Frontend – previsualizar build de producción
npm run preview
```

---

## 📦 Dependencias principales

### Backend
| Paquete           | Propósito                         |
|-------------------|-----------------------------------|
| express           | Framework HTTP                    |
| mysql2            | Cliente MySQL con Promises        |
| jsonwebtoken      | Generación/verificación JWT       |
| bcryptjs          | Hash de contraseñas               |
| cors              | Control de acceso entre orígenes  |
| helmet            | Cabeceras de seguridad HTTP       |
| morgan            | Logger de peticiones              |
| dotenv            | Variables de entorno              |
| nodemon (dev)     | Auto-recarga en desarrollo        |

### Frontend
| Paquete           | Propósito                         |
|-------------------|-----------------------------------|
| react + react-dom | UI declarativa                    |
| react-router-dom  | Enrutamiento del lado del cliente |
| axios             | Cliente HTTP con interceptores    |
| vite              | Build tool ultra-rápido           |

---

## 🧩 Guía para extender el proyecto

### Agregar un nuevo módulo al backend

1. Crear el controlador en `Backend/src/controllers/nuevo.controller.js`
2. Crear las rutas en `Backend/src/routes/nuevo.routes.js`
3. Registrar las rutas en `Backend/src/routes/index.js`

### Agregar una nueva página al frontend

1. Crear el componente en `Frontend/src/pages/NuevaPage.jsx`
2. Agregar la ruta en `Frontend/src/App.jsx`
3. Agregar el ítem de menú en `Frontend/src/components/AppLayout.jsx`
4. Agregar el servicio en `Frontend/src/services/api.js`

### Cambiar el diseño visual

- Todos los colores, tipografías y espaciados están en **`Frontend/src/index.css`** como variables CSS (`:root`).
- Cambiar las variables cambia todo el sistema a la vez.

---

## ❓ Solución de problemas comunes

| Problema | Solución |
|----------|----------|
| `Error conectando a MySQL` | Verifica `DB_USER`, `DB_PASSWORD` y que MySQL esté corriendo |
| `Token inválido o expirado` | Cierra sesión y vuelve a ingresar |
| `CORS error` | Verifica `FRONTEND_URL` en el `.env` del backend |
| El frontend no puede llegar al backend | Verifica que el backend esté en `localhost:3000` y el proxy en `vite.config.js` |
| Las contraseñas del schema no funcionan | Usa la contraseña `123` – ya están hasheadas en el SQL |

---

*Desarrollado para el SENA – Programa ADSO*  
*Autores: Rubiel Rodriguez, Juan Manuel Arcila, Juan Carlos Sanchez*
