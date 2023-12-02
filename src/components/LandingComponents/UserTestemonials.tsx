import Testimonials from "./Testimonials";

function UserTestemonials() {
  return (
    <div className="xl:max-w-[1312px] mx-auto xl:h-[780px] h-[500px] font-black xl:font-normal flex flex-col items-center">
      <h1 className="mt-[64px] 2xl:mt-[64px] xl:mt-0 xl:text-[64px] text-[32px] font-quinapple">
        USER TESTIMONIALS
      </h1>
      <div className="2xl:w-[1312px] w-[375px] md:w-[543px] overflow-x-auto overflow-y-hidden example scrollbar-hide xl:h-[311px] flex items-center xl:mt-[80px] mt-[24px]  p-4 xl:p-0">
        <div>
          <Testimonials
            avatarSrc="/avatar1.svg"
            testimonialText="Enrolling in the music, theatre, and literature courses here was a game-changer. The instructors are amazing, and I've grown as an artist like never before!"
            authorName="Sidney"
          />
        </div>
        <div className="xl:ml-[32px] ml-[28px]">
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
