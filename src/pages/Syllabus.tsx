import Footer from "../components/Footer";
import Header from "../components/Header";

function Syllabus() {
  return (
    <div>
      <Header />

      <Footer
        mobileBgColor="white"
        textColor="black"
        hideFirstImageMobile={false}
        SecondImageMobile={true}
      />
    </div>
  );
}

export default Syllabus;
