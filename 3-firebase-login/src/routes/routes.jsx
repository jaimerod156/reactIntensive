import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "../components/login/Login";
import { Home } from "../components/home/Home";
import { Signup } from "../components/signUp/Signup";

export function MyRoutes(){
    return (
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/signup" element={<Signup/>} />
      </Routes>
      </BrowserRouter>
  
    );
  };