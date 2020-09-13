"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createResources = void 0;
var fs = __importStar(require("fs"));
var path_1 = __importDefault(require("path"));
var scalars_1 = require("@common/scalars");
var createResources = function () {
    var typeDefs = [scalars_1.scalarTypeDefs];
    var resolvers = [];
    var domainPath = path_1.default.normalize("src/domain");
    var domainDir = fs.readdirSync(domainPath);
    domainDir.forEach(function (dir) {
        var domainTypeDefs = require(path_1.default.join("@domain", dir, "typeDefs")).typeDefs;
        var domainResolvers = require(path_1.default.join("@domain", dir, "resolvers")).resolvers;
        typeDefs.push(domainTypeDefs);
        resolvers.push(domainResolvers);
    });
    return { typeDefs: typeDefs, resolvers: resolvers };
};
exports.createResources = createResources;
