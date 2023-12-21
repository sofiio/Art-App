import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Gallery() {
  return (
    <>
      <Header />
      <div className="2xl:max-w-[1312px] lg:max-w-[1280px] md:max-w-[1024px] max-w-[640px] sm:max-w-[768px] mx-auto">
        <div className="flex md:justify-center pt-8 pb-8">
          <div className="lg:w-[768px] md:w-[700px] w-[343px] sm:w-[500px] mx-auto">
            <div className="flex justify-between md:justify-center w-[230px] sm:w-[330px] lg:w-[768px] md:w-[700px]">
              <Link to="/">
                <img
                  src="/Arro.svg"
                  alt=""
                  className="block md:hidden cursor-pointer"
                />
              </Link>
              <h1 className="lg:text-[48px] text-[14px] sm:text-[22px] md:text-[32px] font-bold">
                Immage Gallery
              </h1>
            </div>
          </div>
        </div>
        <div className="flex justify-between 2xl:w-[1312px] lg:w-[900px] w-[343px] sm:w-[500px] md:w-[700px] mx-auto ">
          <img
            src="/1p.png"
            alt=""
            className="w-[165px] h-[100px] 2xl:w-auto 2xl:h-auto sm:w-[240px] sm:h-[150px] md:w-[340px] md:h-[240px] lg:w-[440px] lg:h-[340px]"
          />
          <img
            src="/2p.png"
            alt=""
            className="w-[165px] h-[100px] 2xl:w-auto 2xl:h-auto sm:w-[240px] sm:h-[150px] md:w-[340px] md:h-[240px] lg:w-[440px] lg:h-[340px]"
          />
        </div>
        <div className="mt-[15px] sm:mt-[25px] md:mt-[30px] lg:mt-[40px] flex justify-between 2xl:w-[1312px] lg:w-[900px] w-[343px] sm:w-[500px] md:w-[700px] mx-auto ">
          <img
            src="/3p.png"
            alt=""
            className="w-[165px] h-[100px] 2xl:w-auto 2xl:h-auto sm:w-[240px] sm:h-[150px] md:w-[340px] md:h-[240px] lg:w-[440px] lg:h-[340px]"
          />
          <img
            src="/4p.png"
            alt=""
            className="w-[165px] h-[100px] 2xl:w-auto 2xl:h-auto sm:w-[240px] sm:h-[150px] md:w-[340px] md:h-[240px] lg:w-[440px] lg:h-[340px]"
          />
        </div>
        <img
          src="/5p.png"
          alt=""
          className="mt-[15px] sm:mt-[25px] md:mt-[30px] lg:mt-[40px] w-[343px] h-[100px] 2xl:w-auto 2xl:h-auto sm:w-[500px] sm:h-[160px] md:w-[700px] md:h-[220px] lg:w-[900px] lg:h-[280px] mx-auto"
        />
        <div className="mt-[15px] sm:mt-[25px] md:mt-[30px] lg:mt-[40px] flex justify-between 2xl:w-[1312px] lg:w-[900px] w-[343px] sm:w-[500px] md:w-[700px] mx-auto ">
          <img
            src="/6p.png"
            alt=""
            className="w-[165px] h-[100px] 2xl:w-auto 2xl:h-auto sm:w-[240px] sm:h-[150px] md:w-[340px] md:h-[240px] lg:w-[440px] lg:h-[340px]"
          />
          <img
            src="/7p.png"
            alt=""
            className="w-[165px] h-[100px] 2xl:w-auto 2xl:h-auto sm:w-[240px] sm:h-[150px] md:w-[340px] md:h-[240px] lg:w-[440px] lg:h-[340px]"
          />
        </div>
        <img
          src="/8p.png"
          alt=""
          className="mt-[15px] sm:mt-[25px] md:mt-[30px] lg:mt-[40px] w-[343px] h-[100px] 2xl:w-auto 2xl:h-auto sm:w-[500px] sm:h-[160px] md:w-[700px] md:h-[220px] lg:w-[900px] lg:h-[280px] mx-auto"
        />
        <div className="mt-[15px] sm:mt-[25px] md:mt-[30px] lg:mt-[40px] flex justify-between 2xl:w-[1312px] lg:w-[900px] w-[343px] sm:w-[500px] md:w-[700px] mx-auto ">
          <img
            src="/9p.png"
            alt=""
            className="w-[165px] h-[100px] 2xl:w-auto 2xl:h-auto sm:w-[240px] sm:h-[150px] md:w-[340px] md:h-[240px] lg:w-[440px] lg:h-[340px]"
          />
          <img
            src="/10p.png"
            alt=""
            className="w-[165px] h-[100px] 2xl:w-auto 2xl:h-auto sm:w-[240px] sm:h-[150px] md:w-[340px] md:h-[240px] lg:w-[440px] lg:h-[340px]"
          />
        </div>
        <img
          src="/11p.png"
          alt=""
          className="mt-[15px] sm:mt-[25px] md:mt-[30px] lg:mt-[40px] w-[343px] h-[100px] 2xl:w-auto 2xl:h-auto sm:w-[500px] sm:h-[160px] md:w-[700px] md:h-[220px] lg:w-[900px] lg:h-[280px] mx-auto"
        />
      </div>
      <Footer
        mobileBgColor="white"
        textColor="black"
        hideFirstImageMobile={false}
        SecondImageMobile={true}
        hideLogo={false}
        hideSecondLogo={true}
      />
    </>
  );
}

export default Gallery;
