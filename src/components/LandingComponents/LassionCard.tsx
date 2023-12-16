import CustomButton from "../CustomButton";

interface LassionCardProps {
  imgSrc: string;
  imgAlt: string;
  h1Text: string;
  buttonLabel: string;
  readMoreText?: string;
  marginLeft?: string;
  h1TextColor: string;
}

const LassionCard: React.FC<LassionCardProps> = ({
  imgSrc,
  imgAlt,
  h1Text,
  h1TextColor,
  marginLeft = "0", // default value if not provided
}: LassionCardProps) => {
  return (
    <div className="w-[310px] sm:w-[327px] h-[238px] 2xl:w-auto 2xl:h-auto">
      <div className="relative overflow-hidden inline-block rounded-[12px]">
        <img
          src={imgSrc}
          alt={imgAlt}
          className="block w-full h-full  transition-transform duration-300 ease-in-out transform scale-100 hover:scale-105"
        />
        <div className="absolute top-0 left-0 w-full h-full opacity-0 transition-opacity duration-300 ease-in-out bg-gradient-to-t from-blue-300 via-blue-200 to-transparent hover:opacity-50 rounded-lg"></div>
      </div>
      <div className="flex flex-row md:flex md:flex-col justify-between md:justify-start items-center md:items-start mt-[12px] lg:mt-0">
        <h1
          className={`2xl:mt-[20px] md:text-[24px] text-[16px] font-black text-${h1TextColor} font-quinapple ${marginLeft}`}
        >
          {h1Text}
        </h1>
        <CustomButton
          text="4 Months"
          width="w-[76px]"
          height="h-[29px]"
          marginTop="md:mt-[16px]"
          backgroundColor="bg-buttonColor/10"
          rounded="rounded-[29px]"
          textColor="text-buttonColor"
          textSize="text-[14px]"
          font="font-semibold"
          hoverEffect="hover:bg-customColor/10"
          border="border-none"
        />
      </div>
    </div>
  );
};

export default LassionCard;
