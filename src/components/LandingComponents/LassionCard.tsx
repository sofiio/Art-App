import CustomButton from "../CustomButton";

interface LassionCardProps {
  imgSrc: string;
  imgAlt: string;
  h1Text: string;
  buttonLabel: string;
  readMoreText?: string;
  marginLeft?: string;
}

const LassionCard: React.FC<LassionCardProps> = ({
  imgSrc,
  imgAlt,
  h1Text,
  marginLeft = "0", // default value if not provided
}: LassionCardProps) => {
  return (
    <div className="w-[327px] h-[238px] 2xl:w-auto 2xl:h-auto">
      <img
        src={imgSrc}
        alt={imgAlt}
        className="w-[416px] h-[238px] lg:h-[300px]"
      />
      <div className="flex flex-row md:flex md:flex-col justify-between md:justify-start items-center md:items-start mt-[12px] lg:mt-0">
        <h1
          className={`2xl:mt-[24px] md:text-[24px] text-[16px] font-bold font-quinapple ${marginLeft}`}
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
        />
      </div>
    </div>
  );
};

export default LassionCard;
