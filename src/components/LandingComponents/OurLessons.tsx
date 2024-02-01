import LassionCard from "./LassionCard";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

interface ImageAttributes {
  data: {
    id: number;
    attributes: {
      url: string;
    };
  };
}

interface Lesson {
  id: number;
  attributes: {
    duration: string;
    title: string;
    image: ImageAttributes;
  };
}

interface HeadingProps {
  color: string;
  readMoreText: string;
  h1TextColor: string;
  imgSrc: string;
  imgAlt: string;
}
const strapiBaseUrl = "http://localhost:1337";

const OurLessons: React.FC<HeadingProps> = ({
  color,
  readMoreText,
  h1TextColor,
  imgAlt,
  imgSrc,
}) => {
  const navigate = useNavigate();
  const [lessons, setLessons] = useState<Lesson[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:1337/api/our-lessons?populate=*"
        );

        const extractedLessons = response.data.data.map((lesson: any) => {
          // const imageUrl = `${strapiBaseUrl}${lesson.attributes.image.data.attributes.url}`;
          return {
            id: lesson.id,
            attributes: {
              duration: lesson.attributes.duration,
              title: lesson.attributes.title,
              image: lesson.attributes.image,
            },
          };
        });

        setLessons(extractedLessons);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleLessonClick = (lessonId: number) => {
    // Handle the click based on the lesson id
    switch (lessonId) {
      case 1:
        navigate("/Music");
        break;
      case 2:
        navigate("/Literature");
        break;
      case 3:
        navigate("/Theatre");
        break;
      default:
        // Handle other cases if needed
        break;
    }
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  return (
    <div
      id="OurLessons"
      className="2xl:max-w-[1312px] lg:max-w-[1280px] md:max-w-[1024px] max-w-[640px] sm:max-w-[768px] p-4 2xl:p-0 mx-auto 2xl:h-[813px] xl:h-[700px] h-[500px] md:h-[1000px] lg:h-[980px] flex flex-col items-center"
    >
      <h1
        className={`text-${color} md:mt-[350px] xl:mt-[50px] md:text-[48px] text-[32px] font-bold font-quinapple`}
      >
        OUR LESSONS
      </h1>
      <div className="2xl:w-[1312px] xl:w-[1100px] w-[355px] md:w-[747px] lg:w-[900px] sm:w-[500px] h-[451px] 2xl:mt-[80px] xl:mt-[50px] mt-4 md:mt-8 flex justify-between overflow-x-auto overflow-y-hidden example scrollbar-hide p-4 space-x-4 lg:space-x-8 md:p-2">
        {lessons.map((lesson) => {
          const imageUrl = lesson.attributes.image.data.attributes.url;

          return (
            <div key={lesson.id}>
              <div className="">
                <div onClick={() => handleLessonClick(lesson.id)}>
                  <LassionCard
                    imgSrc1={`${strapiBaseUrl}${imageUrl}`}
                    imgAlt=""
                    h1Text={lesson.attributes.title}
                    buttonLabel={lesson.attributes.duration}
                    h1TextColor={h1TextColor}
                    marginLeft="ml-0" // customize margin-left if needed
                  />
                </div>
                <button
                  onClick={() => handleLessonClick(lesson.id)}
                  className={`flex mt-[45px] 2xl:mt-[20px] lg:mt-[110px] md:mt-[110px] items-center w-[109px] h-[24px]`}
                >
                  <h1
                    className={`text-${readMoreText} text-[12px] md:text-[16px] font-sans`}
                  >
                    Read more
                  </h1>
                  <div className="ml-[8px]">
                    {/* Use the appropriate image source */}
                    <img
                      src={imgSrc}
                      alt={imgAlt}
                      className="w-[18px] h-[15px] md:w-auto md:h-auto"
                    />
                  </div>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurLessons;
