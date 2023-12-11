import { Link } from "react-router-dom";
import Founders from "../components/AboutUsComponents/Founders";
import OurTeam from "../components/AboutUsComponents/OurTeam";
import Testimonial from "../components/AboutUsComponents/Testimonial";
import Footer from "../components/Footer";
import Header from "../components/Header";
import OurLessons from "../components/LandingComponents/OurLessons";

function AboutUs() {
  return (
    <>
      <Header />
      <div className="relative">
        <img src="/xxx.png" alt="" className="w-full h-full object-cover" />
        <Link to="/">
          <img
            src="/frr.svg"
            alt=""
            className="absolute cursor-pointer top-[16px] left-[16px] lg:hidden"
          />
        </Link>
      </div>

      {/* text */}
      <div className="2xl:w-[1312px] lg:w-[900px] w-[343px] md:w-[543px] lg:h-[192px] h-[261px] lg:mt-[75px] mt-[32px] mx-auto font-black">
        <h1 className="lg:text-[40px] text-[24px] font-quinapple">
          Our non-formal educational classes are your gateway to the captivating
          realms of theater, literature, and music, where legendary actors,
          writers and rock stars have left an indelible mark on the world's
          cultural tapestry.
        </h1>
      </div>
      <OurTeam />
      <Founders />
      {/* texts */}
      <div className="2xl:w-[1312px] lg:w-[900px]  w-[343px] md:w-[543px] lg:h-[362px] h-[571px] md:h-[500px] mx-auto mt-[350px] lg:mt-0 2xl:mt-[61px]">
        <h1 className="2xl:text-[20px] text-[16px] font-medium">
          At ‘VII Lesson’ we believe that literature is more than words on a
          page; Music is not just melody that reminds you having nice time and
          Theater is a gateway to understanding the human experience across time
          and space. Our story began with a group of passionate educators and
          enthusiasts who shared a common dream: to make the world's treasures
          accessible and engaging for the next generation. We will tell you
          about Heroes of Creativity. Learn about William Dunlap or the method
          acting of Marlon Brando and Jeanne Moreau, the lyrical mastery of
          Edgar Allan Poe, and the rebellious spirit of Miles Davis, David Bowie
          and The Rolling Stones. These iconic figures serve as inspiration for
          our students to find their unique creative voices.
          <span className="mt-2">
            Above all mentioned we would like to talk about the Fame. Certainly,
            fame, in its essence, is a peculiar and multifaceted phenomenon that
            has captivated human society for centuries.
          </span>
          <span className="mt-2">
            What makes fame intriguing is its duality. It serves as a coveted
            aspiration for many, symbolizing success, recognition, and the
            fulfillment of dreams. However, the glittering allure of fame often
            masks the challenges and complexities that accompany it.
          </span>
        </h1>
      </div>

      {/* last picture */}
      <img
        src="/last.png"
        alt=""
        className="mx-auto 2xl:mt-[60px] mt-[120px] md:mt-0 w-[343px] md:w-[543px] h-[204px] md:h-[300px] lg:w-[900px]  2xl:w-auto lg:h-auto"
      />

      {/* last text */}
      <div className="lg:mt-[78px] mt-[32px] 2xl:w-[1312px] lg:w-[900px]  w-[343px] md:w-[543px] 2xl:h-[452px] h-[850px] md:h-[500px] lg:h-[300px] mx-auto 2xl:text-[20px] text-[16px] font-medium">
        <h1>
          At ‘VII Leeson’ , We are on a mission to ignite the passion for the
          arts in teenagers by delving into the rich history and extraordinary
          talent that has shaped these three disciplines. We are on a mission to
          feed the creativity of young people, creating an environment and
          providing opportunities that encourage and nurture their imaginative
          and innovative abilities.
        </h1>
        <p className="mt-2">
          Through engaging, interactive classes We inspire the next generation
          of artists, musicians, directors, thinkers, and leaders and spark
          their curiosity and fuel their creativity.
        </p>
        <h1 className="mt-2">
          Furthermore, our mission is to explain To our students the pros and
          cons of fame as a complex and paradoxical concept that, while offering
          a grand stage for recognition and influence, comes with its share of
          sacrifices and challenges.
        </h1>

        <p className="mt-2">
          We would love to tell the stories of the famous singers, writers, and
          actors, talk about their brilliant path and the significant advantages
          that their success had brought to them. We want our young students to
          acknowledge That fame offers a platform, a stage where one's talent,
          skill, or message can reach an expansive audience. It opens doors to
          opportunities but isn't a one-size-fits-all experience.
        </p>
        <h1 className="mt-2">
          During our lessons, we provide freedom for young people to explore and
          create without constant supervision. Giving them space to experiment
          and make their own decisions can foster independence and innovation.
        </h1>
      </div>
      <OurLessons />
      <Testimonial />
      <Footer
        mobileBgColor="white"
        textColor="black"
        hideFirstImageMobile={false}
        SecondImageMobile={true}
      />
    </>
  );
}

export default AboutUs;
