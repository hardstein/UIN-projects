const movie = {
  title: "Movie",
  name: "movie",
  type: "document",
  fields: [
    {
      title: 'Tittel',
      name: 'title',
      type: 'string',
      description: 'Dette er tittelen',
    },    {
      title: "Actor",
      name: "actor",
      type: "reference",
      to: [{ type: "actor" }],
    },
  ],
};

export default movie;
