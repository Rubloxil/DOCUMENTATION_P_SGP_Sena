import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">

      <Link to="/admin">Dashboard</Link>

      <Link to="/usuarios">Usuarios</Link>

      <Link to="/aprendices">Aprendices</Link>

      <Link to="/instructores">Instructores</Link>

      <Link to="/fichas">Fichas</Link>

      <Link to="/proyectos">Proyectos</Link>

      <Link to="/reportes">Reportes</Link>

    </div>
  );
}

export default Sidebar;