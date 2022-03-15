import React from "react";
import Movie from "./Movie";

function Movies({ movies }) {
  const getMovies = movies.map((m) => (
    <Movie key={m.title} title={m.title} actor={m.actor} />
  ));
  return (
    <div>
      <h1>Movies : </h1>
      {getMovies}
    </div>
  );
}

export default Movies;
