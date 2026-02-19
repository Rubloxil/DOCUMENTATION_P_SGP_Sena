# Requisitos No Funcionales

## 1. Rendimiento

### RNF-01
El sistema deberá responder en un tiempo máximo de 3 segundos bajo carga normal (hasta 50 usuarios concurrentes).

---

## 2. Seguridad

### RNF-02
Las contraseñas deberán almacenarse utilizando algoritmo de hash seguro (bcrypt).

### RNF-03
El sistema deberá implementar autenticación basada en JWT con expiración máxima de 2 horas.

### RNF-04
El sistema deberá cumplir con la Ley 1581 de 2012 sobre protección de datos personales.

---

## 3. Usabilidad

### RNF-05
La interfaz deberá ser responsiva y adaptable a dispositivos móviles y escritorio.

### RNF-06
El sistema deberá ser compatible con navegadores modernos.

---

## 4. Disponibilidad

### RNF-07
El sistema deberá tener una disponibilidad mínima del 95% en horario académico.

---

## 5. Mantenibilidad

### RNF-08
El sistema deberá desarrollarse bajo arquitectura en capas para facilitar mantenimiento y escalabilidad.
