import { loadSchemaSync } from "@graphql-tools/load";
import { ApolloServer } from "apollo-server-express";
import { join } from "path";
import { GraphQLFileLoader, addResolversToSchema } from "graphql-tools";

export function createGraphQLServer() {
  const schema = loadSchemaSync(
    join(__dirname, "../../graphql-schema/*.graphql"),
    {
      loaders: [new GraphQLFileLoader()],
    }
  );

  return new ApolloServer({
    schema: addResolversToSchema({
      schema,
      resolvers: {},
    }),
  });
}
