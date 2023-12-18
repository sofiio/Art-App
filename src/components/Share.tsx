import { Link, useNavigate } from "react-router-dom";
import CustomButton from "./CustomButton";
import { FacebookShareButton } from "react-share";
import { InstapaperShareButton } from "react-share";

function Share() {
  const navigate = useNavigate();
  const handleContactUsClick = () => {
    navigate("/ContactUs");
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  return (
    <div className="flex flex-col items-center">
      <div className="lg:w-[768px] md:w-[700px] sm:w-[500px] w-[344px] bg-white md:h-[110px] h-[75px] md:mt-[90px] mt-[32px] md:mx-auto flex  md:border-b border-black">
        <div className="w-[152px] h-[75px]">
          <h1 className="text-[18px] font-semibold">Share</h1>
          <div className="flex space-x-4 mt-[20px]">
            <InstapaperShareButton url="https://www.youtube.com/watch?v=PisA-OPisUY&ab_channel=CosdenSolutions">
              <img src="/instagram.svg" alt="" />
            </InstapaperShareButton>
            <FacebookShareButton
              url="https://www.youtube.com/watch?v=PisA-OPisUY&ab_channel=CosdenSolutions"
              hashtag="#React"
            >
              <img src="/facebook.svg" alt="" />
            </FacebookShareButton>
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
            onClick={handleContactUsClick}
          />
        </Link>
      </div>
    </div>
  );
}

export default Share;
