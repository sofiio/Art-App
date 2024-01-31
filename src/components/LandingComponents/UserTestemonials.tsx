import Testimonials from "./Testimonials";
import axios from "axios";
import { useState, useEffect } from "react";

interface StrapiImage {
  id: number;
  url: string;
  data: any;
  attributes: {
    name: string;
    url: string;
  };
}

interface StrapiTestimonial {
  id: number;
  attributes: {
    Feedback: string;
    Name: string;
    Image: StrapiImage;
  };
}

function UserTestimonials() {
  const [error, setError] = useState<Error | null>(null);
  const [testimonials, setTestimonials] = useState<StrapiTestimonial[]>([]);

  useEffect(() => {
    const apiUrl = "http://localhost:1337/api/user-testimonials?populate=Image";

    axios
      .get<{ data: StrapiTestimonial[] }>(apiUrl)
      .then(({ data }) => {
        setTestimonials(
          data.data.map((testimonial) => ({
            id: testimonial.id,
            attributes: {
              Feedback: testimonial.attributes.Feedback,
              Name: testimonial.attributes.Name,
              Image: testimonial.attributes.Image,
            },
          }))
        );
        console.log(
          data.data.map((testimonial) => ({
            id: testimonial.id,
            Feedback: testimonial.attributes.Feedback,
            Name: testimonial.attributes.Name,
            Image: testimonial.attributes.Image,
          }))
        );
        if (
          data.data.length > 0 &&
          data.data[0].attributes.Image &&
          data.data[0].attributes.Image.data.attributes.url
        ) {
          const firstTestimonial = data.data[0];
          console.log(
            "Image URL:",
            `http://localhost:1337${firstTestimonial.attributes.Image.data.attributes.url}`
          );
        }
      })

      .catch((error) => setError(error));
  }, []);

  if (error) {
    return <div>An error occurred: {error.message}</div>;
  }
  const strapiBaseUrl = "http://localhost:1337";
  return (
    <div className="w-full md:bg-white bg-black">
      <div className="xl:max-w-[1312px] mx-auto xl:h-[780px] md:h-[1394px] h-[500px] font-black xl:font-normal flex flex-col items-center">
        <h1 className="mt-0 xl:mt-[64px] md:mt-[112px] md:text-[64px] text-[32px] font-quinapple font-black text-white md:text-black">
          USER TESTIMONIALS
        </h1>
        <div className="2xl:w-[1312px] xl:w-[1100px] w-[355px] sm:w-[500px] md:w-[543px] overflow-x-auto overflow-y-hidden example scrollbar-hide xl:h-[311px] flex md:flex md:flex-col xl:flex xl:flex-row items-center xl:mt-[80px] mt-[24px] md:mt-[80px] p-4 xl:p-0 md:space-y-6 xl:space-y-0 xl:space-x-8 md:space-x-0 space-x-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id}>
              <Testimonials
                avatarSrc={`${strapiBaseUrl}${testimonial.attributes.Image.data.attributes.url}`}
                testimonialText={testimonial.attributes.Feedback}
                authorName={testimonial.attributes.Name}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default UserTestimonials;
