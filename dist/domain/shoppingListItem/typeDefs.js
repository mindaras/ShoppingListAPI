"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
var apollo_server_1 = require("apollo-server");
var typeDefs = apollo_server_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  enum ShoppingListItemStatus {\n    PENDING\n    BOUGHT\n    REMOVED\n  }\n\n  type ShoppingListItem {\n    id: ID!\n    name: String!\n    info: String\n    author: String!\n    status: ShoppingListItemStatus!\n    updatedAt: String\n    updatedBy: String\n    list: ShoppingList!\n  }\n\n  input ShoppingListItemInput {\n    name: String\n    info: String\n    status: ShoppingListItemStatus\n  }\n\n  extend type Query {\n    shoppingListItems(\n      listId: ID!\n      status: ShoppingListItemStatus\n    ): [ShoppingListItem]!\n    shoppingListItem(id: ID!): ShoppingListItem!\n    handledShoppingListItems(listId: ID!): [ShoppingListItem]!\n  }\n\n  extend type Mutation {\n    createShoppingListItem(\n      listId: ID!\n      author: String!\n      input: ShoppingListItemInput!\n    ): ShoppingListItem!\n    updateShoppingListItem(\n      id: ID!\n      updatedBy: String!\n      input: ShoppingListItemInput!\n    ): ShoppingListItem!\n    removeShoppingListItem(id: ID!, listId: ID! updatedBy: String!): Int\n  }\n"], ["\n  enum ShoppingListItemStatus {\n    PENDING\n    BOUGHT\n    REMOVED\n  }\n\n  type ShoppingListItem {\n    id: ID!\n    name: String!\n    info: String\n    author: String!\n    status: ShoppingListItemStatus!\n    updatedAt: String\n    updatedBy: String\n    list: ShoppingList!\n  }\n\n  input ShoppingListItemInput {\n    name: String\n    info: String\n    status: ShoppingListItemStatus\n  }\n\n  extend type Query {\n    shoppingListItems(\n      listId: ID!\n      status: ShoppingListItemStatus\n    ): [ShoppingListItem]!\n    shoppingListItem(id: ID!): ShoppingListItem!\n    handledShoppingListItems(listId: ID!): [ShoppingListItem]!\n  }\n\n  extend type Mutation {\n    createShoppingListItem(\n      listId: ID!\n      author: String!\n      input: ShoppingListItemInput!\n    ): ShoppingListItem!\n    updateShoppingListItem(\n      id: ID!\n      updatedBy: String!\n      input: ShoppingListItemInput!\n    ): ShoppingListItem!\n    removeShoppingListItem(id: ID!, listId: ID! updatedBy: String!): Int\n  }\n"])));
exports.typeDefs = typeDefs;
var templateObject_1;
