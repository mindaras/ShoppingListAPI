import { MutationResolvers, QueryResolvers } from "@generated/types";

const Query: QueryResolvers = {
  shoppingList: (_, { id }, { shoppingListHandlers }) => {
    return shoppingListHandlers.get(id);
  },
};

const Mutation: MutationResolvers = {
  createShoppingList: (_, { name }, { shoppingListHandlers }) => {
    return shoppingListHandlers.create(name);
  },
  removeShoppingList: (_, { id }, { shoppingListHandlers }) => {
    return shoppingListHandlers.remove(id);
  },
};

const ShoppingList = {
  id: ({ _id }: { _id: string }) => {
    return _id;
  },
};

const resolvers = { Query, Mutation, ShoppingList };

export { resolvers as shoppingListResolvers, resolvers };
