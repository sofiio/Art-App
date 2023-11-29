function ChooseUs() {
  return (
    <div className="max-w-[1440px] mx-auto items-center">
      <div className="2xl:ml-[57px] xl:h-[115px] h-[70px] 2xl:max-w-[1312px] lg:max-w-[1280px] md:max-w-[1024px] max-w-[640px] sm:max-w-[768px] p-4 2xl:p-0 mt-[87px] flex text-center justify-center mx-auto 2xl:mx-0">
        <h1 className="xl:text-[96px] text-[24px] font-quinapple font-black xl:font-normal">WHY CHOOSE US</h1>
      </div>
      <div className="2xl:max-w-[1312px] lg:max-w-[1280px] md:max-w-[1024px] max-w-[640px] sm:max-w-[768px] p-4 2xl:p-0 xl:flex xl:flex-row flex flex-col xl:mt-[66px] h-[496px] mx-auto">
        <div className="xl:w-[548px] w-[326px] h-[496px] flex relative mx-auto 2xl:mx-0">
          <img src="/sa.png" alt="" className="xl:w-[372px] xl:h-[372px] w-[233px] h-[233px]" />
          <img
            src="/saa.png"
            alt=""
            className="xl:mt-[147px] mt-[94px] xl:ml-[197px] ml-[124px] xl:w-[351px] xl:h-[349px] w-[219px] h-[219px] absolute top-0 left-0"
          />
        </div>
        <div className="xl:w-[717px] w-[321px] xl:h-[480px] mx-auto xl:mx-0 h-[812px] xl:ml-[68px] mt-36 xl:mt-0 ">
          <div className="xl:w-[717px] w-[326px] h-[90px] flex items-center">
            <div>
              <img src="/frame.svg" alt="" className="m-auto" />
            </div>
            <div className="ml-[24px] xl:w-[605px] w-[232px] h-[90px]">
              <h1 className="text-[24px] font-black font-quinapple">INTERACTIVE LEARNING</h1>
              <h1 className="text-[16px] font-custom2 mt-[8px]">
                Our classes are designed to be engaging and interactive,
                fostering a love for the arts through hands-on experiences and
                discussions.
              </h1>
            </div>
          </div>
          <div className="xl:w-[717px] w-[326px] h-[90px] xl:mt-[40px] mt-[140px] flex items-center">
            <div>
              <img src="/second.svg" alt="" className="m-auto" />
            </div>
            <div className="ml-[24px] xl:w-[605px] w-[232px] h-[90px]">
              <h1 className="text-[24px] font-black font-quinapple">INSPIRING INSTRUCTIONS</h1>
              <h1 className="text-[16px] font-custom2 mt-[8px]">
                Our instructors are experts in their fields, each with a deep
                passion for theater, literature, or music. They bring history to
                life with enthusiasm and expertise.
              </h1>
            </div>
          </div>
          <div className="xl:w-[717px] w-[326px] h-[90px] xl:mt-[40px] mt-[170px] flex items-center">
            <div>
              <img src="/third.svg" alt="" className="m-auto" />
            </div>
            <div className="ml-[24px] xl:w-[605px] w-[232px] h-[90px]">
              <h1 className="text-[24px] font-black font-quinapple">CREATIVE FREEDOM</h1>
              <h1 className="text-[16px] font-custom2 mt-[8px]">
                We encourage students to explore their creativity, experiment
                with new ideas, and express themselves in a safe and supportive
                environment.
              </h1>
            </div>
          </div>
          <div className="xl:w-[717px] w-[326px] h-[90px] xl:mt-[40px] mt-[140px] flex items-center">
            <div>
              <img src="/fourth.svg" alt="" className="m-auto" />
            </div>
            <div className="ml-[24px] xl:w-[605px] w-[232px] h-[90px]">
              <h1 className="text-[24px] font-black font-quinapple">COMMUNITY</h1>
              <h1 className="text-[16px] font-custom2 mt-[8px]">
                Join a community of like-minded individuals who share your
                passion for the arts. Connect with fellow students, collaborate
                on projects, and build lifelong friendships
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChooseUs;
