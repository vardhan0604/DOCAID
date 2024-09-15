export default function PersonalInfo(params) {
  return (
    <div className="w-[482px] h-[174px] flex-shrink-0 bg-white rounded-[12px] shadow-md px-3 py-3 mb-6">
       <div className="flex flex-row space-x-32">
       <div className="flex flex-col">
          <span className="text-[16px] font-bold  text-[#282796]">Gender:</span>
          <span className="text-[#000] text-[16px] font-[500]">Male</span>
        </div>
        <div className="flex flex-col">
          <span className="text-[16px] font-bold text-[#282796]">Age:</span>
          <span className="text-[#000] text-[16px] font-[500]">20 Year</span>
        </div>
       </div>
       <div className="flex flex-row space-x-20">
        <div className="flex flex-col">
          <span className="text-[16px] font-bold text-[#282796]">Phone no.:</span>
          <span className="text-[#000] text-[16px] font-[500]">+91 9582753212</span>
        </div>
        <div className="flex flex-col">
          <span className="text-[16px] font-bold text-[#282796]">Date of Birth:</span>
          <span className="text-[#000] text-[16px] font-[500]">13th Feb 2004</span>
        </div>
        </div>
        <div className="flex flex-col">
          <span className="text-[16px] font-bold text-[#282796]">Address:</span>
          <span className="text-[#000] text-[16px] font-[500]">
            Kalash Chowk near new Amritsar, Gopalganj, Bihar
          </span>
        </div>
    </div>
  );
}
