"use client";
import React, { useState } from "react";

type Props = {
  type: string;
  name: string;
  handler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
};

export default function FormInput({
  type,
  name,
  handler,
  value = "",
}: Props): React.ReactNode {
  const [inputValue, setInputValue] = useState(value);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handler(event);
    setInputValue(event.target?.value);
  };
  return (
    <div className="form-group relative mb-10 w-[80%] justify-self-end">
      <input
        type={type}
        id={name}
        className={`relative w-full px-4 py-2 border-2 rounded pt-2 top-6 text-black
        `}
        value={inputValue}
        onChange={handleInputChange}
        required
        name={name}
      />
      <label
        htmlFor={name}
        className={`absolute transition-all duration-200 ease-in-out ${
          inputValue
            ? "top-1 left-5 text-xs text-white"
            : "top-[44px] left-7 -translate-y-1/2 text-gray-400"
        } `}
      >
        {name}
      </label>
    </div>
  );
}
