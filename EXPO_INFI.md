### Integrantes:
    *Dilan David Rueda

    *Rubiel Rodriguez

    *Juan Manuel Arcila 

    *Juan Carlos Sanchez

    *Jimmy Santiago Muete 

# SISTEMA DE GESTION DE PROYECTOS SENA :

## Cómo diseñar e implementar un sistema digital centralizado que permita a instructores y aprendices del SENA gestionar, supervisar y comunicar el avance de los proyectos académicos, optimizando la trasabilidad, el control y la disponibilidad de información, para facilitar la toma de decisiones académicas y administrativas?

# OBJETIVO GENERAL
## Diseñar e implementar un sistema digital de seguimiento de proyectos para el SENA que optimice el control, la trazabilidad, la comunicación y la gestión del avance académico de los aprendices, mediante la centralización de información, la automatización de procesos y la disponibilidad de datos en tiempo real para facilitar la toma de decisiones académicas y administrativas.

# Objetivos Específicos:

* Analizar los procesos actuales de seguimiento de proyectos utilizados en el SENA para identificar necesidades, falencias y oportunidades de mejora en el control académico y administrativo.

* Diseñar la arquitectura funcional de una plataforma digital que permita registrar, gestionar y monitorear en tiempo real los avances, entregables y retroalimentaciones de los aprendices.

* Desarrollar los módulos del sistema, incluyendo gestión de usuarios, carga de evidencias, historial de actividades, paneles de progreso y notificaciones automáticas.

* Implementar un modelo de roles y permisos que garantice la seguridad, integridad y accesibilidad de la información según el perfil del usuario (aprendiz, instructor, coordinador).

* Integrar herramientas de comunicación interna que faciliten el intercambio de información entre instructores y aprendices, reduciendo tiempos de respuesta y mejorando la coordinación académica.

* Validar el funcionamiento del sistema mediante pruebas de usabilidad, rendimiento y aceptación, con el fin de asegurar que la plataforma sea intuitiva, eficiente y adaptable a diferentes usuarios.

* Evaluar el impacto del sistema en la reducción de errores manuales, el aumento de la trazabilidad y la optimización del proceso de seguimiento de proyectos en el SENA.

# ALCANCE:
## Por definir
# 🧩 Requisitos Funcionales (RF)

Los Requisitos Funcionales describen las capacidades que el sistema debe ofrecer para satisfacer las necesidades de los usuarios finales.

---

### 🔹 RF1. Gestión de Usuarios
#### RF1.1: Registro de usuarios
**Descripción:** El sistema debe permitir el registro de instructores y aprendices con roles diferenciados.  
**Actor:** Usuario nuevo  
**Precondiciones:** N/A  
**Flujo Principal:**  
1. Usuario accede a página de registro  
2. Usuario proporciona información básica  
3. Sistema valida datos y crea la cuenta  

**Criterios de Aceptación:**  
- Registro exitoso con roles diferenciados  
- Validación de identidad  
**Prioridad:** MUST  
**Fuente:** Documentación SENA  

#### RF1.2: Autenticación segura
**Descripción:** Los usuarios deben poder iniciar sesión mediante credenciales institucionales o cuenta SENA.  
**Actor:** Usuario registrado  
**Precondiciones:** Usuario registrado  
**Flujo Principal:**  
1. Usuario ingresa credenciales  
2. Sistema valida información  
3. Acceso concedido o denegado  

**Criterios de Aceptación:**  
- Acceso seguro  
- Integración con credenciales institucionales  
**Prioridad:** MUST  
**Fuente:** Documentación SENA  

#### RF1.3: Gestión de roles
**Descripción:** El sistema debe asignar permisos de acceso según el perfil (instructor/aprendiz).  
**Actor:** Administrador / Sistema  
**Precondiciones:** Usuario registrado  
**Flujo Principal:**  
1. Sistema asigna rol según perfil  
2. Restricciones de acceso aplicadas  

**Criterios de Aceptación:**  
- Permisos correctos según rol  
**Prioridad:** MUST  
**Fuente:** Documentación SENA  

#### RF1.4: Recuperación de contraseña
**Descripción:** Debe ofrecer un mecanismo de recuperación seguro de contraseñas.  
**Actor:** Usuario  
**Precondiciones:** Usuario registrado  
**Flujo Principal:**  
1. Usuario solicita recuperación  
2. Sistema valida identidad  
3. Usuario restablece contraseña  

**Criterios de Aceptación:**  
- Restablecimiento seguro  
- Notificación al correo registrado  
**Prioridad:** MUST  
**Fuente:** Documentación SENA  

---

### 🔹 RF2. Gestión de Proyectos
#### RF2.1: Creación de proyectos
**Descripción:** Los aprendices o instructores deben poder crear proyectos nuevos con nombre, descripción y objetivos.  
**Actor:** Instructor / Aprendiz  
**Precondiciones:** Usuario autenticado  
**Flujo Principal:**  
1. Crear proyecto con campos obligatorios  
2. Guardar información en base de datos  

**Criterios de Aceptación:**  
- Proyecto creado correctamente  
- Información completa  
**Prioridad:** MUST  
**Fuente:** Documentación SENA  

#### RF2.2: Asignación de integrantes
**Descripción:** Permitir agregar o eliminar aprendices de un proyecto.  
**Actor:** Instructor  
**Precondiciones:** Proyecto existente  
**Flujo Principal:**  
1. Selección de integrantes  
2. Confirmación de cambios  

**Criterios de Aceptación:**  
- Integrantes correctamente asignados  
**Prioridad:** MUST  
**Fuente:** Documentación SENA  

#### RF2.3: Definición de entregables
**Descripción:** Registrar entregables por fases con fechas límite.  
**Actor:** Instructor / Aprendiz  
**Precondiciones:** Proyecto existente  
**Flujo Principal:**  
1. Crear entregables  
2. Establecer fechas de entrega  

