import { Resolvers } from "./codegen-types";

export const resolvers: Resolvers = {
  Query: {
    user() {
      return {
        age: 22,
        email: "john@doe.com",
        name: "John Doe",
      };
    },
  },
};
