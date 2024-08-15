// props: pasando parametros o datos a un componente
// se pueden pasar en la forma de um objeto
// const Usuarios = (props) =>{
//     console.log(props);   
//     return (
//         <div>
//             <h1>Mi nombre es {props.nombre}</h1>
//             <h1>🥰Tengo {props.edad} años</h1>
//             <h1>Vivo en  {props.direccion.calle}</h1>
//             <h1>Ciudad: {props.direccion.ciudad}</h1>
//             <h1>Pais: {props.direccion.pais}</h1>

//         </div>

//     )
// }

 const Usuarios = ( {nombre, edad, direccion} ) =>{
     return (
         <div>
             <h1>Mi nombre es {nombre}</h1>
             <h1>🥰Tengo {edad} años</h1>
             <h1>Vivo en  {direccion.calle}</h1>
            <h1>Ciudad: {direccion.ciudad}</h1>
             <h1>Pais: {direccion.pais}</h1>

         </div>

     )
 }
export default Usuarios;