"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const menu_router_1 = __importDefault(require("./menu.router"));
const project_router_1 = __importDefault(require("./project.router"));
const mainRouter = (0, express_1.Router)();
mainRouter.use("/menuItems", menu_router_1.default);
mainRouter.use("/projects", project_router_1.default);
exports.default = mainRouter;
