function OurTeam() {
  return (
    <div className="w-full bg-black">
      <div className="max-w-[1440px]  mt-[100px] mx-auto h-[702px] flex flex-col items-center ">
        <h1 className="mt-[73px] text-[48px] text-white">Our Team</h1>
        <div className="flex w-[597px] h-[340px] mt-[72px]">
          <div className="w-[251px] h-[340px] flex flex-col items-center justify-center">
            <img src="/giorgi.png" alt="" />
            <div>
              <h1 className="text-[20px] font-semibold text-white mt-[24px] ">
                Giorgi Tsituri
              </h1>
              <h1 className="text-[18px] text-white mt-2 ">Founder, Teacher</h1>
              <div className="flex space-x-4 mt-4">
                <img src="/linked.svg" alt="" />
                <img src="/Xx.svg" alt="" />
              </div>
            </div>
          </div>
          <div className="w-[251px] ml-[95px] h-[340px] flex flex-col items-center justify-center">
            <img src="/teo.png" alt="" />
            <div>
              <h1 className="text-[20px] font-semibold text-white mt-[24px] ">
                Teo Tsotsolashvili
              </h1>
              <h1 className="text-[18px] text-white mt-2 ">Founder, Teacher</h1>
              <div className="flex space-x-4 mt-4">
                <img src="/linked.svg" alt="" />
                <img src="/Xx.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurTeam;
