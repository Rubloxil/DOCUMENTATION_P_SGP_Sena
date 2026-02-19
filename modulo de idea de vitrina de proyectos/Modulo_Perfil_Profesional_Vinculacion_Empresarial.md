# Módulo de Perfil Profesional y Vinculación Empresarial

## 1. Problema que Resuelve

Actualmente los aprendices desarrollan proyectos académicos, pero las
empresas no tienen visibilidad estructurada del talento disponible. No
existe un puente directo entre desempeño académico y empleabilidad.

Este módulo busca convertir el sistema en una plataforma que conecte
formación y oportunidades laborales.

------------------------------------------------------------------------

## 2. Usuarios del Sistema

-   👨‍🎓 Aprendiz\
-   🏢 Empresa de contratación\
-   👨‍💼 Coordinador académico (opcional)

------------------------------------------------------------------------

## 3. Tipo de Cambio

Este módulo representa una **funcionalidad nueva**, ampliando el sistema
actual hacia una plataforma híbrida académica + empleabilidad.

Se denominará:

> **Módulo de Proyección Profesional**

------------------------------------------------------------------------

## 4. Requisitos Funcionales Nuevos

**RF-06:** El sistema permitirá al aprendiz crear un perfil profesional
visible para empresas.\
**RF-07:** Las empresas podrán registrarse y consultar perfiles
autorizados.\
**RF-08:** El sistema mostrará indicadores de desempeño del aprendiz
(proyectos aprobados, calificaciones, habilidades).\
**RF-09:** El aprendiz podrá activar o desactivar la visibilidad de su
perfil.

------------------------------------------------------------------------

## 5. Modelo Entidad-Relación (Nuevas Entidades)

### Empresa

-   id_empresa (PK)
-   nombre
-   nit
-   sector
-   correo
-   estado

### PerfilProfesional

-   id_perfil (PK)
-   id_usuario (FK)
-   descripcion
-   habilidades
-   proyectos_destacados
-   visible (boolean)

### Relaciones

-   Usuario (1) → (1) PerfilProfesional\
-   Empresa (N) → consulta → PerfilProfesional

------------------------------------------------------------------------

## 6. Seguridad y Protección de Datos

-   Consentimiento explícito del aprendiz.
-   Control de acceso empresarial.
-   Registro de consultas realizadas.
-   Cumplimiento estricto de la Ley 1581 de Protección de Datos.

------------------------------------------------------------------------

## 7. Impacto Arquitectónico

El sistema evoluciona de un entorno académico interno hacia una:

> Plataforma de talento formativo.

Esto aumenta:

-   Valor social
-   Empleabilidad
-   Complejidad técnica
-   Responsabilidad legal

------------------------------------------------------------------------

## 8. Nivel del Proyecto

Sin módulo: 8.6/10\
Con módulo: 9.5/10 (mayor impacto y diferenciación)

------------------------------------------------------------------------

## 9. Niveles de Implementación

### Nivel Básico

-   Perfil visible simple.

### Nivel Intermedio

-   Perfil + métricas automáticas de desempeño.

### Nivel Avanzado

-   Perfil + ranking + recomendación automática de empresas.

------------------------------------------------------------------------

Documento generado automáticamente.
