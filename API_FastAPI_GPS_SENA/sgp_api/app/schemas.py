# schemas.py
# Esquemas de Pydantic (PASO obligatorio: "Instalación de pydantic y manejo
# de excepciones"). Pydantic valida los datos de entrada (Create/Update)
# antes de tocar la base de datos, y define la forma de las respuestas.

from datetime import date, datetime
from decimal import Decimal
from typing import Optional
from pydantic import BaseModel, ConfigDict, EmailStr, Field


# ---------- ROLES ----------
class RolBase(BaseModel):
    nombre_rol: str = Field(..., max_length=50)
    descripcion: Optional[str] = None


class RolCreate(RolBase):
    pass


class RolUpdate(BaseModel):
    nombre_rol: Optional[str] = None
    descripcion: Optional[str] = None


class RolResponse(RolBase):
    model_config = ConfigDict(from_attributes=True)
    id_rol: int


# ---------- USUARIOS ----------
class UsuarioBase(BaseModel):
    nombres: str = Field(..., max_length=100)
    apellidos: str = Field(..., max_length=100)
    correo: EmailStr
    ficha: Optional[str] = None
    programa_formacion: Optional[str] = None
    id_rol: int
    estado: Optional[bool] = True


class UsuarioCreate(UsuarioBase):
    contrasena: str = Field(..., min_length=4)


class UsuarioUpdate(BaseModel):
    nombres: Optional[str] = None
    apellidos: Optional[str] = None
    correo: Optional[EmailStr] = None
    ficha: Optional[str] = None
    programa_formacion: Optional[str] = None
    id_rol: Optional[int] = None
    estado: Optional[bool] = None
    contrasena: Optional[str] = Field(None, min_length=4)


class UsuarioResponse(UsuarioBase):
    model_config = ConfigDict(from_attributes=True)
    id_usuario: int
    fecha_registro: Optional[datetime] = None


class LoginSchema(BaseModel):
    correo: EmailStr
    contrasena: str


# ---------- PROYECTOS ----------
class ProyectoBase(BaseModel):
    nombre: str = Field(..., max_length=150)
    descripcion: Optional[str] = None
    fecha_inicio: date
    fecha_fin: Optional[date] = None
    porcentaje_avance: Optional[Decimal] = 0
    estado: Optional[str] = None
    id_instructor: int


class ProyectoCreate(ProyectoBase):
    pass


class ProyectoUpdate(BaseModel):
    nombre: Optional[str] = None
    descripcion: Optional[str] = None
    fecha_inicio: Optional[date] = None
    fecha_fin: Optional[date] = None
    porcentaje_avance: Optional[Decimal] = None
    estado: Optional[str] = None
    id_instructor: Optional[int] = None


class ProyectoResponse(ProyectoBase):
    model_config = ConfigDict(from_attributes=True)
    id_proyecto: int
    fecha_creacion: Optional[datetime] = None


# ---------- EQUIPOS_PROYECTO ----------
class EquipoProyectoBase(BaseModel):
    id_proyecto: int
    id_usuario: int
    rol_en_equipo: Optional[str] = None


class EquipoProyectoCreate(EquipoProyectoBase):
    pass


class EquipoProyectoUpdate(BaseModel):
    id_proyecto: Optional[int] = None
    id_usuario: Optional[int] = None
    rol_en_equipo: Optional[str] = None


class EquipoProyectoResponse(EquipoProyectoBase):
    model_config = ConfigDict(from_attributes=True)
    id_equipo: int


# ---------- FASES_PROYECTO ----------
class FaseProyectoBase(BaseModel):
    nombre_fase: str = Field(..., max_length=100)
    descripcion: Optional[str] = None
    fecha_inicio: Optional[date] = None
    fecha_fin: Optional[date] = None
    porcentaje_avance: Optional[Decimal] = 0
    id_proyecto: int


class FaseProyectoCreate(FaseProyectoBase):
    pass


class FaseProyectoUpdate(BaseModel):
    nombre_fase: Optional[str] = None
    descripcion: Optional[str] = None
    fecha_inicio: Optional[date] = None
    fecha_fin: Optional[date] = None
    porcentaje_avance: Optional[Decimal] = None
    id_proyecto: Optional[int] = None


