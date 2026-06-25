import PageHeader from '../components/PageHeader'
import Card from '../components/Card'

export default function Configuracion() {
  return (
    <div>
      <PageHeader title="Configuración" subtitle="Preferencias generales de la plataforma" />

      <Card title="Datos del programa">
        <div className="px-5 py-5 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium text-gray-500 mb-1">Nombre del programa</label>
            <input
              type="text"
              defaultValue="Análisis y Desarrollo de Software"
              className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-topbar/30"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-500 mb-1">Centro de formación</label>
            <input
              type="text"
              defaultValue="Centro de Servicios y Gestión Empresarial"
              className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-topbar/30"
            />
          </div>
        </div>
        <div className="px-5 py-4 border-t border-gray-100 flex justify-end">
          <button className="bg-topbar text-white text-sm font-medium px-4 py-2 rounded-md hover:opacity-90">
            Guardar cambios
          </button>
        </div>
      </Card>
    </div>
  )
}
