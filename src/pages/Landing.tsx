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
          <div className="w-[848px] h-[141px] xl:flex text-center hidden">
            <h1 className="font-bold text-[48px] font-quinapple">
              Tomorrow belongs to those who can hear it coming
            </h1>
          </div>
          <div className="hidden xl:block">
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
      </div>
      <Welcome />
      <div className="max-w-[1440px] mx-auto mt-[40px]">
        <div className="2xl:w-[1326px] lg:w-[768px] md:w-[700px] w-[343px] mx-auto xl:flex justify-end hidden">
          <CustomButton
            text="LEARN MORE"
            font=" font-medium font-sans"
            width="xl:w-[163px] w-[98px]"
            height="xl:h-[163px] h-[98px]"
            backgroundColor="bg-customColor"
            rounded="rounded-full"
            imgSrc="/Vector.png"
            imgHoverEffect="hover:invert"
            hoverEffect="hover:bg-white  hover:text-black hover:border hover:border-black"
          />
        </div>
        <div className="2xl:w-[1326px] lg:w-[768px] md:w-[700px] w-[343px] mx-auto flex xl:hidden justify-end">
          <CustomButton
            text="LEARN MORE"
            textSize="text-[12px]"
            font=" font-medium font-sans"
            width="xl:w-[163px] w-[98px]"
            height="xl:h-[163px] h-[98px]"
            backgroundColor="bg-customColor"
            rounded="rounded-full"
            imgSrc="/vec.svg"
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
      <Footer />
    </div>
  );
}

export default Landing;
