// types of variables
export type TaskStatus  = "Pending" | "In Progress" | "Completed";
export enum TasksStatusCompare  {
  PENDING = "Pending",
  IN_PROGRESS = "In Progress",
  COMPLETED = "Completed"
}
// type of tasks
export interface ITask {
  id : number,
  title : string,
  status : TaskStatus,
  projectId : number
}
// type of project
export interface  IProject {
  id : number,
  name : string,
  description : string
} 
