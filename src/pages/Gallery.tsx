import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const totalImages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  const handleClick = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const showNextImage = (e: React.MouseEvent<HTMLImageElement>) => {
    // Stop event propagation to prevent handleClose from being triggered
    e.stopPropagation();
    const nextIndex = (currentImageIndex + 1) % totalImages.length;
    setSelectedImage(`/${nextIndex + 1}p.png`);
    setCurrentImageIndex(nextIndex);
  };

  const showPrevImage = (e: React.MouseEvent<HTMLImageElement>) => {
    // Stop event propagation to prevent handleClose from being triggered
    e.stopPropagation();
    const prevIndex =
      (currentImageIndex - 1 + totalImages.length) % totalImages.length;
    setSelectedImage(`/${prevIndex + 1}p.png`);
    setCurrentImageIndex(prevIndex);
  };

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
                Image Gallery
              </h1>
            </div>
          </div>
        </div>

        {/* Group 1 */}
        <div className="flex justify-between 2xl:w-[1312px] lg:w-[900px] w-[343px] sm:w-[500px] md:w-[700px] mx-auto">
          {[1, 2].map((index) => (
            <img
              key={index}
              src={`/${index}p.png`}
              alt=""
              className="mt-[15px] sm:mt-[25px] md:mt-[30px] lg:mt-[20px] w-[165px] h-[100px] 2xl:w-auto 2xl:h-auto sm:w-[240px] sm:h-[150px] md:w-[340px] md:h-[240px] lg:w-[440px] lg:h-[340px] cursor-pointer"
              onClick={() => handleClick(`/${index}p.png`)}
            />
          ))}
        </div>

        {/* Group 2 */}
        <div className="mt-[15px] sm:mt-[25px] md:mt-[30px] lg:mt-[40px] flex justify-between 2xl:w-[1312px] lg:w-[900px] w-[343px] sm:w-[500px] md:w-[700px] mx-auto">
          {[3, 4].map((index) => (
            <img
              key={index}
              src={`/${index}p.png`}
              alt=""
              className="w-[165px] h-[100px] 2xl:w-auto 2xl:h-auto sm:w-[240px] sm:h-[150px] md:w-[340px] md:h-[240px] lg:w-[440px] lg:h-[340px] cursor-pointer"
              onClick={() => handleClick(`/${index}p.png`)}
            />
          ))}
        </div>

        {/* Group 3 */}
        <div className="mt-[15px] sm:mt-[25px] md:mt-[30px] lg:mt-[40px] flex justify-between 2xl:w-[1312px] lg:w-[900px] w-[343px] sm:w-[500px] md:w-[700px] mx-auto">
          {[5].map((index) => (
            <img
              key={index}
              src={`/${index}p.png`}
              alt=""
              className="w-[343px] h-[100px] 2xl:w-auto 2xl:h-auto sm:w-[500px] sm:h-[160px] md:w-[700px] md:h-[220px] lg:w-[900px] lg:h-[280px] cursor-pointer"
              onClick={() => handleClick(`/${index}p.png`)}
            />
          ))}
        </div>

        {/* Group 4 */}
        <div className="mt-[15px] sm:mt-[25px] md:mt-[30px] lg:mt-[40px] flex justify-between 2xl:w-[1312px] lg:w-[900px] w-[343px] sm:w-[500px] md:w-[700px] mx-auto">
          {[6, 7].map((index) => (
            <img
              key={index}
              src={`/${index}p.png`}
              alt=""
              className="w-[165px] h-[100px] 2xl:w-auto 2xl:h-auto sm:w-[240px] sm:h-[150px] md:w-[340px] md:h-[240px] lg:w-[440px] lg:h-[340px] cursor-pointer"
              onClick={() => handleClick(`/${index}p.png`)}
            />
          ))}
        </div>

        {/* Group 5 */}
        <div className="mt-[15px] sm:mt-[25px] md:mt-[30px] lg:mt-[40px] flex justify-between 2xl:w-[1312px] lg:w-[900px] w-[343px] sm:w-[500px] md:w-[700px] mx-auto">
          {[8].map((index) => (
            <img
              key={index}
              src={`/${index}p.png`}
              alt=""
              className="w-[343px] h-[100px] 2xl:w-auto 2xl:h-auto sm:w-[500px] sm:h-[160px] md:w-[700px] md:h-[220px] lg:w-[900px] lg:h-[280px] cursor-pointer"
              onClick={() => handleClick(`/${index}p.png`)}
            />
          ))}
        </div>

        {/* Group 6 */}
        <div className="mt-[15px] sm:mt-[25px] md:mt-[30px] lg:mt-[40px] flex justify-between 2xl:w-[1312px] lg:w-[900px] w-[343px] sm:w-[500px] md:w-[700px] mx-auto">
          {[9, 10].map((index) => (
            <img
              key={index}
              src={`/${index}p.png`}
              alt=""
              className="w-[165px] h-[100px] 2xl:w-auto 2xl:h-auto sm:w-[240px] sm:h-[150px] md:w-[340px] md:h-[240px] lg:w-[440px] lg:h-[340px] cursor-pointer"
              onClick={() => handleClick(`/${index}p.png`)}
            />
          ))}
        </div>

        {/* Group 7 */}
        <div className="mt-[15px] sm:mt-[25px] md:mt-[30px] lg:mt-[40px] flex justify-between 2xl:w-[1312px] lg:w-[900px] w-[343px] sm:w-[500px] md:w-[700px] mx-auto">
          {[11].map((index) => (
            <img
              key={index}
              src={`/${index}p.png`}
              alt=""
              className="w-[343px] h-[100px] 2xl:w-auto 2xl:h-auto sm:w-[500px] sm:h-[160px] md:w-[700px] md:h-[220px] lg:w-[900px] lg:h-[280px] cursor-pointer"
              onClick={() => handleClick(`/${index}p.png`)}
            />
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed top-0 z-10 left-0 w-full h-full flex flex-col items-center justify-center bg-black bg-opacity-90"
          onClick={handleClose}
        >
          <img
            src={selectedImage}
            alt=""
            className="xl:w-[800px] 2xl:w-[900px] lg:w-[700px] sm:w-[450px] w-[320px] md:w-[550px] cursor-pointer lg:mt-16 rounded-md lg:rounded-none"
          />
          <div className="mt-2 flex items-center justify-between md:justify-center sm:w-[450px] w-[320px] space-x-12">
            <img
              src="/rarrow.svg"
              alt=""
              className="z-10 cursor-pointer w-[31px] h-[31px] sm:w-[40px] sm:h-[40px] lg:w-auto lg:h-auto"
              onClick={showNextImage}
            />
            <img
              src="/larrow.svg"
              alt=""
              className="cursor-pointer w-[31px] h-[31px] sm:w-[40px] sm:h-[40px] lg:w-auto lg:h-auto"
              onClick={showPrevImage}
            />
          </div>
        </div>
      )}

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
};

export default Gallery;
