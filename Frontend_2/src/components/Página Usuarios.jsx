import Navbar from "../components/Navbar";

function Usuarios() {
  return (
    <>
      <Navbar />

      <h1>Usuarios</h1>

      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Rol</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>Rubiel</td>
            <td>Administrador</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Usuarios;