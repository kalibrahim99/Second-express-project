"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const members_router_1 = __importDefault(require("./members.router"));
const books_router_1 = __importDefault(require("./books.router"));
const mainRouter = (0, express_1.Router)();
mainRouter.use("/members", members_router_1.default);
mainRouter.use("/books", books_router_1.default);
exports.default = mainRouter;
