export interface TodoItem {
  completed:boolean,
  text:string,
  createdAt:Date,
  updatedAt?:Date
}

export type TodoList = {
  count:number,
  items: TodoItem[]
}
