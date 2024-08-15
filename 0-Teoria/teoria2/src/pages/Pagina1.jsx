import { Link } from "react-router-dom";

export function Pagina1(){
  return (
    <div>
        <h1>Pagina 1</h1>
        <Link to={"/pagina2"}>Ir pagina 2</Link>
    </div>
  );
};