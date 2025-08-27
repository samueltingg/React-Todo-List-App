import { useState } from "react"

export default function TodoItem({ text, onDeleteTask}) {
  const [completed, setCompleted] = useState(false);

	const toggleComplete = () => {
		setCompleted((prev) => !prev);
	};

  const handleDeleteClick = () => {
    onDeleteTask(text);
  };


	return (
	  <div className="flex items-center justify-between px-3 py-2 rounded-md shadow-sm bg-white my-2">
		{/* Left: checkbox + text */}
		{/* <div className="text-black flex items-center gap-2">
		  <span className="text-orange-500">✔</span>
		  <p>{text}</p>
		</div> */}

			<div className="text-black flex items-center gap-2">
        <button
          onClick={toggleComplete}
          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
            completed
              ? "bg-orange-500 border-orange-500 text-white"
              : "border-gray-400"
          }`}
        >
          {completed && "✔"}
        </button>
        <p className={completed ? "line-through text-gray-400" : ""}>{text}</p>
      </div>

		{/* Right: delete button */}
		<button
			className="text-gray-500 hover:text-red-500"
			onClick={handleDeleteClick}
		>
		  🗑
		</button>
	  </div>

	);
}
