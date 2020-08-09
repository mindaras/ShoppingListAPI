import { gql } from "apollo-server";

const typeDefs = gql`
  type ShoppingList {
    id: ID!
    name: String!
    pendingItems: [ShoppingListItem]!
    updatedAt: String
  }

  extend type Query {
    shoppingList(id: ID!): ShoppingList!
  }

  extend type Mutation {
    createShoppingList(name: String!): ShoppingList!
    removeShoppingList(id: ID!): Int
  }
`;

export { typeDefs };
