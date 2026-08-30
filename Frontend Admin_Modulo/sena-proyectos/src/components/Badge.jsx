const COLORS = {
  lectiva: 'bg-green-100 text-green-700',
  práctica: 'bg-orange-100 text-orange-700',
  practica: 'bg-orange-100 text-orange-700',
  finalizada: 'bg-blue-100 text-blue-700',
  finalizado: 'bg-blue-100 text-blue-700',
  crítico: 'bg-red-100 text-red-700',
  critico: 'bg-red-100 text-red-700',
  alerta: 'bg-orange-100 text-orange-700',
  activo: 'bg-green-100 text-green-700',
  inactivo: 'bg-gray-100 text-gray-600',
  administrador: 'bg-purple-100 text-purple-700',
  instructor: 'bg-blue-100 text-blue-700',
  aprendiz: 'bg-green-100 text-green-700',
}

export default function Badge({ children }) {
  const key = String(children).toLowerCase()
  const classes = COLORS[key] || 'bg-gray-100 text-gray-600'
  return <span className={`badge ${classes}`}>{children}</span>
}
