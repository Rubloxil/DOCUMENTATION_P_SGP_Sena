import { useEffect, useState } from 'react'
import PageHeader from '../components/PageHeader'
import Card from '../components/Card'
import Badge from '../components/Badge'
import { getProyectos } from '../api/services'

export default function Proyectos() {
  const [proyectos, setProyectos] = useState([])

  useEffect(() => {
    getProyectos().then(setProyectos)
  }, [])

  return (
    <div>
      <PageHeader title="Proyectos" subtitle="Proyectos de los aprendices, por ficha" />

      <Card>
        <div className="divide-y divide-gray-100">
          {proyectos.map((p) => (
            <div key={p.id} className="flex items-center justify-between px-5 py-4">
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-800">{p.nombre}</p>
                <p className="text-xs text-gray-400 mt-0.5">Ficha {p.ficha}</p>
                <div className="w-full max-w-xs bg-gray-100 rounded-full h-1.5 mt-2">
                  <div
                    className="h-1.5 rounded-full bg-topbar"
                    style={{ width: `${p.avance}%` }}
                  />
                </div>
              </div>
              <div className="flex items-center gap-4 flex-shrink-0 ml-4">
                <span className="text-xs text-gray-400">{p.avance}%</span>
                <Badge>{p.estado}</Badge>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
