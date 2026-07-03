# API FastAPI — G.P.S SENA (Sistema de Gestión de Proyectos SENA)

API REST construida con **FastAPI + SQLAlchemy + MySQL**, sobre la base de
datos corregida del proyecto (`SistemaGestionProyectosSENA`, ver
`database/schema.sql`).

## ✅ Checklist de la entrega

| # | Requisito | Cómo se cumple |
|---|---|---|
| 1 | Enrutamiento básico (todas las rutas basadas en la BD corregida) | `app/routers/` tiene un router por cada una de las 11 tablas: roles, usuarios, proyectos, equipos_proyecto, fases_proyecto, entregables, tareas, mensajes, notificaciones, repositorios, historial_cambios |
| 2 | Manejo de parámetros y query params | Path params (`/usuarios/{usuario_id}`, etc.) en todas las rutas de detalle/editar/borrar. Query params de filtrado y paginación (`?id_rol=`, `?estado=`, `?skip=&limit=`, etc.) en los listados |
| 3 | Instalación de pydantic y manejo de excepciones | `app/schemas.py` (validación de entrada/salida) + `app/exceptions.py` (excepciones de dominio: `NotFoundException`, `DuplicateException`, `InvalidCredentialsException`, etc.) |
| 4 | Middleware, manejo de errores global y personalizado | `app/middlewares.py` (`LoggingAndTimingMiddleware`, agrega header `X-Process-Time` y loguea cada petición) + manejadores registrados en `app/main.py` con `@app.exception_handler(...)` para cada tipo de error, incluyendo un handler global para excepciones no controladas |
| 5 | Conectado a la base de datos del proyecto (no SQLite) | `app/database.py` usa `mysql+mysqlconnector://...` vía SQLAlchemy. Nunca se usa `sqlite` |
| 6 | Peticiones HTTP para todas las rutas (GET, PUT, POST, DELETE — al menos una por ruta) | Cada router expone GET (listar + por id), POST, PUT y DELETE. La única excepción es `historial_cambios` (log de auditoría, solo GET/POST por diseño — ver comentario en el archivo) |

## Estructura del proyecto

```
sgp_api/
├── requirements.txt
├── .env.example
├── database/
│   └── schema.sql          # Esquema corregido de la BD del proyecto
└── app/
    ├── main.py              # App, middleware, manejadores de errores, routers
    ├── database.py          # Conexión a MySQL vía SQLAlchemy
    ├── models.py             # Modelos ORM (11 tablas)
    ├── schemas.py            # Esquemas Pydantic (Create/Update/Response)
    ├── exceptions.py         # Excepciones personalizadas
    ├── middlewares.py        # Middleware personalizado (logging + tiempo)
    └── routers/
        ├── base.py           # Fábrica CRUD genérica reutilizable
        ├── roles.py
        ├── usuarios.py       # incluye /usuarios/login
        ├── proyectos.py
        ├── equipos.py
        ├── fases.py
        ├── entregables.py
        ├── tareas.py
        ├── mensajes.py
        ├── notificaciones.py
        ├── repositorios.py
        └── historial.py
```

## Cómo ejecutarlo

1. Crea la base de datos ejecutando `database/schema.sql` en tu servidor MySQL.
2. Copia `.env.example` a `.env` y ajusta usuario/contraseña de tu MySQL local.
3. Instala dependencias:
   ```bash
   pip install -r requirements.txt
   ```
4. Levanta el servidor:
   ```bash
   uvicorn app.main:app --reload
   ```
5. Documentación interactiva (Swagger): http://127.0.0.1:8000/docs

## Notas

- Se probó el flujo completo (crear, listar con filtros, obtener por id,
  actualizar, borrar, login, y todos los casos de error) con una base de
  datos SQLite temporal solo para validar que el código corre sin errores;
  la configuración real para tu entrega debe apuntar a MySQL como indica
  `DATABASE_URL` en `.env`.
