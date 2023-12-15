function Testimonial() {
  return (
    <div className="w-full bg-customColor flex items-center mt-[60px] md:mt-0">
      <div className="max-w-[1440px]  mt-[112px] mx-auto h-[435px]">
        <div className="lg:w-[768px] w-[299px] sm:w-[400px] h-[210px] mx-auto lg:mx-0">
          <div className="flex space-x-2 items-center justify-center">
            {Array.from({ length: 5 }, (_, index) => (
              <img key={index} src="/color.svg" alt={`Color ${index + 1}`} />
            ))}
          </div>
          <div className="lg:w-[768px] w-[299px] sm:w-[400px] h-[72px] mt-[32px] flex justify-center text-center">
            <h1 className="text-[24px] font-semibold text-white ">
              “The literature course broadened my horizons. It's a must for book
              lovers. I found my passion here!”
            </h1>
          </div>
          <div className="w-[103px] h-[56px] flex justify-center items-center space-x-4 lg:mt-[32px] mt-[110px] sm:mt-[70px] mx-auto">
            <img src="/avatar1.svg" alt="" />
            <h1 className="text-white">Anna</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
