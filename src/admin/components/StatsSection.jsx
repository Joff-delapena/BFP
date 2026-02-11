import React from "react";
import { Users, FileText } from "lucide-react";

export default function StatsSection({ officers, reports }) {
  return (
    <section className="mb-8">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Total Officers */}
        <div className="bg-white/90 backdrop-blur-md rounded-xl shadow-lg p-6 flex gap-4 border-l-4 border-red-600 hover:scale-105 transition-transform">
          <Users className="w-10 h-10 text-red-600" />
          <div>
            <p className="text-gray-500 text-sm">Total Officers</p>
            <h2 className="text-2xl font-bold">{officers.length}</h2>
          </div>
        </div>

        {/* Total Reports */}
        <div className="bg-white/90 backdrop-blur-md rounded-xl shadow-lg p-6 flex gap-4 border-l-4 border-blue-600 hover:scale-105 transition-transform">
          <FileText className="w-10 h-10 text-blue-600" />
          <div>
            <p className="text-gray-500 text-sm">Total Reports</p>
            <h2 className="text-2xl font-bold">{reports.length}</h2>
          </div>
        </div>
      </div>
    </section>
  );
}
