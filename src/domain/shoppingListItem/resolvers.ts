import {
  QueryResolvers,
  MutationResolvers,
  ShoppingListItemStatus,
} from "@generated/types";

const Query: QueryResolvers = {
  shoppingListItems: (_, { listId, status }, { shoppingListItemHandlers }) => {
    return shoppingListItemHandlers.getAll(
      listId,
      status as ShoppingListItemStatus
    );
  },
  shoppingListItem: (_, { id }, { shoppingListItemHandlers }) => {
    return shoppingListItemHandlers.get(id);
  },
  handledShoppingListItems: (_, { listId }, { shoppingListItemHandlers }) => {
    return shoppingListItemHandlers.getHandled(listId);
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
  removeShoppingListItem: (_, { id, listId, updatedBy }, { shoppingListItemHandlers }) => {
    return shoppingListItemHandlers.remove(id, listId, updatedBy);
  },
};

const ShoppingListItem = {
  id: ({ _id }: { _id: string }) => {
    return _id;
  },
};

export const resolvers = { Query, Mutation, ShoppingListItem };
