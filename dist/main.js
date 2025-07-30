"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const data_1 = require("./data");
const app = (0, express_1.default)();
const port = 3000;
app.listen(port, () => {
    console.log(`the serer is open in port : ${port}`);
});
// startup sever
app.get("/books/:id", (req, res) => {
    const idSearch = parseInt(req.params.id);
    const idFilter = data_1.books.find(h => h.id === idSearch);
    if (idFilter) {
        res.status(200).json(idFilter);
    }
    else {
        res.status(404).json(`error : we didn't found`);
    }
});
app.get("/authors/:authorName/books", (req, res) => {
    const authorName = req.params.authorName;
    const filterBooks = data_1.books.filter(g => g.author === authorName);
    res.status(200).json(filterBooks);
});
app.get("/books", (req, res) => {
    const userChoice = req.query.genre;
    if (userChoice) {
        const filterGenre = data_1.books.filter(k => k.genre === userChoice);
        res.status(200).json(filterGenre);
    }
    else {
        res.status(200).json(data_1.books);
    }
});
