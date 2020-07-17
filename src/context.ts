import { shoppingListItemHandlers } from "@domain/shoppingListItem/handlers";
import { shoppingListHandlers } from "@domain/shoppingList/handlers";

const createContext = () => ({
  shoppingListItemHandlers,
  shoppingListHandlers,
});

type Context = ReturnType<typeof createContext>;

export { createContext, Context };
