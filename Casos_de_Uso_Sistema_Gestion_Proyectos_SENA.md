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