"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const data_1 = require("../data");
const types_1 = require("../types");
const fnctions_1 = require("../fnctions");
const tasksRouters = (0, express_1.Router)();
// end point 1
tasksRouters.get("/", (req, res) => {
    res.status(200).json(data_1.tasks);
});
// end point 2
/*
tasksRouters.get("/:id", (req, res) => {
    const idChoice = parseInt(req.params.id);
    const findIdMemberChoice = members.find(l => l.id === idChoice);
    if (findIdMemberChoice) {
        res.status(200).json(findIdMemberChoice);
    }
    else {
        res.status(404).json(`not found this member id (${idChoice})`);
    }

})
*/
// end point 3
tasksRouters.post("/", (req, res) => {
    const tasksBody = req.body;
    if (tasksBody.status !== "Pending" || !tasksBody.title || !tasksBody.projectId) {
        return res.status(400).json(`bad Request`);
    }
    const newTask = {
        id: (0, fnctions_1.getNextTasksId)(),
        title: tasksBody.title,
        status: tasksBody.status,
        projectId: tasksBody.projectId
    };
    data_1.tasks.push(newTask);
    res.status(201).json(newTask);
});
//
tasksRouters.patch("/:id/tasks", (req, res) => {
    const tasksBody = req.body;
    const idChoice = parseInt(req.params.id);
    const searchTask = data_1.tasks.find(i => i.id === idChoice);
    if (tasksBody.status !== types_1.TasksStatusCompare) {
        res.status(200).json(`bad Request`);
    }
    data_1.tasks[idChoice - 1].status = tasksBody.status;
    res.status(200).json(tasksBody.status);
});
exports.default = tasksRouters;
