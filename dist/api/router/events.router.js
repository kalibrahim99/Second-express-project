"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const data_1 = require("../../data");
const fnctions_1 = require("../../fnctions");
const eventsRouter = (0, express_1.Router)();
// end point 1
eventsRouter.get("/", (req, res) => {
    const locationQuery = req.query.location;
    if (locationQuery) {
        const filterLocation = data_1.events.filter(k => k.location === locationQuery);
        return res.status(200).json(filterLocation);
    }
    res.status(200).json(data_1.events);
});
// end point 2
eventsRouter.get("/:id", (req, res) => {
    const idUserChoice = parseInt(req.params.id);
    const findUserIdChoice = data_1.events.find(p => p.id === idUserChoice);
    if (findUserIdChoice) {
        res.status(200).json(findUserIdChoice);
    }
    else {
        res.status(404).json(`not found event about this id (${idUserChoice})`);
    }
});
// end point 3
eventsRouter.post("/", (req, res) => {
    const { title, date, location } = req.body;
    const nullArray = [];
    if (!title || !date || !location) {
        res.status(400).json(`bad request`);
    }
    const newEvent = {
        id: (0, fnctions_1.getNextId)(),
        title: title,
        date: date,
        location: location,
        attendees: nullArray
    };
    data_1.events.push(newEvent);
    res.status(201).json(newEvent);
});
// end point 4
eventsRouter.put("/:id", (req, res) => {
    const idUserChoiceforPut = parseInt(req.params.id);
    const findEventForUpdate = data_1.events.findIndex(k => k.id === idUserChoiceforPut);
    if (findEventForUpdate === -1) {
        return res.status(404).json(`not found this id by events index (id (${idUserChoiceforPut}))`);
    }
    const { date, title, location } = req.body;
    if (!date || !title || !location) {
        return res.status(400).json(`bad Requst`);
    }
    const updateEvent = {
        id: idUserChoiceforPut,
        title: title,
        date: date,
        location: location,
        attendees: data_1.events[findEventForUpdate].attendees
    };
    data_1.events[findEventForUpdate] = updateEvent;
    res.status(200).json(updateEvent);
});
// end point 5
eventsRouter.get("/:id/attendees", (req, res) => {
    const attendeesAboutEvent = parseInt(req.params.id);
    const findAttendee = data_1.events.findIndex(g => g.id === attendeesAboutEvent);
    if (findAttendee === -1) {
        return res.status(404).json(`bad Request`);
    }
    res.status(200).json(data_1.events[findAttendee].attendees);
});
// end point 6 
eventsRouter.post("/:id/attendees", (req, res) => {
    const attendeesSearch = parseInt(req.params.id);
    const idUserChoiceAttendees = data_1.events.findIndex(t => t.id === attendeesSearch);
    if (idUserChoiceAttendees === -1) {
        return res.status(404).json(`bad Request`);
    }
    const names = req.body;
    if (!names || !Array.isArray(names)) {
        return res.status(400).json(`bad Request`);
    }
    data_1.events[idUserChoiceAttendees].attendees.push(...names);
    res.status(200).json({ names });
});
exports.default = eventsRouter;
//# sourceMappingURL=events.router.js.map