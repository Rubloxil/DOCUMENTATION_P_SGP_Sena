import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const ingresar = () =>{
    navigate("/admin");
  }

  return (

    <div className="login">

      <h1>SENA PROYECTOS</h1>

      <input type="email" placeholder="Correo" />

      <input type="password" placeholder="Contraseña" />

      <button onClick={ingresar}>
        Ingresar
      </button>

    </div>

  );
}

export default Login;