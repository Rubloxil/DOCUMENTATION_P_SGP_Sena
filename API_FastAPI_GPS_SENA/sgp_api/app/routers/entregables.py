# routers/entregables.py
from ..models import Entregable
from ..schemas import EntregableCreate, EntregableUpdate, EntregableResponse
from .base import create_crud_router

router = create_crud_router(
    model=Entregable,
    schema_create=EntregableCreate,
    schema_update=EntregableUpdate,
    schema_response=EntregableResponse,
    prefix="/entregables",
    tag="entregables",
    id_field="id_entregable",
)
