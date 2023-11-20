

function Welcome() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="w-[1026px] h-[213px] mt-[94px] ml-[206px] flex flex-col text-center">
        <h1 className="text-[96px] font-quinapple ">
          Welcome To{" "}
          <span className="text-customColor font-quinapple font-semibold">
            VII Lesson{" "}
          </span>
        </h1>
        <h1 className="text-[64px] font-custom1">
          Where History Comes Alive
        </h1>
      </div>

      <div className="flex ml-[54px] mt-[94px]">
        <img src="/sample.png" alt="" className="h-[510px] w-[877px]" />
        <img
          src="/sample1.png"
          alt=""
          className="ml-[34px] h-[510px] w-[421px]"
        />
      </div>
    </div>
  );
}

export default Welcome;
