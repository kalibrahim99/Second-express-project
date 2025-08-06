import {Router} from 'express';
import {books} from '../data';
import {IBook} from "../types";
import {getNextBookId} from '../fnctions'
const booksRouter = Router();
// end point 1
booksRouter.get("/", (req, res) => {
    res.status(200).json(books);
})

// end point 2

booksRouter.get("/:id", (req, res) => {
    const idUserChoice = parseInt(req.params.id);
    const findIdBooks = books.find(h => h.id === idUserChoice);
    if (findIdBooks) {
        res.status(200).json(findIdBooks);
    }
    else {
        res.status(404).json(`not found book about this id (${idUserChoice})`);
    }
})

// end point 2 (query parameters)
booksRouter.get("/", (req, res) => {
    
   const isAvailableQuery = req.query.available;
   if (isAvailableQuery === "true") {
     const isAvailable = books.filter(j => j.isAvailable === true);
     return res.status(200).json(isAvailable);
   }
   if (isAvailableQuery === "false") {
    const isNotAvaible = books.filter(p => p.isAvailable === false);
     return res.status(200).json(isNotAvaible);
   }
   
})

// end point 2
booksRouter.post("/", (req, res) => {
    const booksBody = req.body;
    if (!booksBody.title || !booksBody.author || booksBody.isAvailable === false) {
         return res.status(400).json(`bad Request`);    
    }
 
    const newBook : IBook = {
        id : getNextBookId(),
        title : booksBody.title,
        author : booksBody.author,
        isAvailable : true 
    } 
    books.push(newBook);
    
    res.status(201).json(newBook);
})
// end point 3
booksRouter.put("/:id", (req, res) => {
    const idBookPutChoice = parseInt(req.params.id);
    const findBookIndexForUpdate = books.findIndex(o => o.id === idBookPutChoice);

    if (findBookIndexForUpdate === -1) {
      return res.status(404).json(`not found index book about this id (${idBookPutChoice})`);
    }

    const booksBodyForUpdate = req.body;
    if (!booksBodyForUpdate.title || !booksBodyForUpdate.author || !booksBodyForUpdate.isAvailable) {
        return res.status(400).json(`bad Request`);
    }

    const updateBook : IBook = {
        id : idBookPutChoice,
        title : booksBodyForUpdate.title,
        author : booksBodyForUpdate.author,
        isAvailable : booksBodyForUpdate.isAvailable   
    }

    books[findBookIndexForUpdate] = updateBook;

    res.status(200).json(updateBook)
})
// end point 4
booksRouter.delete("/:id", (req, res) => {
    const choiceIdBookForDelete = parseInt(req.params.id);
    const filterIdIndexForDelete = books.findIndex(r => r.id === choiceIdBookForDelete);
    if (filterIdIndexForDelete === -1) {
        return res.status(200).json(`bad Request`);
    }

    books.splice(filterIdIndexForDelete, 1);

    res.status(204).json()
})

export default booksRouter;
