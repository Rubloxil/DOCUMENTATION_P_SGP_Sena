# Casos de Uso - Sistema de Gestión de Proyectos SENA

## 1. Identificación de Actores

**Actores Principales:**
- Aprendiz: Estudiante del SENA que desarrolla proyectos de formación
- Instructor: Docente que supervisa y evalúa los proyectos de los aprendices

**Actores Secundarios:**
- Sistema: Funciones automáticas del sistema (notificaciones, validaciones)

---

## 2. Casos de Uso Principales

### CU-001: Iniciar Sesión
**Actor Principal:** Aprendiz, Instructor  
**Descripción:** Permite el acceso al sistema mediante credenciales válidas  

**Precondiciones:**
- El usuario debe estar registrado en el sistema del SENA  
- El sistema debe estar disponible  

**Flujo Principal:**
1. El usuario accede a la página de inicio de sesión
2. El usuario ingresa su número de documento
3. El usuario ingresa su contraseña
4. El usuario presiona el botón "Iniciar Sesión"
5. El sistema valida las credenciales
6. El sistema redirige al usuario a su panel principal

**Flujos Alternativos:**
- **FA-001a:** Si las credenciales son incorrectas
  - El sistema muestra mensaje de error
  - El usuario puede intentar nuevamente

**Postcondiciones:**
- El usuario queda autenticado en el sistema
- Se registra la hora de acceso

---

### CU-002: Crear Proyecto
**Actor Principal:** Aprendiz  
**Descripción:** Permite al aprendiz crear un nuevo proyecto de formación  

**Precondiciones:**
- El aprendiz debe haber iniciado sesión
- El aprendiz debe tener cupo disponible para crear proyectos

**Flujo Principal:**
1. El aprendiz selecciona "Crear Nuevo Proyecto"
2. El sistema muestra el formulario de creación
3. El aprendiz ingresa el título del proyecto
4. El aprendiz ingresa la descripción del proyecto
5. El aprendiz selecciona la fecha de inicio
6. El aprendiz selecciona la fecha estimada de finalización
7. El aprendiz presiona "Crear Proyecto"
8. El sistema valida la información
9. El sistema guarda el proyecto con estado "En Planificación"
10. El sistema muestra confirmación de creación

**Flujos Alternativos:**
- **FA-002a:** Si faltan campos obligatorios
  - El sistema marca los campos faltantes
  - El aprendiz debe completar la información

**Postcondiciones:**
- El proyecto queda creado en el sistema
- El proyecto aparece en la lista de proyectos del aprendiz

---

### CU-003: Asignar Instructor a Proyecto
**Actor Principal:** Instructor  
**Descripción:** Permite al instructor asignarse o ser asignado a supervisar un proyecto  

**Precondiciones:**
- El instructor debe haber iniciado sesión
- Debe existir al menos un proyecto sin instructor asignado

**Flujo Principal:**
1. El instructor accede a "Proyectos Disponibles"
2. El sistema muestra la lista de proyectos sin instructor
3. El instructor selecciona un proyecto
4. El instructor revisa los detalles del proyecto
5. El instructor presiona "Asignarme como Instructor"
6. El sistema actualiza el proyecto con el instructor asignado
7. El sistema envía notificación al aprendiz

**Postcondiciones:**
- El proyecto tiene instructor asignado
- El aprendiz recibe notificación de asignación

---

### CU-004: Registrar Avance de Proyecto
**Actor Principal:** Aprendiz  
**Descripción:** Permite al aprendiz registrar el progreso realizado en su proyecto  

**Precondiciones:**
- El aprendiz debe haber iniciado sesión
- El proyecto debe estar en estado "En Desarrollo"
- El proyecto debe tener instructor asignado

**Flujo Principal:**
1. El aprendiz selecciona su proyecto activo
2. El aprendiz presiona "Registrar Avance"
3. El sistema muestra el formulario de avance
4. El aprendiz describe las actividades realizadas
5. El aprendiz indica el porcentaje de avance
6. El aprendiz puede adjuntar archivos (opcional)
7. El aprendiz presiona "Guardar Avance"
8. El sistema valida la información
9. El sistema actualiza el progreso del proyecto
10. El sistema notifica al instructor sobre el nuevo avance

**Flujos Alternativos:**
- **FA-004a:** Si el porcentaje de avance no es válido
  - El sistema muestra mensaje de error
  - El aprendiz debe corregir el valor

**Postcondiciones:**
- El avance queda registrado en el historial
- El instructor recibe notificación del avance

---

### CU-005: Realizar Seguimiento de Proyecto
**Actor Principal:** Instructor  
**Descripción:** Permite al instructor revisar y hacer seguimiento a los proyectos asignados  

**Precondiciones:**
- El instructor debe haber iniciado sesión
- El instructor debe tener proyectos asignados

**Flujo Principal:**
1. El instructor accede a "Mis Proyectos Asignados"
2. El sistema muestra la lista de proyectos del instructor
3. El instructor selecciona un proyecto para revisar
4. El sistema muestra los detalles del proyecto
5. El instructor revisa los avances registrados
6. El instructor puede agregar comentarios de retroalimentación
7. El instructor puede cambiar el estado del proyecto
8. El instructor presiona "Guardar Seguimiento"
9. El sistema actualiza la información
10. El sistema notifica al aprendiz sobre los comentarios

**Postcondiciones:**
- Los comentarios del instructor quedan registrados
- El aprendiz recibe retroalimentación

