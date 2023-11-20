import React, { FC } from "react";

interface SharedComponentProps {
  sections: {
    image: string;
    text: string | string[];
  }[];
}

const SharedComponent: FC<SharedComponentProps> = ({ sections }) => {
  return (
    <>
      {sections.map((section, index) => (
        <React.Fragment key={index}>
          <img
            src={section.image}
            alt=""
            className="mx-auto md:mt-[80px] mt-[16px] w-[343px] md:w-auto md:p-4 lg:p-0"
          />
          <div className="lg:w-[768px] md:w-[700px] w-[343px] md:p-4 lg:p-0 md:mt-[80px] mt-[23px] mx-auto">
            {Array.isArray(section.text) ? (
              section.text.map((paragraph, pIndex) => (
                <h1 className="text-[18px]" key={pIndex}>
                  <h1 className="text-[18px] mt-4" key={pIndex}></h1>
                  {paragraph}
                </h1>
              ))
            ) : (
              <h1 className="text-[18px]">{section.text}</h1>
            )}
          </div>
        </React.Fragment>
      ))}
    </>
  );
};

export default SharedComponent;
