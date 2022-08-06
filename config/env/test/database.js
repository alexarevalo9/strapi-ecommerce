module.exports = () => ({
  connection: {
    client: 'sqlite',
    connection: {
      filename: './.tmp/strapi.db',
    },
    useNullAsDefault: true,
    debug: false,
  },
});