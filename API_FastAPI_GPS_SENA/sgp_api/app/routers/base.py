# routers/base.py
# Fábrica de routers CRUD. Genera automáticamente las rutas
# GET (listar con paginación), GET /{id} (con path param), POST, PUT y
# DELETE para un modelo + esquemas dados, evitando repetir el mismo código
# 11 veces (uno por tabla) y garantizando que TODAS las rutas del proyecto
# tengan al menos GET, POST, PUT y DELETE, tal como pide la entrega.

from typing import Type
from fastapi import APIRouter, Depends, Query, status
from sqlalchemy.orm import Session

from ..database import get_db
from ..exceptions import NotFoundException


def create_crud_router(
    *,
    model,
    schema_create,
    schema_update,
    schema_response,
    prefix: str,
    tag: str,
    id_field: str,
    id_param_name: str = "item_id",
) -> APIRouter:
    router = APIRouter(prefix=prefix, tags=[tag])

    @router.get("/", response_model=list[schema_response], summary=f"Listar {tag}")
    def listar(
        skip: int = Query(0, ge=0, description="Cuántos registros saltar (paginación)"),
        limit: int = Query(50, ge=1, le=200, description="Máximo de registros a devolver"),
        db: Session = Depends(get_db),
    ):
        return db.query(model).offset(skip).limit(limit).all()

    @router.get(
        "/{" + id_param_name + "}",
        response_model=schema_response,
        summary=f"Obtener un registro de {tag} por id",
    )
    def obtener(item_id: int, db: Session = Depends(get_db)):
        registro = db.query(model).filter(getattr(model, id_field) == item_id).first()
        if not registro:
            raise NotFoundException(tag, item_id)
        return registro

    @router.post(
        "/",
        response_model=schema_response,
        status_code=status.HTTP_201_CREATED,
        summary=f"Crear un registro de {tag}",
    )
    def crear(datos: schema_create, db: Session = Depends(get_db)):
        nuevo = model(**datos.model_dump())
        db.add(nuevo)
        db.commit()
        db.refresh(nuevo)
        return nuevo

    @router.put(
        "/{" + id_param_name + "}",
        response_model=schema_response,
        summary=f"Actualizar un registro de {tag}",
    )
    def actualizar(item_id: int, datos: schema_update, db: Session = Depends(get_db)):
        registro = db.query(model).filter(getattr(model, id_field) == item_id).first()
        if not registro:
            raise NotFoundException(tag, item_id)
        for campo, valor in datos.model_dump(exclude_unset=True).items():
            setattr(registro, campo, valor)
        db.commit()
        db.refresh(registro)
        return registro

    @router.delete(
        "/{" + id_param_name + "}",
        status_code=status.HTTP_204_NO_CONTENT,
        summary=f"Eliminar un registro de {tag}",
    )
    def eliminar(item_id: int, db: Session = Depends(get_db)):
        registro = db.query(model).filter(getattr(model, id_field) == item_id).first()
        if not registro:
            raise NotFoundException(tag, item_id)
        db.delete(registro)
        db.commit()
        return None

    return router
