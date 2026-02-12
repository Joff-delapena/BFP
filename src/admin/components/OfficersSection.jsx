import React, { useState, useEffect } from "react";
import { Users, Plus, Edit, Trash2, MoreVertical } from "lucide-react";

export default function OfficersSection({
  officers = [],
  deleteOfficer,
  setSelectedOfficer,
  setShowOfficerModal,
}) {
  const [activeMenu, setActiveMenu] = useState(null);

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
    <div className="space-y-6">

      {/* Section Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
            <Users className="text-red-600 w-6 h-6" />
            Officers
          </h2>
          <p className="text-sm text-gray-500">
            Personnel management and operational records
          </p>
        </div>

        <button
          onClick={() => {
            setSelectedOfficer(null);
            setShowOfficerModal(true);
          }}
          className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg shadow"
        >
          <Plus className="w-4 h-4" />
          Add Officer
        </button>
      </div>

      {/* Table Container */}
      <div className="bg-white rounded-xl shadow border overflow-hidden">

        <table className="w-full text-sm">
          <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
            <tr>
              <th className="p-4 text-left">Personnel</th>
              <th className="p-4 text-left">Rank</th>
              <th className="p-4 text-left">Contact</th>
              <th className="p-4 text-left">Account</th>
              <th className="p-4 text-left">Designation</th>
              <th className="p-4 text-center"></th>
            </tr>
          </thead>

          <tbody>
            {officers.length === 0 && (
              <tr>
                <td colSpan="6" className="text-center p-6 text-gray-400">
                  No officers found.
                </td>
              </tr>
            )}

            {officers.map((officer) => (
              <tr
                key={officer.id}
                className="border-t hover:bg-gray-50 transition"
              >
                <td className="p-4 font-medium">
                  {officer.fullName}
                </td>

                <td className="p-4 text-red-600 font-semibold">
                  {officer.rank}
                </td>

                <td className="p-4 text-gray-600">
                  {officer.contactNumber}
                </td>

                <td className="p-4 text-gray-600">
                  {officer.accountNumber}
                </td>

                <td className="p-4 text-gray-600">
                  {officer.designation}
                </td>

                {/* Actions */}
                <td className="p-4 text-center relative menu-wrapper">
                  <button
                    onClick={() => toggleMenu(officer.id)}
                    className="p-2 hover:bg-gray-200 rounded-full"
                  >
                    <MoreVertical className="w-4 h-4 text-gray-600" />
                  </button>

                  {activeMenu === officer.id && (
                    <div className="absolute right-4 top-10 bg-white border shadow-lg rounded-lg w-32 z-50">
                      <button
                        onClick={() => {
                          setSelectedOfficer(officer);
                          setShowOfficerModal(true);
                          setActiveMenu(null);
                        }}
                        className="flex items-center gap-2 w-full px-3 py-2 hover:bg-gray-100 text-sm"
                      >
                        <Edit className="w-4 h-4" />
                        Edit
                      </button>

                      <button
                        onClick={() => {
                          deleteOfficer(officer.id);
                          setActiveMenu(null);
                        }}
                        className="flex items-center gap-2 w-full px-3 py-2 hover:bg-gray-100 text-sm text-red-600"
                      >
                        <Trash2 className="w-4 h-4" />
                        Delete
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </div>
  );
}
