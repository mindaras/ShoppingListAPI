"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
var Query = {
    shoppingListItems: function (_, _a, _b) {
        var listId = _a.listId, status = _a.status;
        var shoppingListItemHandlers = _b.shoppingListItemHandlers;
        return shoppingListItemHandlers.getAll(listId, status);
    },
    shoppingListItem: function (_, _a, _b) {
        var id = _a.id;
        var shoppingListItemHandlers = _b.shoppingListItemHandlers;
        return shoppingListItemHandlers.get(id);
    },
    handledShoppingListItems: function (_, _a, _b) {
        var listId = _a.listId;
        var shoppingListItemHandlers = _b.shoppingListItemHandlers;
        return shoppingListItemHandlers.getHandled(listId);
    },
};
var Mutation = {
    createShoppingListItem: function (_, _a, _b) {
        var listId = _a.listId, author = _a.author, input = _a.input;
        var shoppingListItemHandlers = _b.shoppingListItemHandlers;
        return shoppingListItemHandlers.create(listId, author, input);
    },
    updateShoppingListItem: function (_, _a, _b) {
        var id = _a.id, updatedBy = _a.updatedBy, input = _a.input;
        var shoppingListItemHandlers = _b.shoppingListItemHandlers;
        return shoppingListItemHandlers.update(id, updatedBy, input);
    },
    removeShoppingListItem: function (_, _a, _b) {
        var id = _a.id, listId = _a.listId;
        var shoppingListItemHandlers = _b.shoppingListItemHandlers;
        return shoppingListItemHandlers.remove(id, listId);
    },
};
var ShoppingListItem = {
    id: function (_a) {
        var _id = _a._id;
        return _id;
    },
};
exports.resolvers = { Query: Query, Mutation: Mutation, ShoppingListItem: ShoppingListItem };
