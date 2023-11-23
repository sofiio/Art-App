import React, { FC } from "react";

interface SharedComponentProps {
  sections: {
    image: string;
    text: string | string[];
  }[];
  coverImage: string;

  seperateText: string | string[];
}

const SharedComponent: FC<SharedComponentProps> = ({
  sections,
  coverImage,
  seperateText,
}) => {
  return (
    <>
      {/* Use coverImage as the source for the first image */}
      <img
        src={coverImage}
        alt=""
        className="w-full h-full object-cover md:mx-auto md:mt-[80px] md:w-auto"
      />
      <div className="lg:w-[768px] md:w-[700px] w-[343px] md:mt-[80px] mt-[23px] mx-auto">
        <h1 className="md:text-[18px] text-[16px]">{seperateText}</h1>
      </div>
      {sections.map((section, index) => (
        <React.Fragment key={index}>
          <img
            src={section.image}
            alt=""
            className="mx-auto md:mt-[80px] mt-[16px] w-[343px] h-[250px] md:h-auto md:w-auto"
          />
          <div className="lg:w-[768px] md:w-[700px] w-[343px] md:mt-[80px] mt-[23px] mx-auto">
            {Array.isArray(section.text) ? (
              section.text.map((paragraph, pIndex) => (
                <p className="md:text-[18px] text-[16px] mt-4" key={pIndex}>
                  {paragraph}
                </p>
              ))
            ) : (
              <p className="md:text-[18px] text-[16px]">{section.text}</p>
            )}
          </div>
        </React.Fragment>
      ))}
    </>
  );
};

export default SharedComponent;
