import CurrentDiagnosis from "./component/CurrentDiagnosis";
import OngoingMedicines from "./component/OngoingMedicine";
import PatientName from "./component/PatientName";
import PersonalInfo from "./component/PersonalInfo";
import ReportsList from "./component/Reports";

export default function Home() {
  return (
    <main className="flex  items-strech   p-4  my-[50px]">
      <div className="pl-[84px] pr-[41px] border-r">
        <PatientName text="Rajesh Bhai" />
        <PersonalInfo />
        <CurrentDiagnosis />
        <OngoingMedicines />
      </div>
      <div className="flex-1">
        <ReportsList />
      </div>
    </main>
  );
}
