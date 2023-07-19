import { Instance, unprotect } from "mobx-state-tree"
import TodoStore from "../todoStore"
import { observer } from "mobx-react-lite"
import { useLocalStore } from 'mobx-react-lite';
import { AiFillCloseCircle  } from 'react-icons/Ai';
interface completedtodo{
    store:Instance<typeof TodoStore>
}
const CompletedTodo : React.FC<completedtodo>=observer(({store})=>{
    const handlechangeS= (id:number)=>(event: React.ChangeEvent<HTMLSelectElement>)=>{
        var mmid:number=0;
        for (var i=0;i<store.todos.length;i++){
            if (store.todos[i].id==id){
                break
            }else{
                mmid=mmid+1;
            }
        };
        store.todos[mmid].progress=event.target.value
        
    }
    const completedTodo=store.todos.filter((todo)=>todo.progress=="Completed")
    const closeb=()=>{
        store.completebutton=!store.completebutton
    }
    
    return(
        <div className={store.completebutton?"fixed  inset-0 flex-row items-center justify-center bg-black bg-opacity-50":"hidden"}>
        <div className="max-w-4xl mx-auto  bg-slate-200 rounded-lg">
        <div className=" mt-12 ">
            <button type='reset' className=' float-right  mb'  onClick={closeb}><AiFillCloseCircle size='1.5rem' /></button>

        </div>
        <div>
        <table className="min-w-full  divide-y divide-gray-200 ">
                <thead>
                    <tr>
                        
                        <th scope="col" className="px-6 py-3">Title</th>
                        <th scope="col" className="px-6 py-3">Description</th>
                        <th scope="col" className="px-6 py-3">Action</th>
                        
                    </tr>
                </thead>
        <tbody className="bg-white divide-y divide-gray-200" >
            {completedTodo.map(todo =>( 
                                                
                <tr key={todo.id}>                
                <td className="px-6 py-4" id="title">{todo.title}</td>
                <td className="px-6 py-4" id="discription">{todo.discription} </td>
                <td className="px-6 py-4">
                    <select id="action" name="Action" className="text-center p-2 " onChange={handlechangeS(todo.id)}>
                        
                        <option value="ToDo">ToDo</option>
                        <option value="InProgress">InProgress</option>
                        <option value="Completed" selected>Completed</option>
                        
                    </select>
                </td>
            </tr>     

            ))}
                     
                </tbody>
        </table>
        </div>
        </div>
        </div>
)})
export default CompletedTodo;
