import { useEffect, useState } from 'react'
import { Plus } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import Card from '../components/Card'
import Badge from '../components/Badge'
import { getFichas } from '../api/services'

export default function Fichas() {
  const [fichas, setFichas] = useState([])

  useEffect(() => {
    getFichas().then(setFichas)
  }, [])

  return (
    <div>
      <div className="flex items-center justify-between">
        <PageHeader title="Fichas" subtitle="Gestión de fichas de formación activas" />
        <button className="flex items-center gap-2 bg-topbar text-white text-sm font-medium px-4 py-2 rounded-md hover:opacity-90">
          <Plus size={16} /> Nueva ficha
        </button>
      </div>

      <Card>
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-[11px] text-gray-400 uppercase">
              <th className="px-5 py-3 font-medium">Ficha</th>
              <th className="px-5 py-3 font-medium">Instructor</th>
              <th className="px-5 py-3 font-medium">Aprendices</th>
              <th className="px-5 py-3 font-medium">Fase</th>
              <th className="px-5 py-3 font-medium text-right">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {fichas.map((f) => (
              <tr key={f.id} className="border-t border-gray-100">
                <td className="px-5 py-3 font-medium text-gray-800">{f.id}</td>
                <td className="px-5 py-3 text-gray-600">{f.instructor}</td>
                <td className="px-5 py-3 text-gray-600">{f.aprendices}</td>
                <td className="px-5 py-3">
                  <Badge>{f.fase}</Badge>
                </td>
                <td className="px-5 py-3 text-right">
                  <button className="text-topbar text-xs font-medium hover:underline">Ver detalle</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  )
}
