import { events } from "./data"
// nextId function
let nextId = events.length;
export const getNextId = () => {
    return nextId++;
}