**Criterios de Aceptación:**  
- Entregables visibles en cronograma  
**Prioridad:** MUST  
**Fuente:** Documentación SENA  

#### RF2.4: Control de versiones
**Descripción:** Guardar historial de modificaciones de cada proyecto.  
**Actor:** Sistema  
**Precondiciones:** Proyecto existente  
**Flujo Principal:**  
1. Registrar cambios automáticamente  

**Criterios de Aceptación:**  
- Historial completo y accesible  
**Prioridad:** SHOULD  
**Fuente:** Documentación SENA  

#### RF2.5: Estado del proyecto
**Descripción:** Mostrar estado actual del proyecto (en curso, finalizado, pendiente).  
**Actor:** Usuario  
**Precondiciones:** Proyecto existente  
**Flujo Principal:**  
1. Actualizar estado según avance  

**Criterios de Aceptación:**  
- Estado actualizado en tiempo real  
**Prioridad:** MUST  
**Fuente:** Documentación SENA  

---

### 🔹 RF3. Seguimiento y Evaluación
#### RF3.1: Medición de progreso
**Descripción:** Mostrar el porcentaje de avance del proyecto de forma gráfica y actualizada.  
**Actor:** Usuario  
**Precondiciones:** Proyecto en curso  
**Flujo Principal:**  
1. Calcular porcentaje de avance  
2. Mostrar gráfico actualizado  

**Criterios de Aceptación:**  
- Gráficos claros y precisos  
**Prioridad:** MUST  
**Fuente:** Documentación SENA  

#### RF3.2: Trazabilidad
**Descripción:** Permitir visualizar el historial de actividades y entregas por equipo.  
**Actor:** Instructor / Usuario  
**Precondiciones:** Proyecto con actividades registradas  
**Flujo Principal:**  
1. Consultar historial de actividades  
2. Mostrar resultados filtrables  

**Criterios de Aceptación:**  
- Registro completo de todas las actividades  
**Prioridad:** MUST  
**Fuente:** Documentación SENA  

#### RF3.3: Retroalimentación
**Descripción:** Los instructores deben poder comentar y calificar avances o entregables.  
**Actor:** Instructor  
**Precondiciones:** Proyecto con entregables  
**Flujo Principal:**  
1. Instructor selecciona entregable  
2. Proporciona comentario y calificación  

**Criterios de Aceptación:**  
- Comentarios y calificaciones guardadas correctamente  
**Prioridad:** MUST  
**Fuente:** Documentación SENA  

#### RF3.4: Alertas y notificaciones
**Descripción:** Generar alertas automáticas por entregas vencidas o próximas.  
**Actor:** Sistema / Usuario  
**Precondiciones:** Proyecto con fechas establecidas  
**Flujo Principal:**  
1. Sistema detecta fechas de entregas  
2. Envía notificaciones a usuarios  

**Criterios de Aceptación:**  
- Notificaciones recibidas correctamente  
**Prioridad:** SHOULD  
**Fuente:** Documentación SENA  

---

### 🔹 RF4. Comunicación y Colaboración
#### RF4.1: Mensajería interna
**Descripción:** El sistema debe incluir un chat o canal de comunicación directa tipo “WhatsApp”.  
**Actor:** Usuario  
**Precondiciones:** Usuario autenticado  
**Flujo Principal:**  
1. Usuario abre chat  
2. Envía y recibe mensajes  

**Criterios de Aceptación:**  
- Mensajes enviados y recibidos correctamente  
**Prioridad:** SHOULD  
**Fuente:** Documentación SENA  

#### RF4.2: Comentarios en tareas
**Descripción:** Permitir dejar comentarios dentro de cada entregable o fase.  
**Actor:** Usuario  
**Precondiciones:** Entregable disponible  
**Flujo Principal:**  
1. Usuario escribe comentario  
2. Sistema publica comentario  

**Criterios de Aceptación:**  
- Comentarios visibles para todos los integrantes  
**Prioridad:** SHOULD  
**Fuente:** Documentación SENA  

#### RF4.3: Comunicación docente-aprendiz
**Descripción:** Facilitar la interacción directa entre instructor y equipos de proyecto.  
**Actor:** Instructor / Aprendiz  
**Precondiciones:** Usuarios autenticados  
**Flujo Principal:**  
1. Usuario inicia comunicación  
2. Sistema gestiona intercambio  

**Criterios de Aceptación:**  
- Comunicación fluida y registrada  
**Prioridad:** MUST  
**Fuente:** Documentación SENA  

#### RF4.4: Notificaciones en tiempo real
**Descripción:** Informar a los usuarios de nuevos mensajes, asignaciones o retroalimentaciones.  
**Actor:** Sistema  
**Precondiciones:** Usuario activo  
**Flujo Principal:**  
1. Detectar eventos relevantes  
2. Enviar notificaciones  

**Criterios de Aceptación:**  
- Notificaciones oportunas y visibles  
**Prioridad:** MUST  
**Fuente:** Documentación SENA  

---

### 🔹 RF5. Gestión de Tareas y Cronograma
#### RF5.1: Asignación de tareas
**Descripción:** Permitir que el instructor o líder de equipo asigne tareas específicas a los integrantes.  
**Actor:** Instructor / Líder de equipo  
**Precondiciones:** Proyecto activo  
**Flujo Principal:**  
1. Seleccionar tarea  
2. Asignar a integrantes  
3. Confirmar asignación  

**Criterios de Aceptación:**  
- Tareas asignadas correctamente  
**Prioridad:** MUST  
**Fuente:** Documentación SENA  

#### RF5.2: Seguimiento de tareas
**Descripción:** Mostrar el estado de las tareas: pendiente, en curso o completada.  
**Actor:** Usuario  
**Precondiciones:** Tareas asignadas  
**Flujo Principal:**  
1. Consultar estado de tareas  
2. Actualizar estado según avance  

