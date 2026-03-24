CREATE DATABASE Empresa;
USE Empresa;
CREATE TABLE Empleados (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(50) NOT NULL,
    cargo VARCHAR(50) NOT NULL,
    salario DECIMAL(10, 2) NOT NULL
);
INSERT INTO Empleados (nombre, cargo, salario) VALUES
('Ana González', 'Desarrollador Senior', 4500.00),
('Carlos Rodríguez', 'Desarrollador Junior', 2800.00),
('María Fernández', 'Diseñadora UX/UI', 3200.00),
('Juan Pérez', 'Project Manager', 5200.00),
('Laura Martínez', 'Tester QA', 2900.00),
('Pedro Sánchez', 'Administrador BD', 4100.00);
SELECT * FROM Empleados;

CREATE TABLE inventario (
    id INT PRIMARY KEY AUTO_INCREMENT,
    poducto VARCHAR(100) NOT NULL,
    categoria VARCHAR(50) NOT NULL,
    cantidad INT NOT NULL,
    precio_unitario DECIMAL(10, 2) NOT NULL,
    fecha_ingreso DATE NOT NULL
    proveedor VARCHAR(100) NOT NULL

);
INSERT INTO inventario (producto, categoria, cantidad, precio_unitario, fecha_ingreso, proveedor) VALUES
    ('Laptop HP', 'Electrónica', 15, 850.00, '2024-01-15', 'TecnoImport'),
    ('Mouse', 'Accesorios', 50, 25.50, '2024-01-20', 'Distribuciones PC'),
    ('Teclado', 'Accesorios', 30, 89.99, '2024-02-01', 'GameStore'),
    ('Monitor', 'Electrónica', 12, 320.00, '2024-01-10', 'TecnoImport'),
    ('Audífonos', 'Audio', 25, 45.75, '2024-02-05', 'Sony'),
    ('Parlantes', 'Audio', 18, 120.00, '2024-01-25', 'JBL'),
    ('USB 64GB', 'Accesorios', 100, 18.90, '2024-02-10', 'Kingston'),
    ('Webcam', 'Electrónica', 20, 65.00, '2024-01-18', 'TecnoImport');

SELECT * FROM inventario;
TRUNCATE TABLE inventario;
SELECT * FROM inventario;

INSERT INTO inventario (producto, categoria, cantidad, precio_unitario, fecha_ingreso, proveedor) VALUES
    ('Laptop HP', 'Electrónica', 15, 850.00, '2024-01-15', 'TecnoImport'),
    ('Mouse', 'Accesorios', 50, 25.50, '2024-01-20', 'Distribuciones PC'),
    ('Teclado', 'Accesorios', 30, 89.99, '2024-02-01', 'GameStore'),
    ('Monitor', 'Electrónica', 12, 320.00, '2024-01-10', 'TecnoImport'),
    ('Audífonos', 'Audio', 25, 45.75, '2024-02-05', 'Sony'),
    ('Parlantes', 'Audio', 18, 120.00, '2024-01-25', 'JBL'),
    ('USB 64GB', 'Accesorios', 100, 18.90, '2024-02-10', 'Kingston'),
    ('Webcam', 'Electrónica', 20, 65.00, '2024-01-18', 'TecnoImport');

SELECT * FROM inventario;
DROP TABLE inventario;
SELECT * FROM inventario;

