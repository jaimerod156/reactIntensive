import { useState } from "react";
import {db} from "../data/firebase";
import { collection, addDoc } from "firebase/firestore";


export function AddTodo(){
  const [title, setTitle] = useState([]);
  const Insertar = async (e)=>{
    e.preventDefault();
    if(title !== ""){
      await addDoc(collection(db, "todos"),{
        title,
        completed:false,
      });
      setTitle("");
    }
  }
  return (
    <div>
      <form onSubmit={Insertar}>
        <div className="input_container">
          <input type="text" placeholder="Ingresar tarea..." value={title} onChange={(e)=> setTitle(e.target.value)} />
        </div>
        <div className="btn_container">
          <button>Insertar</button>
        </div>
      </form>
    </div>
  );
  };