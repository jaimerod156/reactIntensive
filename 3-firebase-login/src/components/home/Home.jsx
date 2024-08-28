import { Link } from "react-router-dom";

export function Home(props){
  return (
    <div>
      <div>
        <div>
          <h1><Link to={"/login"}>Ir al login</Link></h1>
          <br />
          <h1>
            <Link to={"/signup"}>Crear cuenta</Link>
          </h1>
        </div>
      </div>
      <h2>{props.nombre ? `Bienvenido ${props.nombre}`:'Inicie sesion'}</h2>
    </div>
  );
};