import React from "react";

function Movie({ m }) {
  return (
    <div className="movie">
      <h1>{m.Title}</h1>
      <p>{m.Year}</p>
      <p>{m.Genre}</p>
      <p>{m.Rating}</p>
    </div>
  );
}

export default Movie;
