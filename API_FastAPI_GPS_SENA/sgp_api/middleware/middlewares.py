# middlewares.py
# Middleware personalizado (requisito: "Middleware, manejo de errores
# global y personalizado"). Este middleware:
#   1. Mide cuánto tarda cada petición y lo agrega en el header X-Process-Time.
#   2. Registra en consola cada petición (método, ruta, código de respuesta).
#   3. Atrapa cualquier excepción no controlada para que nunca se caiga el
#      servidor sin dar una respuesta JSON coherente al cliente.

import time
import logging
from starlette.middleware.base import BaseHTTPMiddleware
from starlette.requests import Request
from starlette.responses import JSONResponse

logger = logging.getLogger("sgp_api")
logging.basicConfig(level=logging.INFO)


class LoggingAndTimingMiddleware(BaseHTTPMiddleware):
    async def dispatch(self, request: Request, call_next):
        inicio = time.time()
        try:
            response = await call_next(request)
        except Exception as exc:  # Red de seguridad: nunca dejar la petición sin respuesta
            duracion = time.time() - inicio
            logger.error(
                "ERROR %s %s -> excepción no controlada (%.4fs): %s",
                request.method, request.url.path, duracion, str(exc),
            )
            return JSONResponse(
                status_code=500,
                content={
                    "error": "InternalServerError",
                    "mensaje": "Ocurrió un error inesperado procesando la petición",
                },
            )

        duracion = time.time() - inicio
        response.headers["X-Process-Time"] = f"{duracion:.4f}"
        logger.info(
            "%s %s -> %s (%.4fs)",
            request.method, request.url.path, response.status_code, duracion,
        )
        return response
