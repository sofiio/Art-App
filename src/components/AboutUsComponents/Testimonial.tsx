function Testimonial() {
  return (
    <div className="w-full bg-customColor flex items-center">
      <div className="max-w-[1440px]  mt-[112px] mx-auto h-[435px]">
        <div className="w-[768px] h-[210px]">
          <div className="flex space-x-2 items-center justify-center">
            {Array.from({ length: 5 }, (_, index) => (
              <img key={index} src="/color.svg" alt={`Color ${index + 1}`} />
            ))}
          </div>
          <div className="w-[768px] h-[72px] mt-[32px] flex justify-center text-center">
            <h1 className="text-[24px] font-semibold text-white ">
              “The literature course broadened my horizons. It's a must for book
              lovers. I found my passion here!”
            </h1>
          </div>
          <div className="w-[103px] h-[56px] flex justify-center items-center space-x-4 mt-[32px] mx-auto">
            <img src="/avatar1.svg" alt="" />
            <h1 className="text-white">Anna</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
