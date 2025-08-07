import {Router} from 'express';
import {projects, tasks} from '../data';
import {IProject, ITask} from "../types";
import {getNextProjectId} from '../fnctions'
const projectsRouter = Router();
// end point 1
projectsRouter.get("/", (req, res) => {
    res.status(200).json(projects);
})

// end point 2

projectsRouter.get("/:id", (req, res) => {
    const idUserChoice = parseInt(req.params.id);
    const findIdProjects = projects.find(h => h.id === idUserChoice);
    if (findIdProjects) {
        res.status(200).json(findIdProjects);
    }
    else {
        res.status(404).json(`not found book about this id (${idUserChoice})`);
    }
})



// end point 3
projectsRouter.post("/", (req, res) => {
    const projectBody = req.body;
    if (!projectBody.name || projectBody.description) {
         return res.status(400).json(`bad Request`);    
    }
 
    const newProject : IProject = {
        id : getNextProjectId(),
        name : projectBody.name,
        description : projectBody.description 
    }
    projects.push(newProject);
    
    res.status(201).json(newProject);
})
// end point 4
projectsRouter.put("/:id", (req, res) => {
    const idProjectPutChoice = parseInt(req.params.id);
    const findProjectIndexForUpdate = projects.findIndex(o => o.id === idProjectPutChoice);

    if (findProjectIndexForUpdate === -1) {
      return res.status(404).json(`not found index book about this id (${idProjectPutChoice})`);
    }

    const projectBodyForUpdate = req.body;
    if (!projectBodyForUpdate.name || !projectBodyForUpdate.description) {
        return res.status(400).json(`bad Request`);
    }

    const updateProject : IProject = {
        id : idProjectPutChoice,
        name : projectBodyForUpdate.name,
        description : projectBodyForUpdate.description   
    }

    projects[findProjectIndexForUpdate] = updateProject;

    res.status(200).json(updateProject)
})
// end point 5
projectsRouter.delete("/:id", (req, res) => {
    const choiceIdProjectForDelete = parseInt(req.params.id);
    const filterIdIndexForDelete = projects.findIndex(r => r.id === choiceIdProjectForDelete);
    const filterTasksOfProject = tasks.findIndex(g => g.projectId === choiceIdProjectForDelete)
    if (filterIdIndexForDelete === -1) {
        return res.status(200).json(`bad Request`);
    }
    const taksBody = req.body;
    
   
    projects.splice(filterIdIndexForDelete, 1);
    tasks.splice(filterTasksOfProject, 1 );

    res.status(204).json()
})

//EP 6

projectsRouter.get("/:id/tasks", (req, res) => {
    const idChoice = parseInt(req.params.id);
    const findIdProject = projects.find(j => j.id === idChoice);
    const findIdTasks = tasks.find(h => h.projectId === idChoice);
    if (findIdProject && findIdTasks) {
        res.status(200).json(findIdProject);
        res.status(200).json(findIdTasks)
    }
    else {
        res.status(404).json(`bad Request`)
    }
})

export default projectsRouter;
