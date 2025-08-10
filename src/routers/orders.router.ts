import {Router} from 'express';
import {orders} from '../data';
import {IOrder} from "../types";
import {getNextOrderId} from '../fnctions'

const ordersRouters = Router();

// end point 1
ordersRouters.get("/", (req, res) => {
    res.status(200).json(orders);
})
// end point 2

ordersRouters.get("/:id", (req, res) => {
    const idChoice = parseInt(req.params.id);
    const findOrderChoice = orders.find(l => l.id === idChoice);
    if (findOrderChoice) {
        res.status(200).json(findOrderChoice);
    }
    else {
        res.status(404).json(`not found this member id (${idChoice})`);
    }

})

// end point 3

ordersRouters.post("/", (req, res) => {
    const {itemsIds} = req.body;
 
    if (itemsId !== typeof(menuItems)) {
        res.status(400).status(`bad Request`);
    }

    let orderedItems: IMenuItem[] = [];
     let calculatedPrice = 0;

    for (let scan of itemsIds) {
     const findIdItem = scan.some(k => k === menuItems.id);
     const findItemPrice = scan.filter(k => findIdItem === menuItems.price);
     if (!findIdItem) {
        return res.status(400).json(`bad Request`);
     }
     calculatedPrice += findItemPrice;
     orderedItems.push(findIdItem)
    }



    const newOrder : IOrder = {
        id : getNextOrderId(),
        title : tasksBody.title,
        status : tasksBody.status,
        projectId : tasksBody.projectId

    } 
    tasks.push(newTask);
    
    res.status(201).json(newTask);
})

//
ordersRouters.patch("/:id/tasks", (req, res) => {
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