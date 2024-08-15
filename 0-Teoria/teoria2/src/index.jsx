import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

//import { Texto } from './components/Texto';
import { Card } from './components/Card';

// import { Contenedor } from './components/contenedor';
//import { Prueba } from './components/Prueba';
//import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Texto /> */}
    <Card />
    {/* <Contenedor /> */}
    {/* <Prueba /> */}
    {/* <App /> */}
  </React.StrictMode>
);