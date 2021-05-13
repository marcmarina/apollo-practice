import axios from "axios";
import * as z from "zod";
import { Resolvers } from "./codegen-types";

const todoSchema = z.object({
  userId: z.number(),
  title: z.string(),
});

export const resolvers: Resolvers = {
  Query: {
    async user(_, { id }) {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/todos/${id}`
      );

      return todoSchema.parse(data);
    },
  },
};
