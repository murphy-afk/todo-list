import axios from "axios";
import { useEffect, useState } from "react";

export default function ListItem({ item }) {
  const [completed, setCompleted] = useState(item.completed);

  useEffect(() => {
    if (completed === item.completed) return; 
    axios
      .patch(`${import.meta.env.VITE_BACKEND_URL}/${item.id}`, { completed })
      .then((res) => console.log("Updated:", res.data))
      .catch((err) => console.error(err));
  },
    [completed, item.completed, item.id]);

  const priorityStyles = {
    Low: "bg-green-700/40 text-green-300 border-green-500/40",
    Medium: "bg-yellow-700/40 text-yellow-300 border-yellow-500/40",
    High: "bg-red-700/40 text-red-300 border-red-500/40"
  };

  return (
    <li className="bg-gray-800 border border-gray-700 rounded-lg p-5 shadow-md hover:shadow-teal-500/20 hover:border-teal-400 transition-all">

      <div className="flex justify-between items-start mb-2">
        <h3 className="text-xl font-semibold text-teal-200">{item.title}</h3>

        <span className={`text-xs px-3 py-1 rounded-full border ${priorityStyles[item.priority]}`} >
          Priority {item.priority}
        </span>
      </div>

      <p className="text-gray-300 mb-3">{item.description}</p>

      <div className="flex justify-between items-center text-sm text-gray-400">
        <p>
          <span className="font-medium text-gray-300">Deadline:</span>{item.deadline}
        </p>

        <p className={`font-semibold ${completed ? "text-green-400" : "text-yellow-400"}`} >
          {completed ? "Completed" : <button
            className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition-colors"
            onClick={(e) => setCompleted(true)}>Mark as Done</button>}
        </p>
      </div>
    </li>
  );
}
