import { Link } from "react-router-dom";
import CustomButton from "./CustomButton";

function Share() {
  return (
    <div>
      <div className="lg:w-[768px] md:w-[700px] w-[152px] md:h-[110px] h-[75px] md:mt-[90px] mt-[32px] md:mx-auto ml-[16px] p-4 md:p-0 md:border-b border-black">
        <div className="w-[152px] h-[75px]">
          <h1 className="text-[18px] font-semibold">Share</h1>
          <div className="flex space-x-4 mt-[20px]">
            <img src="/Link.svg" alt="" />
            <img src="/linkedin.svg" alt="" />
            <img src="/x.svg" alt="" />
            <img src="/facebook.svg" alt="" />
          </div>
        </div>
      </div>
      <div className="mt-[80px] flex flex-col items-center">
        <h1 className="font-bold md:text-[32px] text-[24px] font-quinapple md:font-sans">
          have questions?
        </h1>
        <Link to="/ContactUs">
          <CustomButton
            text="Contuct us"
            width="md:w-[125px] w-[117px]"
            height="md:h-[48px] h-[40px]"
            marginTop="mt-[24px]"
            backgroundColor="bg-black"
            hoverEffect="hover:bg-customColor"
          />
        </Link>
      </div>
    </div>
  );
}

export default Share;
