import { Link } from "react-router-dom";
import CustomButton from "../CustomButton";

function Faq() {
  return (
    <div className="w-full bg-black">
      <div className="max-w-[1440px] mx-auto h-[1096px] flex flex-col items-center">
        <div className="mt-[112px] w-[768px] h-[154px] flex items-center text-center">
          <h1 className="text-white text-[64px] font-quinapple">FREQUENTLY ASKED QUESTIONS</h1>
        </div>
        <div className="w-[768px] h-[365px] mt-[80px]">
          <div className="flex w-[768px] h-[72px] pt-[22px] justify-between border-b-2 border-gray-500">
            <h1 className="text-[18px] font-bold font-sans text-white">
              Question text goes here
            </h1>
            <img src="/Icon.svg" alt="" className="w-[32px] h-[32px]"></img>
          </div>
          <div className="flex w-[768px] h-[72px] pt-[22px]  justify-between border-b-2 border-gray-500">
            <h1 className="text-[18px] font-bold text-white">
              Question text goes here
            </h1>
            <img src="/Icon.svg" alt="" className="w-[32px] h-[32px]"></img>
          </div>
          <div className="flex w-[768px] h-[72px] pt-[22px] justify-between border-b-2 border-gray-500">
            <h1 className="text-[18px] font-bold text-white">
              Question text goes here
            </h1>
            <img src="/Icon.svg" alt="" className="w-[32px] h-[32px]"></img>
          </div>
          <div className="flex w-[768px] h-[72px] pt-[22px] justify-between border-b-2 border-gray-500">
            <h1 className="text-[18px] font-bold text-white">
              Question text goes here
            </h1>
            <img src="/Icon.svg" alt="" className="w-[32px] h-[32px]"></img>
          </div>
          <div className="flex w-[768px] h-[72px] pt-[22px] justify-between border-b-2 border-gray-500">
            <h1 className="text-[18px] font-bold text-white">
              Question text goes here
            </h1>
            <img src="/Icon.svg" alt="" className="w-[32px] h-[32px]"></img>
          </div>
        </div>
        <h1 className="text-white font-bold text-[32px] mt-[80px]">
          Still have questions?
        </h1>
        <Link to="/ContactUs">
        <CustomButton
            text="Contact us"
            width="w-[124px]"
            height="h-[48px]"
            marginTop="mt-[24px]"
            backgroundColor="bg-black"
            hoverEffect="hover:bg-customColor"
          />
        </Link>
      </div>
    </div>
  );
}

export default Faq;
