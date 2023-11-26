import Footer from "../components/Footer";
import Header from "../components/Header";
import Share from "../components/Share";
import Title from "../components/Title";

function Literature() {
  return (
    <>
      <Header />
      <Title
        paragraphText="Literature"
        titleText="Words that change the world"
      />
      <img
        src="/literature.png"
        alt=""
        className="mx-auto md:mt-[80px] mt-[16px]"
      />
      <div className="lg:w-[768px] mb-96 md:mb-24 md:w-[700px] w-[343px] h-[365px] md:mt-[80px] mt-[24px] mx-auto">
        <h1 className="md:text-[18px] text-[16px]">
          In the world of literature, words have the power to move hearts and
          minds. Our classes introduce students to the literary giants who have
          shaped the written word. From the timeless prose of Jane Austen to the
          revolutionary poetry of Maya Angelou, we celebrate the diversity and
          impact of literature throughout history.
          <h1 className="mt-4 ">
            Just as food is essential for physical sustenance, literature serves
            as nourishment for the mind, heart, and soul. It, literature,
            satisfies hunger and fulfills emotional needs. It has the power to
            evoke a wide range of emotions: joy, empathy, sorrow, excitement…
            enabling readers to connect deeply with the human experience.
          </h1>
          <h1 className="mt-4">
            Literature serves as a means of communication across time and space,
            fostering connections between individuals and communities. It
            enables people to understand, empathize, and relate to others'
            experiences. We are ambitious that our students will feel it all.
          </h1>
        </h1>
      </div>
      <Share />
      <Footer />
    </>
  );
}

export default Literature;
