import Footer from "../components/Footer";
import Header from "../components/Header";

function PrivacyPolicy() {
  return (
    <>
      <Header />
      <div className="w-full mx-auto">
        <div className="p-4 2xl:p-0 mx-auto lg:w-[768px] md:w-[700px] w-[343px] sm:w-[500px]">
          <h1 className="mt-12 lg:text-[30px] text-[20px] sm:text-[25px] font-bold">
            Website terms and Conditions
          </h1>
          <div className="flex flex-col space-y-6">
            <p className="mt-8 flex flex-col">
              <span className="font-bold">1. Acceptance of Terms</span> By
              accessing or using this website ("the Site"), you agree to comply
              with and be bound by these terms and conditions. If you do not
              agree to these terms, please refrain from using the Site.
            </p>
            <p className="flex flex-col">
              <span className="font-bold">2. Use of the Site</span> You agree to
              use the Site for lawful purposes only. You must not engage in any
              activity that disrupts the functionality of the Site or its
              associated services.
            </p>
            <p className="flex flex-col">
              <span className="font-bold">3. Intellectual Property</span> All
              content on this website, including text, images, graphics, logos,
              or software, is the property of VII Lesson and is protected by
              copyright and other intellectual property laws.
            </p>
            <p className="flex flex-col">
              <span className="font-bold">4. Privacy Policy</span> Your use of
              the Site is also governed by our Privacy Policy. By using the
              Site, you consent to the collection, use, and disclosure of your
              information as described in the Privacy Policy.
            </p>
            <p className="flex flex-col">
              <span className="font-bold">5. External links</span> The Site may
              contain links to third-party websites. These links are provided
              for your convenience, and VII Lesson is not responsible for the
              content or accuracy of any external sites.
            </p>
            <p className="flex flex-col">
              <span className="font-bold">6. Disclaimer of Warranties</span> The
              information on this Site is provided "as is" without any
              warranties, expressed or implied. VII Lesson makes no
              representations or warranties regarding the accuracy,
              completeness, or reliability of the content on the Site.
            </p>
            <p className="flex flex-col">
              <span className="font-bold">7. Limitation of liability</span> VII
              Lesson will not be liable for any direct, indirect, incidental,
              consequential, or punitive damages arising out of your access to
              or use of the Site.
            </p>
            <p className="flex flex-col">
              <span className="font-bold">
                8. Changes of terms and conditions
              </span>{" "}
              VII Lesson reserves the right to modify these terms and conditions
              at any time without notice. It is your responsibility to review
              these terms regularly to stay informed of any changes.
            </p>
            <p className="flex flex-col">
              <span className="font-bold">9. Contact Information</span> VII
              Lesson VIIleson@gmail.com, 917 912 4845
            </p>
          </div>
        </div>
      </div>

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

export default PrivacyPolicy;
