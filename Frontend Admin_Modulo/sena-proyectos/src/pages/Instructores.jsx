import { useEffect, useState } from 'react'
import { Plus } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import Card from '../components/Card'
import Badge from '../components/Badge'
import { getInstructores } from '../api/services'

export default function Instructores() {
  const [instructores, setInstructores] = useState([])

  useEffect(() => {
    getInstructores().then(setInstructores)
  }, [])

  return (
    <div>
      <div className="flex items-center justify-between">
        <PageHeader title="Instructores" subtitle="Instructores asignados a fichas activas" />
        <button className="flex items-center gap-2 bg-topbar text-white text-sm font-medium px-4 py-2 rounded-md hover:opacity-90">
          <Plus size={16} /> Nuevo instructor
        </button>
      </div>

      <Card>
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-[11px] text-gray-400 uppercase">
              <th className="px-5 py-3 font-medium">Nombre</th>
              <th className="px-5 py-3 font-medium">Especialidad</th>
              <th className="px-5 py-3 font-medium">Fichas a cargo</th>
              <th className="px-5 py-3 font-medium">Estado</th>
            </tr>
          </thead>
          <tbody>
            {instructores.map((i) => (
              <tr key={i.id} className="border-t border-gray-100">
                <td className="px-5 py-3 font-medium text-gray-800">{i.nombre}</td>
                <td className="px-5 py-3 text-gray-600">{i.especialidad}</td>
                <td className="px-5 py-3 text-gray-600">{i.fichas}</td>
                <td className="px-5 py-3">
                  <Badge>{i.estado}</Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  )
}
