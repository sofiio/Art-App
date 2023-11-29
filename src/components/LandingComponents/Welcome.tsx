import CustomButton from "../CustomButton";

function Welcome() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="2xl:max-w-[1312px] lg:max-w-[1280px] md:max-w-[1024px] max-w-[640px] sm:max-w-[768px] p-4 2xl:p-0 2xl:h-[213px] h-[135px] 2xl:mt-[94px] lg:mt-8 2xl:ml-[206px] flex flex-col lg:text-center text-right mx-auto 2xl:mx-0">
        <h1 className="2xl:text-[96px] text-[40px] lg:text-[70px] font-quinapple ">
          Welcome To{" "}
          <span className="text-customColor font-quinapple font-semibold">
            VII Lesson{" "}
          </span>
        </h1>
        <h1 className="2xl:text-[64px] text-[32px] font-custom1">
          Where History Comes Alive
        </h1>
      </div>
      <div className="2xl:w-[1326px] xl:hidden lg:w-[768px] md:w-[700px] w-[343px] mx-auto flex justify-center mt-20">
        <CustomButton
          text=""
          font=" font-medium font-sans"
          width="2xl:w-[163px] w-[98px]"
          height="2xl:h-[163px] h-[98px]"
          backgroundColor="bg-customColor"
          rounded="rounded-full"
          imgSrc="/seven.png"
          imgHoverEffect="hover:invert"
          hoverEffect="hover:bg-white  hover:text-black hover:border hover:border-black"
        />
      </div>
      <div className="lg:flex lg:flex-row flex flex-col mt-[94px] 2xl:max-w-[1312px] lg:max-w-[1280px] md:max-w-[1024px] max-w-[640px] sm:max-w-[768px] p-4 2xl:p-0 mx-auto">
        <img
          src="/sample.png"
          alt=""
          className="2xl:h-[510px] lg:h-[400px] h-[200px] 2xl:w-[869px] lg:w-[550px] xl:w-[750px] w-[343px] mx-auto 2xl:mx-0"
        />
        <img
          src="/sample1.png"
          alt=""
          className="2xl:ml-[34px] 2xl:h-[510px] lg:h-[400px] 2xl:w-[421px] lg:w-[350px] xl:w-[400px] w-[343px] h-[402px] mt-4 lg:mt-0 mx-auto 2xl:mx-0"
        />
      </div>
    </div>
  );
}

export default Welcome;
