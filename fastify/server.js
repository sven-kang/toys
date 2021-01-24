const fastify = require('fastify')({ logger: true });

fastify.register(require('./routes/hello-world'));
fastify.register(require('./routes/ping'));

(async () => {
  try {
    await fastify.listen(3000)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
})();
