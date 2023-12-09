import { Link } from "react-router-dom";
import CustomButton from "../CustomButton";

function LearnMore() {
  return (
    <div className="max-w-[1440px] mx-auto mt-[40px]">
      <div className="2xl:max-w-[1312px] lg:max-w-[1280px] md:max-w-[1024px] max-w-[640px] sm:max-w-[768px] p-4 2xl:p-0 mx-auto md:flex justify-end hidden">
        <Link to="/AboutUs">
          <CustomButton
            text="LEARN MORE"
            border="border-none"
            font=" font-medium font-sans"
            width="md:w-[163px] w-[98px]"
            height="md:h-[163px] h-[98px]"
            backgroundColor="bg-customColor"
            rounded="rounded-full"
            imgSrc="/Vector.png"
            imgHoverEffect="hover:invert"
            hoverEffect="hover:bg-white  hover:text-black hover:border hover:border-black"
          />
        </Link>
      </div>
      <div className="2xl:max-w-[1312px] lg:max-w-[1280px] md:max-w-[1024px] max-w-[640px] sm:max-w-[768px] p-4 mx-auto flex md:hidden justify-end">
        <Link to="/AboutUs">
          <CustomButton
            text="LEARN MORE"
            textSize="text-[12px]"
            font=" font-medium font-sans"
            width="xl:w-[163px] w-[98px]"
            height="xl:h-[163px] h-[98px]"
            backgroundColor="bg-customColor"
            rounded="rounded-full"
            imgSrc="/vec.svg"
            border="border-none"
            imgHoverEffect="hover:invert"
            hoverEffect="hover:bg-white  hover:text-black hover:border hover:border-black"
          />
        </Link>
      </div>
    </div>
  );
}

export default LearnMore;
