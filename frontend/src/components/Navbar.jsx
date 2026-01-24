import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

const Navbar = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center px-6 py-3 bg-slate-800 text-white">
      <h1 className="text-lg font-medium">Task App</h1>

      <button
        onClick={() => {
          logout();
          navigate("/login");
        }}
        className="bg-red-500 px-3 py-1 rounded text-sm hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
