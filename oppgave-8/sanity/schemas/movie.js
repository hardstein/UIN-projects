const movie = {
  title: "Movie",
  name: "movie",
  type: "document",
  fields: [
    {
      title: "Tittel",
      name: "title",
      type: "string",
      description: "Dette er tittelen",
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      description: "Dette er den unike url-en",
      validation: (Rule) => Rule.required(),
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      title: "Actor",
      name: "actor",
      type: "reference",
      to: [{ type: "actor" }],
    },
  ],
};

export default movie;
