import { db } from "@db";
import { TypeMetaFieldDef } from "graphql";

const create = (name: string) => db.shoppingList.create({ name } as any);

const get = (id: string) => {
  return db.shoppingList.findById(id).lean().exec() as any;
};

const remove = async (id: string) => {
  await db.shoppingList.findByIdAndRemove(id, {
    useFindAndModify: false,
  } as any);
  await db.shoppingListItem.deleteMany({ list: id } as any);

  return null;
};

export const shoppingListHandlers = { create, get, remove };
