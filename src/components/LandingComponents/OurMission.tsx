function OurMission() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="flex xl:mt-[239px] mt-[900px] md:mt-[400px] mx-auto 2xl:max-w-[1312px] lg:max-w-[1280px] md:max-w-[1024px] max-w-[640px] sm:max-w-[768px] p-4 2xl:p-0  justify-center">
        <div className="2xl:w-[616px] lg:w-[768px] md:w-[700px] w-[343px] h-[409px] xl:h-[700px] 2xl:h-[409px]  flex flex-col items-center 2xl:items-start">
          <h1 className="2xl:text-[64px] text-white text-[23px] md:text-[64px] font-black 2xl:font-normal font-quinapple">
            OUR MISSION
          </h1>
          <img
            src="/rounded.png"
            alt=""
            className="block md:hidden mt-[24px]"
          />
          <img src="/ffff.png" alt="" className="hidden md:block mt-[24px] w-[770px] 2xl:hidden h-[488px]" />
          <h1 className="text-white 2xl:mt-[40px] mt-[24px] md:text-[24px] text-[16px] font-custom2 opacity-75">
            At ‘VII Leeson’, we are on a mission to ignite the passion
            for the arts in teenagers by delving into the rich history and
            extraordinary talent that has shaped these three disciplines.
          </h1>
          <h1 className="text-white 2xl:mt-[40px] mt-[16px] md:text-[24px] text-[16px] font-custom2 opacity-75">
            Through engaging, interactive classes, we inspire the next
            generation of artists, musicians, directors, thinkers, and leaders.
          </h1>
        </div>
        <div className="w-[628px] h-[488px] ml-[88px] hidden 2xl:block">
          <img src="/ffff.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default OurMission;
