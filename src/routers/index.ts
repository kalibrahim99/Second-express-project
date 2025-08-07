import {Router} from 'express';
import tasksRouter from './tasks.router';
import projectsRouter from "./project.router";

const mainRouter = Router();

mainRouter.use("/tasks", tasksRouter);
mainRouter.use("/projects", projectsRouter);

export default mainRouter