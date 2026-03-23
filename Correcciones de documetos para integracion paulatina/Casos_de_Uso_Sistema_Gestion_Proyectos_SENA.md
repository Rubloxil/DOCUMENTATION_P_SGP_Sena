# 💼 Casos de Uso - Sistema de Gestión de Proyectos SENA

------------------------------------------------------------------------

## 👥 1. Identificación de Actores

### 🎯 Actores Principales

-   👨‍🎓 Aprendiz: Estudiante que desarrolla proyectos formativos.
-   👨‍🏫 Instructor: Docente encargado de supervisar y evaluar proyectos.

### ⚙️ Actores Secundarios

-   💻 Sistema: Ejecuta validaciones, notificaciones y registros
    automáticos.

------------------------------------------------------------------------

# 🧩 2. Casos de Uso del Sistema

## 🔐 CU-001: Iniciar Sesión

**Actor Principal:** Aprendiz, Instructor\
**Requisitos Relacionados:** RF-01

### ✅ Precondiciones

-   Usuario registrado.
-   Sistema disponible.

### 🧭 Flujo Principal

1.  Accede a la página de inicio de sesión.
2.  Ingresa documento y contraseña.
3.  Presiona "Iniciar Sesión".
4.  El sistema valida credenciales.
5.  Redirige al panel principal.
6.  Registra fecha y hora de acceso.

### ⚠️ Flujo Alternativo

-   Credenciales incorrectas → mensaje de error.

### 📄 Postcondición

-   Usuario autenticado correctamente.

------------------------------------------------------------------------

## 🆕 CU-002: Registrar / Crear Proyecto

**Actor Principal:** Aprendiz\
**Requisitos Relacionados:** RF-03, RN-001, RN-004

### ✅ Precondiciones

-   Usuario autenticado.
-   No superar 2 proyectos activos.

### 🧭 Flujo Principal

1.  Accede al módulo de proyectos.
2.  Selecciona "Crear Nuevo Proyecto".
3.  Diligencia formulario (título, descripción, fechas).
4.  Presiona "Crear Proyecto".
5.  El sistema valida información.
6.  Asigna ID único.
7.  Guarda proyecto en estado "En Planificación".
8.  Muestra confirmación.

### ⚠️ Flujos Alternativos

-   Campos incompletos → mensaje de error.
-   Límite excedido → notificación.
-   Fechas inválidas → solicitud de corrección.

### 📄 Postcondición

-   Proyecto almacenado correctamente.

------------------------------------------------------------------------

## 🧑‍🏫 CU-003: Asignar Instructor a Proyecto

**Actor Principal:** Instructor\
**Requisitos Relacionados:** RF-04, RN-002

### ✅ Precondiciones

-   Instructor autenticado.
-   Proyecto sin instructor asignado.

### 🧭 Flujo Principal

1.  Accede a proyectos disponibles.
2.  Selecciona proyecto.
3.  Presiona "Asignarme".
4.  El sistema actualiza el proyecto.
5.  Notifica al aprendiz.

### 📄 Postcondición

-   Proyecto asignado correctamente.

------------------------------------------------------------------------

## 📈 CU-004: Registrar Avance

**Actor Principal:** Aprendiz\
**Requisitos Relacionados:** RF-05, RN-003

### ✅ Precondiciones

-   Proyecto en estado "En Desarrollo".
-   Instructor asignado.

### 🧭 Flujo Principal

1.  Selecciona proyecto activo.
2.  Presiona "Registrar Avance".
3.  Describe actividades y porcentaje.
4.  Guarda avance.
5.  Sistema valida y notifica al instructor.

### 📄 Postcondición

-   Avance registrado.

------------------------------------------------------------------------

## 🧾 CU-005: Evaluar y Realizar Seguimiento

**Actor Principal:** Instructor\
**Requisitos Relacionados:** RF-06

### ✅ Precondiciones

-   Proyecto asignado.

### 🧭 Flujo Principal

1.  Accede a "Mis Proyectos".
2.  Selecciona proyecto.
3.  Revisa avances.
4.  Agrega comentarios.
5.  Cambia estado del proyecto.
6.  Guarda cambios.
7.  Sistema notifica al aprendiz.

### 📄 Postcondición

-   Proyecto actualizado.

------------------------------------------------------------------------

## 🔍 CU-006: Consultar Estado

**Actor Principal:** Aprendiz, Instructor\
**Requisitos Relacionados:** RF-07

### 🧭 Flujo Principal

1.  Accede a "Consultar Proyectos".
2.  Aplica filtros.
3.  Visualiza resultados y detalles.

### 📄 Postcondición

-   Información mostrada correctamente.

------------------------------------------------------------------------

# 📊 3. Estados del Proyecto

-   En Planificación\
-   En Desarrollo\
-   En Revisión\
-   Finalizado\
-   Suspendido

------------------------------------------------------------------------

# ⚖️ 4. Reglas de Negocio

-   RN-001: Máximo 2 proyectos activos por aprendiz.
-   RN-002: Máximo 10 proyectos activos por instructor.
-   RN-003: Registro mínimo de un avance semanal.
-   RN-004: Duración entre 1 y 6 meses.
