import { Resolvers } from "./codegen-types";

export const resolvers: Resolvers = {
  Query: {
    async user() {
      return {
        email: "john@doe.com",
        name: "John Doe",
        password: "123456",
      };
    },
  },
};
