"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoppingListModel = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var schema = new mongoose_1.default.Schema({
    name: String,
    pendingItems: [
        { type: mongoose_1.default.Schema.Types.ObjectId, ref: "ShoppingListItem" },
    ],
}, { toJSON: { virtuals: true }, toObject: { virtuals: true }, timestamps: true });
var ShoppingListModel = mongoose_1.default.model("shoppingList", schema);
exports.ShoppingListModel = ShoppingListModel;
