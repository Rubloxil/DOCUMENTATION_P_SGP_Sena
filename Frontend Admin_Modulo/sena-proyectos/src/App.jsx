import { Routes, Route } from 'react-router-dom'
import AdminLayout from './layouts/AdminLayout'
import Inicio from './pages/Inicio'
import Fichas from './pages/Fichas'
import Proyectos from './pages/Proyectos'
import Instructores from './pages/Instructores'
import Aprendices from './pages/Aprendices'
import Reportes from './pages/Reportes'
import Alertas from './pages/Alertas'
import Usuarios from './pages/Usuarios'
import Mensajes from './pages/Mensajes'
import Configuracion from './pages/Configuracion'
import VistaAprendiz from './pages/VistaAprendiz'
import VistaInstructor from './pages/VistaInstructor'

export default function App() {
  return (
    <Routes>
      <Route element={<AdminLayout />}>
        <Route path="/" element={<Inicio />} />
        <Route path="/fichas" element={<Fichas />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/instructores" element={<Instructores />} />
        <Route path="/aprendices" element={<Aprendices />} />
        <Route path="/reportes" element={<Reportes />} />
        <Route path="/alertas" element={<Alertas />} />
        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/mensajes" element={<Mensajes />} />
        <Route path="/configuracion" element={<Configuracion />} />
        <Route path="/vista-aprendiz" element={<VistaAprendiz />} />
        <Route path="/vista-instructor" element={<VistaInstructor />} />
        <Route path="*" element={<Inicio />} />
      </Route>
    </Routes>
  )
}
