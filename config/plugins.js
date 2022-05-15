module.exports = ({ env }) => ({
  slugify: {
    enabled: true,
    config: {
      contentTypes: {
        service: {
          field: "slug",
          references: "name",
        },
        doctor: {
          field: "slug",
          references: "name",
        },
      },
    },
  },
});
