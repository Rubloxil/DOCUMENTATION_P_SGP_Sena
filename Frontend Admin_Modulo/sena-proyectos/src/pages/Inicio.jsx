import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { User, GraduationCap, ArrowRight, Calendar, Activity, AlertTriangle } from 'lucide-react'
import StatCard from '../components/StatCard'
import Badge from '../components/Badge'
import {
  getDashboardStats,
  getFichas,
  getProyectosCriticos,
  getProximosEventos,
  getActividadReciente,
} from '../api/services'

const ACTIVIDAD_DOT = {
  green: 'bg-green-500',
  blue: 'bg-blue-500',
  red: 'bg-red-500',
  gray: 'bg-gray-400',
}

export default function Inicio() {
  const [stats, setStats] = useState(null)
  const [fichas, setFichas] = useState([])
  const [criticos, setCriticos] = useState([])
  const [eventos, setEventos] = useState([])
  const [actividad, setActividad] = useState([])

  useEffect(() => {
    getDashboardStats().then(setStats)
    getFichas().then(setFichas)
    getProyectosCriticos().then(setCriticos)
    getProximosEventos().then(setEventos)
    getActividadReciente().then(setActividad)
  }, [])

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900">Inicio</h1>
      <p className="text-sm text-gray-500 mt-1">
        Panel de administración · Acceso completo a todos los roles y módulos
      </p>

      {/* Tarjetas de estadísticas */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
        <StatCard label="Total Fichas" value={stats?.totalFichas.value ?? '—'} sub={stats?.totalFichas.sub} color="green" />
        <StatCard label="Total Instructores" value={stats?.totalInstructores.value ?? '—'} sub={stats?.totalInstructores.sub} color="blue" />
        <StatCard label="Total Aprendices" value={stats?.totalAprendices.value ?? '—'} sub={stats?.totalAprendices.sub} color="orange" />
        <StatCard label="Proyectos Activos" value={stats?.proyectosActivos.value ?? '—'} sub={stats?.proyectosActivos.sub} color="red" />
      </div>

      {/* Acceso rápido por rol */}
      <p className="text-sm font-semibold text-gray-700 mt-7 mb-3">Acceso rápido por rol</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Link
          to="/vista-aprendiz"
          className="flex items-center justify-between bg-green-50 border border-green-200 rounded-lg px-5 py-4 hover:bg-green-100 transition-colors"
        >
          <span className="flex items-center gap-3">
            <span className="bg-green-100 text-green-600 rounded-full p-2">
              <User size={18} />
            </span>
            <span>
              <span className="block text-sm font-semibold text-green-700">Vista Aprendiz</span>
              <span className="block text-xs text-gray-500">Proyectos, tareas, calificaciones</span>
            </span>
          </span>
          <ArrowRight size={18} className="text-green-600" />
        </Link>

        <Link
          to="/vista-instructor"
          className="flex items-center justify-between bg-orange-50 border border-orange-200 rounded-lg px-5 py-4 hover:bg-orange-100 transition-colors"
        >
          <span className="flex items-center gap-3">
            <span className="bg-orange-100 text-orange-600 rounded-full p-2">
              <GraduationCap size={18} />
            </span>
            <span>
              <span className="block text-sm font-semibold text-orange-700">Vista Instructor</span>
              <span className="block text-xs text-gray-500">Fichas, proyectos, aprendices</span>
            </span>
          </span>
          <ArrowRight size={18} className="text-orange-600" />
        </Link>
      </div>

      {/* Grid principal */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-6">
        {/* Columna izquierda */}
        <div className="lg:col-span-2 flex flex-col gap-5">
          {/* Estado de fichas */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
              <h2 className="font-semibold text-gray-800 text-sm">Estado de Fichas</h2>
              <Link to="/fichas" className="text-xs text-topbar font-medium flex items-center gap-1">
                Ver todas <ArrowRight size={12} />
              </Link>
            </div>
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-[11px] text-gray-400 uppercase">
                  <th className="px-5 py-2 font-medium">Ficha</th>
                  <th className="px-5 py-2 font-medium">Instructor</th>
                  <th className="px-5 py-2 font-medium">Aprendices</th>
                  <th className="px-5 py-2 font-medium">Fase</th>
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
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Proyectos críticos */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
              <h2 className="font-semibold text-gray-800 text-sm flex items-center gap-2">
                <AlertTriangle size={14} className="text-red-500" /> Proyectos críticos
              </h2>
              <Link to="/proyectos" className="text-xs text-topbar font-medium flex items-center gap-1">
                Ver <ArrowRight size={12} />
              </Link>
            </div>
            <div className="divide-y divide-gray-100">
              {criticos.map((p) => (
                <div key={p.id} className="flex items-center justify-between px-5 py-3">
                  <div>
                    <p className="text-sm font-medium text-gray-800">{p.nombre}</p>
                    <p className="text-xs text-gray-400">
                      Ficha {p.ficha} · {p.detalle}
                    </p>
                  </div>
                  <Badge>{p.estado}</Badge>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Columna derecha */}
        <div className="flex flex-col gap-5">
          {/* Próximos eventos */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100">
            <div className="px-5 py-4 border-b border-gray-100">
              <h2 className="font-semibold text-gray-800 text-sm flex items-center gap-2">
                <Calendar size={14} className="text-topbar" /> Próximos Eventos
              </h2>
            </div>
            <div className="divide-y divide-gray-100">
              {eventos.map((e) => (
                <div key={e.id} className="flex items-start gap-3 px-5 py-3">
                  <div className="bg-blue-50 text-topbar rounded-md text-center px-2 py-1 leading-none flex-shrink-0">
                    <p className="text-sm font-bold">{e.dia}</p>
                    <p className="text-[10px] font-medium uppercase">{e.mes}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">{e.titulo}</p>
                    <p className="text-xs text-gray-400">{e.detalle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Actividad reciente */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100">
            <div className="px-5 py-4 border-b border-gray-100">
              <h2 className="font-semibold text-gray-800 text-sm flex items-center gap-2">
                <Activity size={14} className="text-topbar" /> Actividad Reciente
              </h2>
            </div>
            <div className="divide-y divide-gray-100">
              {actividad.map((a) => (
                <div key={a.id} className="flex items-center justify-between px-5 py-3">
                  <span className="flex items-center gap-2 text-sm text-gray-700">
                    <span className={`w-2 h-2 rounded-full flex-shrink-0 ${ACTIVIDAD_DOT[a.color]}`} />
                    {a.texto}
                  </span>
                  <span className="text-xs text-gray-400 flex-shrink-0 ml-2">{a.tiempo}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
