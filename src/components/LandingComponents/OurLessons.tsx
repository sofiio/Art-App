import LassionCard from "./LassionCard";

function OurLessons() {
  return (
    <div className="max-w-[1440px] mx-auto h-[813px] flex flex-col items-center">
      <h1 className="mt-[112px] text-[48px] font-bold font-quinapple">OUR LESSONS</h1>
      <div className="w-[1312px] h-[451px] mt-[80px] flex">
        <LassionCard
          imgSrc="/dd1.svg"
          imgAlt=""
          h1Text="MUSIC"
          buttonLabel="4 Months"
          readMoreText="Read more"
          marginLeft="ml-0" // customize margin-left if needed
        />
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
