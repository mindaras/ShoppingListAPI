"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
var apollo_server_1 = require("apollo-server");
var typeDefs = apollo_server_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  type ShoppingList {\n    id: ID!\n    name: String!\n    pendingItems: [ShoppingListItem]!\n    updatedAt: String\n  }\n\n  extend type Query {\n    shoppingList(id: ID!): ShoppingList!\n  }\n\n  extend type Mutation {\n    createShoppingList(name: String!): ShoppingList!\n    removeShoppingList(id: ID!): Int\n  }\n"], ["\n  type ShoppingList {\n    id: ID!\n    name: String!\n    pendingItems: [ShoppingListItem]!\n    updatedAt: String\n  }\n\n  extend type Query {\n    shoppingList(id: ID!): ShoppingList!\n  }\n\n  extend type Mutation {\n    createShoppingList(name: String!): ShoppingList!\n    removeShoppingList(id: ID!): Int\n  }\n"])));
exports.typeDefs = typeDefs;
var templateObject_1;
