import {IEvent} from "./types";
// data of this poject
export let events: IEvent[] = [
  {
    id: 1,
    title: "Tech Conference 2025",
    date: new Date("2025-09-15"),
    location: "New York",
    attendees: ["Alice", "Bob", "Charlie"]
  },
  {
    id: 2,
    title: "Music Festival",
    date: new Date("2025-08-22"),
    location: "Los Angeles",
    attendees: ["David", "Emma", "Frank"]
  },
  {
    id: 3,
    title: "Startup Pitch Night",
    date: new Date("2025-10-05"),
    location: "San Francisco",
    attendees: ["Grace", "Hank", "Ivy"]
  },
  {
    id: 4,
    title: "Art Exhibition",
    date: new Date("2025-11-12"),
    location: "Paris",
    attendees: ["Jack", "Karen", "Leo"]
  }
];


