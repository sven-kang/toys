async function routes (fastify, options) {
  fastify.get('/utils/ping', async (req, res) => {
    return { pong: 'it works!' };
  });
}

module.exports = routes;
