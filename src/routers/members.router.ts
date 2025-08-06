import {Router} from 'express';
import {books, members} from '../data';
import {IBook, IMember} from "../types";
import {getNextMemberId} from '../fnctions'

const membersRouters = Router();

// end point 1
membersRouters.get("/", (req, res) => {
    res.status(200).json(members);
})
// end point 2
membersRouters.get("/:id", (req, res) => {
    const idChoice = parseInt(req.params.id);
    const findIdMemberChoice = members.find(l => l.id === idChoice);
    if (findIdMemberChoice) {
        res.status(200).json(findIdMemberChoice);
    }
    else {
        res.status(404).json(`not found this member id (${idChoice})`);
    }

})

// end point 3

membersRouters.post("/", (req, res) => {
    const membersBody = req.body;
    if (!membersBody.name || membersBody.borrowedBooks.length !== 0) {
         return res.status(400).json(`bad Request`);    
    }
 
    const newMember : IMember = {
        id : getNextMemberId(),
        name : membersBody.name,
         borrowedBooks : membersBody.borrowedBooks
    } 
    members.push(newMember);
    
    res.status(201).json(newMember);
})
// end point 4 
membersRouters.post("/:memberId/borrow/:bookId", (req, res) => {
    const memberIdChoice = parseInt(req.params.memberId);
    const bookIdChoice = parseInt(req.params.bookId);
    const findMembers = members.find(i => i.id === memberIdChoice);
    const findBooks = books.find(k => k.id === bookIdChoice);
    
    if (!findBooks || !findMembers) {
       return res.status(400).json(`bad Request`)
    }
    

    
    if (findBooks.isAvailable === false) {
       return res.status(400).json(`bad Request : Book is not available`);
    }
     
    findMembers.borrowedBooks.push(findBooks);

    findBooks.isAvailable = false;

    res.status(201).json(findBooks)
})
export default membersRouters;