"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNextMemberId = exports.getNextBookId = void 0;
// nextId function
let nextBookId = 4;
const getNextBookId = () => {
    return nextBookId++;
};
exports.getNextBookId = getNextBookId;
let nextMemberId = 3;
const getNextMemberId = () => {
    return nextMemberId++;
};
exports.getNextMemberId = getNextMemberId;
