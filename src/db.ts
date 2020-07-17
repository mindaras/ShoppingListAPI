import mongoose from "mongoose";
import { ShoppingListItemModel } from "@models/shoppingListItem";
import { ShoppingListModel } from "@models/shoppingList";

const db = {
  connect: mongoose.connect,
  shoppingListItem: ShoppingListItemModel,
  shoppingList: ShoppingListModel,
};

export { db };
