function PatientName({ text }) {
  return (
    <div className="w-full max-w-md rounded-lg mb-6">
      <h1 className="text-3xl font-bold text-blue-900 px-2 self-start">
        {text}
      </h1>
    </div>
  );
}
export default function Card() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 border border-black">
      <PatientName text="Rajesh Bhai" />
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="space-y-4">
          <div className="flex justify-between">
            <span className="font-medium text-gray-700">Gender:</span>
            <span className="text-gray-900">Male</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium text-gray-700">Age:</span>
            <span className="text-gray-900">20 Year</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium text-gray-700">Phone no.:</span>
            <span className="text-gray-900">+91 9582753212</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium text-gray-700">Date of Birth:</span>
            <span className="text-gray-900">13th Feb 2004</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium text-gray-700">Address:</span>
            <span className="text-gray-900">
              Kalash Chowk near new Amritsar, Gopalganj, Bihar
            </span>
          </div>
        </div>
      </div>

      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-bold text-blue-900 mb-2">
          Current Diagnosis
        </h3>
        <p className="text-gray-900">
          Acute Coronary Syndrome (ACS), with underlying Type 2 Diabetes and
          Hypertension.
        </p>
      </div>
    </div>
  );
}
