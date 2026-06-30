Transferencia 3 – Proyecto Formativo SENA con Parámetros
python
from fastapi import FastAPI, Path, Query, HTTPException

app = FastAPI()

# ==================== LISTAS ====================
roles = [
    {"id_rol": 1, "nombre": "Administrador"},
    {"id_rol": 2, "nombre": "Instructor"},
    {"id_rol": 3, "nombre": "Aprendiz"},
]

usuarios = [
    {"id_usuario": 1, "nombre": "Juan Martínez", "id_rol": 2},
    {"id_usuario": 2, "nombre": "Carlos Pérez", "id_rol": 3},
    {"id_usuario": 3, "nombre": "Laura Gómez", "id_rol": 3},
]

proyectos = [
    {"id_proyecto": 1, "nombre": "App SENA", "id_instructor": 1, "estado": "activo"},
    {"id_proyecto": 2, "nombre": "Portal Web", "id_instructor": 1, "estado": "en pausa"},
]

tareas = [
    {"id_tarea": 1, "descripcion": "Diseñar base de datos", "id_proyecto": 1, "estado": "pendiente"},
    {"id_tarea": 2, "descripcion": "Crear API REST", "id_proyecto": 1, "estado": "en progreso"},
]

fases = [
    {"id_fase": 1, "nombre": "Planeación", "id_proyecto": 1},
    {"id_fase": 2, "nombre": "Desarrollo", "id_proyecto": 1},
]

entregables = [
    {"id_entregable": 1, "nombre": "Documento de requerimientos", "id_fase": 1},
    {"id_entregable": 2, "nombre": "Prototipo funcional", "id_fase": 2},
]

# ==================== USUARIOS ====================
# Path param 1 - por ID
@app.get("/usuarios/{id_usuario}")
def obtener_usuario(id_usuario: int = Path(gt=0)):
    for u in usuarios:
        if u["id_usuario"] == id_usuario:
            return u
    raise HTTPException(status_code=404, detail="Usuario no encontrado")

# Path param 2 - por rol
@app.get("/usuarios/rol/{id_rol}")
def usuarios_por_rol(id_rol: int = Path(gt=0)):
    resultado = [u for u in usuarios if u["id_rol"] == id_rol]
    return {"usuarios": resultado}

# Query param 1 - buscar por nombre
@app.get("/usuarios/buscar/nombre")
def buscar_usuario(q: str = Query(min_length=3)):
    resultado = [u for u in usuarios if q.lower() in u["nombre"].lower()]
    return {"usuarios": resultado}

# Query param 2 - listar con límite
@app.get("/usuarios/lista/paginada")
def listar_usuarios(limit: int = Query(default=10, gt=0)):
    return {"usuarios": usuarios[:limit]}

# ==================== PROYECTOS ====================
# Path param 1 - por ID
@app.get("/proyectos/{id_proyecto}")
def obtener_proyecto(id_proyecto: int = Path(gt=0)):
    for p in proyectos:
        if p["id_proyecto"] == id_proyecto:
            return p
    raise HTTPException(status_code=404, detail="Proyecto no encontrado")

# Path param 2 - tareas del proyecto
@app.get("/proyectos/{id_proyecto}/tareas/{id_tarea}")
def tarea_de_proyecto(id_proyecto: int = Path(gt=0), id_tarea: int = Path(gt=0)):
    for t in tareas:
        if t["id_proyecto"] == id_proyecto and t["id_tarea"] == id_tarea:
            return t
    raise HTTPException(status_code=404, detail="Tarea no encontrada")

# Query param 1 - buscar por nombre
@app.get("/proyectos/buscar/nombre")
def buscar_proyecto(q: str = Query(min_length=3)):
    resultado = [p for p in proyectos if q.lower() in p["nombre"].lower()]
    return {"proyectos": resultado}

# Query param 2 - filtrar por estado
@app.get("/proyectos/filtrar/estado")
def filtrar_proyecto(estado: str = Query(min_length=3)):
    resultado = [p for p in proyectos if p["estado"] == estado]
    return {"proyectos": resultado}

# ==================== TAREAS ====================
# Path param 1 - por ID
@app.get("/tareas/{id_tarea}")
def obtener_tarea(id_tarea: int = Path(gt=0)):
    for t in tareas:
        if t["id_tarea"] == id_tarea:
            return t
    raise HTTPException(status_code=404, detail="Tarea no encontrada")

# Path param 2 - por proyecto
@app.get("/tareas/proyecto/{id_proyecto}")
def tareas_por_proyecto(id_proyecto: int = Path(gt=0)):
    resultado = [t for t in tareas if t["id_proyecto"] == id_proyecto]
    return {"tareas": resultado}

# Query param 1 - buscar por descripción
@app.get("/tareas/buscar/descripcion")
def buscar_tarea(q: str = Query(min_length=3)):
    resultado = [t for t in tareas if q.lower() in t["descripcion"].lower()]
    return {"tareas": resultado}

# Query param 2 - filtrar por estado
@app.get("/tareas/filtrar/estado")
def filtrar_tarea(estado: str = Query(min_length=3)):
    resultado = [t for t in tareas if t["estado"] == estado]
    return {"tareas": resultado}

# ==================== FASES ====================
# Path param 1
@app.get("/fases/{id_fase}")
def obtener_fase(id_fase: int = Path(gt=0)):
    for f in fases:
        if f["id_fase"] == id_fase:
            return f
    raise HTTPException(status_code=404, detail="Fase no encontrada")

# Path param 2
@app.get("/fases/proyecto/{id_proyecto}")
def fases_por_proyecto(id_proyecto: int = Path(gt=0)):
    resultado = [f for f in fases if f["id_proyecto"] == id_proyecto]
    return {"fases": resultado}

# Query param 1
@app.get("/fases/buscar/nombre")
def buscar_fase(q: str = Query(min_length=3)):
    resultado = [f for f in fases if q.lower() in f["nombre"].lower()]
    return {"fases": resultado}

# Query param 2
@app.get("/fases/lista/paginada")
def listar_fases(limit: int = Query(default=10, gt=0)):
    return {"fases": fases[:limit]}


