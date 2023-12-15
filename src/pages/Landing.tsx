import { useState } from "react";
import CustomButton from "../components/CustomButton";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ChooseUs from "../components/LandingComponents/ChooseUs";
import Faq from "../components/LandingComponents/Faq";
import LearnMore from "../components/LandingComponents/LearnMore";
import OurLessons from "../components/LandingComponents/OurLessons";
import OurMission from "../components/LandingComponents/OurMission";
import OutTeam from "../components/LandingComponents/OutTeam";
import UserTestemonials from "../components/LandingComponents/UserTestemonials";
import Welcome from "../components/LandingComponents/Welcome";
import { Link } from "react-scroll";

function Landing() {
  const [h1TextColor, setH1TextColor] = useState("white");
  return (
    <div className="w-full mx-auto bg-black relative" id="Landing">
      <Header />
      <div className="relative sm:h-[346px] h-[300px] md:h-[500px] xl:h-[570px] lg:h-[550px] overflow-hidden">
        <div className="">
          <img
            src="/airb.png"
            alt=""
            className="w-full xl:h-full h-[280px] sm:h-[320px] md:h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80"></div>
        </div>

        <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col mt-[120px] sm:mt-[135px] md:mt-[220px] xl:justify-center xl:mt-[110px] items-center text-white">
          <div className="xl:w-[1237px] w-[375px] md:w-[747px] sm:w-[500px] h-[70px] flex text-center">
            <h1 className="font-bold xl:text-[48px] text-[24px] md:text-[40px] sm:text-[28px] font-quinapple">
              Tomorrow belongs to those who can hear it coming
            </h1>
          </div>
          <div className="hidden md:block">
            <Link
              to="OurLessons"
              spy={true}
              smooth={true}
              offset={-150}
              duration={500}
            >
              <CustomButton
                text="View Lessons"
                textColor="text-black"
                width="w-[147px]"
                height="h-[48px]"
                marginTop="mt-[67px]"
                backgroundColor="bg-white"
                hoverEffect="hover:bg-white"
              />
            </Link>
          </div>
        </div>
      </div>
      <Welcome />
      <LearnMore />
      <ChooseUs />
      <OurMission />
      <OutTeam />
      <OurLessons
        color="white"
        readMoreText="white"
        h1TextColor={h1TextColor}
        imgSrc="/we.svg"
        imgAlt=""
      />
      <UserTestemonials />
      <Faq />
      <Footer
        mobileBgColor="black"
        textColor="white"
        hideFirstImageMobile={true}
        SecondImageMobile={false}
      />
    </div>
  );
}

export default Landing;
