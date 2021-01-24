async function routes (fastify, options) {
  fastify.get('/post', async (req, res) => {
    return { post: 'my first post' };
  });
}

module.exports = routes;
