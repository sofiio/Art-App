import LassionCard from "./LassionCard";

function OurLessons() {
  return (
    <div className="2xl:w-[1440px] w-[375px] md:w-[543px] mx-auto md:h-[813px] h-[471px] flex flex-col items-center">
      <h1 className="2xl:mt-[50px] md:mt-[100px] md:text-[48px] text-[32px] font-bold font-quinapple">
        OUR LESSONS
      </h1>
      <div className="2xl:w-[1312px] w-[375px] md:w-[543px] h-[451px] 2xl:mt-[80px] mt-[20px] flex overflow-x-auto overflow-y-hidden example scrollbar-hide">
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
      </div>
    </div>
  );
}

export default OurLessons;
