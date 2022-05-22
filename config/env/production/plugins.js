module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "@strapi-community/strapi-provider-upload-google-cloud-storage",
      providerOptions: {
        bucketName: env("GCS_BUCKET_NAME"),
        publicFiles: true,
        uniform: true,
        basePath: "",
      },
    },
  },
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
        post: {
          field: "slug",
          references: "title",
        },
      },
    },
  },
});
