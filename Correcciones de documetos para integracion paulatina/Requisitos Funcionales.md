# Requisitos Funcionales

## 1. Introducción
Este documento describe los requisitos funcionales del sistema de gestión de proyectos académicos SENA.

---

## 2. Lista de Requisitos Funcionales

### RF-01: Registro de Usuario
El sistema deberá permitir el registro de aprendices e instructores mediante formulario con validación de campos obligatorios.

**Criterios de Aceptación:**
- Todos los campos obligatorios deben validarse.
- El sistema debe evitar registros con correo duplicado.
- Debe mostrarse mensaje de confirmación.

**Prioridad:** Alta

---

### RF-02: Autenticación de Usuario
El sistema deberá permitir a los usuarios autenticarse mediante correo institucional y contraseña.

**Criterios de Aceptación:**
- Validación de credenciales.
- Mensaje de error si las credenciales son incorrectas.
- Redirección al panel correspondiente según rol.

**Prioridad:** Alta

---

### RF-03: Registro de Proyecto
El sistema deberá permitir al aprendiz registrar un proyecto académico ingresando título, descripción, fecha de entrega y estado inicial.

**Criterios de Aceptación:**
- Validación de campos obligatorios.
- Registro almacenado en base de datos.
- Confirmación visual de registro exitoso.

**Prioridad:** Alta

---

### RF-04: Asignación de Instructor
El sistema deberá permitir la asignación de un instructor a un proyecto registrado.

**Criterios de Aceptación:**
- Solo instructores activos pueden ser asignados.
- El sistema debe registrar la fecha de asignación.

**Prioridad:** Media

---

### RF-05: Actualización de Estado
El sistema deberá permitir actualizar el estado del proyecto (Registrado, En revisión, Aprobado, Rechazado).

**Prioridad:** Alta
