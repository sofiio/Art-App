interface TestimonialProps {
  avatarSrc: string;
  testimonialText: string;
  authorName: string;
}

const Testimonial: React.FC<TestimonialProps> = ({
  avatarSrc,
  testimonialText,
  authorName,
}: TestimonialProps) => {
  return (
    <>
      <div className="xl:w-[400px] w-[294px] xl:h-[310px] h-[348px] bg-CardColor rounded-[12px] border border-black">
        <div className="flex space-x-2 mt-[32px] xl:ml-[32px] ml-[24px]">
          {Array.from({ length: 5 }, (_, index) => (
            <img key={index} src="/color.svg" alt={`Color ${index + 1}`} />
          ))}
        </div>
        <div className="xl:w-[352px] w-[270px] xl:h-[108px] h-[162px]">
          <h1 className="text-[18px] text-white xl:ml-[32px] ml-[24px] xl:mt-[32px] mt-[24px]  font-helvetica font-light">
            {testimonialText}
          </h1>
        </div>
        <div className="flex xl:ml-[32px] ml-[24px] xl:mt-[32px] mt-[36px] items-center">
          <img src={avatarSrc} alt={`Avatar of ${authorName}`} />
          <h1 className="text-white font-semibold ml-[16px]">{authorName}</h1>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
