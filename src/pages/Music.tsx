import Footer from "../components/Footer";
import Header from "../components/Header";
import Share from "../components/Share";
import SharedComponent from "../components/SharedComponent";
import Title from "../components/Title";

function Music() {
  const sections = [
    {
      image: "/mus1.png",
      text: [
        "Music plays a crucial role in helping young people form their identities. They often use music to express themselves, convey their emotions, and communicate their thoughts and beliefs. We believe that Music often acts as a common ground for social interaction. It forms a basis for shared interests, enabling young people to bond with peers who appreciate similar music.",
        "This shared appreciation creates a sense of belonging and fosters friendships and social connections.",
      ],
    },
    {
      image: "/mus2.png",
      text: "Exposure to different musical genres introduces our young students to diverse cultures and traditions. It broadens their understanding of the world, promoting cultural awareness and appreciation for various backgrounds",
    },
  ];

  // Use the coverImage from the first section
  const coverImage = "/muscover.png";
  const seperateText =
    "Music transcends time and culture, touching our souls in ways words cannot. Our classes explore the evolution of music, from classical maestros like Bach to rock legends like Jimi Hendrix. We study the revolutionary lyrics of Bob Dylan and the electrifying performances of Led Zeppelin, understanding how music has both reflected and shaped the world.";

  return (
    <>
      <Header />
      <Title paragraphText="Music" titleText="The Soundtrack of planet Earth" />
      <SharedComponent
        sections={sections}
        coverImage={coverImage}
        seperateText={seperateText}
      />
      <Share />
      <Footer />
    </>
  );
}

export default Music;
