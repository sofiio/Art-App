import React, { useState } from "react";
import CustomButton from "./CustomButton";
const FormComponent: React.FC = () => {
  const [email, setEmail] = useState<string>("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Email submitted:", email);
  };

  return (
    <div className="">
      <form onSubmit={handleFormSubmit} className="flex">
        <div>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email"
            className="border border-black p-2 2xl:w-[400px] xl:w-[250px] md:w-[400px] w-[205px]"
            required
          />
        </div>
        <div>
          <CustomButton
            text="Send"
            width="xl:w-[84px] w-[122px]"
            height="h-[43px]"
            marginTop="mt-0"
            backgroundColor="bg-black"
            hoverEffect="hover:bg-customColor"
            marginLeft="ml-[16px]"
          />
        </div>
      </form>
    </div>
  );
};

export default FormComponent;
