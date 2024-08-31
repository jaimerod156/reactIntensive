
export function Todo({todo, handleDelete}){
  return (
    <div className="todo">
      <input style={{textDecoration:todo.completed? "line-through":"none"}}
       value={todo.title} />
       <div>
          <button onClick={ ()=>handleDelete(todo.id) }>eliminar</button>
       </div>
    </div>
  );
};