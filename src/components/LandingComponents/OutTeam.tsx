function OutTeam() {
  return (
    <div className="w-full bg-gradient-to-b from-GradientColor/100 via-GradientColor/30  to-GradientColor/0">
      <div className="max-w-[1440px]  mt-[212px] mx-auto h-[732px] flex flex-col items-center ">
        <h1 className="mt-[84px] text-[64px] font-quinapple">OUR TEAM</h1>
        <div className="flex w-[801px] h-[400px] mt-[38px]">
          <div>
            <img src="/george.png" alt="" />
          </div>
          <div className="ml-[112px] items-center text-center">
            <img src="/teona.png" alt="" />
            {/* აქ დიდი ფონტი არ გამოვა, რადგან გიორგის ფოტოს თავად მოყვება სახელი და გვარი პატარა ასოებით */}
            <h1 className="text-[20px] font-bold mt-[24px] ">
              Teo Tsotsolashvili
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OutTeam;
