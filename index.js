"use strict";

const fp = require("fastify-plugin");

function fastifyAI(fastify, options, done) {
  done();
}

module.exports = fp(fastifyAI, {
  fastify: "5.x",
  name: "fastify-ai",
});

module.exports.default = fastifyAI;
module.exports.fastifyAI = fastifyAI;
