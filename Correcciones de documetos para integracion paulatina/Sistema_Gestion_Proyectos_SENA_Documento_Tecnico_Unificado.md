# Sistema de Gestión de Proyectos Académicos -- SENA

## Documento Técnico Unificado

------------------------------------------------------------------------

# 1. Introducción

El presente documento describe la especificación técnica del Sistema de
Gestión de Proyectos Académicos para el SENA, incluyendo requisitos,
arquitectura, modelo de datos y trazabilidad.

------------------------------------------------------------------------

# 2. Matriz de Trazabilidad

  ------------------------------------------------------------------------
  Requisito Funcional Caso de Uso Regla de Negocio  Requisito No Funcional
  ------------------- ----------- ----------------- ----------------------
  RF-01 Registro      CU-01       RN-05             RNF-02, RNF-03
  Usuario                                           

  RF-02 Autenticación CU-01       RN-05             RNF-02, RNF-03

  RF-03 Registrar     CU-02       RN-01             RNF-01
  Proyecto                                          

  RF-04 Asignar       CU-03       RN-03             RNF-07
  Instructor                                        

  RF-05 Actualizar    CU-02       RN-02             RNF-01
  Estado                                            
  ------------------------------------------------------------------------

------------------------------------------------------------------------

# 3. Diseño Arquitectónico

## 3.1 Tipo de Arquitectura

Arquitectura en capas: 1. Capa de Presentación (Frontend) 2. Capa de
Lógica de Negocio (Backend API REST) 3. Capa de Persistencia (Base de
Datos)

## 3.2 Tecnologías

-   Backend: Node.js 18+ o PHP 8+
-   Base de Datos: PostgreSQL o MySQL
-   Control de versiones: GitHub
-   Navegadores compatibles: Google Chrome y Microsoft Edge

## 3.3 Esquema Conceptual

[Usuario](#usuario) → \[Frontend Web\] → \[API REST\] → \[Base de
Datos\]

## 3.4 Seguridad

-   Autenticación JWT
-   Hash de contraseñas con bcrypt
-   Control de acceso por roles
-   Registro de auditoría

------------------------------------------------------------------------

# 4. Modelo Entidad-Relación

## 4.1 Entidades

### Usuario

-   id_usuario (PK)
-   nombre
-   correo
-   contraseña
-   rol
-   estado

### Proyecto

-   id_proyecto (PK)
-   titulo
-   descripcion
-   fecha_entrega
-   estado
-   id_aprendiz (FK)
-   id_instructor (FK)

### Auditoria

-   id_auditoria (PK)
-   id_usuario (FK)
-   accion
-   fecha
-   descripcion

## 4.2 Relaciones

-   Un Aprendiz puede tener varios Proyectos.
-   Un Instructor puede evaluar varios Proyectos.
-   Un Usuario puede generar múltiples registros en Auditoría.

------------------------------------------------------------------------

# 5. Requisitos Funcionales

-   RF-01 Registro de Usuario
-   RF-02 Autenticación
-   RF-03 Registro de Proyecto
-   RF-04 Asignación de Instructor
-   RF-05 Actualización de Estado

------------------------------------------------------------------------

# 6. Requisitos No Funcionales

-   RNF-01 Tiempo de respuesta máximo 3 segundos.
-   RNF-02 Contraseñas encriptadas con bcrypt.
-   RNF-03 JWT con expiración máxima 2 horas.
-   RNF-04 Cumplimiento Ley 1581 de 2012.
-   RNF-05 Interfaz responsiva.
-   RNF-06 Disponibilidad mínima 95%.
-   RNF-07 Arquitectura en capas obligatoria.

------------------------------------------------------------------------

# 7. Reglas de Negocio

-   RN-01 Máximo 3 proyectos activos por aprendiz.
-   RN-02 Proyecto no puede aprobarse sin revisión.
-   RN-03 Solo instructores pueden evaluar.
-   RN-04 Proyectos almacenados mínimo 5 años.
-   RN-05 Solo correos institucionales permitidos.

------------------------------------------------------------------------

# 8. Restricciones

## Técnicas

-   Backend Node.js 18+ o PHP 8+
-   Base de datos relacional obligatoria

## Operativas

-   Solo roles Aprendiz e Instructor en MVP
-   Sin analítica avanzada inicial

## Seguridad

-   Autenticación obligatoria
-   Registro de auditoría obligatorio

## Recursos

-   Uso exclusivo de software libre
-   Sin contratación externa en fase inicial

------------------------------------------------------------------------

# 9. Conclusión

El sistema cumple estándares académicos e institucionales, garantizando
seguridad, escalabilidad, trazabilidad y cumplimiento normativo.
