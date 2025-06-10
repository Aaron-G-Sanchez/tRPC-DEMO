"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.publicProcedure = exports.router = void 0;
const server_1 = require("@trpc/server");
// Initialization of tRPC backend.
// Done once per backend.
const t = server_1.initTRPC.create();
exports.router = t.router;
exports.publicProcedure = t.procedure;
