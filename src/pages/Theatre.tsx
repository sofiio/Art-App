import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Share from "../components/Share";
import SharedComponent from "../components/SharedComponent";
import Syllabus from "../components/Syllabus";
import Title from "../components/Title";

// Define the type for the syllabus data
interface SyllabusData {
  CourseDuration: string;
  assasmentText: string;
  assasmentText2: string;
  assasmentText3: string;
  // Add more properties as needed
}

function Theatre() {
  const [syllabusData, setSyllabusData] = useState<SyllabusData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://monkfish-app-egtqt.ondigitalocean.app/api/syllabi?populate=*"
        );
        setSyllabusData(response.data.data[0].attributes);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this runs once on component mount

  if (!syllabusData) {
    // Handle loading state
    return <div>Loading...</div>;
  }

  const {
    CourseDuration,
    assasmentText,
    assasmentText2,
    assasmentText3,
    // Add more variables as needed from the fetched data
  } = syllabusData;

  const sections = [
    {
      image: "/theatre2.png",
      text: [
        "We’d like to talk about several trends, prevalent in modern theatre that continue to shape the stage. These trends reflect a dynamic shift in storytelling, technology, audience engagement, and thematic exploration. Contemporary theatre is increasingly experimental, merging different art forms like music, visual arts, and technology. Hybrid performances challenge traditional structures and offer unique storytelling experiences.",
      ],
    },
    {
      image: "/theatre3.png",
      text: "Moreover, there is a trend in reimagining and adapting classical works to resonate with contemporary audiences, blending the timeless stories with modern sensibilities. We shall discuss it all.",
    },
  ];

  const coverImage = "/theatrecover.png";
  const separateText =
    "Theater is a vibrant art form that has enchanted audiences for centuries. Our classes delve into the captivating history of theater, exploring the evolution of acting techniques and the iconic performers who brought characters to life. From the timeless works of Shakespeare to the avant-garde productions of today, our students gain a deeper appreciation for the power of the stage.";

  return (
    <>
      <Header />
      <Title
        paragraphText="Theatre"
        titleText="The stage that ignites the imagination"
      />
      <SharedComponent
        sections={sections}
        coverImage={coverImage}
        seperateText={separateText}
      />
      <Syllabus
        title="Course Theatre"
        duration={CourseDuration}
        module1Title="Module 1: Introduction to Theatre"
        module1Text="Overview of the course objectives and structure
        Historical overview of theatre as an art form
        Exploration of the cultural and societal roles of theatre"
        module2Title="Module 2: Evolution of Theatre Styles"
        module2Text="Survey of major theatre styles and movements (e.g., Greek, Elizabethan, Brechtian)
        Analysis of how historical and cultural contexts shape theatrical expression
        Discussion on the continuity and innovation in theatrical style"
        module3Title="Module 3: Key Figures in Theatre History"
        module3Text="In-depth exploration of influential playwrights, directors, and actors
        Analysis of their contributions to the development of theatre
        Discussion on the impact of key figures on theatrical movements"
        module4Title="Module 4: Production Essentialss"
        module4Text="Introduction to the basics of theatrical production
        Overview of stage design, lighting, sound, and costume design
        Discussion on the collaborative nature of theatre production"
        module5Title="Module 5: Behind the Scenes - Directing Masterclass"
        module5Text="In-depth exploration of the directors role in shaping a theatrical production
        Analysis of directorial techniques and approaches
        Discussion on the creative and organizational aspects of directing"
        module6Title="Module 6: Acting Fundamentals"
        module6Text="Introduction to the fundamentals of acting
        Exploration of voice, movement, and stage presence
        Discussion on the actors process and the importance of rehearsal"
        module7Title="Module 7: Character Development"
        module7Text="In-depth analysis of techniques for creating and portraying characters
        Exploration of psychological and physical approaches to character development
        Discussion on the actors relationship with the script and director"
        module8Title="Module 8: Theatrical Genres"
        module8Text="Survey of different theatrical genres (e.g., tragedy, comedy, experimental)
        Analysis of the unique characteristics and conventions of each genre
        Discussion on the actors versatility across genre"
        module9Title="Module 9: Acting for the Stage - Acting Masterclass"
        module9Text="Practical exercises and scene work led by a guest acting instructor
        Individualized feedback and coaching on acting techniques
        Discussion on the challenges and rewards of acting for the stage"
        module10Title="Module 10: Contemporary Theatre and Emerging Trends"
        module10Text="Exploration of contemporary theatrical movements and experimental forms
        Analysis of the influence of technology on modern theatre
        Discussion on the evolving nature of theatre in the 21st century"
        module11Title="Module 11: Group Production Project"
        module11Text="Collaborative creation of a short theatrical production
        Rotation of roles to experience various aspects of production
        Final presentation of the group project to the class"
        module12Title="Module 12: Reflection and Celebration"
        module12Text="Individual reflections on the theatrical journey
        Celebration of achievements and shared experiences
        Discussion on the continued exploration of theatre beyond the course"
        assasmentTitle="Assessment:"
        additionalTitle=": History, Production, and Acting Masterclasses"
        assasmentText={assasmentText}
        assasmentText2={assasmentText2}
        assasmentText3={assasmentText3}
      />
      <Share />
      <Footer
        mobileBgColor="white"
        textColor="black"
        hideFirstImageMobile={false}
        SecondImageMobile={true}
        hideLogo={false}
        hideSecondLogo={true}
      />
    </>
  );
}

export default Theatre;
