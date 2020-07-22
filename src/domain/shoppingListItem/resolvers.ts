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
  createShoppingListItem: (
    _,
    { listId, author, input },
    { shoppingListItemHandlers }
  ) => {
    return shoppingListItemHandlers.create(listId, author, input);
  },
  updateShoppingListItem: (
    _,
    { id, updatedBy, input },
    { shoppingListItemHandlers }
  ) => {
    return shoppingListItemHandlers.update(id, updatedBy, input);
  },
  removeShoppingListItem: (_, { id, listId }, { shoppingListItemHandlers }) => {
    return shoppingListItemHandlers.remove(id, listId);
  },
};

const ShoppingListItem = {
  id: ({ _id }: { _id: string }) => {
    return _id;
  },
};

export const resolvers = { Query, Mutation, ShoppingListItem };
