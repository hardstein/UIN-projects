import React from "react";
import Actor from "./Actor";

function Actors({ actors }) {
  const generateActors = actors.map((a) => (
    <Actor key={a.actor} actor={a.actor} />
  ));

  return (
    <>
      <h1>Actors : </h1>
      {generateActors}
    </>
  );
}

export default Actors;