**Criterios de Aceptación:**  
- Estado reflejado correctamente  
**Prioridad:** MUST  
**Fuente:** Documentación SENA  

#### RF5.3: Calendario de actividades
**Descripción:** Incluir un calendario interactivo con hitos, entregas y eventos del proyecto.  
**Actor:** Usuario  
**Precondiciones:** Proyecto activo  
**Flujo Principal:**  
1. Consultar calendario  
2. Visualizar eventos y entregables  

**Criterios de Aceptación:**  
- Información clara y actualizada  
**Prioridad:** SHOULD  
**Fuente:** Documentación SENA  

#### RF5.4: Línea de tiempo
**Descripción:** Visualizar cronológicamente el avance del proyecto y sus entregables.  
**Actor:** Usuario  
**Precondiciones:** Proyecto activo  
**Flujo Principal:**  
1. Consultar línea de tiempo  
2. Visualizar hitos y entregables  

**Criterios de Aceptación:**  
- Línea de tiempo precisa  
**Prioridad:** SHOULD  
**Fuente:** Documentación SENA  

---

### 🔹 RF6. Integración y Almacenamiento
#### RF6.1: Integración con GitHub
**Descripción:** Permitir enlazar repositorios para control de versiones y seguimiento del código.  
**Actor:** Usuario  
**Precondiciones:** Cuenta GitHub disponible  
**Flujo Principal:**  
1. Vincular repositorio  
2. Validar sincronización  

**Criterios de Aceptación:**  
- Repositorio sincronizado correctamente  
**Prioridad:** SHOULD  
**Fuente:** Documentación SENA  

#### RF6.2: Almacenamiento en la nube
**Descripción:** Integración con servicios como Google Drive para subir entregables.  
**Actor:** Usuario  
**Precondiciones:** Cuenta en nube disponible  
**Flujo Principal:**  
1. Subir entregable  
2. Validar almacenamiento  

**Criterios de Aceptación:**  
- Archivos accesibles y seguros  
**Prioridad:** SHOULD  
**Fuente:** Documentación SENA  

#### RF6.3: Exportación de reportes
**Descripción:** Permitir exportar reportes en PDF o Excel con los avances del proyecto.  
**Actor:** Usuario  
**Precondiciones:** Datos disponibles  
**Flujo Principal:**  
1. Seleccionar formato  
2. Generar reporte  
3. Descargar o enviar  

**Criterios de Aceptación:**  
- Reportes exportados correctamente  
**Prioridad:** SHOULD  
**Fuente:** Documentación SENA  

---

# 🧠 Requisitos No Funcionales (RNF)

Los Requisitos No Funcionales establecen las condiciones de calidad, rendimiento, seguridad y usabilidad que el sistema debe cumplir.

---

### 🔹 RNF1. Usabilidad
#### RNF1.1: Interfaz intuitiva
**Descripción:** La interfaz debe ser clara, moderna y accesible para usuarios con conocimientos básicos.  
**Prioridad:** MUST  

#### RNF1.2: Navegación fluida
**Descripción:** Las funcionalidades principales deben ser accesibles con un máximo de tres clics.  
**Prioridad:** MUST  

#### RNF1.3: Accesibilidad
**Descripción:** Cumplir con estándares de accesibilidad web (WCAG 2.1 AA).  
**Prioridad:** SHOULD  

---

### 🔹 RNF2. Rendimiento
#### RNF2.1: Tiempo de respuesta
**Descripción:** Las consultas y actualizaciones deben procesarse en menos de 3 segundos.  
**Prioridad:** MUST  

#### RNF2.2: Escalabilidad
**Descripción:** El sistema debe soportar el crecimiento de usuarios y proyectos sin pérdida de rendimiento.  
**Prioridad:** SHOULD  

#### RNF2.3: Disponibilidad
**Descripción:** Garantizar una disponibilidad mínima del 99% mensual en el entorno productivo.  
**Prioridad:** MUST  

---

### 🔹 RNF3. Seguridad
#### RNF3.1: Autenticación segura
**Descripción:** Implementar protocolos de seguridad (HTTPS, cifrado de contraseñas, tokens).  
**Prioridad:** MUST  

#### RNF3.2: Protección de datos
**Descripción:** Cumplir con la Ley 1581 de 2012 sobre protección de datos personales.  
**Prioridad:** MUST  

#### RNF3.3: Control de accesos
**Descripción:** Restringir las funcionalidades según los roles de usuario.  
**Prioridad:** MUST  

#### RNF3.4: Copias de seguridad
**Descripción:** Realizar respaldos automáticos diarios de la base de datos.  
**Prioridad:** MUST  

---

### 🔹 RNF4. Mantenibilidad
#### RNF4.1: Código modular
**Descripción:** La arquitectura debe facilitar el mantenimiento y la incorporación de nuevas funciones.  
**Prioridad:** SHOULD  

#### RNF4.2: Documentación técnica
**Descripción:** Debe existir documentación actualizada de API, base de datos y flujos de usuario.  
**Prioridad:** MUST  

#### RNF4.3: Pruebas automatizadas
**Descripción:** El sistema debe contar con pruebas unitarias y de integración.  
**Prioridad:** MUST  

---

### 🔹 RNF5. Compatibilidad
#### RNF5.1: Multiplataforma
**Descripción:** Acceso desde navegadores modernos (Chrome, Firefox, Edge).  
**Prioridad:** MUST  

#### RNF5.2: Responsividad
**Descripción:** Adaptar la interfaz a dispositivos móviles, tablets y escritorio.  
**Prioridad:** MUST  

