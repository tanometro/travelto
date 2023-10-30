import React from "react";
import { ButtonProps } from "@/src/interfaces";

function Button({ text, size = "" }: ButtonProps): React.ReactNode {
  return (
    <button
      className={`bg-transparent hover:bg-blue-500  text-stone-100 font-semibold hover:text-white py-2 px-4 border-2 border-solid border-blue-500 dark:border-white hover:border-transparent rounded  ${
        size !== "" ? `w-[${size}]` : ""
      }`}
    >
      {text}
    </button>
  );
}

export default Button;
