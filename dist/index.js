"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_1 = require("apollo-server");
var dotenv_1 = __importDefault(require("dotenv"));
var context_1 = require("./context");
var _db_1 = require("@db");
var resources_1 = require("./resources");
dotenv_1.default.config();
var server = new apollo_server_1.ApolloServer(__assign(__assign({}, resources_1.createResources()), { context: context_1.createContext() }));
_db_1.db.connect(process.env.DB_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(function () { return server.listen(process.env.PORT); })
    .then(function (_a) {
    var url = _a.url;
    return console.log("\uD83D\uDE80  Server ready at " + url);
})
    .catch(function (e) { return console.error(e); });
