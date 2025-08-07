"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNextTasksId = exports.getNextProjectId = void 0;
// nextId function
let nextProjectId = 4;
const getNextProjectId = () => {
    return nextProjectId++;
};
exports.getNextProjectId = getNextProjectId;
let nextTasksId = 3;
const getNextTasksId = () => {
    return nextTasksId++;
};
exports.getNextTasksId = getNextTasksId;