#### RNF5.3: Integración con TICs externas
**Descripción:** Compatibilidad con GitHub, Google Drive y herramientas ofimáticas.  
**Prioridad:** SHOULD  
# Restricciones del Sistema de Gestión de Proyectos SENA

## Contexto General

Durante el proceso de levantamiento y análisis de requisitos se identificaron una serie de **restricciones** que condicionan el diseño, desarrollo, implementación y mantenimiento del Sistema de Gestión de Proyectos SENA.  
Estas restricciones surgen de las **limitaciones institucionales, tecnológicas, normativas y operativas** propias del entorno académico del SENA, y deben ser consideradas obligatoriamente en todas las fases del proyecto.

Las restricciones aquí descritas definen los **límites de alcance y actuación** del sistema, así como los parámetros bajo los cuales el equipo de desarrollo podrá tomar decisiones técnicas y de gestión.

---

## 1. Restricciones Técnicas

Estas restricciones delimitan los aspectos relacionados con la infraestructura, las herramientas tecnológicas y las condiciones del entorno operativo.

| Código | Restricción | Descripción | Justificación |
|--------|--------------|-------------|----------------|
| RT1 | Infraestructura institucional | El sistema deberá implementarse dentro de los servidores o entornos virtuales aprobados por el área de TI del SENA. | Garantiza la seguridad de la información y la compatibilidad con la infraestructura existente. |
| RT2 | Tecnologías aprobadas | Solo se podrán utilizar lenguajes, frameworks y bases de datos previamente aprobados por el SENA (por ejemplo, Node.js, PHP, PostgreSQL o MySQL). | Mantiene la estandarización técnica y facilita el soporte interno. |
| RT3 | Compatibilidad de navegadores | El sistema deberá funcionar correctamente en Google Chrome y Microsoft Edge, versiones institucionales. | Alinea el desarrollo con las herramientas disponibles en los equipos del SENA. |
| RT4 | Integración controlada | Las integraciones externas (GitHub, Google Drive, etc.) estarán sujetas a las políticas de ciberseguridad institucional. | Previene vulnerabilidades y fugas de información. |
| RT5 | Requerimiento de conexión | El sistema requiere conexión a Internet; su funcionamiento fuera de línea será parcial. | La sincronización de datos y comunicación dependen de servicios en línea. |

---

## 2. Restricciones Operativas

Abarcan los límites funcionales y de uso que condicionan cómo y quiénes podrán operar el sistema dentro del contexto académico.

| Código | Restricción | Descripción | Justificación |
|--------|--------------|-------------|----------------|
| RO1 | Uso institucional exclusivo | El sistema estará limitado a instructores y aprendices activos dentro del SENA. | Evita accesos no autorizados y asegura la confidencialidad de los datos académicos. |
| RO2 | Capacidad inicial limitada | En la versión MVP, el sistema podrá gestionar un número máximo determinado de proyectos simultáneos. | Permite optimizar el rendimiento y validar la estabilidad del sistema antes de su expansión. |
| RO3 | Roles predefinidos | Inicialmente solo se contemplarán dos roles: Instructor y Aprendiz. | Simplifica la gestión de permisos y facilita la validación de la primera versión. |
| RO4 | Implementación progresiva | El despliegue del sistema se realizará por fases en distintos centros de formación. | Permite detectar fallos o necesidades de mejora sin afectar a toda la institución. |
| RO5 | Soporte técnico interno | Las labores de mantenimiento estarán a cargo exclusivamente del personal de TI del SENA. | Garantiza la trazabilidad y el control institucional de los cambios. |

---

## 3. Restricciones de Seguridad y Cumplimiento Normativo

Incluyen los lineamientos legales y administrativos que determinan cómo debe manejarse la información del sistema.

| Código | Restricción | Descripción | Justificación |
|--------|--------------|-------------|----------------|
| RS1 | Cumplimiento legal | El sistema debe ajustarse a la Ley 1581 de 2012 y sus decretos reglamentarios sobre protección de datos personales. | Evita incumplimientos legales y protege la privacidad de los usuarios. |
| RS2 | Control de acceso | El ingreso al sistema requerirá autenticación obligatoria mediante credenciales institucionales. | Impide accesos anónimos y garantiza la trazabilidad de acciones. |
| RS3 | Almacenamiento institucional | Toda la información debe alojarse en servidores o bases de datos del SENA. | Asegura la soberanía y custodia de los datos académicos. |
| RS4 | Auditoría de uso | El sistema deberá permitir la auditoría de actividades por parte de los administradores institucionales. | Facilita el control de cumplimiento de políticas internas. |
| RS5 | Propiedad intelectual | Los proyectos desarrollados a través del sistema serán propiedad intelectual del SENA, salvo acuerdo formal en contrario. | Protege los resultados académicos e institucionales. |

---

## 4. Restricciones de Alcance, Tiempo y Entregas

Definen los límites temporales y funcionales del proyecto durante su fase de desarrollo e implementación inicial.

| Código | Restricción | Descripción | Justificación |
|--------|--------------|-------------|----------------|
| RA1 | Plazo de desarrollo | El MVP deberá estar completado dentro del periodo académico establecido por la dirección del proyecto. | Asegura cumplimiento de cronogramas institucionales. |
| RA2 | Alcance funcional controlado | En la primera versión no se incluirán módulos de analítica avanzada ni evaluaciones automáticas. | Permite priorizar funciones esenciales y asegurar calidad del producto inicial. |
| RA3 | Fase piloto controlada | Las pruebas de usuario se realizarán con un grupo reducido de instructores y aprendices. | Minimiza riesgos y facilita la recolección de retroalimentación controlada. |
| RA4 | Recursos humanos limitados | El desarrollo estará a cargo del equipo técnico institucional disponible, sin contratación externa. | Ajusta el alcance al personal y recursos reales del proyecto. |

---

## 5. Restricciones de Recursos y Presupuesto

