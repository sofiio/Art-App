import React from "react";
import { Link } from "react-router-dom";

// Define an interface for the component props
interface HamburgerMenuProps {
  nav: boolean;
  setNav: React.Dispatch<React.SetStateAction<boolean>>;
}

// Use the interface as the type for the props
const HamburgerMenu: React.FC<HamburgerMenuProps> = (props) => {
  return (
    <>
      <div
        className={
          props.nav ? "bg-black/80 fixed w-full h-screen z-10 top-0 left-0" : ``
        }
      ></div>

      <div
        className={
          props.nav
            ? "bg-white fixed top-0 right-0 w-[300px] h-screen z-10 "
            : "bg-white fixed top-0 left-[-100%] w-[300px] h-screen z-10 "
        }
      >
        <div className="w-[63px] h-[27px]">
          <h2 className="font-black text-[30px] p-4">Logo</h2>
        </div>

        <img
          src="/closing.svg"
          alt=""
          onClick={() => props.setNav(!props.nav)}
          className="right-4 top-4 cursor-pointer absolute duration-300"
        />

        <nav>
          <ul className="flex flex-col p-4 mt-16 space-y-8">
            <Link to="/">
              <li className=" cursor-pointer">Home</li>{" "}
            </Link>
            <Link to="/AboutUs">
              <li className=" cursor-pointer">About Us</li>{" "}
            </Link>
            <Link to="/Theatre">
              <li className=" cursor-pointer">Theatre</li>{" "}
            </Link>
            <Link to="/Music">
              <li className=" cursor-pointer">Music</li>{" "}
            </Link>
            <Link to="/Literature">
              <li className=" cursor-pointer">Literature</li>{" "}
            </Link>
            <Link to="/Gallery">
              <li className=" cursor-pointer">Gallery</li>{" "}
            </Link>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default HamburgerMenu;
