import React from "react";

const MedicineList = ({ medicines }) => {
  return (
    <article className="w-[482px]  border shadow-md bg-white p-4 rounded-[12px]">
      <h3 className="text-[#282796] text-lg font-bold mb-1">
        Ongoing Medicines
      </h3>
      <ul className="list-none">
        {medicines.map((medicine, index) => (
          <li key={index} className="mb-[8px]">
            <div className="flex justify-between items-center">
              <span className="text-black ">{`${index + 1}. ${
                medicine.name
              }`}</span>
              <div className="flex [&>span]:mr-2">
                <span className="border   border-black rounded-lg  px-[5px] py-1">
                  {medicine.dosage}
                </span>
                <span className="border border-black rounded-lg px-[5px] py-1">
                  {medicine.frequency}
                </span>
                <span className="border border-black  rounded-lg px-[5px] py-[4px] ">
                  {medicine.duration}
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </article>
  );
};

const medicines = [
  {
    name: "Paracetamol",
    dosage: "1 tab",
    frequency: "per day",
    duration: "2 week",
  },
  {
    name: "Benadryl",
    dosage: "1 tab",
    frequency: "per day",
    duration: "2 week",
  },
  {
    name: "Cheston cold",
    dosage: "1 tab",
    frequency: "per day",
    duration: "2 week",
  },
];

const OngoingMedicines = () => {
  return <MedicineList medicines={medicines} />;
};

export default OngoingMedicines;
