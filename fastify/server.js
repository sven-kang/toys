require('dotenv').config();
const fastify = require('fastify')({ logger: true });

const keys = new Set([process.env.SECRET]);

fastify.register(require('./utils/add-numbers'));

fastify.register(async function publicContext (childServer) {
  fastify.register(require('./routes/hello-world'));
  fastify.register(require('./routes/ping'));
});

fastify.register(async function authenticatedContext (childServer) {
  fastify.register(require('fastify-bearer-auth'), {keys});
  fastify.register(require('./routes/post'));
});

(async () => {
  try {
    await fastify.listen(process.env.PORT);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
})();
