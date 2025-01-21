import { useState } from 'react'
// import './App.css'
import TodoForm from './components/TodoForm'
import { TodoProvider } from './contexts/TodoContext'
import TodoItems from './components/TodoItems'


function App() {
  const [todos, setTodos] = useState([])

  const addTodo=(todo)=>{
    setTodos((prev)=>[{id:Date.now(), ...todo}, ...prev])
  }

  const updateTodo = (id, todo) =>{
    setTodos((prev)=>prev.map((prevTodo)=>(prevTodo.id===id?todo : prevTodo)))
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id))
  }

  return (
    <TodoProvider value={{todos,addTodo, updateTodo, deleteTodo}}>
      <div className="bg-cyan-950 min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-black">
      <TodoForm/>
      <div className='flex flex-wrap gap-3 mt-3'>
        {todos.map((todo)=>(
          <div key={todo.id} className='w-full'>
            <TodoItems todo={todo}/>
          </div>
        ))}
      
      </div>
      </div>
      </div>
      
    </TodoProvider>
  )
}

export default App
