import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <h2>SENA Proyectos</h2>

      <input
        type="text"
        placeholder="Buscar..."
        className="busqueda"
      />

      <div>
        <Link to="/admin">Inicio</Link>
        <Link to="/usuarios">Usuarios</Link>
        <Link to="/fichas">Fichas</Link>
        <Link to="/proyectos">Proyectos</Link>
      </div>

    </nav>
  );
}

export default Navbar;