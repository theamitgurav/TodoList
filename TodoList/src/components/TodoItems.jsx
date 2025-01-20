import { useState } from "react"

function TodoItems({todo}){
    const [todoMsg, setTodoMsg] = useState(todo.todo)
    return(
        <div>
            <input type="text"
            value={todoMsg} 
            onChange={(e)=>setTodoMsg(e.target.value)}/>
        </div>
    )
}

export default TodoItems