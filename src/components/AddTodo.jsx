import { useState } from "react";

export const AddTodo = ({onAdd}) => {
    
   const [inputValue, setInputValue] = useState("")
   
   const onInputValue=(e)=>{
    const valor = e.target.value
    if(valor.length >= 100)return
    setInputValue(valor)
    
   }

   const onEnter =(e)=>{
      if(e.key === "Enter"){
        onAdd(inputValue)
        setInputValue("")
      }
   }
   

  return (
    <>
     
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs m-2 "
          value={inputValue}
          onChange={onInputValue}
          onKeyDown={onEnter}
          style={{ fontFamily: "Sacramento" }}
        />
        <button
         onClick={()=>onAdd(inputValue)} 
         className="btn btn-primary m-2"
         
        > 
        Add</button>
        
    </>
  );
};
