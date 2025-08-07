"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tasks = exports.projects = void 0;
// data of this poject
exports.projects = [
    {
        id: 1,
        name: "Website Redesign",
        description: "Redesign the company website for improved UX and performance."
    },
    {
        id: 2,
        name: "Mobile App Launch",
        description: "Develop and launch the new mobile application for iOS and Android."
    },
    {
        id: 3,
        name: "Marketing Campaign",
        description: "Plan and execute a social media marketing campaign for product X."
    }
];
exports.tasks = [
    // Tasks for Project 1
    {
        id: 1,
        title: "Create wireframes",
        status: "Pending",
        projectId: 1
    },
    {
        id: 2,
        title: "Implement responsive layout",
        status: "In Progress",
        projectId: 1
    },
    {
        id: 3,
        title: "Conduct usability testing",
        status: "Completed",
        projectId: 1
    },
    // Tasks for Project 2
    {
        id: 4,
        title: "Design UI mockups",
        status: "Pending",
        projectId: 2
    },
    {
        id: 5,
        title: "Set up backend API",
        status: "In Progress",
        projectId: 2
    },
    {
        id: 6,
        title: "Submit to app stores",
        status: "Pending",
        projectId: 2
    },
    // Tasks for Project 3
    {
        id: 7,
        title: "Define target audience",
        status: "Completed",
        projectId: 3
    },
    {
        id: 8,
        title: "Create ad creatives",
        status: "In Progress",
        projectId: 3
    },
    {
        id: 9,
        title: "Launch Facebook ads",
        status: "Pending",
        projectId: 3
    }
];
