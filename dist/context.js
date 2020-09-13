"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createContext = void 0;
var handlers_1 = require("@domain/shoppingListItem/handlers");
var handlers_2 = require("@domain/shoppingList/handlers");
var createContext = function () { return ({
    shoppingListItemHandlers: handlers_1.shoppingListItemHandlers,
    shoppingListHandlers: handlers_2.shoppingListHandlers,
}); };
exports.createContext = createContext;
