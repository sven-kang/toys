const user = { name: 'John', email: 'john@gmail.com' };
const bodySchema = {
  type: 'object',
  required: ['name'],
  properties: {
    name: { type: 'string' },
    email: { type: 'string' },
  }
}
const schema = { body: bodySchema };
const handler = async () => ({ status: 'success'});

async function routes (fastify, options) {
  fastify.get('/user', async (req, res) => {
    return user;
  });
  fastify.post('/user', { schema }, handler);
}

module.exports = routes;
