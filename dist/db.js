"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var shoppingListItem_1 = require("@models/shoppingListItem");
var shoppingList_1 = require("@models/shoppingList");
var db = {
    connect: mongoose_1.default.connect,
    shoppingListItem: shoppingListItem_1.ShoppingListItemModel,
    shoppingList: shoppingList_1.ShoppingListModel,
};
exports.db = db;
