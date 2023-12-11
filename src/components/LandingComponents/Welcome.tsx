import CustomButton from "../CustomButton";
import { Link } from "react-scroll";

function Welcome() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="2xl:max-w-[1312px] lg:max-w-[1280px]  max-w-[640px] sm:max-w-[768px] p-4 2xl:p-0 2xl:h-[213px] h-[135px] 2xl:mt-[94px] lg:mt-0 mt-0 flex flex-col lg:text-center text-center mx-auto">
        <h1 className="2xl:text-[96px] text-[32px] md:text-[64px] sm:text-[50px] lg:text-[70px] font-quinapple text-white ">
          Welcome To{" "}
          <span className="text-customColor font-quinapple font-semibold">
            VII Lesson{" "}
          </span>
        </h1>
      </div>
      <div className="2xl:w-[1326px] md:hidden lg:w-[768px] md:w-[700px] w-[343px] mx-auto flex justify-center mt-0 sm:mt-8">
        <Link
          to="OurLessons"
          spy={true}
          smooth={true}
          offset={-150}
          duration={500}
        >
          <CustomButton
            text=""
            font=" font-medium font-sans"
            width="2xl:w-[163px] w-[98px]"
            height="2xl:h-[163px] h-[98px]"
            backgroundColor="bg-customColor"
            rounded="rounded-full"
            imgSrc="/seven.png"
            border="border-none"
            imgHoverEffect="hover:invert"
            hoverEffect="hover:bg-white  hover:text-black hover:border hover:border-black"
          />
        </Link>
      </div>
      <div className="md:flex md:flex-row flex flex-col mt-[160px] md:mt-0 xl:mt-0 2xl:w-[1312px] xl:w-[1200px] lg:max-w-[1280px] lg:w-[1000px] max-w-[640px] sm:max-w-[768px] p-4 2xl:p-0 mx-auto">
        <img
          src="/sample.png"
          alt=""
          className="2xl:h-[510px] lg:h-[400px] h-[220px] sm:h-[350px]  2xl:w-[869px] lg:w-[550px] xl:w-[700px] w-[343px] md:w-[425px] md:h-[380px] sm:w-[500px] mx-auto 2xl:mx-0"
        />
        <img
          src="/sample1.png"
          alt=""
          className="2xl:ml-[34px] 2xl:h-[510px] lg:h-[400px] sm:w-[500px] sm:h-[500px] 2xl:w-[421px] lg:w-[350px] xl:w-[400px] w-[343px] md:w-[269px] md:h-[380px] h-[402px] mt-4 md:mt-0 mx-auto 2xl:mx-0"
        />
      </div>
    </div>
  );
}

export default Welcome;
