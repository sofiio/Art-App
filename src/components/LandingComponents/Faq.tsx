import { Link } from "react-router-dom";
import CustomButton from "../CustomButton";
import React, { useState } from "react";

const Faq: React.FC = () => {
  const [isDropdownVisible1, setIsDropdownVisible1] = useState(false);
  const [isDropdownVisible2, setIsDropdownVisible2] = useState(false);
  const [isDropdownVisible3, setIsDropdownVisible3] = useState(false);
  const [isDropdownVisible4, setIsDropdownVisible4] = useState(false);
  const [isDropdownVisible5, setIsDropdownVisible5] = useState(false);

  const toggleDropdown1 = () => {
    setIsDropdownVisible1(!isDropdownVisible1);
    setIsDropdownVisible2(false);
    setIsDropdownVisible3(false);
    setIsDropdownVisible4(false);
    setIsDropdownVisible5(false);
  };

  const toggleDropdown2 = () => {
    setIsDropdownVisible2(!isDropdownVisible2);
    setIsDropdownVisible1(false);
    setIsDropdownVisible3(false);
    setIsDropdownVisible4(false);
    setIsDropdownVisible5(false);
  };

  const toggleDropdown3 = () => {
    setIsDropdownVisible3(!isDropdownVisible3);
    setIsDropdownVisible4(false);
    setIsDropdownVisible5(false);
    setIsDropdownVisible1(false);
    setIsDropdownVisible2(false);
  };

  const toggleDropdown4 = () => {
    setIsDropdownVisible4(!isDropdownVisible4);
    setIsDropdownVisible5(false);
    setIsDropdownVisible1(false);
    setIsDropdownVisible2(false);
    setIsDropdownVisible3(false);
  };

  const toggleDropdown5 = () => {
    setIsDropdownVisible5(!isDropdownVisible5);
    setIsDropdownVisible1(false);
    setIsDropdownVisible2(false);
    setIsDropdownVisible3(false);
    setIsDropdownVisible4(false);
  };

  return (
    <div className="w-full bg-black mt-16 xl:mt-0">
      <div className="2xl:w-[1440px] lg:w-[768px] md:w-[700px] w-[343px]  mx-auto xl:h-[1096px] md:h-[1000px] h-[681px] flex flex-col items-center">
        <div className="xl:w-[768px] xl:mt-[112px] mt-[36px] h-[154px] flex items-center text-center">
          <h1 className="text-white md:text-[64px] text-[32px] font-quinapple">
            FREQUENTLY ASKED QUESTIONS
          </h1>
        </div>
        <div className="md:w-[700px] lg:w-[768px] flex flex-col items-center md:items-start  w-[343px] space-y-4 xl:space-y-0 h-[465px] mt-[32px] md:mt-[80px]">
          <div>
            <div className="flex md:w-[700px] lg:w-[768px] w-[311px] sm:w-[500px] md:h-[72px] h-[41px] bg-white md:bg-black text-black md:text-white items-center md:items-start xl:pt-[22px] sm:justify-between justify-around border-b-2 border-gray-500 sm:px-4 md:px-0">
              <h1 className="md:text-[18px] text-[12px] font-bold font-sans">
                Question text goes here
              </h1>
              <img
                src="/Icon.svg"
                alt=""
                className="w-[32px] h-[32px] hidden md:block cursor-pointer"
                onClick={toggleDropdown1}
              ></img>
              <img
                src="/blarow.svg"
                alt=""
                className="w-[32px] h-[32px] block md:hidden cursor-pointer"
                onClick={toggleDropdown1}
              ></img>
            </div>
            {isDropdownVisible1 && (
              <div className="md:w-[700px] lg:w-[768px] w-[311px] sm:w-[500px] md:h-[72px] h-[41px] bg-white md:bg-black text-black md:text-white items-center flex md:items-start md:pt-[22px] justify-between sm:px-4 px-10 md:px-0">
                {/* Your dropdown content goes here */}
                <p className="md:text-[18px] text-[12px] md:text-white font-bold font-sans ">
                  Answer
                </p>
              </div>
            )}
          </div>

          <div>
            <div className="flex md:w-[700px] lg:w-[768px] w-[311px] sm:w-[500px] md:h-[72px] h-[41px] bg-white md:bg-black text-black md:text-white items-center md:items-start xl:pt-[22px] sm:justify-between justify-around border-b-2 border-gray-500 sm:px-4 md:px-0">
              <h1 className="md:text-[18px] text-[12px] font-bold font-sans">
                Question text goes here
              </h1>
              <img
                src="/Icon.svg"
                alt=""
                className="w-[32px] h-[32px] hidden md:block cursor-pointer"
                onClick={toggleDropdown2}
              ></img>
              <img
                src="/blarow.svg"
                alt=""
                className="w-[32px] h-[32px] block md:hidden cursor-pointer"
                onClick={toggleDropdown2}
              ></img>
            </div>
            {isDropdownVisible2 && (
              <div className="md:w-[700px] lg:w-[768px] w-[311px] sm:w-[500px] md:h-[72px] h-[41px] bg-white md:bg-black text-black md:text-white items-center flex md:items-start md:pt-[22px] justify-between sm:px-4 px-10 md:px-0">
                {/* Your dropdown content goes here */}
                <p className="md:text-[18px] text-[12px] md:text-white font-bold font-sans ">
                  Answer
                </p>
              </div>
            )}
          </div>

          <div>
            <div className="flex md:w-[700px] lg:w-[768px] w-[311px] sm:w-[500px] md:h-[72px] h-[41px] bg-white md:bg-black text-black md:text-white items-center md:items-start xl:pt-[22px] sm:justify-between justify-around border-b-2 border-gray-500 sm:px-4 md:px-0">
              <h1 className="md:text-[18px] text-[12px] font-bold font-sans">
                Question text goes here
              </h1>
              <img
                src="/Icon.svg"
                alt=""
                className="w-[32px] h-[32px] hidden md:block cursor-pointer"
                onClick={toggleDropdown3}
              ></img>
              <img
                src="/blarow.svg"
                alt=""
                className="w-[32px] h-[32px] block md:hidden cursor-pointer"
                onClick={toggleDropdown3}
              ></img>
            </div>
            {isDropdownVisible3 && (
              <div className="md:w-[700px] lg:w-[768px] w-[311px] sm:w-[500px] md:h-[72px] h-[41px] bg-white md:bg-black text-black md:text-white items-center flex md:items-start md:pt-[22px] justify-between sm:px-4 px-10 md:px-0">
                {/* Your dropdown content goes here */}
                <p className="md:text-[18px] text-[12px] md:text-white font-bold font-sans ">
                  Answer
                </p>
              </div>
            )}
          </div>

          <div>
            <div className="flex md:w-[700px] lg:w-[768px] w-[311px] sm:w-[500px] md:h-[72px] h-[41px] bg-white md:bg-black text-black md:text-white items-center md:items-start xl:pt-[22px] sm:justify-between justify-around border-b-2 border-gray-500 sm:px-4 md:px-0">
              <h1 className="md:text-[18px] text-[12px] font-bold font-sans">
                Question text goes here
              </h1>
              <img
                src="/Icon.svg"
                alt=""
                className="w-[32px] h-[32px] hidden md:block cursor-pointer"
                onClick={toggleDropdown4}
              ></img>
              <img
                src="/blarow.svg"
                alt=""
                className="w-[32px] h-[32px] block md:hidden cursor-pointer"
                onClick={toggleDropdown4}
              ></img>
            </div>
            {isDropdownVisible4 && (
              <div className="md:w-[700px] lg:w-[768px] w-[311px] sm:w-[500px] md:h-[72px] h-[41px] bg-white md:bg-black text-black md:text-white items-center flex md:items-start md:pt-[22px] justify-between sm:px-4 px-10 md:px-0">
                {/* Your dropdown content goes here */}
                <p className="md:text-[18px] text-[12px] md:text-white font-bold font-sans ">
                  Answer
                </p>
              </div>
            )}
          </div>

          <div>
            <div className="flex md:w-[700px] lg:w-[768px] w-[311px] sm:w-[500px] md:h-[72px] h-[41px] bg-white md:bg-black text-black md:text-white items-center md:items-start xl:pt-[22px] sm:justify-between justify-around border-b-2 border-gray-500 sm:px-4 md:px-0">
              <h1 className="md:text-[18px] text-[12px] font-bold font-sans">
                Question text goes here
              </h1>
              <img
                src="/Icon.svg"
                alt=""
                className="w-[32px] h-[32px] hidden md:block cursor-pointer"
                onClick={toggleDropdown5}
              ></img>
              <img
                src="/blarow.svg"
                alt=""
                className="w-[32px] h-[32px] block md:hidden cursor-pointer"
                onClick={toggleDropdown5}
              ></img>
            </div>
            {isDropdownVisible5 && (
              <div className="md:w-[700px] lg:w-[768px] w-[311px] sm:w-[500px] md:h-[72px] h-[41px] bg-white md:bg-black text-black md:text-white items-center flex md:items-start md:pt-[22px] justify-between sm:px-4 px-10 md:px-0">
                {/* Your dropdown content goes here */}
                <p className="md:text-[18px] text-[12px] md:text-white font-bold font-sans ">
                  Answer
                </p>
              </div>
            )}
          </div>
        </div>
        <h1 className="text-white font-quinapple xl:font-sans font-bold xl:text-[32px] text-[20px] mt-[80px] xl:mt-[50px]">
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
};

export default Faq;
