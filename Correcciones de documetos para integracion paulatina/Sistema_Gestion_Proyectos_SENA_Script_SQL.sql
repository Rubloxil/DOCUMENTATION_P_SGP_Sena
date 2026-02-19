
-- =============================================
-- Base de Datos: Sistema Gestión Proyectos SENA
-- =============================================

CREATE DATABASE sena_proyectos;
USE sena_proyectos;

-- Tabla Usuario
CREATE TABLE usuario (
    id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    correo VARCHAR(100) NOT NULL UNIQUE,
    contraseña VARCHAR(255) NOT NULL,
    rol ENUM('Aprendiz','Instructor') NOT NULL,
    estado VARCHAR(50) DEFAULT 'Activo'
);

-- Tabla Proyecto
CREATE TABLE proyecto (
    id_proyecto INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(200) NOT NULL,
    descripcion TEXT NOT NULL,
    fecha_entrega DATE NOT NULL,
    estado ENUM('Registrado','En revision','Aprobado','Rechazado') DEFAULT 'Registrado',
    id_aprendiz INT NOT NULL,
    id_instructor INT,
    FOREIGN KEY (id_aprendiz) REFERENCES usuario(id_usuario),
    FOREIGN KEY (id_instructor) REFERENCES usuario(id_usuario)
);

-- Tabla Auditoria
CREATE TABLE auditoria (
    id_auditoria INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT NOT NULL,
    accion VARCHAR(100) NOT NULL,
    fecha DATETIME DEFAULT CURRENT_TIMESTAMP,
    descripcion TEXT,
    FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario)
);
