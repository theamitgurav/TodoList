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
        <form onSubmit={add}>
            <input type="text"
            value={todo}
            placeholder="Add todo.."
            onChange={(e)=>setTodo(e.target.value)} />
            <button type="submit">Add</button>
        </form>
    )
}

export default TodoForm;