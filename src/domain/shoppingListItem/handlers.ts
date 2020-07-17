import { ShoppingListItemInput } from "@generated/types";
import { db } from "@db";

const create = async ({
  listId,
  name,
  info,
  author,
}: ShoppingListItemInput) => {
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

const getAll = (listId: string) => {
  return db.shoppingListItem
    .find({ list: listId } as any)
    .lean()
    .exec() as any;
};

const get = (id: string) => {
  return db.shoppingListItem.findById(id).lean().exec() as any;
};

export const shoppingListItemHandlers = { create, get, getAll };
