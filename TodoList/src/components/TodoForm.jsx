import { useState } from "react";
import { useTodo } from "../contexts/TodoContext";

function TodoForm(){

    const {addTodo}=useTodo();
    const[todo, setTodo] = useState("")

    const add=(e)=>{
        e.preventDefault()
        addTodo({todo, completed:false})
        setTodo("")
    }
    return(
        <form onSubmit={add} className="flex flex-wrap justify-center rounded-lg w-full max-w-2xl h-20 bg-cyan-900">
            <input className="w-full max-w-lg rounded-s-md px-4 mb-3 mt-3 outline-none"
            type="text"
            value={todo}
            placeholder="Add todo.."
            onChange={(e)=>setTodo(e.target.value)} />
            <button className="w-full max-w-20 bg-lime-500 mb-3 mt-3 rounded-e-lg "
            type="submit">Add</button>
        </form>
    )
}

export default TodoForm;