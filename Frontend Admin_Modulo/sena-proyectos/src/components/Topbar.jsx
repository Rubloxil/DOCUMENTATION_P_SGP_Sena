import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Inicio' },
  { to: '/fichas', label: 'Fichas' },
  { to: '/usuarios', label: 'Usuarios' },
  { to: '/reportes', label: 'Reportes' },
  { to: '/vista-aprendiz', label: 'Vista Aprendiz' },
  { to: '/vista-instructor', label: 'Vista Instructor' },
]

export default function Topbar() {
  return (
    <header className="h-14 bg-topbar text-white flex items-center justify-between px-6 flex-shrink-0">
      <span className="font-semibold text-[15px]">SENA Proyectos</span>

      <nav className="hidden md:flex items-center gap-6 text-sm">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `transition-opacity ${isActive ? 'font-semibold underline underline-offset-4' : 'opacity-90 hover:opacity-100'}`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>

      <span className="bg-white/15 text-white text-xs font-medium px-3 py-1.5 rounded-md">
        Administrador
      </span>
    </header>
  )
}
