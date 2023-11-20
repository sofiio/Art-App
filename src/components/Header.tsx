import CustomButton from "./CustomButton";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="font-sans sticky border-b border-black top-0 z-10 w-full h-[72px] mx-auto bg-white">
      <div className="max-w-[1312px] flex mx-auto justify-between items-center h-full">
        <div>logo</div>

        <div className="flex items-center space-x-[32px] text-black text-[16px]">
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
      </div>
    </div>
  );
}

export default Header;
