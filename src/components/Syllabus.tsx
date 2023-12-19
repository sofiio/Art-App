import { useState } from "react";

function Syllabus() {
  const [isSyllabusVisible, setIsSyllabusVisible] = useState(false);
  const [isSyllabusRotated, setIsSyllabusRotated] = useState(false);

  const toggleDropdown = () => {
    setIsSyllabusVisible(!isSyllabusVisible);
    setIsSyllabusRotated((prev) => !prev);
  };

  return (
    <div className="lg:w-[768px] md:w-[700px] w-[343px] sm:w-[500px] mx-auto mt-[170px]">
      <div className="lg:text-[32px] text-[24px] sm:text-[28px] md:text-[30px] font-bold mx-auto  w-[200px] flex justify-center">
        <h1>SYLLABUS</h1>
      </div>
      <div className=" flex justify-between mt-[60px] items-center">
        <h1 className="lg:text-[32px] text-[22px] sm:text-[24px] md:text-[28px] font-bold ">
          Course Literature
        </h1>
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
            Course Duration: 10 weeks (20 sessions)
          </h1>
          <div>
            <h1 className="lg:text-[32px] font-bold mt-[40px] text-[22px] sm:text-[24px] md:text-[28px]">
              Module 1: Introduction to Literary History
            </h1>
            <h1 className="lg:text-[32px] text-[16px] sm:text-[22px] md:text-[26px]">
              Overview of the course objectives and structure Understanding the
              significance of studying literary history Exploring the major
              literary periods and movements.
            </h1>
          </div>
          <div>
            <h1 className="lg:text-[32px] font-bold mt-[40px] text-[22px] sm:text-[24px] md:text-[28px]">
              Module 2: Ancient Literature
            </h1>
            <h1 className="lg:text-[32px] text-[16px] sm:text-[22px] md:text-[26px]">
              Survey of ancient literary traditions (e.g., Mesopotamian, Greek,
              Roman) Analysis of epic poems, myths, and oral traditions
              Discussion on the role of literature in ancient societies
            </h1>
          </div>
          <div>
            <h1 className="lg:text-[32px] font-bold mt-[40px] text-[22px] sm:text-[24px] md:text-[28px]">
              Module 3: Medieval Literature
            </h1>
            <h1 className="lg:text-[32px] text-[16px] sm:text-[22px] md:text-[26px]">
              Examination of medieval literary works (e.g., Chaucer, Dante)
              Exploration of religious and chivalric themes Understanding the
              impact of societal changes on literature
            </h1>
          </div>
          <div>
            <h1 className="lg:text-[32px] font-bold mt-[40px] text-[22px] sm:text-[24px] md:text-[28px]">
              Module 4: Renaissance and Enlightenment
            </h1>
            <h1 className="lg:text-[32px] text-[16px] sm:text-[22px] md:text-[26px]">
              Study of literary developments during the Renaissance Analysis of
              Enlightenment philosophy in literature Exploration of influential
              figures like Shakespeare and Voltaire
            </h1>
          </div>
          <div>
            <h1 className="lg:text-[32px] font-bold mt-[40px] text-[22px] sm:text-[24px] md:text-[28px]">
              Module 5: Romanticism and Realism
            </h1>
            <h1 className="lg:text-[32px] text-[16px] sm:text-[22px] md:text-[26px]">
              Overview of the Romantic movement and its impact on literature
              Analysis of realist literature and its social context Discussion
              on the emergence of the novel as a literary form
            </h1>
          </div>
          <div>
            <h1 className="lg:text-[32px] font-bold mt-[40px] text-[22px] sm:text-[24px] md:text-[28px]">
              Module 6: Modernism and Postmodernism
            </h1>
            <h1 className="lg:text-[32px] text-[16px] sm:text-[22px] md:text-[26px]">
              Exploration of modernist and postmodernist literature Analysis of
              experimental forms and narrative techniques Discussion on the
              impact of historical events on literary expression.
            </h1>
          </div>
          <div>
            <h1 className="lg:text-[32px] font-bold mt-[40px] text-[22px] sm:text-[24px] md:text-[28px]">
              Module 7: Global Perspectives
            </h1>
            <h1 className="lg:text-[32px] text-[16px] sm:text-[22px] md:text-[26px]">
              Survey of literature from diverse cultures and regions Examination
              of postcolonial literature and voices from the margins Discussion
              on the interconnectedness of world literature
            </h1>
          </div>
          <div>
            <h1 className="lg:text-[32px] font-bold mt-[40px] text-[22px] sm:text-[24px] md:text-[28px]">
              Module 8: Contemporary Literature
            </h1>
            <h1 className="lg:text-[32px] text-[16px] sm:text-[22px] md:text-[26px]">
              Analysis of contemporary literary trends Exploration of the
              digital ages impact on literature Discussion on current debates
              and challenges in the literary world.
            </h1>
          </div>
          <div>
            <h1 className="lg:text-[32px] font-bold mt-[40px] text-[22px] sm:text-[24px] md:text-[28px]">
              Module 9: Literary Criticism and Theory
            </h1>
            <h1 className="lg:text-[32px] text-[16px] sm:text-[22px] md:text-[26px]">
              Introduction to key literary theories (e.g., structuralism,
              postcolonial theory) Application of critical approaches to
              selected literary works Encouraging students to develop their
              analytical skills
            </h1>
          </div>
          <div>
            <h1 className="lg:text-[32px] font-bold mt-[40px] text-[22px] sm:text-[24px] md:text-[28px]">
              Module 10: Interactive Workshops
            </h1>
            <h1 className="lg:text-[32px] text-[16px] sm:text-[22px] md:text-[26px]">
              Group discussions on specific literary topics Creative writing
              exercises inspired by various literary periods Peer review
              sessions to foster collaborative learning
            </h1>
          </div>
          <div>
            <h1 className="lg:text-[32px] text-[22px] sm:text-[24px] md:text-[28px] font-bold mt-[40px]">
              Assessment
            </h1>
            <h1 className="lg:text-[32px] text-[16px] sm:text-[22px] md:text-[26px]">
              Weekly quizzes on assigned readings Participation in class
              discussions and activities Mid-term and final projects: Research
              papers or creative projects exploring specific literary themes or
              periods By the end of the course, participants will have gained a
              nuanced understanding of the history of literature, honed critical
              thinking skills, and developed an appreciation for the diverse
              cultural expressions that have shaped the world of letters.
            </h1>
          </div>
        </div>
      )}
    </div>
  );
}

export default Syllabus;
