import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { Users, FileText, Activity } from "lucide-react";
import OfficersSection from "../components/OfficersSection";
import ReportsSection from "../components/ReportsSection";
import OfficerModal from "../components/OfficerModal";
import ReportModal from "../components/ReportModal";

export default function AdminDashboard() {
  const [activeSection, setActiveSection] = useState("stats");

  // Officers modal
  const [selectedOfficer, setSelectedOfficer] = useState(null);
  const [showOfficerModal, setShowOfficerModal] = useState(false);

  // Reports modal
  const [selectedReport, setSelectedReport] = useState(null);
  const [showReportModal, setShowReportModal] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* Sidebar */}
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Main Content */}
      <div className="flex-1 p-6">

        {/* Dashboard / Stats */}
        {activeSection === "stats" && (
          <>
            <div className="bg-red-600 text-white rounded-xl shadow-md p-6 flex justify-between items-center">
              <div>
                <h1 className="text-2xl font-bold">BFP Station 1 – Admin Dashboard</h1>
                <p className="text-sm text-red-100">Administrative Monitoring and Management Panel</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-6">
              <div className="bg-white rounded-xl shadow p-5 border">
                <div className="flex items-center justify-between">
                  <Users className="text-red-600" />
                  <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full">Personnel</span>
                </div>
                <h2 className="text-3xl font-bold mt-3">3</h2>
                <p className="text-sm text-gray-500">Active registered fire officers</p>
              </div>

              <div className="bg-white rounded-xl shadow p-5 border">
                <div className="flex items-center justify-between">
                  <FileText className="text-blue-600" />
                  <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">Documentation</span>
                </div>
                <h2 className="text-3xl font-bold mt-3">3</h2>
                <p className="text-sm text-gray-500">Weekly operational reports submitted</p>
              </div>

              <div className="bg-white rounded-xl shadow p-5 border">
                <div className="flex items-center justify-between">
                  <Activity className="text-green-600" />
                  <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">Status</span>
                </div>
                <h2 className="text-lg font-semibold mt-3">Operational Ready</h2>
                <p className="text-sm text-gray-500">Station response capability is active</p>
              </div>
            </div>
          </>
        )}

        {/* Officers Section */}
        {activeSection === "officers" && (
          <OfficersSection
            setSelectedOfficer={setSelectedOfficer}
            setShowOfficerModal={setShowOfficerModal}
          />
        )}

        {/* Reports Section */}
        {activeSection === "reports" && (
          <ReportsSection
            setSelectedReport={setSelectedReport}
            setShowReportModal={setShowReportModal}
          />
        )}
      </div>

      {/* Officer Modal */}
      {showOfficerModal && (
        <OfficerModal
          officer={selectedOfficer}
          onClose={() => setShowOfficerModal(false)}
          onSave={() => setShowOfficerModal(false)}
        />
      )}

      {/* Report Modal */}
      {showReportModal && (
        <ReportModal
          report={selectedReport}
          onClose={() => setShowReportModal(false)}
          onSave={() => setShowReportModal(false)}
        />
      )}
    </div>
  );
}