---

### CU-006: Consultar Estado de Proyectos
**Actor Principal:** Aprendiz, Instructor  
**Descripción:** Permite consultar el estado actual y el historial de los proyectos  

**Precondiciones:**
- El usuario debe haber iniciado sesión
- Deben existir proyectos en el sistema

**Flujo Principal:**
1. El usuario selecciona "Consultar Proyectos"
2. El sistema muestra filtros de búsqueda
3. El usuario puede filtrar por estado, fecha o título
4. El usuario presiona "Buscar"
5. El sistema muestra los resultados
6. El usuario puede seleccionar un proyecto para ver detalles
7. El sistema muestra información completa del proyecto

**Postcondiciones:**
- El usuario obtiene la información solicitada

---

## 3. Estados del Proyecto
- **En Planificación:** Proyecto creado, esperando instructor  
- **En Desarrollo:** Proyecto con instructor asignado, en ejecución  
- **En Revisión:** Proyecto completado, esperando evaluación final  
- **Finalizado:** Proyecto completado y evaluado  
- **Suspendido:** Proyecto pausado por algún motivo  

---

## 4. Reglas de Negocio

**RN-001: Límite de Proyectos**  
- Un aprendiz puede tener máximo 2 proyectos activos simultáneamente  

**RN-002: Asignación de Instructores**  
- Un instructor puede supervisar máximo 10 proyectos simultáneamente  

**RN-003: Registro de Avances**  
- Los avances deben registrarse al menos una vez por semana  

**RN-004: Duración de Proyectos**  
- Los proyectos deben tener una duración mínima de 1 mes y máxima de 6 meses  

---

## 5. Diagrama de Casos de Uso (Descripción)

```
Sistema de Gestión de Proyectos SENA
│
├── Aprendiz
│   ├── Iniciar Sesión
│   ├── Crear Proyecto
│   ├── Registrar Avance
│   └── Consultar Estado
│
└── Instructor
    ├── Iniciar Sesión
    ├── Asignar Instructor a Proyecto
    ├── Realizar Seguimiento
    └── Consultar Estado
```

---

## 6. Caso de Uso Extendido: CU-002 Crear Proyecto

**ID:** CU-002  
**Actor Principal:** Aprendiz  
**Nivel:** Usuario  
**Descripción:** El aprendiz crea un nuevo proyecto formativo en el sistema  

**Precondiciones:**
- El aprendiz tiene una sesión activa en el sistema
- El aprendiz no ha excedido el límite de proyectos activos (máximo 2)
- El aprendiz tiene los permisos necesarios para crear proyectos

**Garantías de Éxito:**
- El proyecto queda registrado en la base de datos
- El proyecto aparece en la lista personal del aprendiz
- El proyecto queda disponible para asignación de instructor

**Escenario Principal de Éxito:**
1. El aprendiz navega al menú principal
2. El aprendiz hace clic en "Crear Nuevo Proyecto"
3. El sistema presenta el formulario de creación con campos obligatorios marcados
4. El aprendiz completa el campo "Título del Proyecto" (máximo 100 caracteres)
5. El aprendiz completa el campo "Descripción" (máximo 500 caracteres)
6. El aprendiz selecciona "Fecha de Inicio" (no anterior a hoy)
7. El aprendiz selecciona "Fecha de Finalización" (mínimo 30 días después de inicio)
8. El aprendiz hace clic en "Crear Proyecto"
9. El sistema valida que todos los campos obligatorios estén completos
10. El sistema verifica que las fechas sean coherentes
11. El sistema asigna un ID único al proyecto
12. El sistema establece el estado inicial como "En Planificación"
13. El sistema guarda el proyecto en la base de datos
14. El sistema muestra mensaje de confirmación con el ID del proyecto
15. El sistema redirige al aprendiz a la vista de detalles del proyecto creado

**Extensiones (Flujos Alternativos):**
- **3a.** El aprendiz ha alcanzado el límite máximo de proyectos activos  
  - El sistema muestra mensaje: "Ha alcanzado el límite de proyectos activos (2)"  
  - El sistema sugiere finalizar un proyecto existente antes de crear uno nuevo  

- **9a.** Faltan campos obligatorios  
  - El sistema resalta los campos faltantes en rojo  
  - El sistema muestra mensaje: "Complete todos los campos obligatorios"  

- **10a.** Las fechas no son coherentes  
  - El sistema muestra mensaje: "La fecha de finalización debe ser posterior a la fecha de inicio"  

- **13a.** Error en la base de datos  
  - El sistema muestra mensaje: "Error interno del sistema. Intente nuevamente"  
  - El sistema registra el error en el log  

**Requerimientos Especiales:**
- El sistema debe responder en menos de 3 segundos
- La interfaz debe ser compatible con navegadores modernos
- Los campos de fecha deben tener validación de formato

**Lista de Variables de Tecnología y Datos:**
- Título: Texto, obligatorio, máximo 100 caracteres
- Descripción: Texto, obligatorio, máximo 500 caracteres
- Fecha Inicio: Fecha, obligatorio, formato DD/MM/AAAA
- Fecha Fin: Fecha, obligatorio, formato DD/MM/AAAA
- Estado: Enumerado, valor por defecto "En Planificación"
- ID Usuario: Número entero, tomado de la sesión activa

**Frecuencia de Ocurrencia:** Semanal por aprendiz
