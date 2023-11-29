import { Link } from "react-router-dom";
import LassionCard from "./LassionCard";

function OurLessons() {
  return (
    <div
      id="OurLessons"
      className="2xl:max-w-[1312px] lg:max-w-[1280px] md:max-w-[1024px] max-w-[640px] sm:max-w-[768px] p-4 2xl:p-0 mx-auto md:h-[813px] h-[471px] flex flex-col items-center"
    >
      <h1 className="2xl:mt-[50px] md:mt-[100px] md:text-[48px] text-[32px] font-bold font-quinapple">
        OUR LESSONS
      </h1>
      <div className="2xl:w-[1312px] p-4 2xl:p-0 w-[375px] md:w-[543px] h-[451px] 2xl:mt-[80px] mt-[20px] flex overflow-x-auto overflow-y-hidden example scrollbar-hide">
        <Link to="/Music">
          <div className="ml-[32px] md:ml-0">
            <LassionCard
              imgSrc="/dd1.svg"
              imgAlt=""
              h1Text="MUSIC"
              buttonLabel="4 Months"
              readMoreText="Read more"
              marginLeft="ml-0" // customize margin-left if needed
            />
          </div>
        </Link>
        <Link to="/Literature">
          <div className="ml-[32px]">
            <LassionCard
              imgSrc="/dd2.svg"
              imgAlt="Music Image"
              h1Text="LITERATURE"
              buttonLabel="4 Months"
              readMoreText="Read more"
              marginLeft="ml-0" // customize margin-left if needed
            />
          </div>
        </Link>
        <Link to="/Theatre">
          <div className="ml-[32px]">
            <LassionCard
              imgSrc="/dd3.svg"
              imgAlt="Music Image"
              h1Text="THEATRE"
              buttonLabel="4 Months"
              readMoreText="Read more"
              marginLeft="ml-0" // customize margin-left if needed
            />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default OurLessons;
