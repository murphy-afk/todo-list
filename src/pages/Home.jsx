import { useEffect, useState } from "react"
import ListItem from "../components/ListItem"
import axios from "axios"

export default function Home() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    axios.get(import.meta.env.VITE_BACKEND_URL)
      .then((res) => setTodos(res.data))
  }, [])

  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-10">
      <div className="max-w-3xl mx-auto">

        <h1 className="text-2xl font-semibold mb-8 text-center text-gray-300">
          To-Do List
        </h1>

        <ul className="space-y-4">
          {todos.map(todo => (
            <ListItem item={todo} key={todo.id} />
          ))}
        </ul>
      </div>
    </div>
  )
}
