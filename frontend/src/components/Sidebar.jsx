import { NavLink } from "react-router-dom";
import {
  FaChartLine,
  FaCode,
  FaUser,
  FaLink,
  FaSignOutAlt
} from "react-icons/fa";

function Sidebar() {
  const menuItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <FaChartLine />
    },
    {
      name: "Practice",
      path: "/practice",
      icon: <FaCode />
    },
    {
      name: "Profile",
      path: "/profile",
      icon: <FaUser />
    },
    {
      name: "Connect",
      path: "/connect",
      icon: <FaLink />
    }
  ];

  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("cfHandle");
    window.location.href = "/login";
  }

  return (
    <aside className="w-64 min-h-screen bg-slate-800 border-r border-slate-700 flex flex-col">
      <div className="h-20 flex items-center justify-center border-b border-slate-700">
        <h1 className="text-3xl font-bold text-blue-500">
          CP Doctor
        </h1>
      </div>

      <nav className="flex-1 px-4 py-6">
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-gray-300 hover:bg-slate-700 hover:text-white"
              }`
            }
          >
            <span className="text-lg">{item.icon}</span>
            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>

      <div className="p-4 border-t border-slate-700">
        <button
          onClick={handleLogout}
          className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg transition"
        >
          <FaSignOutAlt />
          Logout
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;