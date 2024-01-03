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

      <Syllabus
        title=" Course Literature"
        duration=" Course Duration: 10 weeks (20 sessions)"
        module1Title=" Module 1: Introduction to Literary History"
        module1Text=" Overview of the course objectives and structure Understanding the
        significance of studying literary history Exploring the major
        literary periods and movements."
        module2Title=" Module 2: Ancient Literature"
        module2Text=" Survey of ancient literary traditions (e.g., Mesopotamian, Greek,
          Roman) Analysis of epic poems, myths, and oral traditions
          Discussion on the role of literature in ancient societies"
        module3Title="Module 3: Medieval Literature"
        module3Text=" Examination of medieval literary works (e.g., Chaucer, Dante)
        Exploration of religious and chivalric themes Understanding the
        impact of societal changes on literature"
        module4Title=" Module 4: Renaissance and Enlightenment"
        module4Text="Study of literary developments during the Renaissance Analysis of
        Enlightenment philosophy in literature Exploration of influential
        figures like Shakespeare and Voltaire"
        module5Title="Module 5: Romanticism and Realism"
        module5Text=" Overview of the Romantic movement and its impact on literature
        Analysis of realist literature and its social context Discussion
        on the emergence of the novel as a literary form"
        module6Title=" Module 6: Modernism and Postmodernism"
        module6Text="Exploration of modernist and postmodernist literature Analysis of
        experimental forms and narrative techniques Discussion on the
        impact of historical events on literary expression."
        module7Title=" Module 7: Global Perspectives"
        module7Text=" Survey of literature from diverse cultures and regions Examination
        of postcolonial literature and voices from the margins Discussion
        on the interconnectedness of world literature"
        module8Title=" Module 8: Contemporary Literature"
        module8Text=" Analysis of contemporary literary trends Exploration of the
        digital ages impact on literature Discussion on current debates
        and challenges in the literary world."
        module9Title="  Module 9: Literary Criticism and Theory"
        module9Text="  Introduction to key literary theories (e.g., structuralism,
          postcolonial theory) Application of critical approaches to
          selected literary works Encouraging students to develop their
          analytical skills"
        module10Title=" Module 10: Interactive Workshops"
        module10Text="  Group discussions on specific literary topics Creative writing
        exercises inspired by various literary periods Peer review
        sessions to foster collaborative learning"
        module11Text=""
        module11Title=""
        module12Text=""
        module12Title=""
        assasmentTitle="  Assessment"
        assasmentText=" Weekly quizzes on assigned readings Participation in class
        discussions and activities"
        additionalTitle=""
        assasmentText2="Mid-term and final projects: Research
        papers or creative projects exploring specific literary themes or
        periods By the end of the course, participants will have gained a
        nuanced understanding of the history of literature, honed critical
        thinking skills, and developed an appreciation for the diverse
        cultural expressions that have shaped the world of letters."
        assasmentText3=""
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

export default Literature;
