module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'secret'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', 'secret'),
  },
});
