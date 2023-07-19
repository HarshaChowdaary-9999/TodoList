"use client";
import { useRouter } from 'next/navigation';
import { Instance, types } from 'mobx-state-tree';
import { observer } from 'mobx-react-lite';
import update from '../todoStore'
import { Interface } from 'readline';
import DisplayTodo from './DisplayTodo';
import { todo } from 'node:test';
interface checkbox{
    store: Instance <typeof update>
}
const Todo:React.FC<checkbox>= observer(({store}) => {
    
    
    return(
        
        <div className="max-w-4xl mx-auto bg-slate-200 rounded-lg">
            <table className="min-w-full divide-y divide-gray-200 ">
                <thead>
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            <span className="sr-only">Checkbox</span>
                        </th>
                        <th scope="col" className="px-6 py-3">Title</th>
                        <th scope="col" className="px-6 py-3">Description</th>
                        <th scope="col" className="px-6 py-3">Action</th>
                        
                    </tr>
                </thead>
               
                    <DisplayTodo store={store}/>
                
                
                
                
            </table>


        </div>
    )
})
export default Todo;
