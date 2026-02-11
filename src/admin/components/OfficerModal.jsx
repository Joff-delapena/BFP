import { useState, useEffect } from 'react';
import { useData } from '../../app/context/DataContext';
import { X, Upload, User, Award, CreditCard, Star } from 'lucide-react';

export default function OfficerModal({ officer, onClose, onSave }) {
  const { addOfficer, updateOfficer } = useData();

  const [formData, setFormData] = useState({
    fullName: '',
    rank: '',
    contactNumber: '',
    image: '',
    position: '',
    order: 1,
    accountNumber: '',
    designation: '',
  });

  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (officer) {
      setFormData(officer);
    }
  }, [officer]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSaving(true);
    setMessage('');

    setTimeout(() => {
      if (officer) {
        updateOfficer(officer.id, formData);
        setMessage('Officer updated successfully');
        onSave && onSave('Officer updated successfully');
      } else {
        addOfficer(formData);
        setMessage('Officer added successfully');
        onSave && onSave('Officer added successfully');
      }

      setSaving(false);
      setTimeout(() => onClose(), 1200);
    }, 800);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b sticky top-0 bg-gradient-to-r from-red-600 to-red-700 rounded-t-2xl">
          <h2 className="text-2xl font-bold text-white">
            {officer ? 'Edit Officer' : 'Add New Officer'}
          </h2>
          <button onClick={onClose} className="text-white hover:text-gray-200">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Image Upload */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <label className="block text-gray-700 font-semibold mb-3 flex items-center gap-2">
              <Upload className="w-5 h-5 text-red-600" />
              Profile Photo
            </label>
            <div className="flex items-center gap-4">
              {formData.image && (
                <div className="w-32 h-32 rounded-full overflow-hidden ring-4 ring-red-600 shadow-lg">
                  <img src={formData.image} alt="Preview" className="w-full h-full object-cover" />
                </div>
              )}
              <div className="flex-1 space-y-3">
                <label className="flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 border-2 border-dashed border-gray-400 rounded-lg p-4 cursor-pointer transition-all">
                  <Upload className="w-5 h-5 text-gray-600" />
                  <span className="text-gray-700 font-medium">Upload Photo</span>
                  <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
                </label>
                <input
                  type="text"
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                  placeholder="Or paste image URL"
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 text-sm"
                />
              </div>
            </div>
          </div>

          {/* Full Name, Rank & Designation */}
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
                <User className="w-5 h-5 text-red-600" /> Full Name *
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all"
                placeholder="Enter full name"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
                <Award className="w-5 h-5 text-red-600" /> Rank *
              </label>
              <select
                name="rank"
                value={formData.rank}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all"
              >
                <option value="">Select Rank</option>
                <option value="Fire Officer I">Fire Officer I</option>
                <option value="Fire Officer II">Fire Officer II</option>
                <option value="Fire Officer III">Fire Officer III</option>
                <option value="Senior Fire Officer I">Senior Fire Officer I</option>
                <option value="Senior Fire Officer II">Senior Fire Officer II</option>
                <option value="Senior Fire Officer III">Senior Fire Officer III</option>
                <option value="Chief Fire Officer">Chief Fire Officer</option>
                <option value="Fire Inspector">Fire Inspector</option>
                <option value="Senior Fire Inspector">Senior Fire Inspector</option>
                <option value="Chief Fire Inspector">Chief Fire Inspector</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
                <Star className="w-5 h-5 text-red-600" /> Designation
              </label>
              <input
                type="text"
                name="designation"
                value={formData.designation}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all"
                placeholder="Enter designation"
              />
            </div>
          </div>

          {/* Contact Number & Account Number Side by Side */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Contact Number *</label>
              <input
                type="tel"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all"
                placeholder="(088) 123-4567"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-red-600" /> Account Number
              </label>
              <input
                type="text"
                name="accountNumber"
                value={formData.accountNumber}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all"
                placeholder="Enter account number"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-2 pt-4">
            <div className="flex gap-4">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-semibold transition-all"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={saving}
                className={`flex-1 px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-lg font-semibold transition-all transform hover:scale-105 ${
                  saving ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {saving ? 'Saving...' : officer ? 'Update Officer' : 'Add Officer'}
              </button>
            </div>
            {message && <p className="text-green-600 font-medium text-center">{message}</p>}
          </div>
        </form>
      </div>
    </div>
  );
}
