#  Modelo Entidad-Relación y Diseño de Base de Datos

##  1. Descripción del Dominio

El sistema modela la gestión de proyectos, incluyendo usuarios, roles, equipos, tareas, fases, entregables, comunicación y control de cambios.

---
---
---

##  2. Entidades y Atributos

###  Roles

* **id_rol** (INT, PK, AUTO_INCREMENT)

###  Usuarios

* **id_usuario** (INT, PK, AUTO_INCREMENT)
* **id_rol** (INT, FK, NOT NULL)

###  Proyectos

* **id_proyecto** (INT, PK, AUTO_INCREMENT)
* **id_instructor** (INT, FK, NOT NULL)

###  Equipos_Proyecto

* **id_equipo** (INT, PK, AUTO_INCREMENT)
* **id_proyecto** (INT, FK, NOT NULL)
* **id_usuario** (INT, FK, NOT NULL)

###  Fases_Proyecto

* **id_fase** (INT, PK, AUTO_INCREMENT)
* **id_proyecto** (INT, FK, NOT NULL)

###  Entregables

* **id_entregable** (INT, PK, AUTO_INCREMENT)
* **id_fase** (INT, FK, NOT NULL)

###  Tareas

* **id_tarea** (INT, PK, AUTO_INCREMENT)
* **id_proyecto** (INT, FK, NOT NULL)
* **id_asignado** (INT, FK, NOT NULL)

###  Mensajes

* **id_mensaje** (INT, PK, AUTO_INCREMENT)
* **id_remitente** (INT, FK, NOT NULL)
* **id_proyecto** (INT, FK, NOT NULL)

###  Notificaciones

* **id_notificacion** (INT, PK, AUTO_INCREMENT)
* **id_usuario** (INT, FK, NOT NULL)

###  Repositorios

* **id_repositorio** (INT, PK, AUTO_INCREMENT)
* **id_proyecto** (INT, FK, NOT NULL)

###  Historial_Cambios

* **id_historial** (INT, PK, AUTO_INCREMENT)
* **id_usuario** (INT, FK)



##  3. Relaciones y Cardinalidad

| Relación                  | Descripción                                            | Cardinalidad |
| ------------------------- | ------------------------------------------------------ | ------------ |
| Roles → Usuarios          | Un rol puede tener muchos usuarios                     | 1:N          |
| Usuarios → Proyectos      | Un usuario (instructor) puede dirigir muchos proyectos | 1:N          |
| Proyectos → Equipos       | Un proyecto tiene muchos integrantes                   | 1:N          |
| Usuarios → Equipos        | Un usuario puede estar en varios equipos               | 1:N          |
| Proyectos → Fases         | Un proyecto tiene varias fases                         | 1:N          |
| Fases → Entregables       | Una fase tiene varios entregables                      | 1:N          |
| Proyectos → Tareas        | Un proyecto tiene muchas tareas                        | 1:N          |
| Usuarios → Tareas         | Un usuario puede tener muchas tareas asignadas         | 1:N          |
| Usuarios → Mensajes       | Un usuario envía muchos mensajes                       | 1:N          |
| Proyectos → Mensajes      | Un proyecto tiene muchos mensajes                      | 1:N          |
| Usuarios → Notificaciones | Un usuario recibe muchas notificaciones                | 1:N          |
| Proyectos → Repositorios  | Un proyecto tiene un repositorio                       | 1:1          |
| Usuarios → Historial      | Un usuario genera muchos cambios                       | 1:N          |

1:1 → uno a uno
1:N → uno a muchos
N:M → muchos a mucho



##  4. Modelo ER (Representación Textual)


Roles (1) ---- (N) Usuarios
Usuarios (1) ---- (N) Proyectos
Proyectos (1) ---- (N) Equipos_Proyecto
Usuarios (1) ---- (N) Equipos_Proyecto
Proyectos (1) ---- (N) Fases_Proyecto
Fases_Proyecto (1) ---- (N) Entregables
Proyectos (1) ---- (N) Tareas
Usuarios (1) ---- (N) Tareas
Usuarios (1) ---- (N) Mensajes
Proyectos (1) ---- (N) Mensajes
Usuarios (1) ---- (N) Notificaciones
Proyectos (1) ---- (1) Repositorios
Usuarios (1) ---- (N) Historial_Cambios

![alt text](<Diagrama ER de sistema de gestión.png>)
