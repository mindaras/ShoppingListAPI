import mongoose, { Document } from "mongoose";
import { ShoppingListItem } from "@generated/types";

const schema = new mongoose.Schema(
  {
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
      type: mongoose.Schema.Types.ObjectId,
      ref: "ShoppingList",
    },
    updatedBy: String,
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

const ShoppingListItemModel = mongoose.model<ShoppingListItem & Document>(
  "shoppingListItem",
  schema
);

type ShoppingListItemModelType = typeof ShoppingListItemModel;

export { ShoppingListItemModel, ShoppingListItemModelType };
