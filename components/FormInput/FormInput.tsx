"use client";
import React, { useState } from "react";

type Props = {
  type: string;
  name: string;
};

export default function FormInput({ type, name }: Props): React.ReactNode {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target?.value);
  };
  return (
    <div className="form-group relative pl-5">
      <input
        type={type}
        id={name}
        className={`relative w-full px-4 py-2 border-2 rounded pt-2 top-6
        `}
        value={inputValue}
        onChange={handleInputChange}
        required
        name={name}
      />
      <label
        htmlFor={name}
        className={`absolute transition-all duration-200 ease-in-out ${
          inputValue ? "top-1 left-7 text-xs" : "top-12 left-9 -translate-y-1/2"
        } text-gray-400`}
      >
        {name}
      </label>
    </div>
  );
}
