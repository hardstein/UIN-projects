import client from "../client";

const movieFields = `
  title,
  'actor': actor->actor,
  slug,
`;

const actorsField = `
  actor,
  slug
`;

const actorField = `
  actor,
  "slug": slug.current,
  _id,
`;

const moviesByActor = `
  title,
`;

export const getActorId = async (name) => {
  const data = await client.fetch(
    `*[_type == "actor" && actor == $name ]{_id}`,
    { name }
  );
  return data;
};

export const getMoviesByActor = async (id) => {
  // const data = await client.fetch(`*[_type == "movie" && actor._ref == "0d217b06-221d-4d82-8082-e32f3eee139e"] {${moviesByActor}}`,
  const data = await client.fetch(
    `*[_type == "movie" && actor._ref == $id] {${moviesByActor}}`,
    { id }
  );
  return data;
};

export const getActors = async () => {
  const data = await client.fetch(`*[_type == "actor"]{${actorsField}}`);
  return data;
};

export const getActor = async (name) => {
  const data = await client.fetch(
    `*[_type == "actor" && actor == $name]{${actorField}}`,
    { name }
  );
  // For å returnere den første som stemmer mer query
  return data?.[0];
};

export const getMovies = async () => {
  const data = await client.fetch(`*[_type == "movie"]{${movieFields}}`);
  return data;
};
