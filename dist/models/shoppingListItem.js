"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoppingListItemModel = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var schema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true,
    },
    info: String,
    author: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ["PENDING", "BOUGHT", "REMOVED"],
        default: "PENDING",
    },
    list: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "ShoppingList",
    },
    updatedBy: String,
}, { toJSON: { virtuals: true }, toObject: { virtuals: true }, timestamps: true });
var ShoppingListItemModel = mongoose_1.default.model("shoppingListItem", schema);
exports.ShoppingListItemModel = ShoppingListItemModel;
