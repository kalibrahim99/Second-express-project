"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.members = exports.books = void 0;
// data of this poject
exports.books = [
    { id: 1, title: "Clean Code", author: "Robert C. Martin", isAvailable: true },
    { id: 2, title: "The Pragmatic Programmer", author: "Andy Hunt", isAvailable: false },
    { id: 3, title: "You Don't Know JS", author: "Kyle Simpson", isAvailable: true },
    { id: 4, title: "Eloquent JavaScript", author: "Marijn Haverbeke", isAvailable: false },
];
exports.members = [
    { id: 1, name: "Alice", borrowedBooks: [exports.books[1], exports.books[3]] },
    { id: 2, name: "Bob", borrowedBooks: [] },
    { id: 3, name: "Charlie", borrowedBooks: [exports.books[0]] },
];
