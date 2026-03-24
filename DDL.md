##  5. Definición SQL (DDL Completa)

```sql
CREATE TABLE roles (
    id_rol INT PRIMARY KEY AUTO_INCREMENT
);

CREATE TABLE usuarios (
    id_usuario INT PRIMARY KEY AUTO_INCREMENT,
    id_rol INT NOT NULL,
    FOREIGN KEY (id_rol) REFERENCES roles(id_rol)
);

CREATE TABLE proyectos (
    id_proyecto INT PRIMARY KEY AUTO_INCREMENT,
    id_instructor INT NOT NULL,
    FOREIGN KEY (id_instructor) REFERENCES usuarios(id_usuario)
);

CREATE TABLE equipos_proyecto (
    id_equipo INT PRIMARY KEY AUTO_INCREMENT,
    id_proyecto INT NOT NULL,
    id_usuario INT NOT NULL,
    FOREIGN KEY (id_proyecto) REFERENCES proyectos(id_proyecto),
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario)
);

CREATE TABLE fases_proyecto (
    id_fase INT PRIMARY KEY AUTO_INCREMENT,
    id_proyecto INT NOT NULL,
    FOREIGN KEY (id_proyecto) REFERENCES proyectos(id_proyecto)
);

CREATE TABLE entregables (
    id_entregable INT PRIMARY KEY AUTO_INCREMENT,
    id_fase INT NOT NULL,
    FOREIGN KEY (id_fase) REFERENCES fases_proyecto(id_fase)
);

CREATE TABLE tareas (
    id_tarea INT PRIMARY KEY AUTO_INCREMENT,
    id_proyecto INT NOT NULL,
    id_asignado INT NOT NULL,
    FOREIGN KEY (id_proyecto) REFERENCES proyectos(id_proyecto),
    FOREIGN KEY (id_asignado) REFERENCES usuarios(id_usuario)
);

CREATE TABLE mensajes (
    id_mensaje INT PRIMARY KEY AUTO_INCREMENT,
    id_remitente INT NOT NULL,
    id_proyecto INT NOT NULL,
    FOREIGN KEY (id_remitente) REFERENCES usuarios(id_usuario),
    FOREIGN KEY (id_proyecto) REFERENCES proyectos(id_proyecto)
);

CREATE TABLE notificaciones (
    id_notificacion INT PRIMARY KEY AUTO_INCREMENT,
    id_usuario INT NOT NULL,
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario)
);

CREATE TABLE repositorios (
    id_repositorio INT PRIMARY KEY AUTO_INCREMENT,
    id_proyecto INT NOT NULL,
    FOREIGN KEY (id_proyecto) REFERENCES proyectos(id_proyecto)
);

CREATE TABLE historial_cambios (
    id_historial INT PRIMARY KEY AUTO_INCREMENT,
    id_usuario INT,
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario)
);