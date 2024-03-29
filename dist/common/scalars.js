"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.scalarTypeDefs = void 0;
var apollo_server_1 = require("apollo-server");
var scalarTypeDefs = apollo_server_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  type Query\n  type Mutation\n"], ["\n  type Query\n  type Mutation\n"])));
exports.scalarTypeDefs = scalarTypeDefs;
var templateObject_1;
