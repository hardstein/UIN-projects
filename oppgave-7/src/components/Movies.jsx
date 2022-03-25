import React from "react";
import Movie from "./Movie";

function Movies({movies}) {

    const generateMovies = movies.map((m, i) => (
        <Movie key={i} m={m} />
      ));

  return (
    <div className="grid-3x3">
        {generateMovies}
        {/* {JSON.stringify(movies)} */}
    </div>
  );
}

export default Movies;
