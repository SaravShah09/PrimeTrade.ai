import { useEffect, useState } from "react";
import { getTasks } from "../api/task.api";
import { useAuth } from "../auth/AuthContext";
import Navbar from "../components/Navbar";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

const Dashboard = () => {
  const { user } = useAuth();
  const [tasks, setTasks] = useState([]);

  const loadTasks = async () => {
    const res = await getTasks();
    setTasks(res.data);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="max-w-2xl mx-auto mt-6 bg-white p-5 rounded border">
        <h2 className="text-lg font-semibold mb-3">
          Welcome, {user?.name}
        </h2>

        <TaskForm onTaskAdded={loadTasks} />
        <TaskList tasks={tasks} refresh={loadTasks} />
      </div>
    </div>
  );
};

export default Dashboard;
