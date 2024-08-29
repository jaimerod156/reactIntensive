import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import "../../App.css";

function salir(){
  return auth.signOut();
  navigate("/");
}

export function Home(props){
  return (
    <div className="contenedor">
      <div>
        <div>
          <h1><Link to={"/login"}>Ir al login</Link></h1>
          <br />
          <h1>
            <Link to={"/signup"}>Crear cuenta</Link>
          </h1>
        </div>
      </div>
      <h2>{props.name ? `Bienvenido ${props.name}`:'Inicie sesion'}</h2>
      <button onClick={salir}>Salir</button>
    </div>
  );
};