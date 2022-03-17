import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getActor, getMoviesByActor } from "../lib/services/movieService";
function Actor() {
  const [isMounted, setMounted] = useState(true);
  const [actor, setActor] = useState([]);
  const [movies, setMovies] = useState([]);
  const { name } = useParams();
  const [actorId, setActorId] = useState("");

  useEffect(() => {
    const fetchActor = async () => {
      // Usikker på om det er nødvendig her
      if (isMounted) {
        const data = await getActor(name);
        console.log("DATA FRA ACTOR: ", data);
        setActor(data);
        setActorId(actor._id);
      }
    };
    fetchActor();

    const fetchActorMovies = async () => {
      // Legg merke til !, sørger for at det blir ventet på funksjonen over
      if (!isMounted) {
        // const data = await getMoviesByActor("80a31165-013d-4d56-b6ef-f3aad5321759");
        const data = await getMoviesByActor(actorId);
        console.log("fetchActorMovies FRA ACTOR: ", data);
        setMovies(data);
      }
    };
    fetchActorMovies();

    return () => {
      setMounted(false);
    };
  }, [name, actorId]);

  const generateMovies = movies.map((m) => <h3 key={m.title}>+{m.title}</h3>);

  return (
    <div>
      <h1>NAVN: {actor.actor}</h1>
      <p>Her er slugget: {actor.slug}</p>
      <p>ID: {actor._id}</p>
      <h2>{actor.actor} har vært med på følgende filmer: </h2>
      {generateMovies}
    </div>
  );
}

export default Actor;