Estas limitaciones se relacionan con los recursos financieros, materiales y de infraestructura disponibles para el proyecto.

| Código | Restricción | Descripción | Justificación |
|--------|--------------|-------------|----------------|
| RR1 | Presupuesto institucional | El proyecto deberá desarrollarse dentro del presupuesto aprobado por la dirección del centro. | Evita desviaciones financieras. |
| RR2 | Uso de software libre | Se priorizará el uso de tecnologías open source o gratuitas. | Reduce costos de licencias y facilita mantenimiento. |
| RR3 | Recursos de almacenamiento | Cada usuario o equipo tendrá un límite máximo de espacio asignado para archivos y entregas. | Optimiza el uso de recursos en los servidores institucionales. |
| RR4 | Ausencia de soporte externo | No se contemplará contratación de proveedores externos durante la primera fase del proyecto. | Refuerza la autosuficiencia técnica del SENA. |

---

## 6. Restricciones Administrativas y de Gestión

Estas condiciones regulan la toma de decisiones, la documentación y la coordinación del proyecto dentro del marco institucional.

| Código | Restricción | Descripción | Justificación |
|--------|--------------|-------------|----------------|
| RG1 | Aprobación formal de cambios | Cualquier modificación en el alcance o requerimientos deberá ser aprobada por el Comité de Proyecto del SENA. | Mantiene control de versiones y alineación institucional. |
| RG2 | Documentación obligatoria | Cada fase del desarrollo debe ir acompañada de informes, manuales y documentación técnica. | Facilita auditorías, soporte y continuidad del sistema. |
| RG3 | Alineación pedagógica | Las funcionalidades deben estar alineadas con los lineamientos académicos y formativos del SENA. | Garantiza la pertinencia educativa del sistema. |
| RG4 | Capacitación de usuarios | Los instructores y aprendices deberán recibir formación antes de usar la plataforma. | Aumenta la adopción y reduce errores operativos. |

---

## Consideraciones Finales

Las restricciones aquí descritas son **condiciones obligatorias de cumplimiento**, y cualquier modificación a las mismas deberá ser documentada y aprobada por el comité directivo del proyecto.  
Estas limitaciones constituyen un marco de referencia para asegurar la coherencia, viabilidad y sostenibilidad del Sistema de Gestión de Proyectos SENA en su ciclo de vida completo.

# 💼 Casos de Uso - Sistema de Gestión de Proyectos SENA

## 👥 1. Identificación de Actores

**🎯 Actores Principales:**
- 👨‍🎓 **Aprendiz:** Estudiante del SENA que desarrolla proyectos de formación  
- 👨‍🏫 **Instructor:** Docente que supervisa y evalúa los proyectos de los aprendices  

**⚙️ Actores Secundarios:**
- 💻 **Sistema:** Funciones automáticas del sistema (notificaciones, validaciones)

---

## 🧩 2. Casos de Uso Principales

### 🔐 CU-001: Iniciar Sesión
**Actor Principal:** 👨‍🎓 Aprendiz, 👨‍🏫 Instructor  
**Descripción:** Permite el acceso al sistema mediante credenciales válidas  

**✅ Precondiciones:**
- El usuario debe estar registrado en el sistema del SENA  
- El sistema debe estar disponible  

**🧭 Flujo Principal:**
1. El usuario accede a la página de inicio de sesión  
2. Ingresa su número de documento  
3. Ingresa su contraseña  
4. Presiona el botón "Iniciar Sesión"  
5. El sistema valida las credenciales  
6. El sistema redirige al usuario a su panel principal  

**⚠️ Flujos Alternativos:**
- **FA-001a:** Si las credenciales son incorrectas  
  - El sistema muestra mensaje de error  
  - El usuario puede intentar nuevamente  

**📄 Postcondiciones:**
- El usuario queda autenticado en el sistema  
- Se registra la hora de acceso  

---

### 🆕 CU-002: Crear Proyecto
**Actor Principal:** 👨‍🎓 Aprendiz  
**Descripción:** Permite al aprendiz crear un nuevo proyecto de formación  

**✅ Precondiciones:**
- El aprendiz debe haber iniciado sesión  
- El aprendiz debe tener cupo disponible para crear proyectos  

**🧭 Flujo Principal:**
1. El aprendiz selecciona "Crear Nuevo Proyecto"  
2. El sistema muestra el formulario de creación  
3. Ingresa el título del proyecto  
4. Ingresa la descripción del proyecto  
5. Selecciona la fecha de inicio  
6. Selecciona la fecha estimada de finalización  
7. Presiona "Crear Proyecto"  
8. El sistema valida la información  
9. Guarda el proyecto con estado "🗂️ En Planificación"  
10. Muestra confirmación de creación  

**⚠️ Flujos Alternativos:**
- **FA-002a:** Si faltan campos obligatorios  
  - El sistema marca los campos faltantes  
  - El aprendiz debe completar la información  

**📄 Postcondiciones:**
- El proyecto queda creado en el sistema  
- Aparece en la lista de proyectos del aprendiz  

---

### 🧑‍🏫 CU-003: Asignar Instructor a Proyecto
**Actor Principal:** 👨‍🏫 Instructor  
**Descripción:** Permite al instructor asignarse o ser asignado a supervisar un proyecto  

**✅ Precondiciones:**
- El instructor debe haber iniciado sesión  
- Debe existir al menos un proyecto sin instructor asignado  

**🧭 Flujo Principal:**
1. Accede a "Proyectos Disponibles"  
2. El sistema muestra la lista de proyectos sin instructor  
3. Selecciona un proyecto  
4. Revisa los detalles  
5. Presiona "Asignarme como Instructor"  
6. El sistema actualiza el proyecto  
7. Envía notificación al aprendiz 📩  

