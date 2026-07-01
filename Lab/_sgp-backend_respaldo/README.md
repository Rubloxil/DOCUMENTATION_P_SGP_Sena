# 🎓 SGP-SENA — Backend API REST

> **Sistema de Gestión de Proyectos SENA**  
> API REST desarrollada con Node.js + Express + MySQL

---

## 👥 Equipo de desarrollo

| Nombre | Rol |
|---|---|
| Rubiel Rodriguez | Backend Developer |
| Juan Manuel Arcila | Frontend / UI-UX |
| Juan Carlos Sanchez | QA / Tester |

---

## 🛠️ Tecnologías

- **Runtime:** Node.js
- **Framework:** Express.js
- **Base de datos:** MySQL (mysql2/promise)
- **Autenticación:** JWT (jsonwebtoken)
- **Seguridad:** bcryptjs, helmet, cors
- **Logging:** morgan

---

## 📁 Estructura del proyecto

```
sgp-backend/
├── server.js               # Punto de entrada
├── .env.example            # Variables de entorno
├── database/
│   └── schema.sql          # Base de datos + inserciones
└── src/
    ├── app.js              # Configuración Express
    ├── config/
    │   └── db.js           # Conexión MySQL (pool)
    ├── controllers/        # Lógica de negocio
    │   ├── auth.controller.js
    │   ├── usuarios.controller.js
    │   ├── proyectos.controller.js
    │   ├── equipos.controller.js
    │   ├── fases.controller.js
    │   ├── entregables.controller.js
    │   ├── tareas.controller.js
    │   ├── mensajes.controller.js
    │   ├── notificaciones.controller.js
    │   ├── repositorios.controller.js
    │   └── historial.controller.js
    ├── middlewares/
    │   └── auth.middleware.js  # JWT + Control de roles
    ├── routes/             # Definición de rutas
    │   ├── index.js
    │   └── *.routes.js
    └── services/
        └── historial.service.js  # Auditoría automática
```

---

## ⚡ Instalación

```bash
# 1. Clonar e instalar dependencias
npm install

# 2. Configurar variables de entorno
cp .env.example .env
# Editar .env con tus credenciales de MySQL y JWT_SECRET

# 3. Crear la base de datos
mysql -u root -p < database/schema.sql

# 4. Iniciar servidor
npm start          # Producción
npm run dev        # Desarrollo (nodemon)
```

---

## 🔐 Autenticación

Todos los endpoints protegidos requieren el header:

```
Authorization: Bearer <token>
```

El token se obtiene haciendo login en `POST /api/v1/auth/login`.

---

## 📡 Endpoints

### Base URL: `http://localhost:3000/api/v1`

---

### 🔑 Auth

| Método | Ruta | Descripción |
|---|---|---|
| POST | `/auth/login` | Iniciar sesión → devuelve JWT |
| POST | `/auth/register` | Registrar nuevo usuario |

**Login — Request:**
```json
{ "correo": "juan@mail.com", "contrasena": "123456" }
```

**Login — Response:**
```json
{
  "success": true,
  "data": {
    "token": "eyJ...",
    "usuario": { "id": 1, "nombres": "Juan", "rol": "Instructor" }
  }
}
```

---

### 👤 Usuarios `[JWT requerido]`

| Método | Ruta | Rol requerido |
|---|---|---|
| GET | `/usuarios` | Administrador / Instructor |
| GET | `/usuarios/:id` | Cualquier usuario autenticado |
| PUT | `/usuarios/:id` | Cualquier usuario autenticado |
| DELETE | `/usuarios/:id` | Administrador (baja lógica) |

---

### 📁 Proyectos `[JWT requerido]`

| Método | Ruta | Descripción |
|---|---|---|
| POST | `/proyectos` | Crear proyecto (Instructor/Admin) |
| GET | `/proyectos` | Listar todos |
| GET | `/proyectos/:id` | Detalle + equipo |
| PUT | `/proyectos/:id` | Actualizar |
| DELETE | `/proyectos/:id` | Cancelación lógica (RN-012) |

**Reglas de negocio aplicadas:**
- `RN-001` Aprendiz: max 2 proyectos activos
- `RN-002` Instructor: max 10 proyectos activos
- `RN-004` Duración: 1-6 meses
- `RN-009` Estado inicial: `"En Planificación"`
- `RN-011` fecha_fin > fecha_inicio
- `RN-012` Eliminación lógica (estado = `"Cancelado"`)
- `RN-013` Avance: 0-100%
- `RN-014` Avance no puede disminuir

