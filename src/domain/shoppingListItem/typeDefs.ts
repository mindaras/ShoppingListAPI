import { gql } from "apollo-server";

const typeDefs = gql`
  enum ShoppingListItemStatus {
    PENDING
    BOUGHT
    REMOVED
  }

  type ShoppingListItem {
    id: ID!
    name: String!
    info: String
    author: String!
    status: ShoppingListItemStatus!
    updatedAt: String
    updatedBy: String
    list: ShoppingList!
  }

  input ShoppingListItemInput {
    name: String
    info: String
    status: ShoppingListItemStatus
  }

  extend type Query {
    shoppingListItems(
      listId: ID!
      status: ShoppingListItemStatus
    ): [ShoppingListItem]!
    shoppingListItem(id: ID!): ShoppingListItem!
    handledShoppingListItems(listId: ID!): [ShoppingListItem]!
  }

  extend type Mutation {
    createShoppingListItem(
      listId: ID!
      author: String!
      input: ShoppingListItemInput!
    ): ShoppingListItem!
    updateShoppingListItem(
      id: ID!
      updatedBy: String!
      input: ShoppingListItemInput!
    ): ShoppingListItem!
    removeShoppingListItem(id: ID!, listId: ID!): Int
  }
`;

export { typeDefs };
