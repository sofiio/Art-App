import { Link, useNavigate } from "react-router-dom";
import CustomButton from "../CustomButton";
import React, { useState } from "react";

const Faq: React.FC = () => {
  const navigate = useNavigate();

  const handleContactUsClick = () => {
    navigate("/ContactUs");
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  const [isDropdownVisible1, setIsDropdownVisible1] = useState(false);
  const [isDropdownVisible2, setIsDropdownVisible2] = useState(false);
  const [isDropdownVisible3, setIsDropdownVisible3] = useState(false);
  const [isDropdownVisible4, setIsDropdownVisible4] = useState(false);
  const [isDropdownVisible5, setIsDropdownVisible5] = useState(false);
  const [isRotated, setIsRotated] = useState(false);
  const [isRotated1, setIsRotated1] = useState(false);
  const [isRotated2, setIsRotated2] = useState(false);
  const [isRotated3, setIsRotated3] = useState(false);
  const [isRotated4, setIsRotated4] = useState(false);

  const toggleDropdown1 = () => {
    setIsDropdownVisible1(!isDropdownVisible1);
    setIsDropdownVisible2(false);
    setIsDropdownVisible3(false);
    setIsDropdownVisible4(false);
    setIsDropdownVisible5(false);
    setIsRotated((prev) => !prev);
    setIsRotated1(false);
    setIsRotated2(false);
    setIsRotated3(false);
    setIsRotated4(false);
  };

  const toggleDropdown2 = () => {
    setIsDropdownVisible2(!isDropdownVisible2);
    setIsDropdownVisible1(false);
    setIsDropdownVisible3(false);
    setIsDropdownVisible4(false);
    setIsDropdownVisible5(false);
    setIsRotated1((prev) => !prev);
    setIsRotated(false);
    setIsRotated2(false);
    setIsRotated3(false);
    setIsRotated4(false);
  };

  const toggleDropdown3 = () => {
    setIsDropdownVisible3(!isDropdownVisible3);
    setIsDropdownVisible4(false);
    setIsDropdownVisible5(false);
    setIsDropdownVisible1(false);
    setIsDropdownVisible2(false);
    setIsRotated2((prev) => !prev);
    setIsRotated(false);
    setIsRotated1(false);
    setIsRotated3(false);
    setIsRotated4(false);
  };

  const toggleDropdown4 = () => {
    setIsDropdownVisible4(!isDropdownVisible4);
    setIsDropdownVisible5(false);
    setIsDropdownVisible1(false);
    setIsDropdownVisible2(false);
    setIsDropdownVisible3(false);
    setIsRotated3((prev) => !prev);
    setIsRotated(false);
    setIsRotated1(false);
    setIsRotated2(false);
    setIsRotated4(false);
  };

  const toggleDropdown5 = () => {
    setIsDropdownVisible5(!isDropdownVisible5);
    setIsDropdownVisible1(false);
    setIsDropdownVisible2(false);
    setIsDropdownVisible3(false);
    setIsDropdownVisible4(false);
    setIsRotated4((prev) => !prev);
    setIsRotated(false);
    setIsRotated1(false);
    setIsRotated2(false);
    setIsRotated3(false);
  };
  const handleMusicClick = () => {
    navigate("/Music");
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  const handleLiteratureClick = () => {
    navigate("/Literature");
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  const handleTheatreClick = () => {
    navigate("/Theatre");
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  return (
    <div className="w-full bg-black mt-16 xl:mt-0">
      <div
        className={`2xl:w-[1440px] lg:w-[768px] md:w-[700px] w-[343px]  mx-auto bg-black  ${
          isDropdownVisible2 || isDropdownVisible1
            ? "xl:h-[1500px] md:h-[1450px] h-[1100px]"
            : "xl:h-[1096px] h-[760px]"
        } flex flex-col items-center`}
      >
        <div className="xl:w-[768px] xl:mt-[112px] mt-[36px] h-[154px] flex items-center text-center">
          <h1 className="text-white md:text-[64px] text-[32px] font-quinapple">
            FREQUENTLY ASKED QUESTIONS
          </h1>
        </div>
        <div className="md:w-[700px] lg:w-[768px] flex flex-col items-center md:items-start  w-[343px] space-y-4 xl:space-y-0 h-[465px] mt-[32px] md:mt-[80px]">
          <div>
            <div onClick={toggleDropdown1} className="flex cursor-pointer md:w-[700px] lg:w-[768px] w-[311px] sm:w-[500px] md:h-[72px] h-[41px] bg-white md:bg-black text-black md:text-white items-center sm:justify-between justify-around border-b-2 border-gray-500 sm:px-4 md:px-0">
              <div className="w-[250px] sm:w-auto">
                <h1 className="md:text-[18px] text-[12px] font-bold font-sans">
                  What are the classes schedules and Durations?
                </h1>
              </div>
              <img
                src="/Icon.svg"
                alt=""
                className={`w-[32px] h-[32px] hidden md:block cursor-pointer ${
                  isRotated ? "rotate-180" : ""
                }`}
                onClick={toggleDropdown1}
                style={{ transition: "transform 0.3s ease" }}
              ></img>
              <img
                src="/blarow.svg"
                alt=""
                className={`w-[32px] h-[32px] block md:hidden cursor-pointer ${
                  isRotated ? "rotate-180" : ""
                }`}
                onClick={toggleDropdown1}
                style={{ transition: "transform 0.3s ease" }}
              ></img>
            </div>
            {isDropdownVisible1 && (
              <div className="md:w-[700px] lg:w-[768px] w-[311px] sm:w-[500px] md:h-[370px] h-[370px] sm:h-[300px] bg-white md:bg-black text-black md:text-white flex items-start md:pt-[22px] justify-between sm:px-4 px-2 md:px-0">
                {/* Your dropdown content goes here */}
                <div className="w-[250px] sm:w-auto">
                  <p className="md:text-[18px] text-[12px] md:text-white font-bold font-sans ">
                    <ul className="mt-2">
                      Course Theatre: History, Production, and Acting
                      Masterclasses
                      <li className="md:text-[14px] text-[12px] mt-2">
                        • Course Duration: 12 weeks (24 sessions)
                      </li>
                      <li className="md:text-[14px] text-[12px]">
                        • Class duration: 45 minutes
                      </li>
                    </ul>
                    <ul className="mt-6">
                      Course Music: History, Musical Genres, Legends
                      <li className="md:text-[14px] text-[12px] mt-2">
                        • Course Duration: 10 weeks (20 sessions)
                      </li>
                      <li className="md:text-[14px] text-[12px]">
                        • Class duration: 45 minutes
                      </li>
                    </ul>
                    <ul className="mt-6">
                      Course Literature: History, Major periods, World heritage
                      <li className="md:text-[14px] text-[12px] mt-2">
                        • Course Duration: 10 weeks (20 sessions)
                      </li>
                      <li className="md:text-[14px] text-[12px]">
                        • Class duration: 45 minutes
                      </li>
                    </ul>
                  </p>
                </div>
              </div>
            )}
          </div>

          <div>
            <div onClick={toggleDropdown2} className="flex cursor-pointer md:w-[700px] lg:w-[768px] w-[311px] sm:w-[500px] md:h-[72px] h-[41px] bg-white md:bg-black text-black md:text-white items-center sm:justify-between justify-around border-b-2 border-gray-500 sm:px-4 md:px-0">
              <div className="w-[250px] sm:w-auto">
                <h1 className="md:text-[18px] text-[12px] font-bold font-sans">
                  How much do the classes cost?
                </h1>
              </div>
              <img
                src="/Icon.svg"
                alt=""
                className={`w-[32px] h-[32px] hidden md:block cursor-pointer ${
                  isRotated1 ? "rotate-180" : ""
                }`}
                onClick={toggleDropdown2}
                style={{ transition: "transform 0.3s ease" }}
              ></img>
              <img
                src="/blarow.svg"
                alt=""
                className={`w-[32px] h-[32px] block md:hidden cursor-pointer ${
                  isRotated1 ? "rotate-180" : ""
                }`}
                onClick={toggleDropdown2}
                style={{ transition: "transform 0.3s ease" }}
              ></img>
            </div>
            {isDropdownVisible2 && (
              <div className="md:w-[700px] lg:w-[768px] w-[311px] sm:w-[500px] md:h-[450px] h-[420px] bg-white md:bg-black text-black md:text-white flex items-start md:pt-[22px] justify-between sm:px-4 px-2 md:px-0">
                {/* Your dropdown content goes here */}
                <div className="w-[250px] sm:w-auto">
                  <p className="md:text-[18px] text-[12px] md:text-white font-bold font-sans ">
                    <ul className="mt-2">
                      Course Theatre: History, Production, and Acting
                      Masterclasses
                      <li className="md:text-[14px] text-[12px] mt-2">
                        • Course Duration: 12 weeks (24 sessions)
                      </li>
                      <li className="md:text-[14px] text-[12px]">
                        • Class fee: $960
                      </li>
                      <li className="md:text-[14px] text-[12px]">
                        • Payment per class or per course
                      </li>
                    </ul>
                    <ul className="mt-6">
                      Course Music: History, Musical Genres, Legends
                      <li className="md:text-[14px] text-[12px] mt-2">
                        • Course Duration: 10 weeks (20 sessions)
                      </li>
                      <li className="md:text-[14px] text-[12px]">
                        • Class fee: $800
                      </li>
                      <li className="md:text-[14px] text-[12px]">
                        • Payment per class or per course
                      </li>
                    </ul>
                    <ul className="mt-6">
                      Course Literature: History, Major periods, World heritage
                      <li className="md:text-[14px] text-[12px] mt-2">
                        • Course Duration: 10 weeks (20 sessions)
                      </li>
                      <li className="md:text-[14px] text-[12px]">
                        • Class fee: $800
                      </li>
                      <li className="md:text-[14px] text-[12px]">
                        • Payment per class or per course
                      </li>
                    </ul>
                    <h1 className="mt-2 md:mt-6 text-red-500">
                      Note: No additional material or resources needed
                    </h1>
                  </p>
                </div>
              </div>
            )}
          </div>

          <div>
            <div  onClick={toggleDropdown3} className=" cursor-pointer flex md:w-[700px] lg:w-[768px] w-[311px] sm:w-[500px] md:h-[72px] h-[41px] bg-white md:bg-black text-black md:text-white items-center sm:justify-between justify-around border-b-2 border-gray-500 sm:px-4 md:px-0">
              <div className="w-[250px] sm:w-auto">
                <h1 className="md:text-[18px] text-[12px] font-bold font-sans">
                  Where do the lessons take place?
                </h1>
              </div>
              <img
                src="/Icon.svg"
                alt=""
                className={`w-[32px] h-[32px] hidden md:block cursor-pointer ${
                  isRotated2 ? "rotate-180" : ""
                }`}
                onClick={toggleDropdown3}
                style={{ transition: "transform 0.3s ease" }}
              ></img>
              <img
                src="/blarow.svg"
                alt=""
                className={`w-[32px] h-[32px] block md:hidden cursor-pointer ${
                  isRotated2 ? "rotate-180" : ""
                }`}
                onClick={toggleDropdown3}
                style={{ transition: "transform 0.3s ease" }}
              ></img>
            </div>
            {isDropdownVisible3 && (
              <div className="md:w-[700px] lg:w-[768px] w-[311px] sm:w-[500px] md:h-[72px] h-[71px] bg-white md:bg-black text-black md:text-white flex items-start md:pt-[22px] justify-between sm:px-4 px-2 md:px-0">
                {/* Your dropdown content goes here */}
                <div className="w-[250px] sm:w-auto">
                  <p className="md:text-[18px] pt-2 md:pt-0 text-[12px] md:text-white font-bold font-sans ">
                    Since we operate in 2 different states (NY & CT), we will
                    provide locations to the specific groups accordingly
                  </p>
                </div>
              </div>
            )}
          </div>

          <div>
            <div  onClick={toggleDropdown4} className=" cursor-pointer flex md:w-[700px] lg:w-[768px] w-[311px] sm:w-[500px] md:h-[72px] h-[41px] bg-white md:bg-black text-black md:text-white items-center sm:justify-between justify-around border-b-2 border-gray-500 sm:px-4 md:px-0">
              <div className="w-[250px] sm:w-auto">
                <h1 className="md:text-[18px] text-[12px] font-bold font-sans">
                  What topics are cover in the classes?
                </h1>
              </div>
              <img
                src="/Icon.svg"
                alt=""
                className={`w-[32px] h-[32px] hidden md:block cursor-pointer ${
                  isRotated3 ? "rotate-180" : ""
                }`}
               
                style={{ transition: "transform 0.3s ease" }}
              ></img>
              <img
                src="/blarow.svg"
                alt=""
                className={`w-[32px] h-[32px] block md:hidden cursor-pointer ${
                  isRotated3 ? "rotate-180" : ""
                }`}
                onClick={toggleDropdown4}
                style={{ transition: "transform 0.3s ease" }}
              ></img>
            </div>
            {isDropdownVisible4 && (
              <div className="md:w-[700px] lg:w-[768px] w-[311px] sm:w-[500px] h-[71px] md:h-[91px] xl:h-[101px] bg-white md:bg-black text-black md:text-white flex items-start md:pt-[22px] pt-2 justify-between sm:px-4 px-2 md:px-0">
                {/* Your dropdown content goes here */}
                <div className="w-[250px] sm:w-auto">
                  <ul className="md:text-[18px] text-[12px] md:text-white font-bold font-sans ">
                    <Link to="/Theatre">
                      <li
                        onClick={handleTheatreClick}
                        className="hover:text-blue-400 cursor-pointer"
                      >
                        Course Theatre
                      </li>
                    </Link>
                    <Link to="/Music">
                      <li
                        onClick={handleMusicClick}
                        className="hover:text-blue-400 cursor-pointer"
                      >
                        Course Music
                      </li>
                    </Link>
                    <Link to="/Literature">
                      <li
                        onClick={handleLiteratureClick}
                        className="hover:text-blue-400 cursor-pointer"
                      >
                        Course literature
                      </li>
                    </Link>
                  </ul>
                </div>
              </div>
            )}
          </div>

          <div>
            <div onClick={toggleDropdown5} className=" cursor-pointer flex md:w-[700px] lg:w-[768px] w-[311px] sm:w-[500px] md:h-[72px] h-[41px] bg-white md:bg-black text-black md:text-white items-center sm:justify-between justify-around border-b-2 border-gray-500 sm:px-4 md:px-0">
              <div className="w-[250px] sm:w-auto">
                <h1 className="md:text-[18px] text-[12px] font-bold font-sans">
                  Is there Any prerequisite knowledge or skill required?
                </h1>
              </div>
              <img
                src="/Icon.svg"
                alt=""
                className={`w-[32px] h-[32px] hidden md:block cursor-pointer ${
                  isRotated4 ? "rotate-180" : ""
                }`}
                
                style={{ transition: "transform 0.3s ease" }}
              ></img>
              <img
                src="/blarow.svg"
                alt=""
                className={`w-[32px] h-[32px] block md:hidden cursor-pointer ${
                  isRotated4 ? "rotate-180" : ""
                }`}
                onClick={toggleDropdown5}
                style={{ transition: "transform 0.3s ease" }}
              ></img>
            </div>
            {isDropdownVisible5 && (
              <div className="md:w-[700px] lg:w-[768px] w-[311px] sm:w-[500px] md:h-[72px] h-[51px] sm:h-[41px] bg-white md:bg-black text-black md:text-white flex md:pt-[22px] pt-2 justify-between sm:px-4 px-2 md:px-0">
                {/* Your dropdown content goes here */}
                <div className="w-[250px] sm:w-auto">
                  <p className="md:text-[18px] text-[12px] md:text-white font-bold font-sans ">
                    NO entry requirements or any prior knowledge or skills
                    needed for the classes
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
        <div
          className={`text-white  font-quinapple xl:font-sans font-bold xl:text-[32px] text-[20px]   ${
            isDropdownVisible2 || isDropdownVisible1
              ? "xl:mt-[470px]  md:mt-[500px] mt-[300px] "
              : "xl:mt-[50px] mt-[80px]"
          } 

          `}
        >
          Still have questions<span className="font-sans "> ?</span>
        </div>
        <Link to="/ContactUs">
          <div className="mb-20 xl:mb-0">
            <CustomButton
              text="Contact us"
              width="w-[124px]"
              height="h-[48px]"
              marginTop="mt-[36px]"
              backgroundColor="bg-black"
              hoverEffect="hover:bg-customColor"
              onClick={handleContactUsClick}
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Faq;
