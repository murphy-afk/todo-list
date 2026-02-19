export default function ListItem ({item}) {
  return(
    <li>
      <p>{item.title}</p>
      <p>{item.priority}</p>
    </li>
  )
}