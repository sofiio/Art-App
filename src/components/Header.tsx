import { Link, useNavigate } from "react-router-dom";
import CustomButton from "./CustomButton";
import HamburgerMenu from "./HamburgerMenu";
import { useState } from "react";

function Header() {
  const [nav, setNav] = useState(false);
  const navigate = useNavigate();

  const handleAboutUsClick = () => {
    navigate("/AboutUs");
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  const handleTheatreClick = () => {
    navigate("/Theatre");
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  const handleMusicClick = () => {
    navigate("/Music");
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  const handleLiteratureClick = () => {
    navigate("/Literature");
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  const handleHomeClick = () => {
    navigate("/");
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  return (
    <div className="font-sans sticky border-b border-black top-0 z-10 w-full h-[55px] xl:h-[72px] mx-auto bg-black ">
      <div
        className="2xl:max-w-[1312px] lg:max-w-[1280px] md:max-w-[1024px] max-w-[640px] sm:max-w-[768px] p-4 2xl:p-0
       flex mx-auto justify-between items-center h-full"
      >
        <Link to="/">
          <img src="/logo.png" alt="" onClick={handleHomeClick} />
        </Link>
        <div className="hidden xl:flex items-center space-x-[32px] text-white text-[16px]">
          <Link to="/">
            <h1 onClick={handleHomeClick} className="cursor-pointer">
              Home
            </h1>
          </Link>
          <Link to="/AboutUs">
            <h1 onClick={handleAboutUsClick} className="cursor-pointer">
              About Us
            </h1>
          </Link>
          <Link to="/Theatre">
            <h1 onClick={handleTheatreClick} className="cursor-pointer">
              Theatre
            </h1>
          </Link>
          <Link to="/Music">
            <h1 onClick={handleMusicClick} className="cursor-pointer">
              Music
            </h1>
          </Link>
          <Link to="/Literature">
            <h1 onClick={handleLiteratureClick} className="cursor-pointer">
              Literature
            </h1>
          </Link>
          <h1 className="cursor-pointer">Gallery</h1>
          <CustomButton
            text="Get started"
            textColor="text-black"
            width="w-[120px]"
            height="h-[40px]"
            marginTop="mt-0"
            backgroundColor="bg-white"
            hoverEffect="hover:bg-customColor"
          />
        </div>
        <div
          className="w-[39px] h-[39px] block xl:hidden"
          onClick={() => setNav(true)}
        >
          <img src="/burger.svg" alt="" className=" cursor-pointer" />
        </div>
      </div>
      <HamburgerMenu nav={nav} setNav={setNav} />
    </div>
  );
}

export default Header;
