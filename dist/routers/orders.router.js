"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const data_1 = require("../data");
const fnctions_1 = require("../fnctions");
const ordersRouters = (0, express_1.Router)();
// end point 1
ordersRouters.get("/", (req, res) => {
    res.status(200).json(data_1.orders);
});
// end point 2
ordersRouters.get("/:id", (req, res) => {
    const idChoice = parseInt(req.params.id);
    const findOrderChoice = data_1.orders.find(l => l.id === idChoice);
    if (findOrderChoice) {
        res.status(200).json(findOrderChoice);
    }
    else {
        res.status(404).json(`not found this member id (${idChoice})`);
    }
});
// end point 3
ordersRouters.post("/", (req, res) => {
    const { itemsIds } = req.body;
    if (itemsId !== typeof (menuItems)) {
        res.status(400).status(`bad Request`);
    }
    let orderedItems = [];
    let calculatedPrice = 0;
    for (let scan of itemsIds) {
        const findIdItem = scan.some(k => k === menuItems.id);
        const findItemPrice = scan.filter(k => findIdItem === menuItems.price);
        if (!findIdItem) {
            return res.status(400).json(`bad Request`);
        }
        calculatedPrice += findItemPrice;
        orderedItems.push(findIdItem);
    }
    const newOrder = {
        id: (0, fnctions_1.getNextOrderId)(),
        title: tasksBody.title,
        status: tasksBody.status,
        projectId: tasksBody.projectId
    };
    tasks.push(newTask);
    res.status(201).json(newTask);
});
//
ordersRouters.patch("/:id/tasks", (req, res) => {
    const tasksBody = req.body;
    const idChoice = parseInt(req.params.id);
    const searchTask = tasks.find(i => i.id === idChoice);
    if (tasksBody.status !== TasksStatusCompare) {
        res.status(200).json(`bad Request`);
    }
    tasks[idChoice - 1].status = tasksBody.status;
    res.status(200).json(tasksBody.status);
});
exports.default = tasksRouters;
