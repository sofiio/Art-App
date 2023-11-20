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
      <div className="w-[416px] h-[310px] bg-CardColor rounded-[12px] border border-black">
        <div className="flex space-x-2 mt-[32px] ml-[32px]">
          {Array.from({ length: 5 }, (_, index) => (
            <img key={index} src="/color.svg" alt={`Color ${index + 1}`} />
          ))}
        </div>
        <div className="w-[352px] h-[108px]">
          <h1 className="text-[18px] text-white ml-[32px] mt-[32px]  font-helvetica font-light">
            {testimonialText}
          </h1>
        </div>
        <div className="flex ml-[32px] mt-[32px] items-center">
          <img src={avatarSrc} alt={`Avatar of ${authorName}`} />
          <h1 className="text-white font-semibold ml-[16px]">{authorName}</h1>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
