import React from 'react'
const Todo=({todo,index,onComplete,onRemove})=>{
    return(
        <> 
        <div className='todo'style={{textDecoration:todo.isCompleted?'line-through':'none'}}><button onClick={()=>onRemove(index)}>X</button>{todo.text}<button onClick={()=>onComplete(index)} >{todo.isCompleted?'Undo':'Complete'}</button></div>
        </>
    )
}
export default Todo;