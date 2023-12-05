import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Todo({task, toggleComplete, deleteTodo, editTodo}) {
  return (
    <div className="Todo">
      <p style={{cursor: "pointer"}} onClick={() => toggleComplete(task.id)} className={`${task.completed ? "completed" : ""}`}> {task.task} </p>
      <div>
        <FontAwesomeIcon icon={faPenToSquare} style={{cursor: "pointer"}} onClick={() =>editTodo(task.id)}/>
        <FontAwesomeIcon icon={faTrash} style={{cursor: "pointer"}} onClick={() => deleteTodo(task.id)} />
      </div>
    </div>
  )
}
