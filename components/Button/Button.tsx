import React from "react";
import PropTypes from "prop-types";

type Props = {
  text: string;
  size: string;
};

function Button({ text, size }: Props): React.ReactNode {
  return (
    <button className="bg-transparent hover:bg-blue-500  text-stone-100 font-semibold hover:text-white py-2 px-4 border-2 border-solid border-blue-500 dark:border-white hover:border-transparent rounded m-3 ml-5 mr-0">
      {text}
    </button>
  );
}

export default Button;
