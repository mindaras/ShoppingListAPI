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
      $push: { pendingItems: document.id },
    }
  );
  return document.toJSON();
};

const getAll = (listId: string, status: ShoppingListItemStatus) => {
  const props = { list: listId, status } as any;

  if (status) props.status = status;

  return db.shoppingListItem.find(props).lean().exec() as any;
};

const get = (id: string) => {
  return db.shoppingListItem.findById(id).lean().exec() as any;
};

const getHandled = (listId: string) => {
  return db.shoppingListItem
    .find({
      list: listId,
      status: {
        $in: [ShoppingListItemStatus.Bought, ShoppingListItemStatus.Removed],
      },
    } as any)
    .lean()
    .exec() as any;
};

const update = async (
  id: string,
  updatedBy: string,
  { name, info, status }: ShoppingListItemInput
) => {
  const props = { updatedBy } as any;

  if (name) props.name = name;
  if (info) props.info = info;
  if (status) props.status = status;

  const document = await db.shoppingListItem.findByIdAndUpdate(id, props, {
    useFindAndModify: false,
    new: true,
  });

  if (status === ShoppingListItemStatus.Bought) {
    await db.shoppingList.updateOne(
      { _id: document?.list },
      {
        $pull: { pendingItems: id as any },
      }
    );
  }

  return document?.toJSON();
};

const remove = async (id: string, listId: string) => {
  await db.shoppingListItem.updateOne(
    { _id: id },
    {
      status: ShoppingListItemStatus.Removed,
    }
  );
  await db.shoppingList.updateOne(
    { _id: listId },
    {
      $pull: { pendingItems: id as any },
    }
  );
  return null;
};

export const shoppingListItemHandlers = {
  create,
  getAll,
  get,
  getHandled,
  update,
  remove,
};
