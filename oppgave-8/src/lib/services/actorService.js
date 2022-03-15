import client from "../client";

const actorField = `
  title,
`;

export const getActors = async () => {
  const data = await client.fetch(`*[_type == "actor"]{${actorField}}`);
  return data;
};
