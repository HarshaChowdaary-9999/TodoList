import { title } from 'process'
import appStore from '../todoStore'
import { Observer, observer } from 'mobx-react-lite'
import { observe } from 'mobx';
import { Instance,unprotect } from 'mobx-state-tree';
import { AiOutlineClose } from 'react-icons/Ai';
interface addtask{
    store: Instance<typeof appStore>
}
const addTodo: React.FC<addtask> =observer(({store})=>{
    var tv="";
    var dv="";
    var sl=store.todos.length
    if (sl>0){
        var id=store.todos[sl-1].id;
    }
    
    var sm=0;
    const handleChangeT =(event:React.ChangeEvent<HTMLInputElement>)=>{
        tv=event.target.value;
    }
    const handleChangeD =(event:React.ChangeEvent<HTMLInputElement>) =>{
        dv=event.target.value;
    }
    unprotect(store) 
    
    const addV = () => {   
        id=id+1          
           
        store.todos.push({
            id:id,
            checkBox:false,
            title:tv,
            discription:dv,
            progress:"ToDo"
        })             
        sm=sm+1
              
    }    
    const closeb=()=>{
        store.addbutton=!store.addbutton
        console.log(store.addbutton)
    }

    return(
            <div id="formContainer" className={store.addbutton ? "fixed  inset-0 flex-row items-center justify-center bg-black bg-opacity-50" :"hidden"}>
             <form className=' bg-slate-500  max-w-lg mt-80 ml-96' >
                <button type='reset' className=' float-right text-lg'  onClick={closeb}><AiOutlineClose/></button>     
                <br/><br/>
                <div className='text-center'>
                <input id="title" className=' ' name="title" type="text" placeholder="Enter title" onChange={handleChangeT} />
                 <br/><br/>
                 
                 <input id="description" className=' ' name="description" type="text" placeholder="Enter description" onChange={handleChangeD} />
                 <br/><br/>
                 <button type="reset" className=" ml-auto bg-blue-400 rounded-lg font-bold" onClick={addV}>ADD</button>
                 </div>
            </form>
            </div>

        
    )
})
export default addTodo
