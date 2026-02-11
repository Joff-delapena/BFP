import React, { useState } from "react";
import { useData } from "../../app/context/DataContext";
import Sidebar from "../components/Sidebar";
import StatsSection from "../components/StatsSection";
import OfficersSection from "../components/OfficersSection";
import ReportsSection from "../components/ReportsSection";
import OfficerModal from "../components/OfficerModal";
import ReportModal from "../components/ReportModal";
import { Toaster, toast } from "react-hot-toast";

export default function AdminDashboard() {
  const { officers, reports, deleteOfficer, deleteReport } = useData();

  const [selectedOfficer, setSelectedOfficer] = useState(null);
  const [selectedReport, setSelectedReport] = useState(null);
  const [showOfficerModal, setShowOfficerModal] = useState(false);
  const [showReportModal, setShowReportModal] = useState(false);
  const [activeSection, setActiveSection] = useState("stats");

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      {/* Main content */}
      <main className="flex-1 p-6 overflow-y-auto">
        {activeSection === "stats" && (
          <StatsSection officers={officers} reports={reports} />
        )}

        {activeSection === "officers" && (
          <OfficersSection
            officers={officers}
            deleteOfficer={(id) => {
              deleteOfficer(id);
              toast.success("Officer removed successfully");
            }}
            setSelectedOfficer={setSelectedOfficer}
            setShowOfficerModal={setShowOfficerModal}
            onSave={(msg) => toast.success(msg)}
          />
        )}

        {activeSection === "reports" && (
          <ReportsSection
            reports={reports}
            deleteReport={(id) => {
              deleteReport(id);
              toast.success("Report deleted successfully");
            }}
            setSelectedReport={setSelectedReport}
            setShowReportModal={setShowReportModal}
            onSave={(msg) => toast.success(msg)}
          />
        )}
      </main>

      {/* Officer Modal */}
      {showOfficerModal && (
        <OfficerModal
          officer={selectedOfficer}
          onClose={() => setShowOfficerModal(false)}
          onSave={(msg) => toast.success(msg)}
        />
      )}

      {/* Report Modal */}
      {showReportModal && (
        <ReportModal
          report={selectedReport}
          onClose={() => setShowReportModal(false)}
          onSave={(msg) => toast.success(msg)}
        />
      )}

      {/* Toast Notifications */}
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
}
