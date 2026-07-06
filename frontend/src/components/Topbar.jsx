import { FaUserCircle } from "react-icons/fa";

function Topbar() {
  const handle = localStorage.getItem("cfHandle") || "Not Connected";

  return (
    <header className="h-20 bg-slate-800 border-b border-slate-700 px-8 flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold text-white">Dashboard</h1>
        <p className="text-gray-400 mt-1">
          Welcome back! Keep improving your competitive programming.
        </p>
      </div>

      <div className="flex items-center gap-4">
        <div className="text-right">
          <p className="text-white font-semibold">{handle}</p>
          <p className="text-sm text-gray-400">Codeforces Handle</p>
        </div>

        <FaUserCircle className="text-5xl text-blue-500" />
      </div>
    </header>
  );
}

export default Topbar;