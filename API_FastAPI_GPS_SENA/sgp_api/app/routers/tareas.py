# routers/tareas.py
from typing import Optional
from fastapi import APIRouter, Depends, Query, status
from sqlalchemy.orm import Session

from ..database import get_db
from ..models import Tarea
from ..schemas import TareaCreate, TareaUpdate, TareaResponse
from ..exceptions import NotFoundException

router = APIRouter(prefix="/tareas", tags=["tareas"])


@router.get("/", response_model=list[TareaResponse], summary="Listar tareas (con filtros opcionales)")
def listar_tareas(
    skip: int = Query(0, ge=0),
    limit: int = Query(50, ge=1, le=200),
    id_proyecto: Optional[int] = Query(None, description="Filtrar tareas de un proyecto"),
    id_asignado: Optional[int] = Query(None, description="Filtrar tareas asignadas a un usuario"),
    estado: Optional[str] = Query(None, description="Filtrar por estado de la tarea"),
    prioridad: Optional[str] = Query(None, description="Filtrar por prioridad"),
    db: Session = Depends(get_db),
):
    consulta = db.query(Tarea)
    if id_proyecto is not None:
        consulta = consulta.filter(Tarea.id_proyecto == id_proyecto)
    if id_asignado is not None:
        consulta = consulta.filter(Tarea.id_asignado == id_asignado)
    if estado is not None:
        consulta = consulta.filter(Tarea.estado == estado)
    if prioridad is not None:
        consulta = consulta.filter(Tarea.prioridad == prioridad)
    return consulta.offset(skip).limit(limit).all()


@router.get("/{tarea_id}", response_model=TareaResponse, summary="Obtener una tarea por id")
def obtener_tarea(tarea_id: int, db: Session = Depends(get_db)):
    tarea = db.query(Tarea).filter(Tarea.id_tarea == tarea_id).first()
    if not tarea:
        raise NotFoundException("tarea", tarea_id)
    return tarea


@router.post("/", response_model=TareaResponse, status_code=status.HTTP_201_CREATED, summary="Crear tarea")
def crear_tarea(datos: TareaCreate, db: Session = Depends(get_db)):
    nueva = Tarea(**datos.model_dump())
    db.add(nueva)
    db.commit()
    db.refresh(nueva)
    return nueva


@router.put("/{tarea_id}", response_model=TareaResponse, summary="Actualizar tarea")
def actualizar_tarea(tarea_id: int, datos: TareaUpdate, db: Session = Depends(get_db)):
    tarea = db.query(Tarea).filter(Tarea.id_tarea == tarea_id).first()
    if not tarea:
        raise NotFoundException("tarea", tarea_id)
    for campo, valor in datos.model_dump(exclude_unset=True).items():
        setattr(tarea, campo, valor)
    db.commit()
    db.refresh(tarea)
    return tarea


@router.delete("/{tarea_id}", status_code=status.HTTP_204_NO_CONTENT, summary="Eliminar tarea")
def eliminar_tarea(tarea_id: int, db: Session = Depends(get_db)):
    tarea = db.query(Tarea).filter(Tarea.id_tarea == tarea_id).first()
    if not tarea:
        raise NotFoundException("tarea", tarea_id)
    db.delete(tarea)
    db.commit()
    return None
