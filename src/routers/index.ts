import {Router} from 'express';
import membersRouter from './members.router';
import booksRouter from "./books.router";

const mainRouter = Router();

mainRouter.use("/members", membersRouter);
mainRouter.use("/books", booksRouter);

export default mainRouter