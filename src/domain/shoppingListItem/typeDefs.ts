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
    id: ID
    listId: ID!
    name: String!
    info: String
    author: String!
    status: ShoppingListItemStatus
    updatedBy: String
  }

  extend type Query {
    shoppingListItems(listId: ID!): [ShoppingListItem]!
    shoppingListItem(id: ID!): ShoppingListItem!
  }

  extend type Mutation {
    shoppingListItem(input: ShoppingListItemInput!): ShoppingListItem!
  }
`;

export { typeDefs };
