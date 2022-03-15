import client from "../client";

const movieFields = `
  title,
  'actor': actor->actor,
`;

const actorField = `
  actor,
`;

export const getActors = async () => {
  const data = await client.fetch(`*[_type == "actor"]{${actorField}}`);
  return data;
};

export const getMovies = async () => {
  const data = await client.fetch(`*[_type == "movie"]{${movieFields}}`);
  return data;
};
