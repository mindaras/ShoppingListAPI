import {
  ShoppingListItemInput,
  ShoppingListItemStatus,
} from "@generated/types";
import { db } from "@db";

const create = async (
  listId: string,
  author: string,
  { name, info }: ShoppingListItemInput
) => {
  const document = await db.shoppingListItem.create({
    name,
    info,
    author,
    list: listId,
  } as any);
  await db.shoppingList.updateOne(
    { _id: listId },
    {
      $push: { items: document.id },
    }
  );
  return document.toJSON();
};

const getAll = (listId: string, status: ShoppingListItemStatus) => {
  return db.shoppingListItem
    .find({ list: listId, status } as any)
    .lean()
    .exec() as any;
};

const get = (id: string) => {
  return db.shoppingListItem.findById(id).lean().exec() as any;
};

const update = async (
  id: string,
  updatedBy: string,
  { name, info, status }: ShoppingListItemInput
) => {
  const document = await db.shoppingListItem.findByIdAndUpdate(
    id,
    {
      name,
      info,
      status: status || ShoppingListItemStatus.Pending,
      updatedBy,
    },
    { useFindAndModify: false, new: true }
  );
  return document?.toJSON();
};

const remove = async (id: string, listId: string) => {
  await db.shoppingListItem.deleteOne({ _id: id });
  await db.shoppingList.updateOne(
    { _id: listId },
    {
      $pull: { items: id as any },
    }
  );
  return null;
};

export const shoppingListItemHandlers = { create, get, getAll, update, remove };
