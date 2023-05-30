import React from "react";
import { movies } from "../data";

function Movies() {
  return (
    <div>
    <h1>Movies Page</h1>
    <div>
      {movies.map((movie, index)=>{
        return(
          <div key={index}>
          <h3>{movie.title}</h3>
          <ul>
          {movie.genres.map((genre, index)=>{
            return <li key={index}>{genre}</li>
          })}
          </ul>
          </div>
        )
      })}
    </div>
    </div>
  )
}

export default Movies;
