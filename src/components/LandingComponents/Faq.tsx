import { Link } from "react-router-dom";
import CustomButton from "../CustomButton";

function Faq() {
  return (
    <div className="w-full bg-black mt-16 xl:mt-0">
      <div className="2xl:w-[1440px] lg:w-[768px] md:w-[700px] w-[343px]  mx-auto xl:h-[1096px] md:h-[900px] h-[681px] flex flex-col items-center">
        <div className="xl:w-[768px] xl:mt-[112px] mt-[36px] h-[154px] flex items-center text-center">
          <h1 className="text-white md:text-[64px] text-[32px] font-quinapple">
            FREQUENTLY ASKED QUESTIONS
          </h1>
        </div>
        <div className="md:w-[700px] lg:w-[768px] flex flex-col items-center md:items-start  w-[343px] space-y-4 xl:space-y-0 h-[365px] mt-[32px] md:mt-[80px]">
          <div className="flex md:w-[700px] lg:w-[768px] w-[311px] sm:w-[500px] md:h-[72px] h-[41px] bg-white md:bg-black text-black md:text-white items-center md:items-start xl:pt-[22px] sm:justify-between justify-around border-b-2 border-gray-500 sm:px-4 md:px-0">
            <h1 className="md:text-[18px] text-[12px] font-bold font-sans">
              Question text goes here
            </h1>
            <img
              src="/Icon.svg"
              alt=""
              className="w-[32px] h-[32px] hidden md:block"
            ></img>
            <img
              src="/blarow.svg"
              alt=""
              className="w-[32px] h-[32px] block md:hidden"
            ></img>
          </div>
          <div className="flex md:w-[700px] lg:w-[768px] w-[311px] sm:w-[500px] md:h-[72px] h-[41px] bg-white md:bg-black text-black md:text-white xl:pt-[12px] justify-around items-center sm:justify-between border-b-2 border-gray-500 sm:px-4 md:px-0">
            <h1 className="md:text-[18px] text-[12px] font-bold">
              Question text goes here
            </h1>
            <img
              src="/Icon.svg"
              alt=""
              className="w-[32px] h-[32px] hidden md:block"
            ></img>
            <img
              src="/blarow.svg"
              alt=""
              className="w-[32px] h-[32px] block md:hidden"
            ></img>
          </div>
          <div className="flex md:w-[700px] lg:w-[768px] w-[311px] sm:w-[500px] md:h-[72px] h-[41px] bg-white md:bg-black text-black md:text-white xl:pt-[12px] sm:justify-between items-center justify-around border-b-2 border-gray-500 sm:px-4 md:px-0">
            <h1 className="md:text-[18px] text-[12px] font-bold">
              Question text goes here
            </h1>
            <img
              src="/Icon.svg"
              alt=""
              className="w-[32px] h-[32px] hidden md:block"
            ></img>
            <img
              src="/blarow.svg"
              alt=""
              className="w-[32px] h-[32px] block md:hidden"
            ></img>
          </div>
          <div className="flex md:w-[700px] lg:w-[768px] w-[311px] sm:w-[500px] md:h-[72px] h-[41px] bg-white md:bg-black text-black md:text-white xl:pt-[12px]  items-center justify-around sm:justify-between border-b-2 border-gray-500 sm:px-4 md:px-0">
            <h1 className="md:text-[18px] text-[12px] font-bold">
              Question text goes here
            </h1>
            <img
              src="/Icon.svg"
              alt=""
              className="w-[32px] h-[32px] hidden md:block"
            ></img>
            <img
              src="/blarow.svg"
              alt=""
              className="w-[32px] h-[32px] block md:hidden"
            ></img>
          </div>
          <div className="flex md:w-[700px] lg:w-[768px] w-[311px] sm:w-[500px] md:h-[72px] h-[41px] bg-white md:bg-black text-black md:text-white xl:pt-[12px] items-center justify-around sm:justify-between border-b-2 border-gray-500 sm:px-4 md:px-0">
            <h1 className="md:text-[18px] text-[12px] font-bold">
              Question text goes here
            </h1>
            <img
              src="/Icon.svg"
              alt=""
              className="w-[32px] h-[32px] hidden md:block"
            ></img>
            <img
              src="/blarow.svg"
              alt=""
              className="w-[32px] h-[32px] block md:hidden"
            ></img>
          </div>
        </div>
        <h1 className="text-white font-quinapple xl:font-sans font-bold xl:text-[32px] text-[20px] mt-[80px]">
          Still have questions?
        </h1>
        <Link to="/ContactUs">
          <div className="mb-20 xl:mb-0">
            <CustomButton
              text="Contact us"
              width="w-[124px]"
              height="h-[48px]"
              marginTop="mt-[24px]"
              backgroundColor="bg-black"
              hoverEffect="hover:bg-customColor"
            />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Faq;
