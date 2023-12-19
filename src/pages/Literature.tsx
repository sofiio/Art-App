import Footer from "../components/Footer";
import Header from "../components/Header";
import Share from "../components/Share";
import SharedComponent from "../components/SharedComponent";
import Syllabus from "../components/Syllabus";
import Title from "../components/Title";

function Literature() {
  const sections = [
    {
      image: "/fw.png",
      text: [
        "Just as food is essential for physical sustenance, literature serves as nourishment for the mind, heart, and soul. It, literature, satisfies hunger and fulfills emotional needs. It has the power to evoke a wide range of emotions: joy, empathy, sorrow, excitement… enabling readers to connect deeply with the human experience.",
        "Literature serves as a means of communication across time and space, fostering connections between individuals and communities. It enables people to understand, empathize, and relate to others' experiences. We are ambitious that our students will feel it all.",
      ],
    },
    {
      image: "/sw.png",
      text: "",
    },
  ];

  // Use the coverImage from the first section
  const coverImage = "/litcover.png";
  const seperateText =
    "In the world of literature, words have the power to move hearts and minds. Our classes introduce students to the literary giants who have shaped the written word. From the timeless prose of Jane Austen to the revolutionary poetry of Maya Angelou, we celebrate the diversity and impact of literature throughout history.";

  return (
    <>
      <Header />
      <Title
        paragraphText="Literature"
        titleText="Words that change the world"
      />
      <SharedComponent
        sections={sections}
        coverImage={coverImage}
        seperateText={seperateText}
      />
      <Share />
      <Syllabus/>
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

export default Literature;
