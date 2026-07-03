# routers/equipos.py
from ..models import EquipoProyecto
from ..schemas import EquipoProyectoCreate, EquipoProyectoUpdate, EquipoProyectoResponse
from .base import create_crud_router

router = create_crud_router(
    model=EquipoProyecto,
    schema_create=EquipoProyectoCreate,
    schema_update=EquipoProyectoUpdate,
    schema_response=EquipoProyectoResponse,
    prefix="/equipos",
    tag="equipos_proyecto",
    id_field="id_equipo",
)
