import React from "react";
import { Users, FileText, ShieldCheck } from "lucide-react";

export default function Sidebar({ activeSection, setActiveSection }) {

  const navItemStyle = (section) =>
    `flex items-center gap-3 px-5 py-3 rounded-lg w-full text-left transition-all duration-200 ${
      activeSection === section
        ? "bg-white text-red-700 font-semibold shadow"
        : "hover:bg-red-700 text-white"
    }`;

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

      <div className="p-4 text-xs text-red-200 border-t border-red-600">
        © 2026 BFP System
      </div>
    </aside>
  );
}
