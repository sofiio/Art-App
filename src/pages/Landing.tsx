import CustomButton from "../components/CustomButton";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ChooseUs from "../components/LandingComponents/ChooseUs";
import Faq from "../components/LandingComponents/Faq";
import OurLessons from "../components/LandingComponents/OurLessons";
import OurMission from "../components/LandingComponents/OurMission";
import OutTeam from "../components/LandingComponents/OutTeam";
import UserTestemonials from "../components/LandingComponents/UserTestemonials";
import Welcome from "../components/LandingComponents/Welcome";

function Landing() {
  return (
    <div className="w-full mx-auto">
      <Header />
      <div className="relative">
        <img
          src="/AirBrush.png"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col mt-[203px] items-center text-white">
          <div className="w-[848px] h-[141px] flex text-center">
            <h1 className="font-bold text-[48px] font-quinapple">
              Tomorrow belongs to those who can hear it coming
            </h1>
          </div>
          <CustomButton
            text="View Lessons"
            width="w-[147px]"
            height="h-[48px]"
            marginTop="mt-[48px]"
            backgroundColor="bg-customColor"
            hoverEffect="hover:bg-white hover:text-customColor hover:border-customColor "
          />
        </div>
      </div>
      <Welcome />
      <div className="max-w-[1440px] mx-auto mt-[40px]">
        <div className="w-[1326px] mx-auto flex justify-end">
          <CustomButton
            text="LEARN MORE"
            font=" font-medium font-sans"
            width="w-[163px]"
            height="h-[163px]"
            backgroundColor="bg-customColor"
            rounded="rounded-full"
            imgSrc="/Vector.png"
            imgHoverEffect="hover:invert"
            hoverEffect="hover:bg-white  hover:text-black hover:border hover:border-black"
          />
        </div>
      </div>
      <ChooseUs />
      <OurMission />
      <OutTeam />
      <OurLessons />
      <UserTestemonials />
      <Faq />
      <Footer/>
    </div>
  );
}

export default Landing;
