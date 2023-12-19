import { Link } from "react-router-dom";
import LassionCard from "./LassionCard";
import { useNavigate } from "react-router-dom";

interface HeadingProps {
  color: string;
  readMoreText: string;
  h1TextColor: string;
  imgSrc: string;
  imgAlt: string;
}

const OurLessons: React.FC<HeadingProps> = ({
  color,
  readMoreText,
  h1TextColor,
  imgAlt,
  imgSrc,
}) => {
  const navigate = useNavigate();

  const handleMusClick = () => {
    navigate("/Music");
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  const handleLitClick = () => {
    navigate("/Literature");
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  const handleTheatrClick = () => {
    navigate("/Theatre");
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  return (
    <div
      id="OurLessons"
      className="2xl:max-w-[1312px] lg:max-w-[1280px] md:max-w-[1024px] max-w-[640px] sm:max-w-[768px] p-4 2xl:p-0 mx-auto 2xl:h-[813px] xl:h-[700px] h-[500px] md:h-[1000px] lg:h-[980px] flex flex-col items-center"
    >
      <h1
        className={`text-${color} md:mt-[350px] xl:mt-[50px] md:text-[48px] text-[32px] font-bold font-quinapple`}
      >
        OUR LESSONS
      </h1>
      <div className="2xl:w-[1312px] xl:w-[1100px] w-[355px] md:w-[747px] lg:w-[900px] sm:w-[500px] h-[451px] 2xl:mt-[80px] xl:mt-[50px] mt-4 md:mt-8 flex justify-between overflow-x-auto overflow-y-hidden example scrollbar-hide p-4 xl:p-0">
        <Link to="/Music">
          <div className="">
            <div onClick={handleMusClick}>
              <LassionCard
                imgSrc="/dd1.svg"
                imgAlt=""
                h1Text="MUSIC"
                buttonLabel="4 Months"
                h1TextColor={h1TextColor}
                marginLeft="ml-0" // customize margin-left if needed
              />
            </div>
            <button
              onClick={handleMusClick}
              className={`flex mt-[45px] 2xl:mt-[20px] lg:mt-[110px] md:mt-[110px] items-center w-[109px] h-[24px]`}
            >
              <h1
                className={`text-${readMoreText} text-[12px] md:text-[16px] font-sans`}
              >
                Read more
              </h1>
              <div className="ml-[8px]">
                <img
                  src={imgSrc}
                  alt={imgAlt}
                  className="w-[18px] h-[15px] md:w-auto md:h-auto"
                />
              </div>
            </button>
          </div>
        </Link>
        <Link to="/Literature">
          <div className="lg:ml-[32px] ml-[15px]">
            <div onClick={handleLitClick}>
              <LassionCard
                imgSrc="/dd2.svg"
                imgAlt="Music Image"
                h1Text="LITERATURE"
                buttonLabel="4 Months"
                h1TextColor={h1TextColor}
                marginLeft="ml-0" // customize margin-left if needed
              />
            </div>
            <button
              onClick={handleLitClick}
              className={`flex mt-[45px] lg:mt-[110px] md:mt-[110px] 2xl:mt-[20px] items-center w-[109px] h-[24px]`}
            >
              <h1
                className={`text-${readMoreText} text-[12px] md:text-[16px] font-sans`}
              >
                Read more
              </h1>
              <div className="ml-[8px]">
                <img
                  src={imgSrc}
                  alt={imgAlt}
                  className="w-[18px] h-[15px] md:w-auto md:h-auto"
                />
              </div>
            </button>
          </div>
        </Link>

        <Link to="/Theatre">
          <div className="ml-[32px] md:ml-[15px] xl:ml-[32px]">
            <div onClick={handleTheatrClick}>
              <LassionCard
                imgSrc="/dd3.svg"
                imgAlt="Music Image"
                h1Text="THEATRE"
                buttonLabel="4 Months"
                h1TextColor={h1TextColor}
                marginLeft="ml-0" // customize margin-left if needed
                onClick={handleTheatrClick}
              />
            </div>
            <button
              onClick={handleTheatrClick}
              className={`flex mt-[45px] 2xl:mt-[20px] lg:mt-[110px] md:mt-[110px] items-center w-[109px] h-[24px]`}
            >
              <h1
                className={`text-${readMoreText} text-[12px] md:text-[16px] font-sans`}
              >
                Read more
              </h1>
              <div className="ml-[8px]">
                <img
                  src={imgSrc}
                  alt={imgAlt}
                  className="w-[18px] h-[15px] md:w-auto md:h-auto"
                />
              </div>
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default OurLessons;
