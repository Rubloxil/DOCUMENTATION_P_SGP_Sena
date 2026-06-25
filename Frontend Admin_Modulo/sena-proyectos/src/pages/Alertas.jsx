import { useEffect, useState } from 'react'
import { AlertTriangle } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import Card from '../components/Card'
import Badge from '../components/Badge'
import { getAlertas } from '../api/services'

export default function Alertas() {
  const [alertas, setAlertas] = useState([])

  useEffect(() => {
    getAlertas().then(setAlertas)
  }, [])

  return (
    <div>
      <PageHeader title="Alertas" subtitle="Situaciones que requieren atención" />

      <Card>
        <div className="divide-y divide-gray-100">
          {alertas.map((a) => (
            <div key={a.id} className="flex items-center justify-between px-5 py-4">
              <div className="flex items-center gap-3">
                <span
                  className={`rounded-md p-2 ${
                    a.nivel === 'Crítico' ? 'bg-red-50 text-red-500' : 'bg-orange-50 text-orange-500'
                  }`}
                >
                  <AlertTriangle size={16} />
                </span>
                <div>
                  <p className="text-sm font-medium text-gray-800">{a.titulo}</p>
                  <p className="text-xs text-gray-400">{a.detalle}</p>
                </div>
              </div>
              <Badge>{a.nivel}</Badge>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
