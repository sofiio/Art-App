import FormComponent from "./FormComponent";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className=" w-full h-[542px] mx-auto bg-white">
      <div className="max-w-[1312px]  mx-auto">
        <div className="h-[408px] border-b border-black flex pt-[80px]">
          <div className="w-[500px] h-[223px] space-y-4">
            <h1 className="text-[18px] font-bold">Logo</h1>
            <h1>
              Are you ready to embark on a journey through the history of
              theater, literature, and music? Join Us Today!{" "}
            </h1>
            <FormComponent />
            <h1 className="text-[12px]">
              By subscribing you agree to with our{" "}
              <span className="underline cursor-pointer">Privacy Policy</span> and provide
              consent to receive updates from our company.
            </h1>
          </div>
          <div className="w-[322px] h-[185px] ml-[128px] font-sans text-[14px] flex flex-col space-y-4">
          <Link to="/AboutUs"><h1 className="mt-4">About Us</h1></Link>
          <Link to="/Music"><h1>Music</h1></Link>
          <Link to="/Literature"><h1>Literature</h1></Link>
          <Link to="/Theatre"><h1>Theatre</h1></Link>
          <Link to="/ContactUs"><h1>Contact Us</h1></Link>
          </div>
          <div className="w-[322px] h-[240px] space-y-4">
            <h1 className=" font-semibold">Follow Us</h1>
            <div className="flex space-x-2 cursor-pointer">
              <img src="/facebook.svg" alt="" />
              <h1 className="text-[14px]">Facebook</h1>
            </div>
            <div className="flex space-x-2 cursor-pointer">
              <img src="/instagram.svg" alt="" />
              <h1 className="text-[14px]">Instagram</h1>
            </div>
            <div className="flex space-x-2 cursor-pointer">
              <img src="/x.svg" alt="" />
              <h1 className="text-[14px]">X</h1>
            </div>
            <div className="flex space-x-2 cursor-pointer">
              <img src="/linkedin.svg" alt="" />
              <h1 className="text-[14px]">LinkedIn</h1>
            </div>
            <div className="flex space-x-2 cursor-pointer">
              <img src="/youtube.svg" alt="" />
              <h1 className="text-[14px]">Youtube</h1>
            </div>
          </div>
        </div>
        <div className="h-[130px] flex justify-between mt-[32px] text-[14px] font-sans">
          <div>
            <h1>© 2023.All rights reserved.</h1>
          </div>
          <div className="flex space-x-4">
            <h1 className="underline cursor-pointer">Privacy Policy</h1>
            <h1 className="underline cursor-pointer">Terms of Service</h1>
            <h1 className="underline cursor-pointer">Cookies Settings</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
