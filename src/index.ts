import { ApolloServer } from "apollo-server";
import dotenv from "dotenv";
import { createContext } from "./context";
import { db } from "@db";
import { createResources } from "./resources";

dotenv.config();

const server = new ApolloServer({
  ...createResources(),
  context: createContext(),
});

db.connect(process.env.DB_CONNECTION_STRING as string, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => server.listen(process.env.PORT))
  .then(({ url }) => console.log(`🚀  Server ready at ${url}`))
  .catch((e) => console.error(e));
