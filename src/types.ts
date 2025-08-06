// types of variables
// type of books
export interface IBook {
  id : number,
  title : string,
  author : string,
  isAvailable : boolean
}
// type of member
export interface IMember {
  id : number,
  name : string,
  borrowedBooks : IBook[]
} 
