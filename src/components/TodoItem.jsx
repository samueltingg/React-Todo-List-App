

export default function TodoItem({ text, onDeleteTask}) {

	const handleDeleteClick = () => {
		onDeleteTask(text);
	}

	return (
	  <div className="flex items-center justify-between px-3 py-2 rounded-md shadow-sm bg-white my-2">
		{/* Left: checkbox + text */}
		<div className="text-black flex items-center gap-2">
		  <span className="text-orange-500">✔</span>
		  <p>{text}</p>
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
