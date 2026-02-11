import React from "react";
import { Users, FileText, ShieldCheck } from "lucide-react";

export default function Sidebar({ activeSection, setActiveSection }) {
  return (
    <aside className="w-64 bg-red-800 text-white flex flex-col">
      <div className="p-6 text-center font-bold text-xl border-b border-red-700">
        BFP Admin
      </div>

      <nav className="flex-1 px-4 py-6 space-y-2">
        <button
          className={`flex items-center gap-2 px-4 py-2 rounded w-full ${
            activeSection === "stats" ? "bg-red-700" : "hover:bg-red-700"
          }`}
          onClick={() => setActiveSection("stats")}
        >
          <ShieldCheck className="w-5 h-5" /> Stats
        </button>

        <button
          className={`flex items-center gap-2 px-4 py-2 rounded w-full ${
            activeSection === "officers" ? "bg-red-700" : "hover:bg-red-700"
          }`}
          onClick={() => setActiveSection("officers")}
        >
          <Users className="w-5 h-5" /> Officers
        </button>

        <button
          className={`flex items-center gap-2 px-4 py-2 rounded w-full ${
            activeSection === "reports" ? "bg-red-700" : "hover:bg-red-700"
          }`}
          onClick={() => setActiveSection("reports")}
        >
          <FileText className="w-5 h-5" /> Reports
        </button>
      </nav>
    </aside>
  );
}
