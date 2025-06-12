import { useState } from "react";

const allTodos = [
  {
    title: "Todo 1",
    completed: false
  },
  {
    title: "Todo 2",
    completed: false
  },
  {
    title: "Todo 3",
    completed: false
  }
]

function App() {
  // const todos = ["Learn React", "Learn Vite", "Learn Javascript"];
  const [todos, setTodos] = useState(allTodos);
  const [todoText, setTodoText] = useState("");

  const onClickAddTodo = () => {
    setTodos([
      ...todos,
      todoText
    ])
    setTodoText("");
  }

  const onChangeTodoText = (e) => {
    setTodoText(e.target.value);
  }

  const onClickItem = (currentTodo) => {
    console.log(currentTodo);
  }

  return (
    <div>
      <h1>This is my todo app</h1>
      <input type="text" id="todoText" onChange={onChangeTodoText} value={todoText} />
      <button onClick={onClickAddTodo}>Add Todo</button>
      <ol>
      {
        todos.map((todo, idx) => (
          <li 
            onClick={ () => onClickItem(todo)} key={idx}
            style={{
              textDecoration: todo.completed ? 'line-through': 'none'
            }}
          >
              {todo.title}
          </li>
        ))
      }
      </ol>
    </div>
  )
}

export default App
