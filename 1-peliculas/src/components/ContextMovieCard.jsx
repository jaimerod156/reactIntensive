import { useState, useEffect } from "react";
import { get } from "../data/httpClient";
import { MovieCard } from "../components/MovieCard";

import "./ContextMovieCard.css";

export function ContextMovieCard(){
  const [movies, SetMovies] = useState([]);

  useEffect( ()=> {
    get("/discover/movie").then( (data) =>{
      SetMovies(data.results);
      console.log(data.results[0])
    });
  }, []);

  return (
    <ul className="container">
      {movies.map( (item) => (
        <MovieCard movie={item} />
      ))}
    </ul>
  );

};