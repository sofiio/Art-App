import ContactUsForm from "../components/ContactUsForm";
import Footer from "../components/Footer";
import Header from "../components/Header";

function ContactUs() {
  return (
    <>
      <Header />
      <div className="xl:w-[1210px] lg:w-[768px] md:w-[700px] w-[343px]  xl:h-[987px] h-[1200px] mx-auto">
        <ContactUsForm />
      </div>
      <Footer
        mobileBgColor="white"
        textColor="black"
        hideFirstImageMobile={false}
        SecondImageMobile={true}
        hideLogo = {false}
        hideSecondLogo = {true}
      />
    </>
  );
}

export default ContactUs;
