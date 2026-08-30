import PageHeader from '../components/PageHeader'
import Card from '../components/Card'

const conversaciones = [
  { id: 1, nombre: 'Miguel Ramírez', ultimo: 'Listo, subo las notas hoy mismo.', tiempo: '10 min' },
  { id: 2, nombre: 'Sara López', ultimo: '¿Puedes revisar el entregable de la ficha 2841022?', tiempo: '1 h' },
  { id: 3, nombre: 'Carlos Vera', ultimo: 'La ficha 2905115 sigue sin avance.', tiempo: 'Ayer' },
]

export default function Mensajes() {
  return (
    <div>
      <PageHeader title="Mensajes" subtitle="Comunicación con instructores y aprendices" />

      <Card>
        <div className="divide-y divide-gray-100">
          {conversaciones.map((c) => (
            <div key={c.id} className="flex items-center justify-between px-5 py-4 hover:bg-gray-50 cursor-pointer">
              <div className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-full bg-topbar/10 text-topbar flex items-center justify-center text-sm font-semibold">
                  {c.nombre.charAt(0)}
                </span>
                <div>
                  <p className="text-sm font-medium text-gray-800">{c.nombre}</p>
                  <p className="text-xs text-gray-400">{c.ultimo}</p>
                </div>
              </div>
              <span className="text-xs text-gray-400 flex-shrink-0">{c.tiempo}</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
