import { useEffect, useState } from 'react'
import { Plus } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import Card from '../components/Card'
import Badge from '../components/Badge'
import { getUsuarios } from '../api/services'

export default function Usuarios() {
  const [usuarios, setUsuarios] = useState([])

  useEffect(() => {
    getUsuarios().then(setUsuarios)
  }, [])

  return (
    <div>
      <div className="flex items-center justify-between">
        <PageHeader title="Usuarios" subtitle="Cuentas con acceso a la plataforma" />
        <button className="flex items-center gap-2 bg-topbar text-white text-sm font-medium px-4 py-2 rounded-md hover:opacity-90">
          <Plus size={16} /> Nuevo usuario
        </button>
      </div>

      <Card>
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-[11px] text-gray-400 uppercase">
              <th className="px-5 py-3 font-medium">Nombre</th>
              <th className="px-5 py-3 font-medium">Correo</th>
              <th className="px-5 py-3 font-medium">Rol</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((u) => (
              <tr key={u.id} className="border-t border-gray-100">
                <td className="px-5 py-3 font-medium text-gray-800">{u.nombre}</td>
                <td className="px-5 py-3 text-gray-600">{u.correo}</td>
                <td className="px-5 py-3">
                  <Badge>{u.rol}</Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  )
}
