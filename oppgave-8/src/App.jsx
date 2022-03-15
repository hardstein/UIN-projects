import RouterPage from "./routes/RouterPage";
import { useEffect, useState } from "react";
import { getActors, getMovies } from "./lib/services/movieService";
import Movies from "./componenets/Movies";

function App() {
  const [movies, setMovies] = useState([]);
  const [actors, setActors] = useState([]);

  useEffect(() => {
    const handleMovies = async () => {
      const movies = await getMovies();
      setMovies(movies);
      console.log(movies);
    };
    handleMovies();
  }, []);

  useEffect(() => {
    const handleActors = async () => {
      const actors = await getActors();
      setActors(actors);
      console.log(actors);
    };
    handleActors();
  }, []);

  return (
    <div>
      <RouterPage movies={movies} actors={actors} />
      {/* <Movies movies={movies} /> */}
    </div>
  );
}

export default App;
