import { useState } from "react"

export default function EditTodo({editTodo, task}) {
  const [value, setValue] = useState(task.task)

  function handleSubmit(e) {
    e.preventDefault(); 
    editTodo(value, task.id);
    setValue("");
  }
  return (
    <>
      <form className='TodoForm' onSubmit={handleSubmit}> 
      <input type='text' className='todo-input' value={value} placeholder='Update your task' onChange={(e) => {
        setValue(e.target.value);
      }}/> 
      <button type='submit' className='todo-btn'>
        Update Task  
      </button> 
      </form>
    </>
  )
}

