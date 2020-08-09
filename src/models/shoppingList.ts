import mongoose, { Document } from "mongoose";
import { ShoppingList } from "@generated/types";

const schema = new mongoose.Schema(
  {
    name: String,
    pendingItems: [
      { type: mongoose.Schema.Types.ObjectId, ref: "ShoppingListItem" },
    ],
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true }, timestamps: true }
);

const ShoppingListModel = mongoose.model<ShoppingList & Document>(
  "shoppingList",
  schema
);

type ShoppingListModelType = typeof ShoppingListModel;

export { ShoppingListModel, ShoppingListModelType };
