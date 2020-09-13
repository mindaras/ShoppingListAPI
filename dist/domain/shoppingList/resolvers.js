"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = exports.shoppingListResolvers = void 0;
var Query = {
    shoppingList: function (_, _a, _b) {
        var id = _a.id;
        var shoppingListHandlers = _b.shoppingListHandlers;
        return shoppingListHandlers.get(id);
    },
};
var Mutation = {
    createShoppingList: function (_, _a, _b) {
        var name = _a.name;
        var shoppingListHandlers = _b.shoppingListHandlers;
        return shoppingListHandlers.create(name);
    },
    removeShoppingList: function (_, _a, _b) {
        var id = _a.id;
        var shoppingListHandlers = _b.shoppingListHandlers;
        return shoppingListHandlers.remove(id);
    },
};
var ShoppingList = {
    id: function (_a) {
        var _id = _a._id;
        return _id;
    },
};
var resolvers = { Query: Query, Mutation: Mutation, ShoppingList: ShoppingList };
exports.shoppingListResolvers = resolvers;
exports.resolvers = resolvers;
