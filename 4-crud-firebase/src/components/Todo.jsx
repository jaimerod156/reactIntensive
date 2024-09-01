import { useState } from "react";

export function Todo({todo, handleDelete,handleEdit, toggleComplete}){
  const [newTitle, setNewTitle] = useState(todo.title);

  const handleChange = (e) =>{
    if(todo.completed === true){
      setNewTitle(todo.title);//se mantiene como en la base de dato
    }else{
      todo.title = "";
      setNewTitle(e.target.value);//modificar valor en la base de dato
    }

  }

  return (
    <div className="todo">
      <input className="list" style={{textDecoration:todo.completed? "line-through":"none"}}
       value={todo.title===""?newTitle:todo.title} onChange={handleChange} />
       <div>
          <button className="btn-complete" onClick={ ()=>toggleComplete(todo) }>Marcar</button>
          <button className="btn-edit" onClick={ ()=>handleEdit(todo, newTitle) }>Editar</button>
          <button className="btn-delete" onClick={ ()=>handleDelete(todo.id) }>eliminar</button>
       </div>
    </div>
  );
};