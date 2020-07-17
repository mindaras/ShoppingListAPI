import { MutationResolvers } from "@generated/types";

const Mutation: MutationResolvers = {
  shoppingList: (_, { name }, { shoppingListHandlers }) => {
    return shoppingListHandlers.create(name);
  },
};

const resolvers = { Mutation };

export { resolvers as shoppingListResolvers, resolvers };
