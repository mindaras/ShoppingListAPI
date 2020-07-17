import * as fs from "fs";
import path from "path";
import { DocumentNode } from "graphql";
import { IResolvers } from "apollo-server";
import { scalarTypeDefs } from "@common/scalars";

const createResources = () => {
  const typeDefs: DocumentNode[] = [scalarTypeDefs];
  const resolvers: IResolvers[] = [];
  const domainPath = path.normalize("src/domain");
  const domainDir = fs.readdirSync(domainPath);

  domainDir.forEach((dir) => {
    const { typeDefs: domainTypeDefs } = require(path.join(
      "@domain",
      dir,
      "typeDefs"
    ));
    const { resolvers: domainResolvers } = require(path.join(
      "@domain",
      dir,
      "resolvers"
    ));
    typeDefs.push(domainTypeDefs);
    resolvers.push(domainResolvers);
  });

  return { typeDefs, resolvers };
};

export { createResources };
