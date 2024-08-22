import { useState, useEffect } from "react";
import { get } from "../data/httpClient";
import { useParams } from "react-router-dom";
import { getMovieImg } from "../utils/getMovieImg";
import { Link } from "react-router-dom";

import '../index.css';
import "./MovieDetails.css";

export function MovieDetails(){
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const [generos, setGeneros] = useState([]);
  useEffect(() => {
    get("/movie/" + movieId).then((data) => {
      setMovie(data);
      setGeneros(data.genres[0]);
      
    });
  }, [movieId]);
  
    const imageUrl = getMovieImg(movie.poster_path,500);
    
  return (
    <div className="detailContainer">
        <img className="col movieImage" src={imageUrl} alt={movie.title}/>
        <div className="col movieDetails">
          <p className="title"><strong>Título: </strong>{movie.title}</p>
          <p><strong>Genero: </strong>{generos.name}</p>
          <p><strong>Descripción: </strong>{movie.overview}</p>
          <div className="btn">
          <Link to={"/"}>Volver a inicio
          </Link>
          </div>
        </div>

    </div>
    
  );
};