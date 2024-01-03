import Footer from "../components/Footer";
import Header from "../components/Header";
import Share from "../components/Share";
import SharedComponent from "../components/SharedComponent";
import Syllabus from "../components/Syllabus";
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

      <Syllabus
        title=" Course Music"
        duration=" Course Duration: 10 weeks (20 sessions)"
        module1Title="Module 1: Introduction to Modern Music"
        module1Text="Overview of the course objectives and structure
      Exploration of key musical genres in the modern era
      Discussion on the impact of technology on music production and distribution"
        module2Title="Module 2: Roots of Rock"
        module2Text="Tracing the roots of rock music: blues, jazz, and early rock & roll
      Analysis of influential figures like Chuck Berry, Little Richard, and Elvis Presley
      Understanding the rebellious spirit of early rock"
        module3Title="Module 3: The British Invasion"
        module3Text="Exploration of the British bands that revolutionized rock (e.g., The Beatles, The Rolling Stones)
      Analysis of the cultural impact and evolution of rock during the 1960s
      Discussion on the fusion of different musical styles in rock"
        module4Title="Module 4: Classic Rock and Iconic Albums"
        module4Text="Survey of classic rock bands and their seminal albums
      Analysis of the concept album and its significance in rock music
      Discussion on the influence of rock on popular culture"
        module5Title="Module 5: Rise of Rock Superstars"
        module5Text="Examination of individual rock stars who achieved iconic status
      Analysis of the cult of personality in rock music
      Discussion on the relationship between fame and artistic expression"
        module6Title="Module 6: Rock as a Social and Cultural Force"
        module6Text="Exploration of rock musics impact on social and political movements
      Analysis of protest songs and their role in activism
      Discussion on the cultural significance of rock festivals"
        module7Title="Module 7: Evolution of Subgenres"
        module7Text="Survey of rock subgenres (e.g., punk, new wave, alternative)
      Analysis of the diversity within the rock genre
      Discussion on the interplay between subcultures and musical style"
        module8Title="Module 8: Modern Rock and Contemporary Trends"
        module8Text="Exploration of modern rock bands and their contributions
      Analysis of the fusion of rock with other genres (e.g., indie, electronic)
      Discussion on the role of social media in the contemporary music landscape"
        module9Title="Module 9: Behind the Scenes - Music Production"
        module9Text="Overview of the music production process
      Introduction to studio techniques and technologies
      Discussion on the role of producers in shaping the sound of rock"
        module10Title="Module 10: Interactive Projects"
        module10Text=" Group discussions on current trends and emerging artists in modern music
        Creative projects, such as creating a virtual rock band or curating a playlist
        Final presentations showcasing individual or group projects"
        assasmentTitle=" Assessment:"
        assasmentText=" Participation in class discussions and activities
        Short written reflections on weekly topics"
        module11Title=""
        module11Text=""
        module12Title=""
        module12Text=""
        additionalTitle=""
        assasmentText2="Mid-term project: Analytical essay on a chosen rock album or artist"
        assasmentText3="Final project: Presentation of a creative project or research paper on a modern music topic
        By the end of the course, participants will have gained a comprehensive understanding of
        modern music, particularly within the rock genre, and will have explored the cultural, social, and
        artistic dimensions of rock star fame."
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

export default Music;
