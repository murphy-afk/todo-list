import { useEffect, useState } from "react"
import ListItem from "../components/ListItem"
import axios from "axios"
// import { todos } from "../data"

export default function Home() {
  const [todos, setTodos] = useState([])
  useEffect(() => {
    axios.get("http://localhost:3000/todos")
    .then((res) => setTodos(res.data))
  }, [])

  return (
    <>
      <h1>Home</h1>
      <h2>To do list</h2>
      <ul>
        {todos.map(todo => <ListItem item={todo} key={todo.id} />)}
      </ul>
    </>
  )
}