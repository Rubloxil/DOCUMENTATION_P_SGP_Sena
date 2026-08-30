import { NavLink } from 'react-router-dom'
import {
  Home,
  BarChart3,
  AlertTriangle,
  FileText,
  Briefcase,
  Users,
  GraduationCap,
  Circle,
  UserCog,
  MessageSquare,
  Settings,
} from 'lucide-react'

const sections = [
  {
    title: 'GENERAL',
    items: [
      { to: '/', label: 'Inicio', icon: Home },
      { to: '/reportes', label: 'Reportes', icon: BarChart3 },
      { to: '/alertas', label: 'Alertas', icon: AlertTriangle, badge: 5 },
    ],
  },
  {
    title: 'GESTIÓN',
    items: [
      { to: '/fichas', label: 'Fichas', icon: FileText },
      { to: '/proyectos', label: 'Proyectos', icon: Briefcase },
      { to: '/instructores', label: 'Instructores', icon: UserCog },
      { to: '/aprendices', label: 'Aprendices', icon: GraduationCap },
    ],
  },
  {
    title: 'VISTAS DE ROL',
    items: [
      { to: '/vista-aprendiz', label: 'Ver Aprendiz', icon: Circle, iconColor: 'text-green-500' },
      { to: '/vista-instructor', label: 'Ver Instructor', icon: Circle, iconColor: 'text-orange-500' },
    ],
  },
  {
    title: 'SISTEMA',
    items: [
      { to: '/usuarios', label: 'Usuarios', icon: Users },
      { to: '/mensajes', label: 'Mensajes', icon: MessageSquare },
      { to: '/configuracion', label: 'Configuración', icon: Settings },
    ],
  },
]

export default function Sidebar() {
  return (
    <aside className="w-[220px] bg-sidebar text-gray-300 flex-shrink-0 min-h-screen flex flex-col">
      <div className="px-5 py-4 border-b border-white/10">
        <h1 className="text-white font-semibold text-[15px]">SENA Proyectos</h1>
      </div>

      <nav className="flex-1 py-3 overflow-y-auto">
        {sections.map((section) => (
          <div key={section.title} className="mb-3">
            <p className="px-5 text-[10px] font-semibold text-gray-500 tracking-wider mb-1">
              {section.title}
            </p>
            {section.items.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `flex items-center justify-between px-5 py-2 text-[13px] transition-colors ${
                    isActive
                      ? 'bg-sidebar-active text-white border-r-2 border-topbar'
                      : 'text-gray-300 hover:bg-sidebar-hover hover:text-white'
                  }`
                }
              >
                <span className="flex items-center gap-3">
                  <item.icon size={16} className={item.iconColor || ''} />
                  {item.label}
                </span>
                {item.badge && (
                  <span className="bg-red-500 text-white text-[10px] font-semibold rounded-full px-1.5 py-0.5 leading-none">
                    {item.badge}
                  </span>
                )}
              </NavLink>
            ))}
          </div>
        ))}
      </nav>
    </aside>
  )
}
