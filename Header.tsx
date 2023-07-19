import { observer } from 'mobx-react-lite';
import { Instance } from 'mobx-state-tree';
import { GrAdd } from 'react-icons/Gr';
import {MdModeEditOutline,MdDelete} from 'react-icons/Md'
import appStore from'../todoStore';
import EditTask from './EditTask'
import { todo } from 'node:test';
import AddTodo from './AddTodo';
interface checkBox{
    store:Instance<typeof appStore>
}
const dash:React.FC<checkBox>=observer(({store})=>{
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
    var check=store.todos.filter((todo)=>todo.checkBox==true)
    var H=false
    var E=false
    var D=false
    if (check.length==1){
        H=true
        E=true
        D=true
    }
    else if (check.length>=2){
        H=true
        E=false
        D=true
    }
    const handleAddButton=()=>{
        store.addbutton=!store.addbutton

    }
    const handleEdit = () =>{
        store.editbutton=!store.editbutton
    }
    const handleComplete=()=>{
        store.completebutton=!store.completebutton
    }
    const handleOnboard=()=>{
        store.onboardbutton=!store.onboardbutton
    }
    
    return(
        <main className="">
            <div className="text-center ">
                <h1 className="font-bold text-3xl">TASKMANAGEMENT</h1>
            </div>
        <div className='p-8 flex '>
            <div className={H?'hidden':'block bg-green-500 rounded-lg mr-20'}>
                <button className="font-bold text-3xl p-1" onClick={handleAddButton}><GrAdd/></button>                
            </div>
            
            <div className={H?'hidden':'block bg-red-500 rounded-lg p-1 mr-20 '}>
                <button className="font-bold text-3xl" onClick={handleComplete}>COMPLETED</button>
            </div>        
            <div className={H?'hidden':"block bg-yellow-500 rounded-lg p-1 mr-20 "}>
                <button className="font-bold text-3xl" onClick={handleOnboard}>ONBOARD</button>
            </div>
            
            <div className={  E ? 'block  p-1 ml-32 mr-20 ':'hidden' }>
                <button className='font-bold text-3xl' onClick={handleEdit} ><MdModeEditOutline/></button>
            </div>
            <div className={D?'block  p-1 mr-20 ':'hidden'}>
                <button className='font-bold text-3xl' onClick={handleDelete}><MdDelete/></button>
                
            </div>
        </div>   
        </main>
    )
})
export default dash;