**📄 Postcondiciones:**
- El proyecto tiene instructor asignado  
- El aprendiz recibe notificación  

---

### 📈 CU-004: Registrar Avance de Proyecto
**Actor Principal:** 👨‍🎓 Aprendiz  
**Descripción:** Permite registrar el progreso realizado en su proyecto  

**✅ Precondiciones:**
- El aprendiz debe haber iniciado sesión  
- El proyecto debe estar en estado "En Desarrollo"  
- Debe tener instructor asignado  

**🧭 Flujo Principal:**
1. Selecciona su proyecto activo  
2. Presiona "Registrar Avance"  
3. El sistema muestra formulario de avance  
4. Describe las actividades realizadas  
5. Indica el porcentaje de avance 📊  
6. Puede adjuntar archivos 📎 (opcional)  
7. Presiona "Guardar Avance"  
8. El sistema valida la información  
9. Actualiza el progreso  
10. Notifica al instructor sobre el nuevo avance  

**⚠️ Flujos Alternativos:**
- **FA-004a:** Si el porcentaje de avance no es válido  
  - El sistema muestra mensaje de error  
  - El aprendiz debe corregir el valor  

**📄 Postcondiciones:**
- El avance queda registrado  
- El instructor recibe notificación  

---

### 🧾 CU-005: Realizar Seguimiento de Proyecto
**Actor Principal:** 👨‍🏫 Instructor  
**Descripción:** Permite al instructor revisar y hacer seguimiento a los proyectos asignados  

**✅ Precondiciones:**
- El instructor debe haber iniciado sesión  
- Debe tener proyectos asignados  

**🧭 Flujo Principal:**
1. Accede a "Mis Proyectos Asignados"  
2. Visualiza la lista de proyectos  
3. Selecciona un proyecto para revisar  
4. El sistema muestra los detalles  
5. Revisa los avances registrados  
6. Agrega comentarios de retroalimentación 💬  
7. Cambia el estado del proyecto  
8. Presiona "Guardar Seguimiento"  
9. El sistema actualiza la información  
10. El sistema notifica al aprendiz  

**📄 Postcondiciones:**
- Los comentarios quedan registrados  
- El aprendiz recibe retroalimentación  

---

### 🔍 CU-006: Consultar Estado de Proyectos
**Actor Principal:** 👨‍🎓 Aprendiz, 👨‍🏫 Instructor  
**Descripción:** Permite consultar el estado actual y el historial de los proyectos  

**✅ Precondiciones:**
- El usuario debe haber iniciado sesión  
- Deben existir proyectos en el sistema  

**🧭 Flujo Principal:**
1. Selecciona "Consultar Proyectos"  
2. El sistema muestra filtros de búsqueda 🔎  
3. Filtra por estado, fecha o título  
4. Presiona "Buscar"  
5. El sistema muestra resultados  
6. Selecciona un proyecto para ver detalles  
7. Visualiza información completa del proyecto  

**📄 Postcondiciones:**
- El usuario obtiene la información solicitada  

---

## 📊 3. Estados del Proyecto
- 🗂️ **En Planificación:** Proyecto creado, esperando instructor  
- ⚙️ **En Desarrollo:** Proyecto en ejecución  
- 🧮 **En Revisión:** Proyecto completado, esperando evaluación final  
- ✅ **Finalizado:** Proyecto completado y evaluado  
- ⏸️ **Suspendido:** Proyecto pausado  

---

## ⚖️ 4. Reglas de Negocio

**📘 RN-001: Límite de Proyectos**  
- Un aprendiz puede tener máximo **2 proyectos activos** simultáneamente  

**📘 RN-002: Asignación de Instructores**  
- Un instructor puede supervisar máximo **10 proyectos activos**  

**📘 RN-003: Registro de Avances**  
- Los avances deben registrarse **al menos una vez por semana**  

**📘 RN-004: Duración de Proyectos**  
- Los proyectos deben durar **entre 1 y 6 meses**  

---

## 🧠 5. Diagrama de Casos de Uso (Descripción)

# 📊 5. Diagrama de Casos de Uso (Descripción)
**Sistema de Gestión de Proyectos SENA**

- 👨‍🎓 **Aprendiz**
  - 🔐 Iniciar Sesión
  - 🆕 Crear Proyecto
  - 📈 Registrar Avance
  - 🔍 Consultar Estado

- 👨‍🏫 **Instructor**
  - 🔐 Iniciar Sesión
  - 🧑‍🏫 Asignar Instructor a Proyecto
  - 🧾 Realizar Seguimiento
  - 🔍 Consultar Estado

---

## 🧩 6. Caso de Uso Extendido: CU-002 Crear Proyecto

**🆔 ID:** CU-002  
**🎭 Actor Principal:** 👨‍🎓 Aprendiz  
**📏 Nivel:** Usuario  
**📝 Descripción:** El aprendiz crea un nuevo proyecto formativo en el sistema  

**✅ Precondiciones:**
- El aprendiz tiene una sesión activa  
- No ha excedido el límite de proyectos activos (máximo 2)  
- Tiene permisos necesarios  

**🏁 Garantías de Éxito:**
- El proyecto queda registrado en la base de datos  
- Aparece en la lista personal  
- Queda disponible para asignación de instructor  

**🧭 Escenario Principal de Éxito:**
1. El aprendiz abre el menú principal  
2. Hace clic en "Crear Nuevo Proyecto"  
3. El sistema presenta formulario con campos obligatorios  
4. Completa **Título del Proyecto** (máx. 100 caracteres)  
5. Completa **Descripción** (máx. 500 caracteres)  
6. Selecciona **Fecha de Inicio** (no anterior a hoy)  
7. Selecciona **Fecha de Finalización** (mínimo 30 días después)  
8. Hace clic en **Crear Proyecto**  
9. El sistema valida campos  
10. Verifica coherencia de fechas  
11. Asigna **ID único**  
12. Establece estado inicial como **🗂️ En Planificación**  
13. Guarda el proyecto en la base de datos 💾  
14. Muestra confirmación con ID del proyecto  
15. Redirige a la vista de detalles  

