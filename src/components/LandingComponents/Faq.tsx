import { Link } from "react-router-dom";
import CustomButton from "../CustomButton";

function Faq() {
  return (
    <div className="w-full bg-black mt-16 xl:mt-0">
      <div className="2xl:w-[1440px] lg:w-[768px] md:w-[700px] w-[343px] mx-auto xl:h-[1096px] h-[681px] flex flex-col items-center">
        <div className="xl:mt-[112px] mt-[36px] h-[154px] flex items-center text-center">
          <h1 className="text-white xl:text-[64px] text-[32px] font-quinapple">
            FREQUENTLY ASKED QUESTIONS
          </h1>
        </div>
        <div className="lg:w-[768px] flex flex-col items-center xl:items-start md:w-[700px] w-[343px] space-y-4 xl:space-y-0 h-[365px] mt-[32px] xl:mt-[80px]">
          <div className="flex xl:w-[768px] w-[311px] xl:h-[72px] h-[41px] bg-white xl:bg-black text-black xl:text-white items-center xl:items-start xl:pt-[22px] xl:justify-between justify-around border-b-2 border-gray-500">
            <h1 className="xl:text-[18px] text-[12px] font-bold font-sans">
              Question text goes here
            </h1>
            <img
              src="/Icon.svg"
              alt=""
              className="w-[32px] h-[32px] hidden xl:block"
            ></img>
            <img
              src="/blarow.svg"
              alt=""
              className="w-[32px] h-[32px] block xl:hidden"
            ></img>
          </div>
          <div className="flex xl:w-[768px] w-[311px] xl:h-[72px] h-[41px] bg-white xl:bg-black text-black xl:text-white xl:pt-[22px] justify-around items-center xl:justify-between border-b-2 border-gray-500">
            <h1 className="xl:text-[18px] text-[12px] font-bold">
              Question text goes here
            </h1>
            <img
              src="/Icon.svg"
              alt=""
              className="w-[32px] h-[32px] hidden xl:block"
            ></img>
            <img
              src="/blarow.svg"
              alt=""
              className="w-[32px] h-[32px] block xl:hidden"
            ></img>
          </div>
          <div className="flex xl:w-[768px] w-[311px] xl:h-[72px] h-[41px] bg-white xl:bg-black text-black xl:text-white xl:pt-[22px] xl:justify-between items-center justify-around border-b-2 border-gray-500">
            <h1 className="xl:text-[18px] text-[12px] font-bold">
              Question text goes here
            </h1>
            <img
              src="/Icon.svg"
              alt=""
              className="w-[32px] h-[32px] hidden xl:block"
            ></img>
            <img
              src="/blarow.svg"
              alt=""
              className="w-[32px] h-[32px] block xl:hidden"
            ></img>
          </div>
          <div className="flex xl:w-[768px] w-[311px] xl:h-[72px] h-[41px] bg-white xl:bg-black text-black xl:text-white xl:pt-[22px]  items-center justify-around xl:justify-between border-b-2 border-gray-500">
            <h1 className="xl:text-[18px] text-[12px] font-bold">
              Question text goes here
            </h1>
            <img
              src="/Icon.svg"
              alt=""
              className="w-[32px] h-[32px] hidden xl:block"
            ></img>
            <img
              src="/blarow.svg"
              alt=""
              className="w-[32px] h-[32px] block xl:hidden"
            ></img>
          </div>
          <div className="flex xl:w-[768px] w-[311px] xl:h-[72px] h-[41px] bg-white xl:bg-black text-black xl:text-white xl:pt-[22px] items-center justify-around xl:justify-between border-b-2 border-gray-500">
            <h1 className="xl:text-[18px] text-[12px] font-bold">
              Question text goes here
            </h1>
            <img
              src="/Icon.svg"
              alt=""
              className="w-[32px] h-[32px] hidden xl:block"
            ></img>
            <img
              src="/blarow.svg"
              alt=""
              className="w-[32px] h-[32px] block xl:hidden"
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
