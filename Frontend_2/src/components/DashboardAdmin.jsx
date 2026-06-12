import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function DashboardAdmin() {
  return (
    <>
      <Navbar />

      <div style={{display:"flex"}}>

        <Sidebar />

        <div style={{padding:"20px"}}>

          <h1>Dashboard Administrador</h1>

          <div className="cards">

            <div className="card">
              <h3>Usuarios</h3>
              <p>120</p>
            </div>

            <div className="card">
              <h3>Aprendices</h3>
              <p>250</p>
            </div>

            <div className="card">
              <h3>Proyectos</h3>
              <p>35</p>
            </div>

          </div>

        </div>

      </div>
    </>
  );
}

export default DashboardAdmin;