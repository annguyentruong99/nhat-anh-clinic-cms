module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '4b17ff86e88eea039eb85c6b6df12d3b'),
  },
});
