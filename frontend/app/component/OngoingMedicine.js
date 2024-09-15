import React from 'react';

const MedicineList = ({ medicines }) => {
  return (
    <div className="w-[482px] h-[194px] border shadow-md bg-white p-4 rounded-[12px]">
      <h3 className="text-[#282796] text-[20px] font-semibold mb-1">Ongoing Medicines</h3>
      <ul className="list-none">
        {medicines.map((medicine, index) => (
          <li key={index} className="mb-[8px]">
            <div className="flex justify-between items-center">
              <span className='text-black text-[16px]'>{`${index + 1}. ${medicine.name}`}</span>
              <div className="flex space-x-3">
                <span className="border text-[16px] text-[#000]  border-black rounded-lg  px-[5px] py-1">{medicine.dosage}</span>
                <span className="border border-black text-[16px] text-[#000] rounded-lg px-[5px] py-1">{medicine.frequency}</span>
                <span className="border border-black text-[#000] text-[16px] rounded-lg px-[5px] py-[4px] ">{medicine.duration}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const medicines = [
  { name: 'Paracetamol', dosage: '1 tab', frequency: 'per day', duration: '2 week' },
  { name: 'Benadryl', dosage: '1 tab', frequency: 'per day', duration: '2 week' },
  { name: 'Cheston cold', dosage: '1 tab', frequency: 'per day', duration: '2 week' }
];

const OngoingMedicines = () => {
  return <MedicineList medicines={medicines} />;
};

export default OngoingMedicines;
