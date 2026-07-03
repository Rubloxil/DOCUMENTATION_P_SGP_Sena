# routers/usuarios.py
# CRUD de usuarios + endpoint de login.
# Aquí se ve el uso explícito de PATH PARAMS ({usuario_id}) y
# QUERY PARAMS (id_rol, ficha, estado, buscar) para filtrar resultados.

from typing import Optional
from fastapi import APIRouter, Depends, Query, status
from sqlalchemy.orm import Session

from ..database import get_db
from ..models import Usuario
from ..schemas import (
    UsuarioCreate, UsuarioUpdate, UsuarioResponse, LoginSchema,
)
from ..exceptions import NotFoundException, DuplicateException, InvalidCredentialsException

router = APIRouter(prefix="/usuarios", tags=["usuarios"])


@router.get("/", response_model=list[UsuarioResponse], summary="Listar usuarios (con filtros opcionales)")
def listar_usuarios(
    skip: int = Query(0, ge=0),
    limit: int = Query(50, ge=1, le=200),
    id_rol: Optional[int] = Query(None, description="Filtrar por rol (query param)"),
    ficha: Optional[str] = Query(None, description="Filtrar por número de ficha (query param)"),
    estado: Optional[bool] = Query(None, description="Filtrar por estado activo/inactivo (query param)"),
    db: Session = Depends(get_db),
):
    consulta = db.query(Usuario)
    if id_rol is not None:
        consulta = consulta.filter(Usuario.id_rol == id_rol)
    if ficha is not None:
        consulta = consulta.filter(Usuario.ficha == ficha)
    if estado is not None:
        consulta = consulta.filter(Usuario.estado == estado)
    return consulta.offset(skip).limit(limit).all()

#Los get m,anejarlos por parametros diferentes a ID
@router.get("/{usuario_cc}", response_model=UsuarioResponse, summary="Obtener un usuario por cc (path param)")
def obtener_usuario(usuario_cc: str, db: Session = Depends(get_db)):
    usuario = db.query(Usuario).filter(Usuario.usuario_cc == usuario_cc).first()
    if not usuario:
        raise NotFoundException("usuario", usuario_cc)
    return usuario


@router.post("/", response_model=UsuarioResponse, status_code=status.HTTP_201_CREATED, summary="Crear usuario")
def crear_usuario(datos: UsuarioCreate, db: Session = Depends(get_db)):
    existente = db.query(Usuario).filter(Usuario.correo == datos.correo).first()
    if existente:
        raise DuplicateException(f"Ya existe un usuario registrado con el correo {datos.correo}")

    nuevo = Usuario(**datos.model_dump())
    db.add(nuevo)
    db.commit()
    db.refresh(nuevo)
    return nuevo


@router.put("/{usuario_cc}", response_model=UsuarioResponse, summary="Actualizar usuario")
def actualizar_usuario(usuario_cc: str, datos: UsuarioUpdate, db: Session = Depends(get_db)):
    usuario = db.query(Usuario).filter(Usuario.usuario_cc == usuario_cc).first()
    if not usuario:
        raise NotFoundException("usuario", usuario_cc)

    for campo, valor in datos.model_dump(exclude_unset=True).items():
        setattr(usuario, campo, valor)

    db.commit()
    db.refresh(usuario)
    return usuario


@router.delete("/{usuario_cc}", status_code=status.HTTP_204_NO_CONTENT, summary="Eliminar usuario")
def eliminar_usuario(usuario_cc: str, db: Session = Depends(get_db)):
    usuario = db.query(Usuario).filter(Usuario.usuario_cc == usuario_cc).first()
    if not usuario:
        raise NotFoundException("usuario", usuario_cc)
    db.delete(usuario)
    db.commit()
    return None


@router.post("/login", response_model=UsuarioResponse, summary="Iniciar sesión")
def login(datos: LoginSchema, db: Session = Depends(get_db)):
    usuario = db.query(Usuario).filter(Usuario.correo == datos.correo).first()
    if not usuario or usuario.contrasena != datos.contrasena:
        raise InvalidCredentialsException()
    return usuario
