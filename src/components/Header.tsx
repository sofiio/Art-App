import { Link } from "react-router-dom";
import CustomButton from "./CustomButton";
import HamburgerMenu from "./HamburgerMenu";
import { useState } from "react";

function Header() {
  const [nav, setNav] = useState(false);

  return (
    <div className="font-sans sticky border-b border-black top-0 z-10 w-full h-[55px] xl:h-[72px] mx-auto xl:bg-white bg-black ">
      <div
        className="2xl:w-[1312px] lg:w-[768px] md:w-[700px] w-[343px] 
       flex mx-auto justify-between items-center h-full"
      >
        <Link to="/">
          <div className="text-white xl:text-black">logo</div>
        </Link>
        <div className="hidden xl:flex items-center space-x-[32px] text-black text-[16px]">
          <Link to="/">
            <h1 className="cursor-pointer">Home</h1>
          </Link>
          <Link to="/AboutUs">
            <h1 className="cursor-pointer">About Us</h1>
          </Link>
          <Link to="/Theatre">
            <h1 className="cursor-pointer">Theatre</h1>
          </Link>
          <Link to="/Music">
            <h1 className="cursor-pointer">Music</h1>
          </Link>
          <Link to="/Literature">
            <h1 className="cursor-pointer">Literature</h1>
          </Link>
          <h1 className="cursor-pointer">Gallery</h1>
          <CustomButton
            text="Get started"
            width="w-[120px]"
            height="h-[40px]"
            marginTop="mt-0"
            backgroundColor="bg-black"
            hoverEffect="hover:bg-customColor"
          />
        </div>
        <div
          className="w-[39px] h-[39px] block xl:hidden"
          onClick={() => setNav(true)}
        >
          <img src="/burger.svg" alt="" />
        </div>
      </div>
      <HamburgerMenu nav={nav} setNav={setNav} />
    </div>
  );
}

export default Header;
