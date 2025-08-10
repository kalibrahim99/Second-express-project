import {orders, menuItems} from './data';
import {IOrder, IMenuItem} from './types'
// nextId function
let nextOrderId : number = orders.length;
export const getNextOrderId = () : number => {
     return nextOrderId++;
}
let nextMenuItemsId : number = menuItems.length;
export const getNextMenuItemId = () : number => {
     return nextMenuItemsId++;
}