module.exports = ({ env }) => ({
  slugify: {
    enabled: true,
    config: {
      contentTypes: {
        article: {
          field: "Slug",
          references: "Title",
        },
        page: {
          field: "Slug",
          references: "Title",
        },
      },
    },
  },
});
