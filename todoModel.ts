import { types } from "mobx-state-tree";


const update=types
                .model({   
                    id:types.number,                              
                    checkBox:types.optional(types.boolean,false), 
                    title:types.optional(types.string,""),
                    discription:types.optional(types.string,""),
                    progress:types.optional(types.string,"Todo")
                    
                })
                .actions(self =>({
                     
                    change(){
                        self.checkBox=!self.checkBox
                    },
                    updateTitle(title:string){
                        self.title=title
                    },
                    updateDiscription(discription:string){
                        self.discription=discription
                    },
                    updateProgress(progress:string){
                        self.progress=progress
                    }
                }))



export default update;
