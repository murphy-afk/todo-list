import ListItem from "../components/ListItem"
import { todos } from "../data"

export default function Home() {
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