**⚠️ Extensiones (Flujos Alternativos):**
- **3a.** Ha alcanzado el límite máximo de proyectos  
  - Muestra mensaje: "⚠️ Ha alcanzado el límite de proyectos activos (2)"  
  - Sugiere finalizar un proyecto existente  

- **9a.** Faltan campos obligatorios  
  - Resalta los campos en rojo 🔴  
  - Muestra mensaje: "Complete todos los campos obligatorios"  

- **10a.** Fechas no coherentes  
  - Muestra mensaje: "La fecha de finalización debe ser posterior a la fecha de inicio"  

- **13a.** Error en la base de datos  
  - Muestra mensaje: "⚙️ Error interno del sistema. Intente nuevamente"  
  - Registra el error en el log  

**⚡ Requerimientos Especiales:**
- Respuesta del sistema < 3 segundos  
- Interfaz compatible con navegadores modernos 🌐  
- Validación automática de fechas 📅  

**💾 Variables de Tecnología y Datos:**
- **Título:** Texto, obligatorio, máx. 100 caracteres  
- **Descripción:** Texto, obligatorio, máx. 500 caracteres  
- **Fecha Inicio:** Fecha, formato DD/MM/AAAA  
- **Fecha Fin:** Fecha, formato DD/MM/AAAA  
- **Estado:** "🗂️ En Planificación" por defecto  
- **ID Usuario:** Número entero (sesión activa)  

**📆 Frecuencia de Ocurrencia:** Semanal por aprendiz  



# Historias de Usuario: Sistema de Gestión de Proyectos SENA

## Contexto de Negocio y Motivación
Instructores y aprendices del SENA requieren un **sistema digital centralizado** que permita el seguimiento, gestión y comunicación de proyectos académicos en tiempo real.  
Actualmente, la falta de visibilidad y herramientas dinámicas genera retrasos, descoordinación y pérdida de trazabilidad.  

El objetivo es desarrollar una plataforma que unifique **seguimiento, comunicación, trazabilidad y evaluación** de proyectos, mejorando eficiencia, colaboración y transparencia en el ecosistema académico.

---

## 🔹 RF1: Gestión de Usuarios

### Historia de Usuario 1.1: Registro de Usuarios
**Como** administrador o nuevo usuario del SENA  
**Quiero** registrarme en la plataforma con información básica y roles diferenciados  
**Para** acceder a los proyectos y funcionalidades según mi perfil (instructor o aprendiz).

**Importancia Estratégica:**  
- Garantiza control de acceso y personalización de funciones según el rol.  
- Permite iniciar el ciclo de participación del usuario en proyectos.  

**Consideraciones UX:**  
- Formularios claros y accesibles.  
- Validación en tiempo real de datos.  
- Confirmación de registro mediante correo o SMS.  

**Criterios de Aceptación:**  
- Registro de usuarios con roles asignados correctamente.  
- Validación de identidad y unicidad de datos.  
- Notificación de confirmación de registro.

**Referencias:** Documento Informativo V002, entrevistas SENA.

---

### Historia de Usuario 1.2: Autenticación Segura
**Como** usuario registrado  
**Quiero** iniciar sesión mediante credenciales institucionales o cuenta SENA  
**Para** acceder a mis proyectos y tareas de forma segura.

**Importancia Estratégica:** Seguridad y protección de información académica.  

**Consideraciones UX:**  
- Inicio de sesión rápido y confiable.  
- Opción de autenticación multifactor.  

**Criterios de Aceptación:**  
- Inicio de sesión exitoso con credenciales válidas.  
- Bloqueo tras intentos fallidos y recuperación segura de contraseña.

**Referencias:** Documento Informativo V002, Ley 1581 de 2012.

---

## 🔹 RF2: Gestión de Proyectos

### Historia de Usuario 2.1: Creación de Proyectos
**Como** aprendiz o instructor  
**Quiero** crear nuevos proyectos con nombre, descripción y objetivos  
**Para** organizar el trabajo académico y asignar tareas a los miembros.

**Importancia Estratégica:** Base para planificación y seguimiento de proyectos.  

**Consideraciones UX:**  
- Formularios simples para crear proyectos rápidamente.  
- Capacidad de asignar miembros y roles desde la creación.  

**Criterios de Aceptación:**  
- Proyecto creado con todos los datos obligatorios.  
- Integración con el panel de seguimiento.

**Referencias:** Documento Informativo V002.

---

### Historia de Usuario 2.2: Asignación de Integrantes
**Como** líder de proyecto o instructor  
**Quiero** agregar o eliminar integrantes en un proyecto  
**Para** mantener actualizado el equipo responsable de cada tarea.

**Importancia Estratégica:** Permite coordinación efectiva y trazabilidad del trabajo.  

**Consideraciones UX:** Interfaz intuitiva para modificar integrantes sin errores.  

**Criterios de Aceptación:**  
- Cambios reflejados en tiempo real.  
- Notificación a los usuarios afectados.

**Referencias:** Documento Informativo V002.

---

### Historia de Usuario 2.3: Definición de Entregables
**Como** instructor  
**Quiero** definir entregables con fechas límite  
**Para** evaluar el progreso del proyecto de manera clara y organizada.

**Importancia Estratégica:** Asegura cumplimiento de objetivos académicos y fases del proyecto.  

**Consideraciones UX:** Visualización clara en cronograma y dashboard.  

**Criterios de Aceptación:**  
- Entregables visibles para todos los integrantes.  
- Notificaciones automáticas de fechas próximas.

**Referencias:** Documento Informativo V002.

