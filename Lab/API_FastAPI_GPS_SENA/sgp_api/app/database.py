# database.py
# Conexión a la base de datos del proyecto (MySQL - SistemaGestionProyectosSENA)
# IMPORTANTE: este proyecto NO usa SQLite, se conecta directamente a MySQL
# usando SQLAlchemy + mysql-connector-python.

import os
from dotenv import load_dotenv
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base

load_dotenv()

DATABASE_URL = os.getenv(
    "DATABASE_URL",
    "mysql+mysqlconnector://root:@localhost:3306/SistemaGestionProyectosSENA",
)

engine = create_engine(DATABASE_URL, pool_pre_ping=True)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()


def get_db():
    """Dependencia de FastAPI: entrega una sesión de BD y la cierra al terminar."""
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
