import React from "react";
import { movies } from "../data";

function Movies() {
  return (
    <div>
    <h1>Movies Page</h1>
    <div>
      {movies.map((movie, index)=>{
        return(
          <div>
          <h3>{movie.title}</h3>
          <ul>
          {movie.genres.map((genre, index)=>{
            return <li key={index}>{genre}</li>
          })}
          </ul>
          </div>
        )
      })}
      <ul>
        <li>{movies.genres}</li>
      </ul>
    </div>
    </div>
  )
}

export default Movies;
