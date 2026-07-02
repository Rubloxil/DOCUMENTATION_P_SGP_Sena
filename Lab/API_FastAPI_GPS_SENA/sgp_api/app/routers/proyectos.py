# routers/proyectos.py
from typing import Optional
from fastapi import APIRouter, Depends, Query, status
from sqlalchemy.orm import Session

from ..database import get_db
from ..models import Proyecto
from ..schemas import ProyectoCreate, ProyectoUpdate, ProyectoResponse
from ..exceptions import NotFoundException

router = APIRouter(prefix="/proyectos", tags=["proyectos"])


@router.get("/", response_model=list[ProyectoResponse], summary="Listar proyectos (con filtros opcionales)")
def listar_proyectos(
    skip: int = Query(0, ge=0),
    limit: int = Query(50, ge=1, le=200),
    estado: Optional[str] = Query(None, description="Filtrar por estado del proyecto"),
    id_instructor: Optional[int] = Query(None, description="Filtrar por instructor asignado"),
    db: Session = Depends(get_db),
):
    consulta = db.query(Proyecto)
    if estado is not None:
        consulta = consulta.filter(Proyecto.estado == estado)
    if id_instructor is not None:
        consulta = consulta.filter(Proyecto.id_instructor == id_instructor)
    return consulta.offset(skip).limit(limit).all()


@router.get("/{proyecto_id}", response_model=ProyectoResponse, summary="Obtener un proyecto por id")
def obtener_proyecto(proyecto_id: int, db: Session = Depends(get_db)):
    proyecto = db.query(Proyecto).filter(Proyecto.id_proyecto == proyecto_id).first()
    if not proyecto:
        raise NotFoundException("proyecto", proyecto_id)
    return proyecto


@router.post("/", response_model=ProyectoResponse, status_code=status.HTTP_201_CREATED, summary="Crear proyecto")
def crear_proyecto(datos: ProyectoCreate, db: Session = Depends(get_db)):
    nuevo = Proyecto(**datos.model_dump())
    db.add(nuevo)
    db.commit()
    db.refresh(nuevo)
    return nuevo


@router.put("/{proyecto_id}", response_model=ProyectoResponse, summary="Actualizar proyecto")
def actualizar_proyecto(proyecto_id: int, datos: ProyectoUpdate, db: Session = Depends(get_db)):
    proyecto = db.query(Proyecto).filter(Proyecto.id_proyecto == proyecto_id).first()
    if not proyecto:
        raise NotFoundException("proyecto", proyecto_id)
    for campo, valor in datos.model_dump(exclude_unset=True).items():
        setattr(proyecto, campo, valor)
    db.commit()
    db.refresh(proyecto)
    return proyecto


@router.delete("/{proyecto_id}", status_code=status.HTTP_204_NO_CONTENT, summary="Eliminar proyecto")
def eliminar_proyecto(proyecto_id: int, db: Session = Depends(get_db)):
    proyecto = db.query(Proyecto).filter(Proyecto.id_proyecto == proyecto_id).first()
    if not proyecto:
        raise NotFoundException("proyecto", proyecto_id)
    db.delete(proyecto)
    db.commit()
    return None
