"use client";
import React, { useState } from "react";

export default function EnhancedAddMedicineForm() {
  const [medicines, setMedicines] = useState([
    { id: 1, name: "Aspirin" },
    { id: 2, name: "Paracetamol" },
  ]);
  const [newMedicine, setNewMedicine] = useState("");
  const [error, setError] = useState(null);
  const [alternatives, setAlternatives] = useState([]);
  const [showAlternatives, setShowAlternatives] = useState(false);
  const [loading , setLoading]= useState(false)
//   const handleAddMedicine = async () => {
//     setError(null);
//     setShowAlternatives(false);
//     // Simulating API call and response
//     if (newMedicine.toLowerCase() === 'dispirin') {
//       setError('Possible harmful interaction with Aspirin: Bleeding.');
//       setAlternatives(['Ibuprofen', 'Naproxen', 'Acetaminophen']);
//     } else {
//       setMedicines([...medicines, { id: medicines.length + 1, name: newMedicine }]);
//       setNewMedicine('');
//     }
//   };


  const handleAddMedicine = async () => {
    setError(null);
  
    // Check if the new medicine already exists in the list
    const medicineExists = medicines.some(
      (medicine) => medicine.name.toLowerCase() === newMedicine.toLowerCase()
    );
  
    if (medicineExists) {
      setError('*Medicine already exists in the list.');
      return;
    }
  
    setLoading(true);
  
    // Call the API to check compatibility
    const response = await fetch('http://localhost:3000/check-compatibility', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        medicinesList: medicines.map(med => med.name),
        newMedicine: newMedicine,
      }),
    });
  
    const data = await response.json();
    setLoading(false);
  
    if (data.compatible) {
      // If compatible, add the new medicine to the list
      setMedicines([
        ...medicines,
        { id: medicines.length + 1, name: newMedicine, hasError: false, errorMessage: '' }
      ]);
      setNewMedicine(''); // Clear the input field
    } else {
      // If not compatible, show the error message
      const conflictMedicine = data.conflictingMedicine ? data.conflictingMedicine : "existing medicine";
      setError(`*Harmful interaction with ${conflictMedicine}: ${data.complication}. Choose Alternatives.`);
      setAlternatives(data.alternatives)
    }
  };
  

  const handleDeleteMedicine = (id) => {
    setMedicines(medicines.filter((medicine) => medicine.id !== id));
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-lg relative">
      <h2 className="text-lg font-semibold mb-4 text-blue-600">
        Add new medicine
      </h2>

      {medicines.map((medicine, index) => (
        <div key={medicine.id} className="mb-4 flex items-center space-x-2">
          <span>{index + 1}.</span>
          <input
            type="text"
            value={medicine.name}
            readOnly
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none"
          />
          <button
            className="text-gray-500 hover:text-gray-800 focus:outline-none"
            onClick={() => handleDeleteMedicine(medicine.id)}
          >
            ✕
          </button>
          <span className="text-green-500">✔️</span>
        </div>
      ))}

      <div className="mb-4">
        <input
          type="text"
          value={newMedicine}
          onChange={(e) => setNewMedicine(e.target.value)}
          placeholder="Enter new medicine"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none"
        />
      </div>

      {error && (
        <div className="mb-4 p-4 bg-red-100 border-l-4 border-red-500 text-red-700">
          <div className="flex items-center">
            <svg
              className="h-6 w-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p>{error}</p>
          </div>
          <button
            className="mt-2 text-blue-500 underline focus:outline-none"
            onClick={() => setShowAlternatives(!showAlternatives)}
          >
            Possible Alternatives:
          </button>
        </div>
      )}

      {showAlternatives && (
        <div className="mb-4 p-4 bg-blue-100 rounded-lg">
          <h3 className="font-semibold mb-2">Possible Alternatives:</h3>
          <ul className="list-disc pl-4">
            {alternatives.map((alt, index) => (
              <li key={index}>{alt}</li>
            ))}
          </ul>
        </div>
      )}

      <button
        onClick={handleAddMedicine}
        className={`w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 ${loading ? 'opacity-50 cursor-not-allowed' : ''} `}
        disabled={loading}
      >
        {loading ? 'Checking compatibility...' : 'Add new medicine'}
      </button>
    </div>
  );
}
