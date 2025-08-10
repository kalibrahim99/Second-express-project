import {Router} from 'express';
import menuItemsRouter from './menu.router';
import projectsRouter from "./project.router";

const mainRouter = Router();

mainRouter.use("/menuItems", menuItemsRouter);
mainRouter.use("/projects", projectsRouter);

export default mainRouter;