import { useEffect, useState } from 'react'
import PageHeader from '../components/PageHeader'
import Card from '../components/Card'
import Badge from '../components/Badge'
import { getAprendices } from '../api/services'

export default function Aprendices() {
  const [aprendices, setAprendices] = useState([])

  useEffect(() => {
    getAprendices().then(setAprendices)
  }, [])

  return (
    <div>
      <PageHeader title="Aprendices" subtitle="Listado general de aprendices por ficha" />

      <Card>
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-[11px] text-gray-400 uppercase">
              <th className="px-5 py-3 font-medium">Nombre</th>
              <th className="px-5 py-3 font-medium">Ficha</th>
              <th className="px-5 py-3 font-medium">Estado</th>
              <th className="px-5 py-3 font-medium">Riesgo</th>
            </tr>
          </thead>
          <tbody>
            {aprendices.map((a) => (
              <tr key={a.id} className="border-t border-gray-100">
                <td className="px-5 py-3 font-medium text-gray-800">{a.nombre}</td>
                <td className="px-5 py-3 text-gray-600">{a.ficha}</td>
                <td className="px-5 py-3">
                  <Badge>{a.estado}</Badge>
                </td>
                <td className="px-5 py-3">
                  {a.riesgo ? <Badge>Crítico</Badge> : <span className="text-xs text-gray-400">—</span>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  )
}
