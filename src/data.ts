import {IBook, IMember} from "./types";
// data of this poject
export let books: IBook[] = [
  { id: 1, title: "Clean Code", author: "Robert C. Martin", isAvailable: true },
  { id: 2, title: "The Pragmatic Programmer", author: "Andy Hunt", isAvailable: false },
  { id: 3, title: "You Don't Know JS", author: "Kyle Simpson", isAvailable: true },
  { id: 4, title: "Eloquent JavaScript", author: "Marijn Haverbeke", isAvailable: false },
];

export let members: IMember[] = [
  { id: 1, name: "Alice", borrowedBooks: [books[1], books[3]] },
  { id: 2, name: "Bob", borrowedBooks: [] },
  { id: 3, name: "Charlie", borrowedBooks: [books[0]] },
];



