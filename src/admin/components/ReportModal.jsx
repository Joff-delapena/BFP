import React, { useState, useEffect } from "react";
import { useData } from "../../app/context/DataContext";
import { X, Upload, Calendar, Tag } from "lucide-react";

export default function ReportModal({ report, onClose }) {
  const { addReport, updateReport } = useData();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
    date: new Date().toISOString().split("T")[0],
    category: "Event",
  });

  useEffect(() => {
    if (report) setFormData(report);
  }, [report]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setFormData((prev) => ({ ...prev, image: reader.result }));
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (report) updateReport(report.id, formData);
    else addReport(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b sticky top-0 bg-white rounded-t-2xl">
          <h2 className="text-2xl font-bold text-gray-800">{report ? "Edit Report" : "Add New Report"}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Image */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
              <Upload className="w-5 h-5" /> Cover Image
            </label>
            {formData.image && <img src={formData.image} alt="Preview" className="w-full h-48 object-cover rounded-lg mb-4" />}
            <label className="flex items-center justify-center gap-2 bg-gray-100 border-2 border-dashed p-4 rounded-lg cursor-pointer">
              <Upload className="w-5 h-5 text-gray-600" /> Upload Image
              <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
            </label>
            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="Or paste image URL here"
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg mt-2 focus:ring-2 focus:ring-red-500 focus:border-red-500"
            />
          </div>

          {/* Title & Description */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Report Title *</label>
            <input type="text" name="title" value={formData.title} onChange={handleChange} required className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500" />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Description *</label>
            <textarea name="description" value={formData.description} onChange={handleChange} required rows="4" className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 resize-none" />
          </div>

          {/* Date & Category */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2"><Calendar className="w-5 h-5" /> Date *</label>
              <input type="date" name="date" value={formData.date} onChange={handleChange} required className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500" />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2"><Tag className="w-5 h-5" /> Category *</label>
              <select name="category" value={formData.category} onChange={handleChange} required className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500">
                <option value="Event">Event</option>
                <option value="Training">Training</option>
                <option value="Response">Response</option>
                <option value="Advisory">Advisory</option>
                <option value="Achievement">Achievement</option>
              </select>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 pt-4">
            <button type="button" onClick={onClose} className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-semibold">Cancel</button>
            <button type="submit" className="flex-1 px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg font-semibold hover:scale-105 transform transition-all">{report ? "Update Report" : "Add Report"}</button>
          </div>
        </form>
      </div>
    </div>
  );
}