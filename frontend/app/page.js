import CurrentDiagnosis from "./component/CurrentDiagnosis";
import OngoingMedicines from "./component/OngoingMedicine";
import PatientName from "./component/PatientName";
import PersonalInfo from "./component/PersonalInfo";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 border border-black">
      <PatientName text="Rajesh Bhai" />
      <PersonalInfo />
      <CurrentDiagnosis />
      <OngoingMedicines />
    </div>
  );
}
