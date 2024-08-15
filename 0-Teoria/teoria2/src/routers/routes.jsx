import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Pagina1} from "../pages/Pagina1";
import {Pagina2} from "../pages/Pagina2";

export function MyRoutes() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Pagina1/>} />
        <Route path="/pagina2" element={<Pagina2/>}/>
    </Routes>
    </BrowserRouter>
  );
};