# routers/historial.py
# El historial de cambios es un LOG DE AUDITORÍA: por diseño no se edita
# ni se borra (si se pudiera modificar/eliminar dejaría de ser confiable
# como historial). Por eso solo expone listar, obtener y crear.
# Los métodos PUT y DELETE ya están cubiertos por el resto de rutas
# de la API (usuarios, proyectos, tareas, etc.).

from typing import Optional
from fastapi import APIRouter, Depends, Query, status
from sqlalchemy.orm import Session

from ..database import get_db
from ..models import HistorialCambio
from ..schemas import HistorialCambioCreate, HistorialCambioResponse
from ..exceptions import NotFoundException

router = APIRouter(prefix="/historial", tags=["historial_cambios"])


@router.get("/", response_model=list[HistorialCambioResponse], summary="Listar historial de cambios")
def listar_historial(
    skip: int = Query(0, ge=0),
    limit: int = Query(50, ge=1, le=200),
    tabla_afectada: Optional[str] = Query(None, description="Filtrar por tabla afectada"),
    id_usuario: Optional[int] = Query(None, description="Filtrar por usuario que realizó el cambio"),
    db: Session = Depends(get_db),
):
    consulta = db.query(HistorialCambio)
    if tabla_afectada is not None:
        consulta = consulta.filter(HistorialCambio.tabla_afectada == tabla_afectada)
    if id_usuario is not None:
        consulta = consulta.filter(HistorialCambio.id_usuario == id_usuario)
    return consulta.order_by(HistorialCambio.fecha_cambio.desc()).offset(skip).limit(limit).all()


@router.get("/{historial_id}", response_model=HistorialCambioResponse, summary="Obtener un registro del historial por id")
def obtener_historial(historial_id: int, db: Session = Depends(get_db)):
    registro = db.query(HistorialCambio).filter(HistorialCambio.id_historial == historial_id).first()
    if not registro:
        raise NotFoundException("historial_cambios", historial_id)
    return registro


@router.post("/", response_model=HistorialCambioResponse, status_code=status.HTTP_201_CREATED, summary="Registrar un cambio en el historial")
def crear_historial(datos: HistorialCambioCreate, db: Session = Depends(get_db)):
    nuevo = HistorialCambio(**datos.model_dump())
    db.add(nuevo)
    db.commit()
    db.refresh(nuevo)
    return nuevo
