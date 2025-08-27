import { useState } from "react"

export default function AddTaskBar({ onAddTask }) {
	const [value, setValue] = useState("");
	// use 'useState' instead of 'useRef' for live validation

	const handleAddClick = () => {
		if (value === "") { // check if empty
			return;
		}
		onAddTask(value);
		setValue("");
	}

	return (
	  <div className="flex w-full bg-gray-100 rounded-full p-1 mt-4">
		<input
		  type="text"
		  placeholder="Add your task"
			value={value}
			onChange={ (e) => setValue(e.target.value) } // update state
		  className="flex-1 px-4 py-2 bg-transparent outline-none text-gray-700"
		/>
		<button
			className="bg-orange-500 text-white px-6 py-2 rounded-full font-semibold"
			onClick={ handleAddClick }
			>
		  ADD +
		</button>
	  </div>
	);
}
