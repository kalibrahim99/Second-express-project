"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNextMenuItemId = exports.getNextOrderId = void 0;
const data_1 = require("./data");
// nextId function
let nextOrderId = data_1.orders.length;
const getNextOrderId = () => {
    return nextOrderId++;
};
exports.getNextOrderId = getNextOrderId;
let nextMenuItemsId = data_1.menuItems.length;
const getNextMenuItemId = () => {
    return nextMenuItemsId++;
};
exports.getNextMenuItemId = getNextMenuItemId;
