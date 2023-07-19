import { Instance } from 'mobx-state-tree'
import Delete from '../todoStore'
import { observer } from 'mobx-react-lite'
interface deletetask{
    store:Instance<typeof Delete>
}
const deleteTask : React.FC<deletetask>=observer(({store})=>{
    const deletetask=store.todos.filter((todo)=> todo.checkBox==true)
    
    
    const handleDelete =()=>{
        
        for(var i=0;i<deletetask.length;i++){
            var mmid:number=0;
            for(var j=0;j<store.todos.length;j++){
                if (store.todos[j].id == deletetask[i].id){
                    //console.log("foor loop check values",deletetask[i].id,deletetask[i].title,deletetask[i].discription,"store values from here",store.todos[j].id,store.todos[j].title,store.todos[j].discription)
                    store.todos.splice(mmid,1);
                }
                else{
                    mmid=mmid+1
                }
            }
        }     
       

        console.log(store.todos)
    }
        return(
            <button onClick={handleDelete}>delete</button>        
    )
})
export default deleteTask
