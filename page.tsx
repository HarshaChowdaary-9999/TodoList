"use client"
import React from 'react';
import Counter from './counter';
import { useLocalStore } from 'mobx-react-lite';
import { Instance, unprotect } from 'mobx-state-tree';
import TodoStore from './todoStore';
import Header from './components/Header';
import Todo from './components/Todo';
import AddTodo from './components/AddTodo';
import DisplayTodo from './components/DisplayTodo';
import CompletedTodo from './components/CompletedTodo'
import EditTask from'./components/EditTask'
import Onboard from './components/Onboard'

const HomePage: React.FC = () => {
  const todoStore = useLocalStore(() => TodoStore.create({todos:[{
    id:0,
    checkBox:false,
    title:"Hello",
    discription:"Deepu",
    progress:"ToDo"

  }]}));
  unprotect(todoStore)
   
  return (
    <div>
      <Header store={todoStore as Instance<typeof TodoStore>} />
      <Todo store={todoStore as Instance<typeof TodoStore>} />      
      <AddTodo store={todoStore as Instance<typeof TodoStore>}/>
      <CompletedTodo store={todoStore as Instance<typeof TodoStore>}/>
      <Onboard store={todoStore as Instance<typeof TodoStore>}/>
      <EditTask store={todoStore as Instance<typeof TodoStore>}/>
    </div>
  );
};

export default HomePage;
