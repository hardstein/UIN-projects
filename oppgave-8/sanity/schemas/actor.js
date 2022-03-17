const actor = {
  title: "Actor",
  name: "actor",
  type: "document",
  fields: [
    {
      title: "actor",
      name: "actor",
      type: "string",
      description: "Dette er actor.",
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      description: "Dette er den unike url-en",
      validation: (Rule) => Rule.required(),
      options: {
        source: "actor",
        maxLength: 96,
      },
    },
  ],
};

export default actor;
