# TodoList
The Following ToDo List is done, by using NextJs, MobX State Tree, Tailwind CSS. which has functionalities CRUD, Add Task
#MobX State Tree
Initially a state is builded on file called todoModel.
Where This is my model for one Task in todo list : 
                     model({   
                    id:types.number,                              
                    checkBox:types.optional(types.boolean,false), 
                    title:types.optional(types.string,""),
                    discription:types.optional(types.string,""),
                    progress:types.optional(types.string,"Todo")
                    
                })
                And Like this will be having "n" number of Tasks for this there must be array of this model 
                For this sake created a file called #todoStore:
                .model({
                    todos: types.array(TodoModel),)}
                    In the above #todos we will be storing n number of Tasks by creating an instance. In my project where named it has #todoStore and passed as #store you find this on #page.tsx file.
#AddTodo.tsx
This file contains a simple form to upload the data in todostore. where todostore is my MST.
#CompletedTodo.tsx
From the Store it's just filters the process which completed and displays
#DeletedTodo
This contains the piece of code which deletes the task from store
#DisplayTodo
These the task which are displayed when page is launched
#EditTodo
To edit the existed task .this helps
#Header
This contains new task to #add, #completedtask to display, #Inprogress tasks are displayed after clicking this it displays values of Onboard.tsx file values, #Edit linked to EditTodo,#Delete linked to DeletedTodo

