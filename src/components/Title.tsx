import { FC } from "react";
import { Link } from "react-router-dom";

interface TitleProps {
  paragraphText: string;
  titleText: string;
}

const Title: FC<TitleProps> = ({ paragraphText, titleText }) => {
  return (
    <div className="w-full mx-auto">
      <div className="lg:w-[768px] md:w-[700px] md:h-[96px] md:p-4 lg:p-0 w-[267px] h-[32px] space-y-4 md:mx-auto ml-[16px] mt-[16px] md:mt-[80px]">
        <div className="md:flex hidden items-center">
          <button className={`flex items-center w-[70px] h-[24px]`}>
            <h1 className="text-[16px] font-sans">Home</h1>
            <div className="ml-[8px]">
              <img src="/arrow.svg" alt="" />
            </div>
          </button>
          <p className="font-semibold">{paragraphText}</p>
        </div>
        <div className="flex justify-between md:justify-normal w-[267px] lg:w-[768px] md:w-[700px]">
          <Link to="/">
            <img
              src="/Arro.svg"
              alt=""
              className="block md:hidden cursor-pointer"
            />
          </Link>
          <h1 className="font-bold md:text-[40px] text-[14px]">{titleText}</h1>
        </div>
      </div>
    </div>
  );
};

export default Title;
