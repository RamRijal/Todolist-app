import { useState } from "react"

export default function Todoform({ addTodo }) {
  const [value, setValue] = useState("")

  function handleSubmit(e) {
    e.preventDefault();
    addTodo(value);
    setValue("");
  }
  return (
    <>
      <form className='TodoForm' onSubmit={handleSubmit}>
        <input type='text' className='todo-input' value={value} placeholder='Enter your task' onChange={(e) => {
          setValue(e.target.value);
        }} />
        <button type='submit' className='todo-btn'>
          Add Task
        </button>
      </form>
    </>
  )
}