class FaseProyectoResponse(FaseProyectoBase):
    model_config = ConfigDict(from_attributes=True)
    id_fase: int


# ---------- ENTREGABLES ----------
class EntregableBase(BaseModel):
    nombre: str = Field(..., max_length=150)
    descripcion: Optional[str] = None
    fecha_entrega: date
    fecha_entregado: Optional[date] = None
    estado: Optional[str] = None
    url_drive: Optional[str] = None
    version: Optional[str] = None
    id_fase: int


class EntregableCreate(EntregableBase):
    pass


class EntregableUpdate(BaseModel):
    nombre: Optional[str] = None
    descripcion: Optional[str] = None
    fecha_entrega: Optional[date] = None
    fecha_entregado: Optional[date] = None
    estado: Optional[str] = None
    url_drive: Optional[str] = None
    version: Optional[str] = None
    id_fase: Optional[int] = None


class EntregableResponse(EntregableBase):
    model_config = ConfigDict(from_attributes=True)
    id_entregable: int


# ---------- TAREAS ----------
class TareaBase(BaseModel):
    titulo: str = Field(..., max_length=150)
    descripcion: Optional[str] = None
    fecha_inicio: Optional[date] = None
    fecha_vencimiento: Optional[date] = None
    estado: Optional[str] = None
    prioridad: Optional[str] = None
    porcentaje_avance: Optional[Decimal] = 0
    id_proyecto: int
    id_asignado: int


class TareaCreate(TareaBase):
    pass


class TareaUpdate(BaseModel):
    titulo: Optional[str] = None
    descripcion: Optional[str] = None
    fecha_inicio: Optional[date] = None
    fecha_vencimiento: Optional[date] = None
    estado: Optional[str] = None
    prioridad: Optional[str] = None
    porcentaje_avance: Optional[Decimal] = None
    id_proyecto: Optional[int] = None
    id_asignado: Optional[int] = None


class TareaResponse(TareaBase):
    model_config = ConfigDict(from_attributes=True)
    id_tarea: int


# ---------- MENSAJES ----------
class MensajeBase(BaseModel):
    contenido: str
    id_remitente: int
    id_proyecto: int


class MensajeCreate(MensajeBase):
    pass


class MensajeUpdate(BaseModel):
    contenido: Optional[str] = None


class MensajeResponse(MensajeBase):
    model_config = ConfigDict(from_attributes=True)
    id_mensaje: int
    fecha_envio: Optional[datetime] = None


# ---------- NOTIFICACIONES ----------
class NotificacionBase(BaseModel):
    titulo: Optional[str] = None
    mensaje: Optional[str] = None
    tipo: Optional[str] = None
    leida: Optional[bool] = False
    id_usuario: int


class NotificacionCreate(NotificacionBase):
    pass


class NotificacionUpdate(BaseModel):
    titulo: Optional[str] = None
    mensaje: Optional[str] = None
    tipo: Optional[str] = None
    leida: Optional[bool] = None


class NotificacionResponse(NotificacionBase):
    model_config = ConfigDict(from_attributes=True)
    id_notificacion: int
    fecha_envio: Optional[datetime] = None


# ---------- REPOSITORIOS ----------
class RepositorioBase(BaseModel):
    url_github: str
    rama_principal: Optional[str] = None
    ultima_actualizacion: Optional[datetime] = None
    id_proyecto: int


class RepositorioCreate(RepositorioBase):
    pass


class RepositorioUpdate(BaseModel):
    url_github: Optional[str] = None
    rama_principal: Optional[str] = None
    ultima_actualizacion: Optional[datetime] = None
    id_proyecto: Optional[int] = None


class RepositorioResponse(RepositorioBase):
    model_config = ConfigDict(from_attributes=True)
    id_repositorio: int


# ---------- HISTORIAL_CAMBIOS ----------
class HistorialCambioBase(BaseModel):
    tabla_afectada: Optional[str] = None
    id_registro: Optional[int] = None
    accion: Optional[str] = None
    id_usuario: Optional[int] = None


class HistorialCambioCreate(HistorialCambioBase):
    pass


class HistorialCambioResponse(HistorialCambioBase):
    model_config = ConfigDict(from_attributes=True)
    id_historial: int
    fecha_cambio: Optional[datetime] = None
