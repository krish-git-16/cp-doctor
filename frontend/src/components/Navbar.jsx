import { Link, NavLink } from "react-router-dom";
import Button from "./Button";

function Navbar() {
  return (
    <nav className="bg-slate-900 border-b border-slate-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto h-16 px-6 flex items-center justify-between">
        <Link to="/" className="text-3xl font-bold text-blue-500">CP Doctor</Link>

        <div className="flex items-center gap-8">
          <NavLink to="/" className="text-gray-300 hover:text-white transition">Home</NavLink>
          <NavLink to="/login" className="text-gray-300 hover:text-white transition">Login</NavLink>
          <Link to="/register"><Button text="Register" className="px-5 py-2" /></Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;