---

### 👥 Equipos

| Método | Ruta | Descripción |
|---|---|---|
| POST | `/equipos` | Agregar miembro |
| GET | `/equipos/:id_proyecto` | Listar equipo |
| DELETE | `/equipos/:id` | Remover miembro |

---

### 📊 Fases

| Método | Ruta | Descripción |
|---|---|---|
| POST | `/fases` | Crear fase |
| GET | `/fases/:id_proyecto` | Fases del proyecto |
| PUT | `/fases/:id` | Actualizar |
| DELETE | `/fases/:id` | Eliminar |

---

### 📦 Entregables

| Método | Ruta | Descripción |
|---|---|---|
| POST | `/entregables` | Crear entregable |
| GET | `/entregables/:id_fase` | Por fase |
| PUT | `/entregables/:id` | Actualizar / subir URL Drive |
| DELETE | `/entregables/:id` | Eliminar |

---

### ✅ Tareas

| Método | Ruta | Descripción |
|---|---|---|
| POST | `/tareas` | Crear + notificar al asignado |
| GET | `/tareas/:id_proyecto` | Por proyecto |
| PUT | `/tareas/:id` | Actualizar estado/avance |
| DELETE | `/tareas/:id` | Eliminar |

---

### 💬 Mensajes

| Método | Ruta | Descripción |
|---|---|---|
| POST | `/mensajes` | Enviar mensaje (notifica equipo) |
| GET | `/mensajes/:id_proyecto` | Chat del proyecto |

---

### 🔔 Notificaciones

| Método | Ruta | Descripción |
|---|---|---|
| GET | `/notificaciones/:id_usuario` | Mis notificaciones |
| PUT | `/notificaciones/:id` | Marcar como leída |
| PUT | `/notificaciones/leer-todas/:id_usuario` | Marcar todas como leídas |

---

### 🧾 Repositorios

| Método | Ruta | Descripción |
|---|---|---|
| POST | `/repositorios` | Vincular GitHub |
| GET | `/repositorios/:id_proyecto` | Ver repositorios |
| PUT | `/repositorios/:id` | Actualizar |

---

### 📊 Historial (Auditoría)

| Método | Ruta | Rol requerido |
|---|---|---|
| GET | `/historial` | Administrador |
| GET | `/historial/:tabla` | Administrador / Instructor |

---

## 📋 Reglas de Negocio implementadas

| Código | Descripción |
|---|---|
| RN-001 | Aprendiz: máximo 2 proyectos activos |
| RN-002 | Instructor: máximo 10 proyectos activos |
| RN-004 | Proyectos duran entre 1 y 6 meses |
| RN-007 | Solo usuarios activos pueden ingresar |
| RN-008 | Correo único por usuario |
| RN-009 | Estado inicial del proyecto: "En Planificación" |
| RN-011 | fecha_fin > fecha_inicio |
| RN-012 | Proyectos: eliminación lógica |
| RN-013 | Avance entre 0% y 100% |
| RN-014 | Avance no puede disminuir |
| RN-017 | Toda tarea debe tener responsable |
| RN-021 | Notificaciones automáticas al asignar tareas/mensajes |
| RN-022 | Notificaciones pueden marcarse como leídas |
| RN-025 | Control de acceso por rol (JWT + middleware) |
| RN-026 | Auditoría de acciones en historial_cambios |

---

## 🔒 Códigos HTTP

| Código | Significado |
|---|---|
| 200 | OK |
| 201 | Creado |
| 400 | Error de validación / regla de negocio |
| 401 | No autenticado |
| 403 | No autorizado (rol insuficiente) |
| 404 | Recurso no encontrado |
| 500 | Error interno del servidor |

---

## 🗄️ Base de datos

Ver `database/schema.sql` para el esquema completo con:
- Tablas: `roles`, `usuarios`, `proyectos`, `equipos_proyecto`, `fases_proyecto`, `entregables`, `tareas`, `mensajes`, `notificaciones`, `repositorios`, `historial_cambios`
- Datos de prueba incluidos

---

**Versión:** 1.0 | **Año:** 2026 | **SENA – ADSO**
