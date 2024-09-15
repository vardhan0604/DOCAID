"use client"
import React, { useState } from 'react';
import AddMedicineForm from './AddMedicineForm';

const UploadReportForm = ({ onClose }) => {
  const [diagnosis, setDiagnosis] = useState('');

  return (
    <div className="max-w-xl mx-auto p-4 bg-white shadow rounded-lg">
      <h2 className="text-xl font-semibold text-indigo-700 mb-4">Upload Report</h2>
      <button className="w-full bg-indigo-700 text-white px-4 py-2 rounded-lg hover:bg-indigo-800 transition-colors mb-6 flex items-center justify-center">
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
        </svg>
        Upload File
      </button>
      <h3 className="text-lg font-semibold mb-2">Diagnosis</h3>
      <div className="relative">
        <textarea
          value={diagnosis}
          onChange={(e) => setDiagnosis(e.target.value)}
          className="w-full p-3 border rounded-lg min-h-[100px]"
          placeholder="Enter diagnosis here"
        />
        <button className="absolute bottom-3 right-3 text-gray-500 hover:text-gray-700">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

const ReportsList = () => {
  const [reports, setReports] = useState([
    { id: 1, title: 'Kidney failure', date: '12-03-2022' },
    { id: 2, title: 'Radius Bone Fracture', date: '08-03-2022' },
    { id: 3, title: 'Radius Bone Fracture', date: '08-03-2022' },
  ]);
  const [highlightedId, setHighlightedId] = useState(null);
  const [showUploadForm, setShowUploadForm] = useState(false);

  const handleReportClick = (id) => {
    setHighlightedId(id === highlightedId ? null : id);
  };

  const toggleUploadForm = () => {
    setShowUploadForm(!showUploadForm);
  };

  if (showUploadForm) {
    return <div>
         <UploadReportForm onClose={toggleUploadForm} />;
         <AddMedicineForm />
    </div>
  }

  return (
    <div className="max-w-xl mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <div className="bg-white shadow rounded-lg px-4 py-2">
          <h1 className="text-lg font-semibold text-indigo-700">Reports</h1>
        </div>
        <button 
          className="bg-indigo-700 text-white px-4 py-2 rounded-lg hover:bg-indigo-800 transition-colors"
          onClick={toggleUploadForm}
        >
          New Report
        </button>
      </div>
      
      <div className="space-y-2">
        {reports.map((report) => (
          <div 
            key={report.id} 
            className={`flex justify-between items-center p-4 rounded-lg cursor-pointer ${
              report.id === highlightedId 
                ? 'border-2 border-blue-500' 
                : 'bg-white shadow'
            }`}
            onClick={() => handleReportClick(report.id)}
          >
            <span className="font-medium">{report.title}</span>
            <span className="text-gray-600">{report.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReportsList;