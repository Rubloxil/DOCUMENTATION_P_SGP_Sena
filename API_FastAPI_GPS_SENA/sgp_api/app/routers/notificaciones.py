# routers/notificaciones.py
from typing import Optional
from fastapi import APIRouter, Depends, Query, status
from sqlalchemy.orm import Session

from ..database import get_db
from ..models import Notificacion
from ..schemas import NotificacionCreate, NotificacionUpdate, NotificacionResponse
from ..exceptions import NotFoundException

router = APIRouter(prefix="/notificaciones", tags=["notificaciones"])


@router.get("/", response_model=list[NotificacionResponse], summary="Listar notificaciones (filtrable)")
def listar_notificaciones(
    skip: int = Query(0, ge=0),
    limit: int = Query(50, ge=1, le=200),
    id_usuario: Optional[int] = Query(None, description="Filtrar notificaciones de un usuario"),
    leida: Optional[bool] = Query(None, description="Filtrar por leída/no leída"),
    db: Session = Depends(get_db),
):
    consulta = db.query(Notificacion)
    if id_usuario is not None:
        consulta = consulta.filter(Notificacion.id_usuario == id_usuario)
    if leida is not None:
        consulta = consulta.filter(Notificacion.leida == leida)
    return consulta.order_by(Notificacion.fecha_envio.desc()).offset(skip).limit(limit).all()


@router.get("/{notificacion_id}", response_model=NotificacionResponse, summary="Obtener una notificación por id")
def obtener_notificacion(notificacion_id: int, db: Session = Depends(get_db)):
    notificacion = db.query(Notificacion).filter(Notificacion.id_notificacion == notificacion_id).first()
    if not notificacion:
        raise NotFoundException("notificación", notificacion_id)
    return notificacion


@router.post("/", response_model=NotificacionResponse, status_code=status.HTTP_201_CREATED, summary="Crear notificación")
def crear_notificacion(datos: NotificacionCreate, db: Session = Depends(get_db)):
    nueva = Notificacion(**datos.model_dump())
    db.add(nueva)
    db.commit()
    db.refresh(nueva)
    return nueva


@router.put("/{notificacion_id}", response_model=NotificacionResponse, summary="Actualizar notificación (ej: marcar leída)")
def actualizar_notificacion(notificacion_id: int, datos: NotificacionUpdate, db: Session = Depends(get_db)):
    notificacion = db.query(Notificacion).filter(Notificacion.id_notificacion == notificacion_id).first()
    if not notificacion:
        raise NotFoundException("notificación", notificacion_id)
    for campo, valor in datos.model_dump(exclude_unset=True).items():
        setattr(notificacion, campo, valor)
    db.commit()
    db.refresh(notificacion)
    return notificacion


@router.delete("/{notificacion_id}", status_code=status.HTTP_204_NO_CONTENT, summary="Eliminar notificación")
def eliminar_notificacion(notificacion_id: int, db: Session = Depends(get_db)):
    notificacion = db.query(Notificacion).filter(Notificacion.id_notificacion == notificacion_id).first()
    if not notificacion:
        raise NotFoundException("notificación", notificacion_id)
    db.delete(notificacion)
    db.commit()
    return None
