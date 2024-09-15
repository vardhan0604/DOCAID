export default function PersonalInfo(params) {
  return (
    <article className="w-[482px] flex-shrink-0 bg-white rounded-[12px] shadow-md px-4 py-5 mb-6">
      <section className="flex mb-2 ">
        <div className=" w-1/2">
          <p className="text-[16px] font-bold  text-[#282796]">Gender:</p>
          <p className="text-[#000] text-[16px] font-[500]">Male</p>
        </div>
        <div className="w-1/2">
          <p className="text-[16px] font-bold text-[#282796]">Age:</p>
          <p className="text-[#000] text-[16px] font-[500]">20 Year</p>
        </div>
      </section>
      <section className="flex mb-2">
        <div className=" w-1/2">
          <p className="text-[16px] font-bold text-[#282796]">Phone no.:</p>
          <p className="text-[#000] text-[16px] font-[500]">+91 9582753212</p>
        </div>
        <div className="w-1/2">
          <p className="text-[16px] font-bold text-[#282796]">Date of Birth:</p>
          <p className="text-[#000] text-[16px] font-[500]">13th Feb 2004</p>
        </div>
      </section>
      <section>
        <p className="text-[16px] font-bold text-[#282796]">Address:</p>
        <p className="text-[#000] text-[16px] font-[500]">
          Kalash Chowk near new Amritsar, Gopalganj, Bihar
        </p>
      </section>
    </article>
  );
}
