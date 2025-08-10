"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNextId = void 0;
const data_1 = require("./data");
// nextId function
let nextId = data_1.events.length;
const getNextId = () => {
    return nextId++;
};
exports.getNextId = getNextId;
//# sourceMappingURL=fnctions.js.map