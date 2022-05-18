module.exports = ({ env }) => [
  "strapi::errors",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "http:"],
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            `https://storage.googleapis.com/${env("GCS_BUCKET_NAME")}`,
          ],
          "media-src": [
            "'self'",
            "data:",
            "blob:",
            `https://storage.googleapis.com/${env("GCS_BUCKET_NAME")}`,
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::favicon",
  "strapi::public",
];
