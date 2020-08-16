import React,{useState} from 'react';
import Todo from'./Todo'
import TodoInput from './TodoInput'
import './App.css';

function App() {
  const [todos,setTodo]=useState([
    {
      text:"sleep 😴",
      isCompleted:false
    },
    {
      text:"Pay bills 😱",
      isCompleted:false
    }, {
      text:"Cook Food 😆",
      isCompleted:false
    }
  ])
  const addTodo=text=>{
   const newtodo=[...todos,{text,isCompleted:false}]
    setTodo(newtodo)

  }
  const onRemove=(index)=>{
    const newtodos=[...todos]
    console.log(newtodos[index])

    newtodos.splice(index,1)
    setTodo(newtodos)
  }
  const onComplete=index=>{
    const newtodos=[...todos]
    newtodos[index].isCompleted=!( newtodos[index].isCompleted)
    setTodo(newtodos)
  }
  return (
    <div className="App">
      <div className='container'>
      <h1>Simple Todo App Using Reacts Hooks 🧑‍💻  </h1>
     
      <TodoInput addTodo={addTodo}/>
    <div className='todolist'>
      {todos.map((todo,index)=>
      (
        <Todo key={index} todo={todo} index={index} onComplete={onComplete} onRemove={onRemove}/>
      ))
    }
      </div>
      </div>
      
   
    </div>
  );
}

export default App;
