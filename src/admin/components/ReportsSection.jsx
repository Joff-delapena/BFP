import React, { useState, useEffect } from "react";
import { FileText, Plus, MoreVertical, Edit, Trash2 } from "lucide-react";

export default function ReportsSection({
  reports = [],
  deleteReport,
  setSelectedReport,
  setShowReportModal,
}) {
  const [openMenu, setOpenMenu] = useState(null);

  // Close dropdown if click outside anywhere
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
    <section className="bg-white rounded-xl shadow-md p-6">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold flex gap-2 items-center">
          <FileText className="w-6 h-6 text-blue-600" /> Reports Management
        </h2>

        <button
          onClick={() => {
            setSelectedReport(null);
            setShowReportModal(true);
          }}
          className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
        >
          <Plus className="w-4 h-4" /> Add Report
        </button>
      </div>

      {/* TABLE */}
      <table className="w-full border rounded-lg table-fixed">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 text-left w-1/2">Title</th>
            <th className="p-3 text-left w-1/4">Date</th>
            <th className="p-3 text-center w-1/4">Action</th>
          </tr>
        </thead>
        <tbody>
          {reports.length === 0 && (
            <tr>
              <td colSpan="3" className="p-6 text-center text-gray-500">
                No reports found.
              </td>
            </tr>
          )}

          {reports.map((report) => (
            <tr key={report.id} className="border-t hover:bg-gray-50 relative">
              <td className="p-3 font-medium truncate">{report.title}</td>
              <td className="p-3 truncate">{report.date}</td>

              {/* THREE DOTS BUTTON */}
              <td className="p-3 text-center relative menu-wrapper">
                <button
                  onClick={() => toggleMenu(report.id)}
                  className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full z-10 relative"
                >
                  <MoreVertical className="w-4 h-4 text-gray-600" />
                </button>

                {openMenu === report.id && (
                  <div className="absolute right-0 bottom-full mb-2 w-36 bg-white border rounded-xl shadow-lg flex flex-col z-50">
                    <button
                      onClick={() => {
                        setSelectedReport(report);
                        setShowReportModal(true);
                        setOpenMenu(null);
                      }}
                      className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded-lg text-gray-700 font-medium"
                    >
                      <Edit className="w-4 h-4 text-blue-600" /> Edit
                    </button>

                    <button
                      onClick={() => {
                        deleteReport(report.id);
                        setOpenMenu(null);
                      }}
                      className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded-lg text-red-600 font-medium"
                    >
                      <Trash2 className="w-4 h-4" /> Delete
                    </button>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
