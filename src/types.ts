// types of variables
export type OrderStatus = "Received" | "In Progress" | "Completed" | "Cancelled";
// type of menu
export interface IMenuItem {
  id : number,
  name : string,
  price : number,
  category : "Appetizer" | "Main Course" | "Dessert"
}
// type of order
export interface  IOrder {
  id : number,
  items : IMenuItem[],
  totalPrice : number,
  status : OrderStatus
} 
