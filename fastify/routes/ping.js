async function routes (fastify, options) {
  fastify.get('/utils/ping', async (req, res) => {
    req.log.info('Some info about this req');
    return { pong: 'it works!' };
  });
}

module.exports = routes;
