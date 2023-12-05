import { useEffect, useState } from "react";
import Todoform from "./todoform";
import Todo from "./todo";
import { v4 as uuidv4} from "uuid";
import "../App.css"
import EditTodo from "./edittodoform";
uuidv4();

export default function Todowrapper() {
//localStorage bata data retrive garna ko lagi below code👇
const getLocalItems = () => {
  const list = localStorage.getItem('To-Do-Lists');

  if(list !== null) return JSON.parse(list);
}


const [ todos, setTodos ] = useState(getLocalItems());


//localStorage ma store garna ko lagi below code👇
useEffect(() => {
  window.localStorage.setItem('To-Do-Lists', JSON.stringify(todos));
}, [todos]);

  const addTodo = todo => {
    setTodos([...todos, {id: uuidv4(), task: todo, completed: false, isEditing: false}])
  };

  const toggleComplete = id => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo ))
  };

  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id))
  };

  const editTodo = id => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, isEditing : !todo.isEditing} : todo))
  };

  const editTask = (task, id ) => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, task, isEditing : !todo.isEditing} : todo))
  };

  return (
    <div className='TodoWrapper'>
      <h1>Add your Tasks!!</h1>
      <Todoform addTodo = {addTodo} />
      {
        todos.map((todo, index) => {
          return (
            todo.isEditing ? (
              <EditTodo editTodo={editTask} task={todo}/>
            ) :
          <Todo task={todo} key={index} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo}/>
        )})
      }
    </div>
  )
}


