import { useState, useEffect } from "react";

export const Prueba = () => {
    const [likes, setLikes] = useState(0);
    const [tema, setTemas] = useState(false);

    const darLike = () =>{
        setLikes(likes + 1);
    }
    const quitarLike = () =>{
        if(likes >0){
            setLikes(likes - 1);
        }
    }
    const cambiarTema =() =>{
        ( tema) ? setTemas(false):setTemas(true)
        console.log(tema);
        
    };
    useEffect(darLike, []);//corchetes hacen que se la funcion se utilice 1 vez

    return (
        <div>
            <h1>Likes {likes}</h1>
            <button onClick={ darLike}>Dar like</button>
            <button onClick={ quitarLike }>Quitar Like</button>
            <button onClick={cambiarTema}> Cambiar Tema</button>
        </div>
    );
};