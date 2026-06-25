import { useEffect, useState } from 'react'
import PageHeader from '../components/PageHeader'
import Card from '../components/Card'
import Badge from '../components/Badge'
import { getFichas, getProyectos, getAprendices } from '../api/services'

export default function VistaInstructor() {
  const [fichas, setFichas] = useState([])
  const [proyectos, setProyectos] = useState([])
  const [aprendices, setAprendices] = useState([])

  useEffect(() => {
    getFichas().then(setFichas)
    getProyectos().then(setProyectos)
    getAprendices().then(setAprendices)
  }, [])

  return (
    <div>
      <PageHeader title="Vista Instructor" subtitle="Tus fichas, proyectos y aprendices a cargo" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <Card title="Mis fichas">
          <div className="divide-y divide-gray-100">
            {fichas.map((f) => (
              <div key={f.id} className="flex items-center justify-between px-5 py-3">
                <div>
                  <p className="text-sm font-medium text-gray-800">Ficha {f.id}</p>
                  <p className="text-xs text-gray-400">{f.aprendices} aprendices</p>
                </div>
                <Badge>{f.fase}</Badge>
              </div>
            ))}
          </div>
        </Card>

        <Card title="Proyectos por revisar">
          <div className="divide-y divide-gray-100">
            {proyectos.map((p) => (
              <div key={p.id} className="flex items-center justify-between px-5 py-3">
                <div>
                  <p className="text-sm font-medium text-gray-800">{p.nombre}</p>
                  <p className="text-xs text-gray-400">Ficha {p.ficha}</p>
                </div>
                <Badge>{p.estado}</Badge>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <div className="mt-5">
        <Card title="Aprendices a cargo">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-[11px] text-gray-400 uppercase">
                <th className="px-5 py-3 font-medium">Nombre</th>
                <th className="px-5 py-3 font-medium">Ficha</th>
                <th className="px-5 py-3 font-medium">Estado</th>
              </tr>
            </thead>
            <tbody>
              {aprendices.map((a) => (
                <tr key={a.id} className="border-t border-gray-100">
                  <td className="px-5 py-3 text-gray-800">{a.nombre}</td>
                  <td className="px-5 py-3 text-gray-600">{a.ficha}</td>
                  <td className="px-5 py-3">
                    <Badge>{a.estado}</Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </div>
    </div>
  )
}
