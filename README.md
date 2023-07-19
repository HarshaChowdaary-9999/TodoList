# TodoList

The Following ToDo List is done, by using NextJs, MobX State Tree, Tailwind CSS, which has functionalities CRUD, Add Task.

## MobX State Tree

Initially, a state is created on the file called **todoModel.ts**. This model can store only  one task in the todo list, code looks like this:

```
model({   
  id: types.number,                              
  checkBox: types.optional(types.boolean, false), 
  title: types.optional(types.string, ""),
  description: types.optional(types.string, ""),
  progress: types.optional(types.string, "Todo")
})
```

And Like this will be having n number of Tasks for this there must be array of this model.<br>
For this sake created a file called  **todoStore.ts**:<br>
```
.model({
      todos: types.array(TodoModel),
      )}<br>
```
In the above  **todos** we will be storing n number of Tasks by creating an instance. In my project where named it has  **todoStore** and passed as  **store** you find this on  **page.tsx** file.<br>
                    
## AddTodo 

This file contains a simple form to upload the data in todostore. where todostore is my MST.


## CompletedTodo.tsx


From the Store it's just filters the process which completed and displays


## DeletedTodo


This contains the piece of code which deletes the task from store


## DisplayTodo


These the task which are displayed when page is launched


## EditTodo


To edit the existed task .this helps


## Header


This contains new task to #add, #completedtask to display, #Inprogress tasks are displayed after clicking this it displays values of Onboard.tsx file values, #Edit linked to EditTodo,#Delete linked to DeletedTodo

