import {Router} from 'express';
import {menuItems} from '../data';
import {IMenuItem} from "../types";
import {getNextMenuItemId} from '../fnctions'
const menuItemsRouter = Router();
// end point 1
menuItemsRouter.get("/", (req, res) => {
    const categoryQuery = req.query.category;

    if (categoryQuery) {
        const filterMenuItemsCategry = menuItems.filter(l => l.category === categoryQuery);
        return res.status(200).status(filterMenuItemsCategry)
    }
    
    res.status(200).json(menuItems);

})

// end point 2

menuItemsRouter.get("/:id", (req, res) => {
    const idUserChoice = parseInt(req.params.id);
    const findIdMenuItems = menuItems.find(h => h.id === idUserChoice);
    if (findIdMenuItems) {
        res.status(200).json(findIdMenuItems);
    }
    else {
        res.status(404).json(`not found book about this id (${idUserChoice})`);
    }
})



// end point 3
menuItemsRouter.post("/", (req, res) => {
    const menuItemsBody = req.body;
    if (!menuItemsBody.name || menuItemsBody.price || !menuItemsBody.category) {
         return res.status(400).json(`bad Request`);    
    }
 
    const newMenuItems : IMenuItem = {
        id : getNextMenuItemId(),
        name : menuItemsBody.name,
        price : menuItemsBody.price,
        category : menuItemsBody.category 
    }
    menuItems.push(newMenuItems);
    
    res.status(201).json(newMenuItems);
})
// end point 4
menuItemsRouter.put("/:id", (req, res) => {
    const idMenuItemPutChoice = parseInt(req.params.id);
    const findMenuItemIndexForUpdate = menuItems.findIndex(o => o.id === idMenuItemPutChoice);

    if (findMenuItemIndexForUpdate === -1) {
      return res.status(404).json(`not found index book about this id (${idMenuItemPutChoice})`);
    }

    const menuItemsBodyForUpdate = req.body;
    if (!menuItemsBodyForUpdate.name ||!menuItemsBodyForUpdate.price || !menuItemsBodyForUpdate.category) {
        return res.status(400).json(`bad Request`);
    }

    const updateMenuItem : IMenuItem = {
        id : idMenuItemPutChoice,
        name : menuItemsBodyForUpdate.name,
        price : menuItemsBodyForUpdate.price,
        category : menuItemsBodyForUpdate.category
    }

    menuItems[findMenuItemIndexForUpdate] = updateMenuItem;

    res.status(200).json(updateMenuItem)
})
// end point 5
menuItemsRouter.delete("/:id", (req, res) => {
    const choiceIdMenuItemsForDelete = parseInt(req.params.id);
    const filterIdIndexForDelete = menuItems.findIndex(r => r.id === choiceIdMenuItemsForDelete);
    if (filterIdIndexForDelete=== -1) {
        return res.status(200).json(`bad Request`);
    }
    
    
   
    menuItems.splice(filterIdIndexForDelete, 1);

    res.status(204).json()
})

export default menuItemsRouter;
