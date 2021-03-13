require('dotenv').config();
const keys = new Set([process.env.SECRET]);
const isProduction = process.env.NODE_ENV === 'production' || false;
const defaultPort = 3000;

const fastify = require('fastify')({ logger: {prettyPrint: !isProduction} });

fastify.register(async function publicContext (childServer) {
  childServer.register(require('./routes/hello-world'));
  childServer.register(require('./routes/ping'));
});

fastify.register(async function authenticatedContext (childServer) {
  childServer.decorate('env', { ...process.env });
  childServer.register(require('fastify-bearer-auth'), {keys});
  childServer.register(require('./routes/post'));
  childServer.register(require('./routes/user'));
});

(async () => {
  try {
    await fastify.listen(process.env.PORT || defaultPort);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
})();
