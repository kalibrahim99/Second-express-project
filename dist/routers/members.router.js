"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const data_1 = require("../data");
const fnctions_1 = require("../fnctions");
const membersRouters = (0, express_1.Router)();
// end point 1
membersRouters.get("/", (req, res) => {
    res.status(200).json(data_1.members);
});
// end point 2
membersRouters.get("/:id", (req, res) => {
    const idChoice = parseInt(req.params.id);
    const findIdMemberChoice = data_1.members.find(l => l.id === idChoice);
    if (findIdMemberChoice) {
        res.status(200).json(findIdMemberChoice);
    }
    else {
        res.status(404).json(`not found this member id (${idChoice})`);
    }
});
// end point 3
membersRouters.post("/", (req, res) => {
    const membersBody = req.body;
    if (!membersBody.name || membersBody.borrowedBooks.length !== 0) {
        return res.status(400).json(`bad Request`);
    }
    const newMember = {
        id: (0, fnctions_1.getNextMemberId)(),
        name: membersBody.name,
        borrowedBooks: membersBody.borrowedBooks
    };
    data_1.members.push(newMember);
    res.status(201).json(newMember);
});
// end point 4 
membersRouters.post("/:memberId/borrow/:bookId", (req, res) => {
    const memberIdChoice = parseInt(req.params.memberId);
    const bookIdChoice = parseInt(req.params.bookId);
    const findMembers = data_1.members.find(i => i.id === memberIdChoice);
    const findBooks = data_1.books.find(k => k.id === bookIdChoice);
    if (!findBooks || !findMembers) {
        return res.status(400).json(`bad Request`);
    }
    if (findBooks.isAvailable === false) {
        return res.status(400).json(`bad Request : Book is not available`);
    }
    findMembers.borrowedBooks.push(findBooks);
    findBooks.isAvailable = false;
    res.status(201).json(findBooks);
});
exports.default = membersRouters;
