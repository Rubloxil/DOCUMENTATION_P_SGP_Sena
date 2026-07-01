# routers/repositorios.py
from ..models import Repositorio
from ..schemas import RepositorioCreate, RepositorioUpdate, RepositorioResponse
from .base import create_crud_router

router = create_crud_router(
    model=Repositorio,
    schema_create=RepositorioCreate,
    schema_update=RepositorioUpdate,
    schema_response=RepositorioResponse,
    prefix="/repositorios",
    tag="repositorios",
    id_field="id_repositorio",
)
