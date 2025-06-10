"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const standalone_1 = require("@trpc/server/adapters/standalone");
const trpc_1 = require("./trpc");
const users_json_1 = require("./users.json");
const appRouter = (0, trpc_1.router)({
    userList: trpc_1.publicProcedure.query(() => __awaiter(void 0, void 0, void 0, function* () {
        console.log('userList procedure called.');
        const usersList = users_json_1.users;
        return usersList;
    }))
});
const server = (0, standalone_1.createHTTPServer)({
    middleware: (0, cors_1.default)(),
    router: appRouter
});
server.listen(3001, () => {
    console.log('Listening on port 3001');
});
