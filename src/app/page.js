"use client"

import AddTaskBar from "@/components/AddTaskBar";
import TodoItem from "@/components/TodoItem";
import { useState } from "react";

export default function Home() {
  const [tasks, setTasks] = useState(["task1", "task2"]);

  const handleAddTask = (taskText) => {
    setTasks([...tasks, taskText]);
  };

  const handleDeleteTask = (taskText) => {
    const index = tasks.indexOf(taskText); // first match
    if (index !== -1) {
      setTasks(tasks.filter((_, i) => i !== index));
    }
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg max-w-sm mx-auto">
      <h1 className="text-black text-xl font-bold flex items-center gap-2 mb-4">
        📅 To-Do List
      </h1>

      <AddTaskBar onAddTask={handleAddTask}/>

      <div className="mt-4">
        {tasks.map((task, index) => (
          <TodoItem
            key={index}
            text={task}
            onDeleteTask={handleDeleteTask}/>
        ))}
      </div>
    </div>
  );
}
