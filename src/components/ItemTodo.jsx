import { useState } from "react";

const ItemTodo = ({ todo,onDelete,isDone,onProgress }) => {

    const [onCheck, setOnCheck] = useState(false)

    const isCheck =()=>{
      const ref = onCheck ? false : true
      setOnCheck(ref)

      isDone(todo.id)
      onProgress()
    }
    

  return (
    <>
      <li className={`flex justify-between items-center text-black border border-gray-300 rounded-md p-2 m-2 w-full bg-[#EEEEEE] ${onCheck && "bg-green-400"} `}>

        <div className="" style={{ fontFamily: "cursive" }}>{todo.text}</div>

        <div>
          <button onClick={isCheck}>
            <span className={`material-symbols-outlined  rounded-full hover:bg-green-400 p-1 `}>
              check_circle
            </span>
          </button>

          <button onClick={()=>onDelete(todo.id)}>
            <span className="material-symbols-outlined hover:bg-red-600 rounded-full p-1">
              delete
            </span>
          </button>
        </div>

      </li>
    </>
  );
};

export default ItemTodo;
