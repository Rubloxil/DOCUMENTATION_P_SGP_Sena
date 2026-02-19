# Sistema de Gestión de Proyectos Académicos -- SENA

## Versión con Diagramas UML Formales

------------------------------------------------------------------------

# 1. Diagrama de Casos de Uso (PlantUML)

``` plantuml
@startuml
actor Aprendiz
actor Instructor

Aprendiz --> (Registrar Proyecto)
Aprendiz --> (Consultar Proyecto)

Instructor --> (Evaluar Proyecto)
Instructor --> (Actualizar Estado)

@enduml
```

------------------------------------------------------------------------

# 2. Diagrama de Clases (PlantUML)

``` plantuml
@startuml

class Usuario {
  +id_usuario: int
  +nombre: string
  +correo: string
  +contraseña: string
  +rol: string
  +estado: string
}

class Proyecto {
  +id_proyecto: int
  +titulo: string
  +descripcion: string
  +fecha_entrega: date
  +estado: string
}

class Auditoria {
  +id_auditoria: int
  +accion: string
  +fecha: datetime
  +descripcion: string
}

Usuario "1" -- "N" Proyecto
Usuario "1" -- "N" Auditoria

@enduml
```

------------------------------------------------------------------------

# 3. Diagrama de Secuencia (Evaluar Proyecto)

``` plantuml
@startuml

Instructor -> Frontend : Solicita evaluación
Frontend -> API : Envía datos
API -> BaseDatos : Actualiza estado
BaseDatos --> API : Confirmación
API --> Frontend : Respuesta exitosa
Frontend --> Instructor : Mensaje de éxito

@enduml
```
