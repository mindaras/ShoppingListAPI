import { gql } from "apollo-server";

const typeDefs = gql`
  type ShoppingList {
    id: ID!
    name: String!
    items: [ShoppingListItem]!
  }

  extend type Mutation {
    shoppingList(name: String!): ShoppingList!
  }
`;

export { typeDefs };
