import React from "react";
import { useRouter } from "next/navigation";

function BackButton() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };
  return (
    <button
      onClick={handleBack}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded-full"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="18"
        height="18"
      >
        <path
          d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z"
          fill="rgba(247,245,245,1)"
        ></path>
      </svg>
    </button>
  );
}

export default BackButton;
