//objeto se declara en el interior del componente
const Objetos = () =>{
    const datos ={
        nombre: 'Frank',
        edad: 22,
    }
    return (
        <div>
            <h1>Nombre: {datos.nombre}</h1>
             <h1>Edad: {datos.edad} años</h1>
        </div>
    )
}

export default Objetos;