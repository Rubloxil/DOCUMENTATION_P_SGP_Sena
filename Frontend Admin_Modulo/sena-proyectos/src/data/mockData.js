// Datos de prueba mientras conectas la API real de FastAPI.
// Cuando conectes el backend, estos datos dejan de usarse
// (ver src/api/services.js)

export const mockStats = {
  totalFichas: { value: 8, sub: '3 en fase lectiva' },
  totalInstructores: { value: 12, sub: '10 activos' },
  totalAprendices: { value: 247, sub: '18 en riesgo' },
  proyectosActivos: { value: 34, sub: '6 requieren atención' },
}

export const mockFichas = [
  { id: 2758401, instructor: 'Miguel Ramírez', aprendices: 28, fase: 'Lectiva' },
  { id: 2841022, instructor: 'Sara López', aprendices: 30, fase: 'Lectiva' },
  { id: 2905115, instructor: 'Carlos Vera', aprendices: 26, fase: 'Práctica' },
  { id: 2633890, instructor: 'Ana Morales', aprendices: 29, fase: 'Finalizada' },
]

export const mockProyectosCriticos = [
  {
    id: 1,
    nombre: 'Sistema Facturación Electrónica',
    ficha: 2905115,
    detalle: 'Sin avance 2 semanas',
    estado: 'Crítico',
  },
  {
    id: 2,
    nombre: 'Portal Web Inventarios',
    ficha: 2841022,
    detalle: 'Entregable vencido',
    estado: 'Alerta',
  },
  {
    id: 3,
    nombre: 'App Gestión Escolar',
    ficha: 2633890,
    detalle: '3 sin entregar',
    estado: 'Alerta',
  },
]

export const mockEventos = [
  { id: 1, dia: '27', mes: 'MAR', titulo: 'Jurado F.2758401', detalle: '8:00 am · Sala 301' },
  { id: 2, dia: '2', mes: 'ABR', titulo: 'Visita Coordinación', detalle: '10:00 am · Auditorio' },
  { id: 3, dia: '8', mes: 'ABR', titulo: 'Cierre Lectiva F.2905115', detalle: 'Todo el día' },
]

export const mockActividad = [
  { id: 1, color: 'green', texto: 'Carlos Niño entregó Sprint 3', tiempo: '5 min' },
  { id: 2, color: 'blue', texto: 'Ficha 2905115 inició fase práctica', tiempo: '1 h' },
  { id: 3, color: 'red', texto: 'Ana Torres marcada en riesgo', tiempo: '2 h' },
  { id: 4, color: 'gray', texto: 'Instructor Jorge Rueda registrado', tiempo: 'Ayer' },
  { id: 5, color: 'green', texto: 'Proyecto App Móvil finalizado', tiempo: 'Ayer' },
]

export const mockInstructores = [
  { id: 1, nombre: 'Miguel Ramírez', especialidad: 'Desarrollo de Software', fichas: 1, estado: 'Activo' },
  { id: 2, nombre: 'Sara López', especialidad: 'Análisis de Datos', fichas: 1, estado: 'Activo' },
  { id: 3, nombre: 'Carlos Vera', especialidad: 'Infraestructura TI', fichas: 1, estado: 'Activo' },
  { id: 4, nombre: 'Ana Morales', especialidad: 'Diseño UX/UI', fichas: 1, estado: 'Activo' },
  { id: 5, nombre: 'Jorge Rueda', especialidad: 'Redes y Seguridad', fichas: 0, estado: 'Activo' },
]

export const mockAprendices = [
  { id: 1, nombre: 'Carlos Niño', ficha: 2905115, estado: 'Activo', riesgo: false },
  { id: 2, nombre: 'Ana Torres', ficha: 2758401, estado: 'Activo', riesgo: true },
  { id: 3, nombre: 'Laura Gómez', ficha: 2841022, estado: 'Activo', riesgo: false },
  { id: 4, nombre: 'Andrés Pardo', ficha: 2633890, estado: 'Finalizado', riesgo: false },
]

export const mockProyectos = [
  { id: 1, nombre: 'Sistema Facturación Electrónica', ficha: 2905115, avance: 20, estado: 'Crítico' },
  { id: 2, nombre: 'Portal Web Inventarios', ficha: 2841022, avance: 55, estado: 'Alerta' },
  { id: 3, nombre: 'App Gestión Escolar', ficha: 2633890, avance: 70, estado: 'Alerta' },
  { id: 4, nombre: 'App Móvil', ficha: 2758401, avance: 100, estado: 'Finalizado' },
]

export const mockUsuarios = [
  { id: 1, nombre: 'Admin SENA', correo: 'admin@sena.edu.co', rol: 'Administrador' },
  { id: 2, nombre: 'Miguel Ramírez', correo: 'miguel.ramirez@sena.edu.co', rol: 'Instructor' },
  { id: 3, nombre: 'Carlos Niño', correo: 'carlos.nino@sena.edu.co', rol: 'Aprendiz' },
]

export const mockAlertas = [
  { id: 1, titulo: 'Ficha 2905115 sin avance', detalle: 'Sistema Facturación Electrónica', nivel: 'Crítico' },
  { id: 2, titulo: 'Entregable vencido', detalle: 'Portal Web Inventarios', nivel: 'Alerta' },
  { id: 3, titulo: 'Aprendiz en riesgo', detalle: 'Ana Torres · Ficha 2758401', nivel: 'Alerta' },
]
