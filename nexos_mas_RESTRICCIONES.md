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

---

**Autor:** Equipo de Análisis de Requisitos – Centro de Formación SENA  
**Versión del documento:** 1.1  
**Fecha:** 2025-11-12  
**Documento complementario al Análisis de Requisitos V001**