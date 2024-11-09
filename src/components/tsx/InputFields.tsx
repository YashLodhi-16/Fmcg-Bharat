// all import statements
import { poppins } from "@/lib/fonts/poppins";
import { InputFieldsDetails } from "@/lib/interfaces/Form";
import { cloneElement } from "react";

// component - InputFields
const InputFields = (props: InputFieldsDetails) => {
  // get basic data
  const { input, src } = props;
  const { name, value, id } = input?.props;
  const { type } = input;

  // cloning src element so i can add className to it.
  const clonedSrc = cloneElement(src, {
    className: "w-8 !h-8",
  });

  return (
    <div className="flex gap-4 items-center justify-start w-full">
      {/* add src and input element here */}
      {clonedSrc}
      <div className="relative group w-full">
        {input}
        {/* label will target the input using id */}
        {/* add basic style and font */}
        {/* if its a text area then position its top 1.5rem else center */}
        {/* if there's any text in input field than position it to very top */}
        <label
          htmlFor={id}
          className={`
            absolute left-4 bg-white -translate-y-1/2 group-focus-within:top-0 group-focus-within:text-blue-500 group-focus-within:text-sm transition-all duration-150 ease-in-out text-teal-500 !font-light 
            ${poppins.className} 
            ${type === "textarea" ? "top-6" : "top-1/2"} 
            ${value.trim().length > 0 ? "!top-0 text-sm" : ""}
            `}
        >
          {name}
        </label>
      </div>
    </div>
  );
};

export default InputFields;
