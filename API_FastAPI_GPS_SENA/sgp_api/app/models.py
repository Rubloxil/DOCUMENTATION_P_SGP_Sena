# models.py
# Modelos ORM de SQLAlchemy que representan las tablas de la base de datos
# corregida del proyecto: SistemaGestionProyectosSENA (database/schema.sql)

from sqlalchemy import (
    Column, Integer, String, Text, Date, DateTime, Boolean,
    DECIMAL, ForeignKey
)
from sqlalchemy.sql import func
from .database import Base


class Rol(Base):
    __tablename__ = "roles"

    id_rol = Column(Integer, primary_key=True, index=True)
    nombre_rol = Column(String(50), nullable=False)
    descripcion = Column(String(255))


class Usuario(Base):
    __tablename__ = "usuarios"

    id_usuario = Column(Integer, primary_key=True, index=True)
    nombres = Column(String(100), nullable=False)
    apellidos = Column(String(100), nullable=False)
    correo = Column(String(150), nullable=False, unique=True)
    contrasena = Column(String(255), nullable=False)
    ficha = Column(String(50))
    programa_formacion = Column(String(150))
    id_rol = Column(Integer, ForeignKey("roles.id_rol"), nullable=False)
    estado = Column(Boolean, default=True)
    fecha_registro = Column(DateTime, server_default=func.now())


class Proyecto(Base):
    __tablename__ = "proyectos"

    id_proyecto = Column(Integer, primary_key=True, index=True)
    nombre = Column(String(150), nullable=False)
    descripcion = Column(Text)
    fecha_inicio = Column(Date, nullable=False)
    fecha_fin = Column(Date)
    porcentaje_avance = Column(DECIMAL(5, 2), default=0.00)
    estado = Column(String(50))
    id_instructor = Column(Integer, ForeignKey("usuarios.id_usuario"), nullable=False)
    fecha_creacion = Column(DateTime, server_default=func.now())


class EquipoProyecto(Base):
    __tablename__ = "equipos_proyecto"

    id_equipo = Column(Integer, primary_key=True, index=True)
    id_proyecto = Column(Integer, ForeignKey("proyectos.id_proyecto"), nullable=False)
    id_usuario = Column(Integer, ForeignKey("usuarios.id_usuario"), nullable=False)
    rol_en_equipo = Column(String(100))


class FaseProyecto(Base):
    __tablename__ = "fases_proyecto"

    id_fase = Column(Integer, primary_key=True, index=True)
    nombre_fase = Column(String(100), nullable=False)
    descripcion = Column(Text)
    fecha_inicio = Column(Date)
    fecha_fin = Column(Date)
    porcentaje_avance = Column(DECIMAL(5, 2), default=0.00)
    id_proyecto = Column(Integer, ForeignKey("proyectos.id_proyecto"), nullable=False)


class Entregable(Base):
    __tablename__ = "entregables"

    id_entregable = Column(Integer, primary_key=True, index=True)
    nombre = Column(String(150), nullable=False)
    descripcion = Column(Text)
    fecha_entrega = Column(Date, nullable=False)
    fecha_entregado = Column(Date)
    estado = Column(String(50))
    url_drive = Column(String(255))
    version = Column(String(50))
    id_fase = Column(Integer, ForeignKey("fases_proyecto.id_fase"), nullable=False)


class Tarea(Base):
    __tablename__ = "tareas"

    id_tarea = Column(Integer, primary_key=True, index=True)
    titulo = Column(String(150), nullable=False)
    descripcion = Column(Text)
    fecha_inicio = Column(Date)
    fecha_vencimiento = Column(Date)
    estado = Column(String(50))
    prioridad = Column(String(50))
    porcentaje_avance = Column(DECIMAL(5, 2), default=0.00)
    id_proyecto = Column(Integer, ForeignKey("proyectos.id_proyecto"), nullable=False)
    id_asignado = Column(Integer, ForeignKey("usuarios.id_usuario"), nullable=False)


class Mensaje(Base):
    __tablename__ = "mensajes"

    id_mensaje = Column(Integer, primary_key=True, index=True)
    contenido = Column(Text, nullable=False)
    fecha_envio = Column(DateTime, server_default=func.now())
    id_remitente = Column(Integer, ForeignKey("usuarios.id_usuario"), nullable=False)
    id_proyecto = Column(Integer, ForeignKey("proyectos.id_proyecto"), nullable=False)


class Notificacion(Base):
    __tablename__ = "notificaciones"

    id_notificacion = Column(Integer, primary_key=True, index=True)
    titulo = Column(String(150))
    mensaje = Column(Text)
    tipo = Column(String(50))
    leida = Column(Boolean, default=False)
    fecha_envio = Column(DateTime, server_default=func.now())
    id_usuario = Column(Integer, ForeignKey("usuarios.id_usuario"), nullable=False)


class Repositorio(Base):
    __tablename__ = "repositorios"

    id_repositorio = Column(Integer, primary_key=True, index=True)
    url_github = Column(String(255), nullable=False)
    rama_principal = Column(String(100))
    ultima_actualizacion = Column(DateTime)
    id_proyecto = Column(Integer, ForeignKey("proyectos.id_proyecto"), nullable=False)


class HistorialCambio(Base):
    __tablename__ = "historial_cambios"

    id_historial = Column(Integer, primary_key=True, index=True)
    tabla_afectada = Column(String(100))
    id_registro = Column(Integer)
    accion = Column(String(50))
    fecha_cambio = Column(DateTime, server_default=func.now())
    id_usuario = Column(Integer, ForeignKey("usuarios.id_usuario"))
