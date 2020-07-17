import { db } from "@db";

const create = (name: string) => db.shoppingList.create({ name } as any);

const get = async (id: string) => {
  const document = await db.shoppingList.findById(id);
  return document?.toJSON();
};

export const shoppingListHandlers = { create, get };
