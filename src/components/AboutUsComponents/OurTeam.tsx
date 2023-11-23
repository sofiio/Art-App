function OurTeam() {
  return (
    <div className="w-full bg-black">
      <div className="2xl:w-[1440px] w-[375px] 2xl:mt-[100px]  mt-[174px] md:mt-[100px] lg:mt-[230px] mx-auto lg:h-[702px] h-[961px] flex flex-col items-center ">
        <h1 className="lg:mt-[73px] mt-[40px] lg:text-[48px] text-[32px] lg:font-sans font-quinapple text-white">
          Our Team
        </h1>
        <div className="flex flex-col lg:flex-row w-[375px] lg:w-[597px] h-[340px] lg:mt-[72px] mt-[48px] items-center lg:items-start">
          <div className="w-[251px] bg-CardColor1/30 lg:bg-black  h-[340px] rounded-[21px] lg:rounded-none border lg:border-none border-white flex flex-col items-center justify-center p-6">
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
          <div className="w-[251px] mt-[95px] bg-CardColor1/30 lg:bg-black border lg:border-none border-white rounded-[21px] lg:rounded-none lg:mt-0 lg:ml-[95px] h-[340px] flex flex-col items-center justify-center p-6 lg:p-0">
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
