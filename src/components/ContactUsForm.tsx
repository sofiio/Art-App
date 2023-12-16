import { z, ZodType } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  mobilePhone?: string;
  // mobilePhone?: string | null; // Making it optional
  message: string;
  chooseLasson: string;
  termsCheckbox: boolean;
};

function ContactUsForm() {
  const schema: ZodType<FormData> = z.object({
    termsCheckbox: z.boolean().refine((value) => value === true, {
      message: "Please accept the Terms.",
    }),
    firstName: z.string().min(2).max(30),
    lastName: z.string().min(2).max(30),
    email: z.string().email(),
    mobilePhone: z.string().regex(/^\d{10}$/g, {
      message:
        "Invalid phone number. Please enter a 10-digit number without spaces or dashes.",
    }),
    message: z.string().min(10).max(300),
    chooseLasson: z
      .string()
      .refine((value) => ["Theatre", "Music", "Literature"].includes(value), {
        message: "Invalid category.",
      }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const [isChecked, setIsChecked] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const submitData = async (data: FormData) => {
    // Transform form data to match the desired structure
    const postData = {
      data: {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        mobilePhone: data.mobilePhone,
        chooseLasson: data.chooseLasson,
        message: data.message,
        termsCheckbox: data.termsCheckbox,
      },
    };

    try {
      const response = await fetch("http://localhost:1337/api/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });

      if (response.ok) {
        // Handle success, e.g., show confirmation message
        setShowConfirmation(true);
      } else {
        // Handle error, e.g., show error message
        console.error("Error submitting form");
      }
    } catch (error) {
      // Handle network error
      console.error("Network error:", error);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-[48px] font-bold xl:mt-[112px] mt-16">Contact us</h1>
      <div className="xl:w-[668px] w-[322px] xl:h-[657px] mt-[48px]">
        <form className="flex flex-col" onSubmit={handleSubmit(submitData)}>
          <div className="xl:flex xl:flex-row flex flex-col mx-auto xl:mx-0">
            <div className="flex flex-col space-y-2">
              <label className="font-medium">First name</label>
              <input
                type="text"
                {...register("firstName")}
                className="w-[322px] h-[48px] border border-black p-2"
              />
              {errors.firstName && (
                <span className="text-red-600">{errors.firstName.message}</span>
              )}
            </div>
            <div className="flex flex-col xl:ml-[24px] xl:space-y-2 mt-4 xl:mt-0">
              <label className="font-medium">Last name</label>
              <input
                type="text"
                {...register("lastName")}
                className="w-[322px] h-[48px] border border-black p-2"
              />
              {errors.lastName && (
                <span className="text-red-600">{errors.lastName.message}</span>
              )}
            </div>
          </div>
          <div className="xl:flex xl:flex-row flex flex-col xl:mt-[24px] mt-4 mx-auto xl:mx-0">
            <div className="flex flex-col xl:space-y-2">
              <label className="font-medium">Email</label>
              <input
                type="email"
                {...register("email")}
                className="w-[322px] h-[48px] border border-black p-2"
              />
              {errors.email && (
                <span className="text-red-600">{errors.email.message}</span>
              )}
            </div>
            <div className="flex flex-col xl:ml-[24px] mt-4 xl:mt-0 xl:space-y-2">
              <label className="font-medium">Phone number</label>
              <input
                type="tel"
                {...register("mobilePhone")}
                className="w-[322px] h-[48px] border border-black p-2"
              />
              {errors.mobilePhone && (
                <span className="text-red-600">
                  {errors.mobilePhone.message}
                </span>
              )}
            </div>
          </div>

          <label className="xl:mt-[24px] mt-4 font-medium">
            Choose a Lesson
          </label>
          <select
            {...register("chooseLasson")}
            placeholder="Select one..."
            className="xl:w-[668px] w-[322px] h-[48px] mt-2 border border-black px-2 py-2 mx-auto" // Add 'pl-2' class for left padding
          >
            <option value="Theatre">Theatre</option>
            <option value="Music">Music</option>
            <option value="Literature">Literature</option>
          </select>
          {errors.chooseLasson && (
            <span className="text-red-600">{errors.chooseLasson.message}</span>
          )}

          <div className="xl:w-[668px] w-[322px] h-[212px] mt-[24px] space-y-2">
            <label className="font-medium ">Message</label>
            <input
              type="text"
              {...register("message")}
              placeholder="Type your message..."
              className="xl:w-[668px] w-[322px] h-[180px] border border-black pl-2 flex mx-auto xl:mx-0"
            />
            {errors.message && (
              <span className="text-red-600">{errors.message.message}</span>
            )}
          </div>

          <div className="mx-auto flex flex-col items-center">
            <div className="flex items-center mt-[24px] w-[146px] h-[37px]">
              <input
                type="checkbox"
                {...register("termsCheckbox", { required: true })}
                checked={isChecked}
                onChange={handleCheckboxChange}
                className={`mr-2 border border-black cursor-pointer ${
                  errors.termsCheckbox ? "border-red-500" : ""
                }`}
              />
              <label
                htmlFor="termsCheckbox"
                className={`cursor-pointer text-[14px] font-medium underline ${
                  errors.termsCheckbox ? "text-red-500" : ""
                }`}
              >
                I accept the Terms
              </label>
              {errors.termsCheckbox && (
                <span className="text-red-600">
                  {/* {errors.termsCheckbox.message} */}
                </span>
              )}
            </div>

            <input
              type="submit"
              value="Done"
              className="w-[85px] h-[48px] mt-[24px] bg-black text-white"
            />
          </div>
        </form>
      </div>
      {showConfirmation && (
        <div className="mt-4 text-green-600 font-medium">
          Thank you! Your contact form is accepted.
        </div>
      )}
    </div>
  );
}

export default ContactUsForm;
