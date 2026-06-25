import { useEffect, useState } from 'react'
import PageHeader from '../components/PageHeader'
import Card from '../components/Card'
import Badge from '../components/Badge'
import { getProyectos } from '../api/services'

const tareas = [
  { id: 1, nombre: 'Sprint 4 - Backend API', fecha: '26 Jun', estado: 'Pendiente' },
  { id: 2, nombre: 'Documentación técnica', fecha: '30 Jun', estado: 'Pendiente' },
  { id: 3, nombre: 'Sprint 3 - Frontend', fecha: '18 Jun', estado: 'Finalizada' },
]

const calificaciones = [
  { id: 1, modulo: 'Bases de Datos', nota: 4.5 },
  { id: 2, modulo: 'Desarrollo Backend', nota: 4.2 },
  { id: 3, modulo: 'Ingeniería de Software', nota: 4.8 },
]

export default function VistaAprendiz() {
  const [proyectos, setProyectos] = useState([])

  useEffect(() => {
    getProyectos().then(setProyectos)
  }, [])

  return (
    <div>
      <PageHeader title="Vista Aprendiz" subtitle="Tus proyectos, tareas y calificaciones" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <Card title="Mis proyectos">
          <div className="divide-y divide-gray-100">
            {proyectos.map((p) => (
              <div key={p.id} className="flex items-center justify-between px-5 py-3">
                <div>
                  <p className="text-sm font-medium text-gray-800">{p.nombre}</p>
                  <p className="text-xs text-gray-400">Avance {p.avance}%</p>
                </div>
                <Badge>{p.estado}</Badge>
              </div>
            ))}
          </div>
        </Card>

        <Card title="Tareas pendientes">
          <div className="divide-y divide-gray-100">
            {tareas.map((t) => (
              <div key={t.id} className="flex items-center justify-between px-5 py-3">
                <div>
                  <p className="text-sm font-medium text-gray-800">{t.nombre}</p>
                  <p className="text-xs text-gray-400">Entrega: {t.fecha}</p>
                </div>
                <Badge>{t.estado}</Badge>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <div className="mt-5">
        <Card title="Calificaciones">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-[11px] text-gray-400 uppercase">
                <th className="px-5 py-3 font-medium">Módulo</th>
                <th className="px-5 py-3 font-medium">Nota</th>
              </tr>
            </thead>
            <tbody>
              {calificaciones.map((c) => (
                <tr key={c.id} className="border-t border-gray-100">
                  <td className="px-5 py-3 text-gray-800">{c.modulo}</td>
                  <td className="px-5 py-3 font-semibold text-gray-800">{c.nota.toFixed(1)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </div>
    </div>
  )
}
