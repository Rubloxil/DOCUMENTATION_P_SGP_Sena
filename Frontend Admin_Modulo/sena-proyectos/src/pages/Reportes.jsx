import { FileBarChart, Download } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import Card from '../components/Card'

const reportes = [
  { id: 1, nombre: 'Avance general por ficha', detalle: 'Resumen de fases y aprendices por ficha' },
  { id: 2, nombre: 'Aprendices en riesgo', detalle: 'Listado con motivo y ficha asociada' },
  { id: 3, nombre: 'Proyectos críticos', detalle: 'Proyectos sin avance o con entregables vencidos' },
  { id: 4, nombre: 'Carga de instructores', detalle: 'Fichas y aprendices asignados por instructor' },
]

export default function Reportes() {
  return (
    <div>
      <PageHeader title="Reportes" subtitle="Genera y descarga reportes del programa" />

      <Card>
        <div className="divide-y divide-gray-100">
          {reportes.map((r) => (
            <div key={r.id} className="flex items-center justify-between px-5 py-4">
              <div className="flex items-center gap-3">
                <span className="bg-blue-50 text-topbar rounded-md p-2">
                  <FileBarChart size={16} />
                </span>
                <div>
                  <p className="text-sm font-medium text-gray-800">{r.nombre}</p>
                  <p className="text-xs text-gray-400">{r.detalle}</p>
                </div>
              </div>
              <button className="flex items-center gap-2 text-topbar text-xs font-medium hover:underline flex-shrink-0">
                <Download size={14} /> Descargar
              </button>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
