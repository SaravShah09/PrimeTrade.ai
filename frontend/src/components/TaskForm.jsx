import { useState } from "react";
import { createTask } from "../api/task.api";

const TaskForm = ({ onTaskAdded }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    await createTask({ title });
    setTitle("");
    onTaskAdded();
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        className="flex-1 border p-2 rounded"
        placeholder="New task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button className="bg-blue-600 text-white px-4 rounded hover:bg-blue-700">
        Add
      </button>
    </form>
  );
};

export default TaskForm;
