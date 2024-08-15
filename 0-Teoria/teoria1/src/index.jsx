import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import { App } from './App';
//import { Coffee } from './components/Coffee';
//import Objetos from './components/Objetos';
//import Usuarios from './components/Usuarios';
import { Card } from './components/Card';  

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
     {/* <Coffee /> */}
    {/* <Objetos /> */}
     {/* <Usuarios nombre="Frank3"
    edad={21} direccion={ {calle:"calle San Martin 162",ciudad:"Santiago", pais:"Chile"} }/> */}

    <Card estado={false}/>
  </React.StrictMode>
);
