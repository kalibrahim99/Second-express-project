// nextId function
let nextProjectId : number = 4;
export const getNextProjectId = () : number => {
     return nextProjectId++;
}
let nextTasksId : number = 3;
export const getNextTasksId = () : number => {
     return nextTasksId++;
}