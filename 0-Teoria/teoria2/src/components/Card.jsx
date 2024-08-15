import './card.css';

const pokemon = [
  {
    id:1,
    nombre:"pikachu",
    imagen:"https://i.ibb.co/kK74TWM/Pikachu.png"
  },
  {
    id:2,
    nombre:"charizard",
    imagen:"https://i.ibb.co/f11FCcZ/200px-Charizard.png"
  }

]
export const Card = () => {
  return (
    
      pokemon.map((item, index) =>{
        return (
          <div key={ index } className='card'>
            <h1>Nombre: {item.nombre}</h1>
            <img className='image' src={item.imagen} alt="" />
          </div>
        )
      })
    
  )
};