---

## 🔹 RF3: Seguimiento y Evaluación

### Historia de Usuario 3.1: Medición de Progreso
**Como** instructor  
**Quiero** visualizar el porcentaje de avance de proyectos y tareas  
**Para** tomar decisiones pedagógicas oportunas y apoyar a los aprendices.

**Importancia Estratégica:** Permite monitorear proyectos y fases en tiempo real.  

**Consideraciones UX:** Dashboard gráfico e interactivo.  

**Criterios de Aceptación:**  
- Porcentaje de avance actualizado automáticamente.  
- Filtrado por equipo o proyecto.

**Referencias:** Documento Informativo V002.

---

### Historia de Usuario 3.2: Trazabilidad
**Como** instructor  
**Quiero** ver el historial de actividades y entregas de cada equipo  
**Para** auditar avances y detectar retrasos o problemas de coordinación.

**Importancia Estratégica:** Mantiene control y transparencia sobre el proceso académico.  

**Consideraciones UX:** Historial fácil de consultar con filtros por fecha, usuario o tarea.  

**Criterios de Aceptación:**  
- Registro de todas las acciones con timestamps.  
- Exportación de registros en PDF o Excel.

**Referencias:** Documento Informativo V002.

---

### Historia de Usuario 3.3: Retroalimentación
**Como** instructor  
**Quiero** comentar y calificar entregables  
**Para** guiar el aprendizaje y mejorar la calidad de los proyectos.

**Importancia Estratégica:** Refuerza la educación colaborativa y la mejora continua.  

**Consideraciones UX:** Interfaz de comentarios fácil y centralizada en cada entregable.  

**Criterios de Aceptación:**  
- Comentarios visibles para el equipo.  
- Notificación automática a los aprendices.

**Referencias:** Documento Informativo V002.

---

## 🔹 RF4: Comunicación y Colaboración

### Historia de Usuario 4.1: Mensajería Interna
**Como** aprendiz  
**Quiero** enviar mensajes al instructor y compañeros  
**Para** coordinar tareas y resolver dudas en tiempo real.

**Importancia Estratégica:** Mejora comunicación y coordinación del equipo.  

**Consideraciones UX:** Chat tipo WhatsApp con notificaciones push.  

**Criterios de Aceptación:**  
- Historial de chat disponible.  
- Notificaciones automáticas de mensajes nuevos.

**Referencias:** Documento Informativo V002.

---

### Historia de Usuario 4.2: Comentarios en Tareas
**Como** miembro del equipo  
**Quiero** comentar sobre entregables y tareas  
**Para** mantener la comunicación contextual y organizada.

**Importancia Estratégica:** Facilita retroalimentación directa y documentación colaborativa.  

**Consideraciones UX:** Comentarios visibles y editables, con notificaciones.  

**Criterios de Aceptación:**  
- Comentarios registrados por usuario y fecha.  
- Posibilidad de responder y votar comentarios.

**Referencias:** Documento Informativo V002.

---

## 🔹 RF5: Gestión de Tareas y Cronograma

### Historia de Usuario 5.1: Asignación de Tareas
**Como** instructor o líder de equipo  
**Quiero** asignar tareas a integrantes específicos  
**Para** asegurar que cada miembro conozca sus responsabilidades.

**Importancia Estratégica:** Mejora organización, responsabilidad y seguimiento.  

**Consideraciones UX:** Panel de tareas claro, con deadlines visibles.  

**Criterios de Aceptación:**  
- Tareas asignadas reflejadas en dashboard y calendario.  
- Notificación automática al responsable.

**Referencias:** Documento Informativo V002.

---

### Historia de Usuario 5.2: Línea de Tiempo y Cronograma
**Como** aprendiz  
**Quiero** ver la línea de tiempo del proyecto  
**Para** comprender fases, entregables y fechas límite.

**Importancia Estratégica:** Mantiene claridad y planificación del equipo.  

**Consideraciones UX:** Línea de tiempo interactiva y visualmente intuitiva.  

**Criterios de Aceptación:**  
- Hitos y entregables claramente visibles.  
- Actualización automática ante cambios.

**Referencias:** Documento Informativo V002.

---

## 🔹 RF6: Integración y Almacenamiento

### Historia de Usuario 6.1: Integración con GitHub
**Como** integrante de proyecto técnico  
**Quiero** vincular repositorios de código  
**Para** controlar versiones y mantener entregables sincronizados.

**Importancia Estratégica:** Facilita control de versiones y colaboración en proyectos de desarrollo.  

**Consideraciones UX:** Integración sencilla, sin duplicidad de datos.  

**Criterios de Aceptación:**  
- Repositorios vinculados y sincronizados.  
- Acceso rápido desde el panel de proyecto.

**Referencias:** Documento Informativo V002.

---

### Historia de Usuario 6.2: Almacenamiento en la Nube
**Como** aprendiz o instructor  
**Quiero** subir y acceder a entregables en Google Drive  
**Para** centralizar documentación y facilitar revisiones.

**Importancia Estratégica:** Evita dispersión de archivos y pérdida de información.  

**Consideraciones UX:** Integración transparente con la plataforma.  

**Criterios de Aceptación:**  
- Archivos subidos correctamente.  
- Permisos de acceso según rol del usuario.

**Referencias:** Documento Informativo V002.

---

### Historia de Usuario 6.3: Exportación de Reportes
**Como** instructor  
**Quiero** generar reportes en PDF o Excel  
**Para** documentar avances, retroalimentación y desempeño del proyecto.

**Importancia Estratégica:** Facilita auditoría, seguimiento y comunicación de resultados.  

**Consideraciones UX:** Selección de formato y filtros de datos simple.  

**Criterios de Aceptación:**  
- Reportes generados correctamente según filtros aplicados.  
- Posibilidad de descarga o envío por correo.







