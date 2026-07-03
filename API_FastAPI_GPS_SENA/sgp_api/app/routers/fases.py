# routers/fases.py
from ..models import FaseProyecto
from ..schemas import FaseProyectoCreate, FaseProyectoUpdate, FaseProyectoResponse
from .base import create_crud_router

router = create_crud_router(
    model=FaseProyecto,
    schema_create=FaseProyectoCreate,
    schema_update=FaseProyectoUpdate,
    schema_response=FaseProyectoResponse,
    prefix="/fases",
    tag="fases_proyecto",
    id_field="id_fase",
)
