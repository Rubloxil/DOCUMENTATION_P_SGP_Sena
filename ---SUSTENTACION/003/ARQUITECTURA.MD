# DEFINICION DE ARQUITECTURA DE SOFTWARE





## 1. Introducción


El presente documento establece la Definición de Arquitectura de Software para la Plataforma de Gestión y Seguimiento de Proyectos del Servicio Nacional de Aprendizaje (SENA). Esta plataforma tiene como objetivo centralizar, sistematizar y facilitar el seguimiento de los proyectos formativos desarrollados por aprendices en los centros de formación a nivel nacional.

Se adopta un modelo de arquitectura, que garantiza escalabilidad, mantenibilidad y seguridad de la información.

## 2. Contexto y Alcance del Sistema


2.1 Descripción del Proyecto
La Plataforma de Gestión y Seguimiento de Proyectos SENA es un sistema de información web y que permite registrar, monitorear y evaluar el ciclo de vida completo de los proyectos formativos desarrollados en el marco del proceso de formación profesional integral. El sistema cubre desde la propuesta inicial del proyecto hasta su cierre, entrega de evidencias y evaluación final.

## 2.2 Actores del Sistema

Roles y perfiles de usuario
- Aprendiz: 

Registra el proyecto, carga evidencias, reporta avances y consulta retroalimentación de su instructor.
- Instructor:

Asigna proyectos, realiza seguimiento de avances, emite observaciones y aprueba entregables.
- Coordinador académico:

Supervisa el estado general de proyectos en su centro de formación y genera reportes de gestión.


## 2.3 Alcance funcional
La plataforma cubre los siguientes módulos funcionales principales:

Registro y gestión de proyectos formativos (creación, edición, asignación de instructor y programa).
Seguimiento de fases y cronograma del proyecto con indicadores de avance.
Carga y gestión de evidencias y entregables por fase.
Sistema de notificaciones y alertas automáticas (fechas límite, observaciones pendientes).
Módulo de evaluación y retroalimentación entre aprendiz e instructor.
Generación de informes estadísticos y reportes exportables (PDF, Excel).
Gestión de usuarios, roles y permisos por centro, regional y nivel nacional.
Auditoría y trazabilidad de todas las acciones realizadas en el sistema.

## 3. Definición de la Arquitectura de Software



## 3.1 Capas de la Arquitectura
El sistema se estructura en cuatro capas principales, cada una con responsabilidades bien definidas:

## Capa:
- Presentación
- Lógica de negocio
- Datos


## Componentes
- App web
- API Gateway, Microservicios REST
- SQL 


## Responsabilidad
- Interfaz de usuario, experiencia de usuario, validaciones de formulario.
- Reglas de negocio, autenticación, orquestación de servicios, notificaciones.
- Persistencia de datos estructurados, documentales y archivos binarios.

## 4. Flujos Principales del Sistema


## 4.1 Flujo de registro y seguimiento de un proyecto

- El ciclo de vida de un proyecto en la plataforma sigue el siguiente flujo general:

- El aprendiz registra el proyecto en la plataforma, asociándolo a su programa de formación y ficha.
- El instructor asignado revisa y aprueba la propuesta del proyecto, establece las fases y el cronograma de entrega.
- El aprendiz ejecuta las fases del proyecto y carga las evidencias correspondientes en cada etapa.
- El sistema emite alertas automáticas cuando se aproximan fechas límite de entrega o cuando existen entregables pendientes de revisión.
- El instructor realiza el seguimiento, emite observaciones o aprueba cada entregable con retroalimentación documentada.
Al completar todas las fases, el instructor realiza la evaluación final y cierra el proyecto en el sistema.
- El coordinador académico puede consultar el estado consolidado de todos los proyectos de su centro de formación en cualquier momento.
