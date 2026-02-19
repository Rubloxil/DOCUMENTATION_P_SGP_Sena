# Casos de Uso

## CU-01: Registrar Proyecto

**Actor:** Aprendiz  
**Precondición:** Usuario autenticado.  

### Flujo Principal:
1. El aprendiz accede al módulo de proyectos.
2. Selecciona "Registrar Proyecto".
3. Ingresa la información requerida.
4. El sistema valida los datos.
5. El sistema almacena el proyecto.
6. Se muestra confirmación de registro exitoso.

### Flujo Alternativo:
- Si faltan campos obligatorios, el sistema muestra mensaje de error.

**Postcondición:** Proyecto almacenado en estado "Registrado".

**Requisitos Relacionados:** RF-03, RN-01

---

## CU-02: Evaluar Proyecto

**Actor:** Instructor  
**Precondición:** Proyecto asignado al instructor.

### Flujo Principal:
1. El instructor accede al proyecto asignado.
2. Revisa la información.
3. Cambia el estado del proyecto.
4. El sistema guarda la actualización.

**Postcondición:** Proyecto actualizado con nuevo estado.

**Requisitos Relacionados:** RF-05, RN-02


