import ContactUsForm from "../components/ContactUsForm"
import Footer from "../components/Footer"
import Header from "../components/Header"

function ContactUs() {
  return (
    <>
    <Header/>
    <div className="xl:w-[1210px] lg:w-[768px] md:w-[700px] w-[343px]  h-[987px] mx-auto"><ContactUsForm/></div>
    <Footer/>
    </>
  )
}

export default ContactUs