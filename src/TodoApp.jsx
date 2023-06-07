
import { useState } from "react";
import { AddTodo } from "./components/AddTodo";
import ItemTodo from "./components/ItemTodo";

export const TodoApp = () => {

  const [arregloTodos, setArregloTodos] = useState([])
  const [progress, setProgress ] = useState(0)



  const onAdd=(todo)=>{
    
    const newTodo = {
      text:todo,
      id:Math.floor(Math.random() * 10000),
      done:false
    }

    if(newTodo.text.length<3)return
    setArregloTodos([...arregloTodos,newTodo])
    
  }
  
  const onDelete=(id)=>{

    const newArray = arregloTodos.filter(todo=>todo.id!==id)
    setArregloTodos(newArray)

  }

  const isDone=(id)=>{

   const todoIndex = arregloTodos.findIndex(todo=>todo.id===id)

   if (todoIndex !== -1) {
    arregloTodos[todoIndex].done = !arregloTodos[todoIndex].done;
  } 
  
  }

  const onProgress =()=>{
    const completedTodos = arregloTodos.filter(todo => todo.done).length;
     const totalTodo = arregloTodos.length;
      const progressPercentage = (completedTodos / totalTodo) * 100;
        const total = Math.round(progressPercentage)
  setProgress(total);
  }

 
  // bg-[#6e6161]
  
  return (
    <div  className=" min-h-screen p-5 ">

      <div className=" flex justify-center items-center">
       <AddTodo onAdd={onAdd} />

       <div className="ms-3">
       <div className={`radial-progress bg-primary text-primary-content border-4 border-primary`} style={{ "--value": progress }}>{progress}%</div>
       </div>

      </div>
        
      
      <div className="mt-5 flex justify-center">
        <ul className=" w-full sm:w-1/2 p-4 flex flex-col items-center text-white">
        {
          arregloTodos.map(todo=><ItemTodo key={todo.id} todo={todo} onDelete={onDelete} isDone={isDone} onProgress={onProgress} />)
        }
        </ul>
      </div>


    </div>
  );
};
