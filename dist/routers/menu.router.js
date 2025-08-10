"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const data_1 = require("../data");
const fnctions_1 = require("../fnctions");
const menuItemsRouter = (0, express_1.Router)();
// end point 1
menuItemsRouter.get("/", (req, res) => {
    const categoryQuery = req.query.category;
    if (categoryQuery) {
        const filterMenuItemsCategry = data_1.menuItems.filter(l => l.category === categoryQuery);
        return res.status(200).status(filterMenuItemsCategry);
    }
    res.status(200).json(data_1.menuItems);
});
// end point 2
menuItemsRouter.get("/:id", (req, res) => {
    const idUserChoice = parseInt(req.params.id);
    const findIdMenuItems = data_1.menuItems.find(h => h.id === idUserChoice);
    if (findIdMenuItems) {
        res.status(200).json(findIdMenuItems);
    }
    else {
        res.status(404).json(`not found book about this id (${idUserChoice})`);
    }
});
// end point 3
menuItemsRouter.post("/", (req, res) => {
    const menuItemsBody = req.body;
    if (!menuItemsBody.name || menuItemsBody.price || !menuItemsBody.category) {
        return res.status(400).json(`bad Request`);
    }
    const newMenuItems = {
        id: (0, fnctions_1.getNextMenuItemId)(),
        name: menuItemsBody.name,
        price: menuItemsBody.price,
        category: menuItemsBody.category
    };
    data_1.menuItems.push(newMenuItems);
    res.status(201).json(newMenuItems);
});
// end point 4
menuItemsRouter.put("/:id", (req, res) => {
    const idMenuItemPutChoice = parseInt(req.params.id);
    const findMenuItemIndexForUpdate = data_1.menuItems.findIndex(o => o.id === idMenuItemPutChoice);
    if (findMenuItemIndexForUpdate === -1) {
        return res.status(404).json(`not found index book about this id (${idMenuItemPutChoice})`);
    }
    const menuItemsBodyForUpdate = req.body;
    if (!menuItemsBodyForUpdate.name || !menuItemsBodyForUpdate.price || !menuItemsBodyForUpdate.category) {
        return res.status(400).json(`bad Request`);
    }
    const updateMenuItem = {
        id: idMenuItemPutChoice,
        name: menuItemsBodyForUpdate.name,
        price: menuItemsBodyForUpdate.price,
        category: menuItemsBodyForUpdate.category
    };
    data_1.menuItems[findMenuItemIndexForUpdate] = updateMenuItem;
    res.status(200).json(updateMenuItem);
});
// end point 5
menuItemsRouter.delete("/:id", (req, res) => {
    const choiceIdMenuItemsForDelete = parseInt(req.params.id);
    const filterIdIndexForDelete = data_1.menuItems.findIndex(r => r.id === choiceIdMenuItemsForDelete);
    if (filterIdIndexForDelete === -1) {
        return res.status(200).json(`bad Request`);
    }
    data_1.menuItems.splice(filterIdIndexForDelete, 1);
    res.status(204).json();
});
exports.default = menuItemsRouter;
