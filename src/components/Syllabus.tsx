import { useState } from "react";

interface SyllabusSectionProps {
  title: string;
  duration: string;
  module1Title: string;
  module1Text: string;
  module2Title: string;
  module2Text: string;
  module3Title: string;
  module3Text: string;
  module4Title: string;
  module4Text: string;
  module5Title: string;
  module5Text: string;
  module6Title: string;
  module6Text: string;
  module7Title: string;
  module7Text: string;
  module8Title: string;
  module8Text: string;
  module9Title: string;
  module9Text: string;
  module10Title: string;
  module10Text: string;
  assasmentTitle: string;
  assasmentText: string;
  module11Title: string;
  module11Text: string;
  module12Title: string;
  module12Text: string;
  additionalTitle: string;
  assasmentText2: string;
  assasmentText3: string;
}

const Syllabus: React.FC<SyllabusSectionProps> = ({
  title,
  duration,
  module1Title,
  module1Text,
  module2Title,
  module2Text,
  module3Title,
  module3Text,
  module4Title,
  module4Text,
  module5Title,
  module5Text,
  module6Title,
  module6Text,
  module7Title,
  module7Text,
  module8Title,
  module8Text,
  module9Title,
  module9Text,
  module10Title,
  module10Text,
  module11Title,
  module11Text,
  module12Title,
  module12Text,
  assasmentTitle,
  assasmentText,
  additionalTitle,
  assasmentText2,
  assasmentText3,
}) => {
  const [isSyllabusVisible, setIsSyllabusVisible] = useState(false);
  const [isSyllabusRotated, setIsSyllabusRotated] = useState(false);

  const toggleDropdown = () => {
    setIsSyllabusVisible(!isSyllabusVisible);
    setIsSyllabusRotated((prev) => !prev);
  };

  return (
    <div className="xl:w-[952px] md:w-[700px] w-[343px] sm:w-[500px] mx-auto mt-[110px]">
      <div className="lg:text-[32px] text-[24px] sm:text-[28px] md:text-[30px] font-bold mx-auto  w-[200px] flex justify-center">
        <h1>SYLLABUS</h1>
      </div>
      <div className=" flex justify-between md:mt-[60px] mt-[50px] items-center">
        <div className="flex md:w-[700px] xl:w-[952px]">
          <h1 className="lg:text-[32px] text-[22px] sm:text-[24px] md:text-[28px] font-bold ">
            {title}
          </h1>
          <h1 className="hidden xl:block lg:text-[32px] text-[22px] sm:text-[24px] md:text-[28px] font-bold ">
            {additionalTitle}
          </h1>
        </div>
        <img
          onClick={toggleDropdown}
          src="/blarow.svg"
          alt=""
          className={`w-[32px] h-[32px] cursor-pointer ${
            isSyllabusRotated ? "rotate-180" : ""
          }`}
          style={{ transition: "transform 0.3s ease" }}
        />
      </div>
      {isSyllabusVisible && (
        <div>
          <h1 className="lg:text-[32px] text-[22px] sm:text-[24px] md:text-[28px] font-bold mt-[40px]">
            {duration}
          </h1>
          <div>
            <h1 className="lg:text-[32px] font-bold mt-[40px] text-[22px] sm:text-[24px] md:text-[28px]">
              {module1Title}
            </h1>
            <h1 className="lg:text-[32px] text-[16px] sm:text-[22px] md:text-[26px]">
              {module1Text}
            </h1>
          </div>
          <div>
            <h1 className="lg:text-[32px] font-bold mt-[40px] text-[22px] sm:text-[24px] md:text-[28px]">
              {module2Title}
            </h1>
            <h1 className="lg:text-[32px] text-[16px] sm:text-[22px] md:text-[26px]">
              {module2Text}
            </h1>
          </div>
          <div>
            <h1 className="lg:text-[32px] font-bold mt-[40px] text-[22px] sm:text-[24px] md:text-[28px]">
              {module3Title}
            </h1>
            <h1 className="lg:text-[32px] text-[16px] sm:text-[22px] md:text-[26px]">
              {module3Text}
            </h1>
          </div>
          <div>
            <h1 className="lg:text-[32px] font-bold mt-[40px] text-[22px] sm:text-[24px] md:text-[28px]">
              {module4Title}
            </h1>
            <h1 className="lg:text-[32px] text-[16px] sm:text-[22px] md:text-[26px]">
              {module4Text}
            </h1>
          </div>
          <div>
            <h1 className="lg:text-[32px] font-bold mt-[40px] text-[22px] sm:text-[24px] md:text-[28px]">
              {module5Title}
            </h1>
            <h1 className="lg:text-[32px] text-[16px] sm:text-[22px] md:text-[26px]">
              {module5Text}
            </h1>
          </div>
          <div>
            <h1 className="lg:text-[32px] font-bold mt-[40px] text-[22px] sm:text-[24px] md:text-[28px]">
              {module6Title}
            </h1>
            <h1 className="lg:text-[32px] text-[16px] sm:text-[22px] md:text-[26px]">
              {module6Text}
            </h1>
          </div>
          <div>
            <h1 className="lg:text-[32px] font-bold mt-[40px] text-[22px] sm:text-[24px] md:text-[28px]">
              {module7Title}
            </h1>
            <h1 className="lg:text-[32px] text-[16px] sm:text-[22px] md:text-[26px]">
              {module7Text}
            </h1>
          </div>
          <div>
            <h1 className="lg:text-[32px] font-bold mt-[40px] text-[22px] sm:text-[24px] md:text-[28px]">
              {module8Title}
            </h1>
            <h1 className="lg:text-[32px] text-[16px] sm:text-[22px] md:text-[26px]">
              {module8Text}
            </h1>
          </div>
          <div>
            <h1 className="lg:text-[32px] font-bold mt-[40px] text-[22px] sm:text-[24px] md:text-[28px]">
              {module9Title}
            </h1>
            <h1 className="lg:text-[32px] text-[16px] sm:text-[22px] md:text-[26px]">
              {module9Text}
            </h1>
          </div>
          <div>
            <h1 className="lg:text-[32px] font-bold mt-[40px] text-[22px] sm:text-[24px] md:text-[28px]">
              {module10Title}
            </h1>
            <h1 className="lg:text-[32px] text-[16px] sm:text-[22px] md:text-[26px]">
              {module10Text}
            </h1>
          </div>
          <div>
            <h1 className="lg:text-[32px] font-bold mt-[40px] text-[22px] sm:text-[24px] md:text-[28px]">
              {module11Title}
            </h1>
            <h1 className="lg:text-[32px] text-[16px] sm:text-[22px] md:text-[26px]">
              {module11Text}
            </h1>
          </div>
          <div>
            <h1 className="lg:text-[32px] font-bold mt-[40px] text-[22px] sm:text-[24px] md:text-[28px]">
              {module12Title}
            </h1>
            <h1 className="lg:text-[32px] text-[16px] sm:text-[22px] md:text-[26px]">
              {module12Text}
            </h1>
          </div>
          <div>
            <h1 className="lg:text-[32px] text-[22px] sm:text-[24px] md:text-[28px] font-bold mt-[40px]">
              {assasmentTitle}
            </h1>
            <h1 className="lg:text-[32px] text-[16px] sm:text-[22px] md:text-[26px]">
              {assasmentText}
            </h1>
            <h1 className="mt-8 lg:text-[32px] text-[16px] sm:text-[22px] md:text-[26px]">
              {assasmentText2}
            </h1>
            <h1 className="mt-8 lg:text-[32px] text-[16px] sm:text-[22px] md:text-[26px]">
              {assasmentText3}
            </h1>
          </div>
        </div>
      )}
    </div>
  );
};

export default Syllabus;
