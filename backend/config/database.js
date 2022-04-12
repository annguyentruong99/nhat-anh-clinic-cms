module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 3008),
      database: env('DATABASE_NAME', 'production'),
      user: env('DATABASE_USERNAME', 'nhatanhadmin'),
      password: env('DATABASE_PASSWORD', 'nhatanhadmin'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
