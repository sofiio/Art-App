import { z, ZodType } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

type FormData = {
  email: string;
};

function FormComponent() {
  const schema: ZodType<FormData> = z.object({
    email: z.string().email(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const submitedData = async (data: FormData) => {
    // Transform form data to match the desired structure
    const postData = {
      data: {
        userEmail: data.email,
      },
    };

    try {
      const response = await fetch("http://localhost:1337/api/user-emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });

      if (response.ok) {
        // Handle success, e.g., show confirmation message
        console.log("submited");
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
    <div className="flex flex-col 2xl:items-center items-start">
      <form className="flex " onSubmit={handleSubmit(submitedData)}>
        <div className="flex flex-col xl:space-y-2">
          <input
            type="email"
            {...register("email")}
            className="border border-black p-2 2xl:w-[400px] xl:w-[250px] md:w-[400px] w-[205px]"
            placeholder="Enter your email"
          />
          {errors.email && (
            <span className="text-red-600">{errors.email.message}</span>
          )}
        </div>

        <div className="mx-auto flex flex-col items-center">
          <input
            type="submit"
            value="Send"
            className="xl:w-[84px] ml-[16px] w-[122px] hover:bg-customColor h-[43px] mt-0 bg-black text-white"
          />
        </div>
      </form>
    </div>
  );
}

export default FormComponent;
