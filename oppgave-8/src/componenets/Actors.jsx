import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getActorId } from "../lib/services/movieService";
function Actors({ actors }) {
  const navigate = useNavigate();
  const [id, setId] = useState('');

  // const fetchId = async (a) => {
  //   const data = await getActorId(a)
  //   setId(data);
  //   console.log("ID:", data)
  // }

  // const generateActors = actors.map((a) => (
  const generateActors = actors.map((a) => (
    // <Actor key={a.actor} actor={a.actor} />
    // <button key={a.actor}  onClick={() => {navigate(`${a.actor}`); fetchId(a.actor)} }>{a.actor}</button>
    <button key={a.actor}  onClick={() => navigate(`${a.actor}`) }>{a.actor}</button>
  ));

  return (
    <>
      <h1>Actors : </h1>
      {generateActors}
    </>
  );
}

export default Actors;
