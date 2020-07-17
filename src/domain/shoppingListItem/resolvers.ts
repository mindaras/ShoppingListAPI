import { QueryResolvers, MutationResolvers } from "@generated/types";

const Query: QueryResolvers = {
  shoppingListItems: (_, { listId }, { shoppingListItemHandlers }) => {
    return shoppingListItemHandlers.getAll(listId);
  },
  shoppingListItem: (_, { id }, { shoppingListItemHandlers }) => {
    return shoppingListItemHandlers.get(id);
  },
};

const Mutation: MutationResolvers = {
  shoppingListItem: (_, { input }, { shoppingListItemHandlers }) => {
    return shoppingListItemHandlers.create(input);
  },
};

const ShoppingListItem = {
  id: ({ _id }: { _id: string }) => {
    return _id;
  },
};

export const resolvers = { Query, Mutation, ShoppingListItem };
