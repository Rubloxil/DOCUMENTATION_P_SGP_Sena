# exceptions.py
# Excepciones personalizadas del dominio. En vez de lanzar HTTPException
# directamente en cada endpoint, lanzamos estas excepciones de negocio y
# las traducimos a respuestas HTTP en un solo lugar (main.py), lo que es
# el manejo de errores "global y personalizado" que exige la entrega.


class AppException(Exception):
    """Excepción base de la aplicación."""

    def __init__(self, mensaje: str):
        self.mensaje = mensaje
        super().__init__(mensaje)


class NotFoundException(AppException):
    """Se lanza cuando un recurso solicitado no existe en la BD."""

    def __init__(self, entidad: str, id_valor):
        self.entidad = entidad
        self.id_valor = id_valor
        super().__init__(f"{entidad} con id {id_valor} no fue encontrado(a)")


class DuplicateException(AppException):
    """Se lanza cuando se intenta crear un recurso que ya existe (ej: correo duplicado)."""

    def __init__(self, mensaje: str):
        super().__init__(mensaje)


class InvalidCredentialsException(AppException):
    """Se lanza cuando el login falla por usuario o contraseña incorrectos."""

    def __init__(self):
        super().__init__("Correo o contraseña incorrectos")


class ForeignKeyException(AppException):
    """Se lanza cuando una operación viola una relación de llave foránea."""

    def __init__(self, mensaje: str = "La operación viola una relación existente en la base de datos"):
        super().__init__(mensaje)
