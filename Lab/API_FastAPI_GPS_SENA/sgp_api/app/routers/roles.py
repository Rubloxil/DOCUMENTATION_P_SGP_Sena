# routers/roles.py
from ..models import Rol
from ..schemas import RolCreate, RolUpdate, RolResponse
from .base import create_crud_router

router = create_crud_router(
    model=Rol,
    schema_create=RolCreate,
    schema_update=RolUpdate,
    schema_response=RolResponse,
    prefix="/roles",
    tag="roles",
    id_field="id_rol",
)
