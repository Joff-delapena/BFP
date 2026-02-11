import React, { useState, useEffect } from "react";
import { Users, Plus, Edit, Trash2, MoreVertical } from "lucide-react";

export default function OfficersSection({
  officers = [],
  deleteOfficer,
  setSelectedOfficer,
  setShowOfficerModal,
}) {
  const [activeMenu, setActiveMenu] = useState(null);

  // Close dropdown if click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".menu-wrapper")) {
        setActiveMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMenu = (id) => {
    setActiveMenu(activeMenu === id ? null : id);
  };

  return (
    <section className="bg-white rounded-xl shadow-md p-6 mb-8 relative">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold flex gap-2 items-center">
          <Users className="w-6 h-6 text-red-600" />
          Officers Management
        </h2>

        <button
          onClick={() => {
            setSelectedOfficer(null);
            setShowOfficerModal(true);
          }}
          className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
        >
          <Plus className="w-4 h-4" /> Add Officer
        </button>
      </div>

      {/* TABLE */}
      <div className="overflow-visible relative">

        <table className="w-full border-collapse border rounded-lg table-fixed">
          <thead className="bg-gray-100 sticky top-0 z-10">
            <tr>
              <th className="p-3 text-left w-1/5">Name</th>
              <th className="p-3 text-left w-1/5">Rank</th>
              <th className="p-3 text-left w-1/5">Contact Number</th>
              <th className="p-3 text-left w-1/5">Account Number</th>
              <th className="p-3 text-left w-1/5">Designation</th>
              <th className="p-3 text-center w-16"></th>
            </tr>
          </thead>

          <tbody>
            {officers.length === 0 && (
              <tr>
                <td colSpan="6" className="p-6 text-center text-gray-500">
                  No officers found.
                </td>
              </tr>
            )}

            {officers.map((officer) => (
              <tr key={officer.id} className="border-t hover:bg-gray-50 relative">
                <td className="p-3 font-medium truncate">{officer.fullName}</td>
                <td className="p-3 truncate">{officer.rank}</td>
                <td className="p-3 truncate">{officer.contactNumber}</td>
                <td className="p-3 truncate">{officer.accountNumber}</td>
                <td className="p-3 truncate">{officer.designation}</td>

                {/* THREE DOTS BUTTON */}
                <td className="p-3 text-center relative menu-wrapper">
                  <button
                    onClick={() => toggleMenu(officer.id)}
                    className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full z-10 relative"
                  >
                    <MoreVertical className="w-4 h-4 text-gray-600" />
                  </button>

  {/* DROPDOWN rendered above the button */}
                {activeMenu === officer.id && (
                  <div className="absolute z-50 right-0 top-0 -translate-y-full mb-1 w-32 bg-white border rounded-xl shadow-lg flex flex-col">
                    <button
                      onClick={() => {
                        setSelectedOfficer(officer);
                        setShowOfficerModal(true);
                        setActiveMenu(null);
                      }}
                      className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded-lg text-gray-700 font-medium"
                    >
                      <Edit className="w-4 h-4 text-black-600" /> Edit
                    </button>
                    <button
                      onClick={() => {
                        deleteOfficer(officer.id);
                        setActiveMenu(null);
                      }}
                      className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded-lg text-gray-700 font-medium"
                    >
                      <Trash2 className="w-4 h-4 text-red-600" /> Delete
                    </button>
                  </div>
                )}
              </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
