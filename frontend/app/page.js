import CurrentDiagnosis from "./component/CurrentDiagnosis";
import OngoingMedicines from "./component/OngoingMedicine";
import PatientName from "./component/PatientName";
import PersonalInfo from "./component/PersonalInfo";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center  bg-gray-100 p-4 border">
      <PatientName text="Rajesh Bhai" />
      <PersonalInfo />
      <CurrentDiagnosis />
      <OngoingMedicines />
    </main>
  );
}
