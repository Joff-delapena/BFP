import { useState, useEffect } from "react";
import { useData } from "../context/DataContext";
import { ChevronLeft, ChevronRight, Calendar, Plus, Edit, Trash2, Tag } from "lucide-react";
import ReportModal from '../../admin/components/ReportModal';

export default function WeeklyReports() {
  const { reports, deleteReport } = useData();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingReport, setEditingReport] = useState(null);

  const isAdmin = localStorage.getItem("userRole") === "admin";

  useEffect(() => {
    if (reports.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reports.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [reports.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? reports.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % reports.length);
  };

  const handleEdit = (report) => {
    setEditingReport(report);
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this report?")) {
      deleteReport(id);
      if (currentIndex >= reports.length - 1) {
        setCurrentIndex(Math.max(0, reports.length - 2));
      }
    }
  };

  const handleAddNew = () => {
    setEditingReport(null);
    setIsModalOpen(true);
  };

  if (reports.length === 0) {
    return (
      <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Weekly Reports & Happenings</h2>
            <p className="text-gray-600 mb-8">No reports available yet.</p>
            {isAdmin && (
              <button
                onClick={handleAddNew}
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
              >
                Add First Report
              </button>
            )}
          </div>
        </div>
      </section>
    );
  }

  const currentReport = reports[currentIndex];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Weekly Reports & Happenings</h2>
          <p className="text-gray-600 text-lg">
            Stay updated with the latest activities and achievements from Station 1 Cogon
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="relative h-96 md:h-[670px]">
              <img
                src={currentReport.image}
                alt={currentReport.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-red-600 px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-2">
                    <Tag className="w-4 h-4" />
                    {currentReport.category}
                  </span>
                  <span className="flex items-center gap-2 text-sm">
                    <Calendar className="w-4 h-4" />
                    {new Date(currentReport.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-3">{currentReport.title}</h3>
                <p className="text-lg text-gray-200 max-w-3xl">{currentReport.description}</p>
              </div>

              {reports.length > 1 && (
                <>
                  <button
                    onClick={goToPrevious}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all hover:scale-110"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={goToNext}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all hover:scale-110"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}
            </div>

            {reports.length > 1 && (
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                {reports.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentIndex ? "bg-white w-8" : "bg-white/50 hover:bg-white/75"
                    }`}
                  />
                ))}
              </div>
            )}

            
          </div>

          {isAdmin && (
            <div className="text-center mt-8">
            </div>
          )}
        </div>
      </div>

      {isModalOpen && (
        <ReportModal
          report={editingReport}
          onClose={() => {
            setIsModalOpen(false);
            setEditingReport(null);
          }}
        />
      )}
    </section>
  );
}
