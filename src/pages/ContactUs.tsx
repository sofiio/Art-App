import ContactUsForm from "../components/ContactUsForm"
import Footer from "../components/Footer"
import Header from "../components/Header"

function ContactUs() {
  return (
    <>
    <Header/>
    <div className="w-[1210px] h-[987px] mx-auto"><ContactUsForm/></div>
    <Footer/>
    </>
  )
}

export default ContactUs