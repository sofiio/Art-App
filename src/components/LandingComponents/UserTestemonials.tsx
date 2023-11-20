import Testimonials from "./Testimonials";

function UserTestemonials() {
  return (
    <div className="max-w-[1440px] mx-auto h-[780px] flex flex-col items-center">
      <h1 className="mt-[112px] text-[64px] font-quinapple">USER TESTIMONIALS</h1>
      <div className="w-[1312px] h-[311px] flex items-center mt-[80px]">
        <Testimonials
          avatarSrc="/avatar1.svg"
          testimonialText="Enrolling in the music, theatre, and literature courses here was a game-changer. The instructors are amazing, and I've grown as an artist like never before!"
          authorName="Sidney"
        />
        <div className="ml-[32px]">
          <Testimonials
            avatarSrc="/avatar2.svg"
            testimonialText="The theatre course was a blast! It's hands-on and super fun. I feel confident on stage now, all thanks to VII LESSON!"
            authorName="Eva"
          />
        </div>
        <div className="ml-[32px]">
          <Testimonials
            avatarSrc="/avatar3.svg"
            testimonialText="The literature course broadened my horizons. It's a must for book lovers. I found my passion here!"
            authorName="Anna"
          />
        </div>
      </div>
    </div>
  );
}

export default UserTestemonials;
