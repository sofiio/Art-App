function OutTeam() {
  return (
    <div className="w-full bg-gradient-to-b from-GradientColor/100 via-GradientColor/30  to-GradientColor/0">
      <div className="2xl:max-w-[1312px] lg:max-w-[1280px] md:max-w-[1024px] max-w-[640px] sm:max-w-[768px] p-4  xl:mt-[212px] mt-[170px] md:mt-[550px] mx-auto xl:h-[732px] h-[789px] flex flex-col items-center ">
        <h1 className="xl:mt-[84px] text-white font-black xl:font-normal mt-[20px] md:text-[64px] text-[32px] font-quinapple">
          OUR TEAM
        </h1>
        <div className="xl:flex xl:flex-row xl:w-[801px] w-[186px] md:w-[345px] flex flex-col h-[400px] mt-[38px]">
          <div className="items-center text-center mt-[44px] xl:mt-0">
            <img src="/geor.png" alt="" />
            <h1 className="text-white md:text-[20px] text-[14px] font-bold mt-[24px] font-quinapple ">
              Giorgi Tsituri
            </h1>
          </div>
          <div className="xl:ml-[112px] items-center text-center mt-[44px] xl:mt-0">
            <img src="/teona.png" alt="" />
            <h1 className="text-white md:text-[20px] text-[14px] font-bold mt-[24px] font-quinapple">
              Teo Tsotsolashvili
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OutTeam;
