import { observer } from "mobx-react-lite"
import { Interface } from "readline"
import update from '../todoStore'
import { Instance, unprotect } from "mobx-state-tree"
import { ChangeEventHandler } from "react"
import { array } from "mobx-state-tree/dist/internal"
import { values } from "mobx"
interface display{
store:Instance<typeof update>
}
const DisplayTodo:React.FC<display>=observer(({store}) => {
    const handlechange= (id:number)=>(event: React.ChangeEvent<HTMLInputElement>)=>{
        var mmid:number=0;
        for (var i=0;i<store.todos.length;i++){
            if (store.todos[i].id==id){
                break
            }else{
                mmid=mmid+1;
            }
        };
        store.todos[mmid].checkBox=!store.todos[mmid].checkBox        
    }
    const handlechangeS= (id:number)=>(event: React.ChangeEvent<HTMLSelectElement>)=>{
        var mmid:number=0;
        for (var i=0;i<store.todos.length;i++){
            if (store.todos[i].id==id){
                break
            }else{
                mmid=mmid+1;
            }
        };
        store.todos[mmid].checkBox=false
        store.todos[mmid].progress=event.target.value       
    }
    const filteredTodo=store.todos.filter((todo)=>todo.progress=="ToDo"||todo.progress=="InProgress")
    return(
        <tbody className="bg-white divide-y divide-gray-200">
            {filteredTodo.map(todo =>(
                
                <tr key={todo.id}>
                <td className="px-6 py-4">
                    <input type="checkbox" className="form-checkbox h-4 w-4 text-indigo-600" checked={todo.checkBox} onChange={handlechange(todo.id) } />
                </td>
                <td className="px-6 py-4" id="title">{todo.title}</td>
                <td className="px-6 py-4" id="discription">{todo.discription} </td>
                <td className="px-6 py-4">
                    <select id="action" name="Action" className="text-center p-2 "  onChange={handlechangeS(todo.id)} >
                        <option value="ToDo">ToDo</option>
                        <option value="InProgress" selected={todo.progress == 'InProgress'}>InProgress</option>
                        <option value="Completed">Completed</option>
                    </select>
                </td>
            </tr>     

            ))}
                     
                
        </tbody>
)})
export default DisplayTodo;
