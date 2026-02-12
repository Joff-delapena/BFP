import React from "react";
import { useNavigate } from "react-router-dom";
import { Users, FileText, ShieldCheck, LogOut } from "lucide-react";

export default function Sidebar({ activeSection, setActiveSection }) {
  const navigate = useNavigate();

  const navItemStyle = (section) =>
    `flex items-center gap-3 px-5 py-3 rounded-lg w-full text-left transition-all duration-200 ${
      activeSection === section
        ? "bg-white text-red-700 font-semibold shadow"
        : "hover:bg-red-700 text-white"
    }`;

  const logoutStyle =
    "flex items-center gap-3 px-5 py-3 rounded-lg w-full text-left text-white hover:bg-red-600 transition-all duration-200";

  // Logout handler
  const handleLogout = () => {
    // Optional: clear user session / tokens here
    // localStorage.removeItem('token'); 
    navigate("/admin"); // navigate to login page
  };

  return (
    <aside className="w-64 bg-gradient-to-b from-red-800 to-red-700 text-white flex flex-col shadow-lg">

      <div className="p-6 border-b border-red-600">
        <h2 className="text-lg font-bold">BFP - Station 1 Admin</h2>
        <p className="text-xs text-red-200">
          Station Management System
        </p>
      </div>

      <nav className="flex-1 px-4 py-6 space-y-3">

        <button
          className={navItemStyle("stats")}
          onClick={() => setActiveSection("stats")}
        >
          <ShieldCheck className="w-5 h-5" />
          Dashboard
        </button>

        <button
          className={navItemStyle("officers")}
          onClick={() => setActiveSection("officers")}
        >
          <Users className="w-5 h-5" />
          Officers
        </button>

        <button
          className={navItemStyle("reports")}
          onClick={() => setActiveSection("reports")}
        >
          <FileText className="w-5 h-5" />
          Reports
        </button>

      </nav>

      {/* Logout Button */}
      <div className="px-4 py-4 border-t border-red-600">
        <button
          onClick={handleLogout}
          className={logoutStyle}
        >
          <LogOut className="w-5 h-5" />
          Logout
        </button>
      </div>

      <div className="p-2 text-xs text-red-200 text-center">
        © 2026 BFP System
      </div>
    </aside>
  );
}
