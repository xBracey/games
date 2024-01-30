import fastify from "fastify";
import { db } from "./database";

const server = fastify();

server.get("/", async (request, reply) => {
  return "Hello there! 👋";
});

server.listen(
  {
    host: "0.0.0.0",
    port: 8080,
  },
  (err, address) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log(`Started server at ${address}`);
  }
);
