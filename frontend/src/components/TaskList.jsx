import { deleteTask, updateTask } from "../api/task.api";

const TaskList = ({ tasks, refresh }) => {
  return (
    <ul className="space-y-2">
      {tasks.map((task) => (
        <li
          key={task._id}
          className="flex justify-between items-center border p-2 rounded"
        >
          <span
            className={`cursor-pointer ${
              task.status === "completed"
                ? "line-through text-slate-400"
                : ""
            }`}
            onClick={() =>
              updateTask(task._id, {
                status:
                  task.status === "pending"
                    ? "completed"
                    : "pending"
              }).then(refresh)
            }
          >
            {task.title}
          </span>

          <button
            onClick={() => deleteTask(task._id).then(refresh)}
            className="text-red-500 text-sm hover:text-red-600"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
