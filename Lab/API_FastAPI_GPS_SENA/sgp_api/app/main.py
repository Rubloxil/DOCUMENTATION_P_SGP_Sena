# main.py
# Punto de entrada de la API del proyecto G.P.S SENA
# (Sistema de Gestión de Proyectos SENA).
#
# Aquí se cumplen los 6 requisitos de la entrega:
#  1. Enrutamiento básico -> se incluyen TODAS las rutas de las 11 tablas
#     de la base de datos corregida (SistemaGestionProyectosSENA).
#  2. Manejo de parámetros y query params -> path params ({id}) en todas
#     las rutas de detalle/edición/borrado, y query params de filtrado y
#     paginación en los listados.
#  3. Instalación de pydantic y manejo de excepciones -> schemas.py +
#     exceptions.py + manejadores registrados abajo.
#  4. Middleware, manejo de errores global y personalizado -> CORS +
#     LoggingAndTimingMiddleware (personalizado) + exception_handlers.
#  5. Conectado a la base de datos del proyecto -> MySQL vía SQLAlchemy
#     (database.py), NO se usa SQLite.
#  6. Manejo de peticiones HTTP -> GET, POST, PUT, DELETE en todas las
#     rutas del proyecto (ver carpeta routers/).

from fastapi import FastAPI, Request
from fastapi.exceptions import RequestValidationError
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse

from .middlewares import LoggingAndTimingMiddleware
from .exceptions import (
    AppException, NotFoundException, DuplicateException,
    InvalidCredentialsException, ForeignKeyException,
)
from .routers import (
    roles, usuarios, proyectos, equipos, fases,
    entregables, tareas, mensajes, notificaciones,
    repositorios, historial,
)

app = FastAPI(
    title="API - Sistema de Gestión de Proyectos SENA (G.P.S SENA)",
    description="API REST construida con FastAPI para el proyecto G.P.S SENA",
    version="1.0.0",
)

# ------------------------------------------------------------------
# MIDDLEWARE
# ------------------------------------------------------------------
# CORS: permite que el frontend React (Vite) consuma la API
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://127.0.0.1:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Middleware personalizado: logging + tiempo de respuesta + red de seguridad
app.add_middleware(LoggingAndTimingMiddleware)


# ------------------------------------------------------------------
# MANEJO DE ERRORES GLOBAL Y PERSONALIZADO
# ------------------------------------------------------------------
@app.exception_handler(NotFoundException)
async def not_found_handler(request: Request, exc: NotFoundException):
    return JSONResponse(
        status_code=404,
        content={"error": "NotFound", "mensaje": exc.mensaje},
    )


@app.exception_handler(DuplicateException)
async def duplicate_handler(request: Request, exc: DuplicateException):
    return JSONResponse(
        status_code=409,
        content={"error": "Conflict", "mensaje": exc.mensaje},
    )


@app.exception_handler(InvalidCredentialsException)
async def invalid_credentials_handler(request: Request, exc: InvalidCredentialsException):
    return JSONResponse(
        status_code=401,
        content={"error": "Unauthorized", "mensaje": exc.mensaje},
    )


@app.exception_handler(ForeignKeyException)
async def foreign_key_handler(request: Request, exc: ForeignKeyException):
    return JSONResponse(
        status_code=400,
        content={"error": "BadRequest", "mensaje": exc.mensaje},
    )


@app.exception_handler(AppException)
async def app_exception_handler(request: Request, exc: AppException):
    # Red de seguridad para cualquier otra excepción de negocio no mapeada arriba
    return JSONResponse(
        status_code=400,
        content={"error": "AppException", "mensaje": exc.mensaje},
    )


@app.exception_handler(RequestValidationError)
async def validation_exception_handler(request: Request, exc: RequestValidationError):
    # Manejo personalizado de errores de validación de Pydantic
    return JSONResponse(
        status_code=422,
        content={
            "error": "ValidationError",
            "mensaje": "Los datos enviados no son válidos",
            "detalles": exc.errors(),
        },
    )


@app.exception_handler(Exception)
async def global_exception_handler(request: Request, exc: Exception):
    # Manejador de errores GLOBAL: cualquier excepción no controlada
    # cae aquí en vez de tumbar el servidor con un traceback crudo.
    return JSONResponse(
        status_code=500,
        content={"error": "InternalServerError", "mensaje": "Ocurrió un error inesperado"},
    )


# ------------------------------------------------------------------
# RUTAS
# ------------------------------------------------------------------
@app.get("/", tags=["root"], summary="Estado de la API")
def raiz():
    return {"mensaje": "API G.P.S SENA activa", "documentacion": "/docs"}


app.include_router(roles.router)
app.include_router(usuarios.router)
app.include_router(proyectos.router)
app.include_router(equipos.router)
app.include_router(fases.router)
app.include_router(entregables.router)
app.include_router(tareas.router)
app.include_router(mensajes.router)
app.include_router(notificaciones.router)
app.include_router(repositorios.router)
app.include_router(historial.router)
