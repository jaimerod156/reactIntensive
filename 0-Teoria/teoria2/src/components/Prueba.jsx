import { useState, useEffect } from "react";

export const Prueba = () => {
    const [Likes, setLikes] = useState(0);
    const [Tema, setTemas] = useState(false);

    const darLike = () =>{
        setLikes(Likes + 1);
    }
    const quitarLike = () =>{
        if(Likes >0){
            setLikes(Likes - 1);
        }
    }
    const cambiarTema =() =>{
        ( Tema) ? setTemas(false):setTemas(true)
        console.log(Tema);
        
    };
    useEffect(darLike, []);

    return (
        <div>
            <h1>Likes {Likes}</h1>
            <button onClick={ darLike}>Dar like</button>
            <button onClick={ quitarLike }>Quitar Like</button>
            <button onClick={cambiarTema}> Cambiar Tema</button>
        </div>
    );
};