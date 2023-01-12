export interface TodoItem {
  completed:boolean,
  text:string,
  createdAt:Date,
  updatedAt?:Date
}

export type TodoList = {
  completedCount:number,
  activeCount:number,
  items: TodoItem[]
}
