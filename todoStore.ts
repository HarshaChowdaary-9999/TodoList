import { types } from "mobx-state-tree";
import TodoModel from "./todoModel";
const TodoStore= types
                  .model({
                    todos: types.array(TodoModel),
                    addbutton:types.optional(types.boolean,false),
                    editbutton:types.optional(types.boolean,false),
                    completebutton:types.optional(types.boolean,false),
                    onboardbutton:types.optional(types.boolean,false)
                  })
                  .actions((self)=>({
                    addTodo(todo:typeof TodoModel.Type){
                        self.todos.push(todo)
                    },
                    removeTodo(arr:any[][],index:number){
                      arr.splice(index,)
                    }
                    
                  }))

export default TodoStore;
