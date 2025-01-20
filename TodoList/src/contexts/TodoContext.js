import { useContext } from "react";
import { createContext } from "react";

export const TodoContext = createContext({
    todos:[{
        id : 1,
        todo : "todomsg",
        completed : false,
    }],

    addTodo : (todo)=>{},
    updateTodo : (id, todo)=>{},
    deleteTodo : (id)=>{},
    toggleTodo : ()=>{}
});

export const useTodo=()=>{
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider