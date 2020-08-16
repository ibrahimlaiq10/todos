import React ,{useState}from 'react'
const Todoinput=({addTodo})=>{
    const [value,setValue]=useState('')
    const handle=(e)=>{
        e.preventDefault();
        if(!value) return
        addTodo(value)
        setValue('')
        


    }
return(
    <div>
        <form onSubmit={handle}>

<input type='text' placeholder='Enter New Todo' value={value}onChange={e=>{setValue(e.target.value)}}></input>
      </form>
    </div>
)
}
export default Todoinput;