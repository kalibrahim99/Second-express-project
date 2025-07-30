import express from 'express';
import {books} from './data';
import {IBook} from './types'
const app = express();
const port = 3000;
app.listen(port, () => {
    console.log(`the serer is open in port : ${port}`);
})
// startup sever

 



app.get("/books/:id", (req, res) => {
  const idSearch = parseInt(req.params.id);
  const idFilter = books.find(h => h.id === idSearch);
   if(idFilter) {
    res.status(200).json(idFilter)
   }
   else  {
    res.status(404).json(`error : we didn't found`)
   }
   
})

app.get("/authors/:authorName/books", (req, res) => {
    const authorName = req.params.authorName;
    const filterBooks = books.filter(g => g.author === authorName )
        
    res.status(200).json(filterBooks)
})
app.get("/books", (req, res) => {
  const userChoice = req.query.genre;
  
  

  if (userChoice) {
     
     const filterGenre = books.filter(k => k.genre === userChoice)
    res.status(200).json(filterGenre);
     
  }
  else {
    
  res.status(200).json(books);
  }
}
)
