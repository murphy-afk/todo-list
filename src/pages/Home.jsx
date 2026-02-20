import { useEffect, useState } from "react"
import ListItem from "../components/ListItem"
import axios from "axios"

export default function Home() {
  const [todos, setTodos] = useState([])
  const [completed, setCompleted] = useState(false)
  

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BACKEND_URL}?completed=${completed}`)
      .then((res) => setTodos(res.data))
  }, [completed])

  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-10">
      <div className="max-w-3xl mx-auto">

        <h1 className="text-2xl font-semibold mb-8 text-center text-gray-300">
          To-Do List
        </h1>
        <div className="flex justify-center mb-6">
          <button
            className={`px-4 py-2 rounded-lg ${completed ? "bg-gray-700 text-gray-300" : "bg-teal-600 text-white hover:bg-teal-700"}`}
            onClick={() => setCompleted(false)}
          >
            Show To Do
          </button>
          <button
            className={`ml-2 px-4 py-2 rounded-lg ${completed ? "bg-teal-600 text-white hover:bg-teal-700" : "bg-gray-700 text-gray-300"}`}
            onClick={() => setCompleted(true)}
          >
            Show Completed
          </button>
        </div>

        <ul className="space-y-4">
          {todos.map(todo => (
            <ListItem item={todo} key={todo.id} />
          ))}
        </ul>
      </div>
    </div>
  )
}
