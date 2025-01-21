import { useState } from "react"
import { useTodo } from "../contexts/TodoContext"

function TodoItems({todo}){
    const [todoMsg, setTodoMsg] = useState(todo.todo)
    const [isTodoEditable, setIsTodoEditable] = useState(false)
    const {updateTodo, deleteTodo, toggleTodo}=useTodo();

    const editTodo = () => {
        updateTodo(todo.id, {...todo, todo:todoMsg})
        setIsTodoEditable(false)
    }
     
    return(
        <div className="w-full max-w-2xl flex flex-wrap justify-center bg-cyan-900 h-20 rounded-lg">
            <input className={`  outline-none w-full max-w-lg bg-transparent mt-3 mb-3 rounded-md text-xl   py-3 px-5 ${
                  isTodoEditable ? "border-black border" : "border-transparent"
              } ${todo.completed ? "line-through" : ""}`}
            type="text"
            value={todoMsg} 
            onChange={(e)=>setTodoMsg(e.target.value)}
            readOnly={!isTodoEditable}
            />
            
            <button className="bg-white p-2 mt-5 mb-5 ml-2 mr-2 rounded-md"
            onClick={()=>{
                if(todo.completed) return;

                if(isTodoEditable){
                    editTodo();
                }else setIsTodoEditable((prev)=>!prev);
            
            }}
            disabled={todo.completed}
            >
                {isTodoEditable?"📁" : "✏️"}
            </button>
            <button className="bg-white p-2 mt-5 mb-5 ml-2 mr-2 rounded-md"
            //   className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
              onClick={() => deleteTodo(todo.id)}
          >
              ❌
          </button>
        </div>
    )
}

export default TodoItems