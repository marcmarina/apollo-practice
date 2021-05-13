import express from "express";
import { createGraphQLServer } from "./graphql/create-graphql-server";

const app = express();
const port = process.env.PORT || 8080;

const apolloServer = createGraphQLServer();
apolloServer.applyMiddleware({ app });

const server = app.listen(port, () => {
  console.log(
    `🚀 Server ready at http://localhost:${port}${apolloServer.graphqlPath}`
  );
});

process.on("SIGTERM", () => {
  server.close();

  process.exit(0);
});
