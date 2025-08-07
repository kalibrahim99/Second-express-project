import {Router} from 'express';
import {tasks} from '../data';
import {ITask, TasksStatusCompare} from "../types";
import {getNextTasksId} from '../fnctions'

const tasksRouters = Router();

// end point 1
tasksRouters.get("/", (req, res) => {
    res.status(200).json(tasks);
})
// end point 2
/*
tasksRouters.get("/:id", (req, res) => {
    const idChoice = parseInt(req.params.id);
    const findIdMemberChoice = members.find(l => l.id === idChoice);
    if (findIdMemberChoice) {
        res.status(200).json(findIdMemberChoice);
    }
    else {
        res.status(404).json(`not found this member id (${idChoice})`);
    }

})
*/
// end point 3

tasksRouters.post("/", (req, res) => {
    const tasksBody = req.body;
    if (tasksBody.status !== "Pending" || !tasksBody.title || !tasksBody.projectId) {
         return res.status(400).json(`bad Request`);    
    }
 
    const newTask : ITask = {
        id : getNextTasksId(),
        title : tasksBody.title,
        status : tasksBody.status,
        projectId : tasksBody.projectId

    } 
    tasks.push(newTask);
    
    res.status(201).json(newTask);
})

//
tasksRouters.patch("/:id/tasks", (req, res) => {
    const tasksBody = req.body;
    const idChoice = parseInt(req.params.id);
    const searchTask = tasks.find(i => i.id === idChoice);

    if (tasksBody.status !== TasksStatusCompare) {
       res.status(200).json(`bad Request`)
    }
    tasks[idChoice - 1].status = tasksBody.status
    res.status(200).json(tasksBody.status)
})

export default tasksRouters;