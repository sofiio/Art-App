import Footer from "../components/Footer";
import Header from "../components/Header";
import Share from "../components/Share";
import SharedComponent from "../components/SharedComponent";
import Title from "../components/Title";

function Theatre() {
  const sections = [
    {
      image: "/theatre1.png",
      text: "Theater is a vibrant art form that has enchanted audiences for centuries. Our classes delve into the captivating history of theater, exploring the evolution of acting techniques and the iconic performers who brought characters to life. From the timeless works of Shakespeare to the avant-garde productions of today, our students gain a deeper appreciation for the power of the stage.",
    },
    {
      image: "/theatre2.png",
      text: [
        "We’d like to talk about several trends, prevalent in modern theatre that continue to shape the stage. These trends reflect a dynamic shift in storytelling, technology, audience engagement, and thematic exploration. Contemporary theatre is increasingly experimental, merging different art forms like music, visual arts, and technology. Hybrid performances challenge traditional structures and offer unique storytelling experiences",
      ],
    },
    {
      image: "/theatre3.png",
      text: "Moreover, there is a trend in reimagining and adapting classical works to resonate with contemporary audiences, blending the timeless stories with modern sensibilities. We shall discuss it all.",
    },
  ];
  return (
    <>
      <Header />
      <Title
        paragraphText="Theatre"
        titleText="The stage that ignites the imagination"
      />
      <SharedComponent sections={sections} />
      <Share />
      <Footer />
    </>
  );
}

export default Theatre;
