"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orders = exports.menuItems = void 0;
// data of this poject
// Menu items
exports.menuItems = [
    { id: 1, name: "Bruschetta", price: 5.5, category: "Appetizer" },
    { id: 2, name: "Caesar Salad", price: 6.0, category: "Appetizer" },
    { id: 3, name: "Grilled Chicken", price: 12.0, category: "Main Course" },
    { id: 4, name: "Spaghetti Bolognese", price: 11.5, category: "Main Course" },
    { id: 5, name: "Cheesecake", price: 4.5, category: "Dessert" },
    { id: 6, name: "Chocolate Lava Cake", price: 5.0, category: "Dessert" }
];
// Orders
exports.orders = [
    { id: 1, items: [exports.menuItems[0], exports.menuItems[2]], totalPrice: 5.5 + 12.0, status: "Received" },
    { id: 2, items: [exports.menuItems[1], exports.menuItems[4]], totalPrice: 6.0 + 4.5, status: "In Progress" },
    { id: 3, items: [exports.menuItems[3]], totalPrice: 11.5, status: "Completed" },
    { id: 4, items: [exports.menuItems[5], exports.menuItems[0]], totalPrice: 5.0 + 5.5, status: "Cancelled" },
    { id: 5, items: [exports.menuItems[2], exports.menuItems[3], exports.menuItems[5]], totalPrice: 12.0 + 11.5 + 5.0, status: "In Progress" },
    { id: 6, items: [exports.menuItems[1], exports.menuItems[4], exports.menuItems[0]], totalPrice: 6.0 + 4.5 + 5.5, status: "Received" }
];
