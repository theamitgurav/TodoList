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

  return (
    <TodoProvider value={{todos,addTodo}}>
      <TodoForm/>
      <div >
        {todos.map((todo)=>(
          <div key={todo.id}>
            <TodoItems todo={todo}/>
          </div>
        ))}
      
      </div>
      
    </TodoProvider>
  )
}

export default App
