import { Link } from "react-router-dom";
import LassionCard from "./LassionCard";

function OurLessons() {
  return (
    <div
      id="OurLessons"
      className="2xl:max-w-[1312px] lg:max-w-[1280px] md:max-w-[1024px] max-w-[640px] sm:max-w-[768px] p-4 2xl:p-0 mx-auto xl:h-[813px] h-[500px] md:h-[900px] lg:h-[980px] flex flex-col items-center"
    >
      <h1 className="text-white md:mt-[350px] xl:mt-[50px] md:text-[48px] text-[32px] font-bold font-quinapple">
        OUR LESSONS
      </h1>
      <div className="2xl:w-[1312px] xl:w-[1100px] w-[375px] md:w-[747px] sm:w-[500px] h-[451px] 2xl:mt-[80px] xl:mt-[20px] mt-4 flex overflow-x-auto overflow-y-hidden example scrollbar-hide p-4 xl:p-0">
        <Link to="/Music">
          <div className="">
            <LassionCard
              imgSrc="/dd1.svg"
              imgAlt=""
              h1Text="MUSIC"
              buttonLabel="4 Months"
              // readMoreText=""
              marginLeft="ml-0" // customize margin-left if needed
            />
            <Link to="/Syllabus">
              <button
                className={`flex mt-[40px] 2xl:mt-[24px] lg:mt-[160px] md:mt-[110px] items-center w-[109px] h-[24px]`}
              >
                <h1 className=" text-white text-[12px] md:text-[16px] font-sans">
                  Read more
                </h1>
                <div className="ml-[8px]">
                  <img
                    src="/we.svg"
                    alt=""
                    className="w-[8px] h-[5px] md:w-auto md:h-auto"
                  />
                </div>
              </button>
            </Link>
          </div>
        </Link>

        <Link to="/Literature">
          <div className="lg:ml-[32px] ml-[15px]">
            <LassionCard
              imgSrc="/dd2.svg"
              imgAlt="Music Image"
              h1Text="LITERATURE"
              buttonLabel="4 Months"
              // readMoreText="Read more"
              marginLeft="ml-0" // customize margin-left if needed
            />
            <Link to="/Syllabus">
              <button
                className={`flex mt-[40px] lg:mt-[160px] md:mt-[110px] 2xl:mt-[24px] items-center w-[109px] h-[24px]`}
              >
                <h1 className="text-white text-[12px]  md:text-[16px] font-sans">
                  Read more
                </h1>
                <div className="ml-[8px]">
                  <img
                    src="/we.svg"
                    alt=""
                    className="w-[8px] h-[5px] md:w-auto md:h-auto"
                  />
                </div>
              </button>
            </Link>
          </div>
        </Link>

        <Link to="/Theatre">
          <div className="ml-[32px] md:ml-[15px] xl:ml-[32px]">
            <LassionCard
              imgSrc="/dd3.svg"
              imgAlt="Music Image"
              h1Text="THEATRE"
              buttonLabel="4 Months"
              // readMoreText="Read more"
              marginLeft="ml-0" // customize margin-left if needed
            />
            <Link to="/Syllabus">
              <button
                className={`flex mt-[40px] 2xl:mt-[24px] lg:mt-[160px] md:mt-[110px] items-center w-[109px] h-[24px]`}
              >
                <h1 className="text-white text-[12px] md:text-[16px] font-sans">
                  Read more
                </h1>
                <div className="ml-[8px]">
                  <img
                    src="/we.svg"
                    alt=""
                    className="w-[8px] h-[5px] md:w-auto md:h-auto"
                  />
                </div>
              </button>
            </Link>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default OurLessons;
