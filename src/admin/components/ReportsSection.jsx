import React, { useState, useEffect } from "react";
import { FileText, Plus, MoreVertical, Edit, Trash2 } from "lucide-react";

export default function ReportsSection({
  reports = [],
  deleteReport,
  setSelectedReport,
  setShowReportModal,
}) {
  const [openMenu, setOpenMenu] = useState(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".menu-wrapper")) {
        setOpenMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMenu = (id) => {
    setOpenMenu(openMenu === id ? null : id);
  };

  return (
    <section className="bg-gray-50 rounded-xl p-6 shadow-md">
      
      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <FileText className="w-6 h-6 text-red-600" />
            Reports
          </h2>
          <p className="text-gray-500 text-sm">
            Emergency incidents, fire operations, and response documentation
          </p>
        </div>

        <button
          onClick={() => {
            setSelectedReport(null);
            setShowReportModal(true);
          }}
          className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
        >
          <Plus className="w-4 h-4" />
          New Report
        </button>
      </div>

      {/* REPORT CARDS */}
      <div className="space-y-4">
        {reports.length === 0 && (
          <div className="text-center text-gray-500 py-10 bg-white rounded-xl shadow-sm">
            No reports found.
          </div>
        )}

        {reports.map((report) => (
          <div
            key={report.id}
            className="bg-white rounded-xl shadow-sm p-5 hover:shadow-md transition relative"
          >
            <div className="flex justify-between items-start">
              
              {/* LEFT CONTENT */}
              <div>
                <h3 className="font-semibold text-lg text-gray-800">
                  {report.title}
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  {report.date}
                </p>
                {report.description && (
                  <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                    {report.description}
                  </p>
                )}
              </div>

              {/* THREE DOTS */}
              <div className="relative menu-wrapper">
                <button
                  onClick={() => toggleMenu(report.id)}
                  className="p-2 rounded-full hover:bg-gray-100"
                >
                  <MoreVertical className="w-5 h-5 text-gray-600" />
                </button>

                {openMenu === report.id && (
                  <div className="absolute right-0 mt-2 w-40 bg-white border rounded-xl shadow-lg flex flex-col z-50">
                    <button
                      onClick={() => {
                        setSelectedReport(report);
                        setShowReportModal(true);
                        setOpenMenu(null);
                      }}
                      className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 text-gray-700"
                    >
                      <Edit className="w-4 h-4 text-blue-600" />
                      Edit
                    </button>

                    <button
                      onClick={() => {
                        deleteReport(report.id);
                        setOpenMenu(null);
                      }}
                      className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 text-red-600"
                    >
                      <Trash2 className="w-4 h-4" />
                      Delete
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
