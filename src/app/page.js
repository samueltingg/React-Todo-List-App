"use client"

import AddTaskBar from "@/components/AddTaskBar";
import TodoItem from "@/components/TodoItem";
import { useState, useEffect } from "react";

export default function Home() {
  const [tasks, setTasks] = useState([]);
  // const [completed, setCompleted] = useState(false);

  // Load tasks from DB
  useEffect(() => {
    fetch("/api/tasks")
      .then((res) => res.json())
      .then(setTasks);
  }, []);

  // Add task
  const handleAddTask = async (text) => {
    const res = await fetch("/api/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });
    const newTask = await res.json();
    setTasks([...tasks, newTask]);
  };

  // Delete task
  const handleDeleteTask = async (id) => {
    await fetch(`/api/tasks/${id}`, { method: "DELETE" });
    setTasks(tasks.filter((t) => t.id !== id));
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
            key={task.id}
            id={task.id}
            text={task.text}
            onDeleteTask={() => handleDeleteTask(task.id)}
          />
        ))}
      </div>
    </div>
  );
}
