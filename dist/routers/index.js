"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tasks_router_1 = __importDefault(require("./tasks.router"));
const project_router_1 = __importDefault(require("./project.router"));
const mainRouter = (0, express_1.Router)();
mainRouter.use("/tasks", tasks_router_1.default);
mainRouter.use("/projects", project_router_1.default);
exports.default = mainRouter;
