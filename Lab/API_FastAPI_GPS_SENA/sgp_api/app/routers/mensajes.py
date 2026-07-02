# routers/mensajes.py
from typing import Optional
from fastapi import APIRouter, Depends, Query, status
from sqlalchemy.orm import Session

from ..database import get_db
from ..models import Mensaje
from ..schemas import MensajeCreate, MensajeUpdate, MensajeResponse
from ..exceptions import NotFoundException

router = APIRouter(prefix="/mensajes", tags=["mensajes"])


@router.get("/", response_model=list[MensajeResponse], summary="Listar mensajes (filtrable por proyecto)")
def listar_mensajes(
    skip: int = Query(0, ge=0),
    limit: int = Query(50, ge=1, le=200),
    id_proyecto: Optional[int] = Query(None, description="Filtrar mensajes de un proyecto"),
    id_remitente: Optional[int] = Query(None, description="Filtrar mensajes de un remitente"),
    db: Session = Depends(get_db),
):
    consulta = db.query(Mensaje)
    if id_proyecto is not None:
        consulta = consulta.filter(Mensaje.id_proyecto == id_proyecto)
    if id_remitente is not None:
        consulta = consulta.filter(Mensaje.id_remitente == id_remitente)
    return consulta.order_by(Mensaje.fecha_envio.desc()).offset(skip).limit(limit).all()


@router.get("/{mensaje_id}", response_model=MensajeResponse, summary="Obtener un mensaje por id")
def obtener_mensaje(mensaje_id: int, db: Session = Depends(get_db)):
    mensaje = db.query(Mensaje).filter(Mensaje.id_mensaje == mensaje_id).first()
    if not mensaje:
        raise NotFoundException("mensaje", mensaje_id)
    return mensaje


@router.post("/", response_model=MensajeResponse, status_code=status.HTTP_201_CREATED, summary="Enviar mensaje")
def crear_mensaje(datos: MensajeCreate, db: Session = Depends(get_db)):
    nuevo = Mensaje(**datos.model_dump())
    db.add(nuevo)
    db.commit()
    db.refresh(nuevo)
    return nuevo


@router.put("/{mensaje_id}", response_model=MensajeResponse, summary="Editar mensaje")
def actualizar_mensaje(mensaje_id: int, datos: MensajeUpdate, db: Session = Depends(get_db)):
    mensaje = db.query(Mensaje).filter(Mensaje.id_mensaje == mensaje_id).first()
    if not mensaje:
        raise NotFoundException("mensaje", mensaje_id)
    for campo, valor in datos.model_dump(exclude_unset=True).items():
        setattr(mensaje, campo, valor)
    db.commit()
    db.refresh(mensaje)
    return mensaje


@router.delete("/{mensaje_id}", status_code=status.HTTP_204_NO_CONTENT, summary="Eliminar mensaje")
def eliminar_mensaje(mensaje_id: int, db: Session = Depends(get_db)):
    mensaje = db.query(Mensaje).filter(Mensaje.id_mensaje == mensaje_id).first()
    if not mensaje:
        raise NotFoundException("mensaje", mensaje_id)
    db.delete(mensaje)
    db.commit()
    return None
