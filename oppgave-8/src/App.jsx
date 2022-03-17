import RouterPage from "./routes/RouterPage";
import { useEffect, useState } from "react";
import { getActors, getMovies } from "./lib/services/movieService";

function App() {
  const [movies, setMovies] = useState([]);
  const [actors, setActors] = useState([]);

  // Er det best practice å bruke en useEffect?
  useEffect(() => {
    const handleMovies = async () => {
      const movies = await getMovies();
      setMovies(movies);
      console.log("movies in APP:", movies);
    };
    handleMovies();
  }, []);

  useEffect(() => {
    const handleActors = async () => {
      const actors = await getActors();
      setActors(actors);
    };
    handleActors();
  }, []);

  return (
    <div>
      <RouterPage movies={movies} actors={actors} />
    </div>
  );
}

export default App;
