import { db } from "@db";

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

const removeOutdated = async (timestamp: string) => {
  const lists = await db.shoppingList
    .find({ updatedAt: { $lte: timestamp } })
    .lean()
    .exec();

  await db.shoppingListItem.deleteMany({
    list: { $in: lists as any },
  });

  await db.shoppingList.deleteMany({ updatedAt: { $lte: timestamp } });

  return null;
};

export const shoppingListHandlers = { create, get, remove, removeOutdated };
