const bodySchema = {
  type: 'object',
  required: ['name'],
  properties: {
    name: { type: 'string' },
    title: { type: 'string' },
  }
}

const schema = { body: bodySchema };
const post = { name: 'John', title: 'my first post' };
const handler = async () => ({ status: 'success'});

async function routes (fastify, options) {
  fastify.get('/post', async (req, res) => {
    return post;
  });
  fastify.post('/post', { schema }, handler);
}

module.exports = routes;
