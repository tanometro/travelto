import React from "react";
import Button from "../login/Button/Button";

export default function SignOrLog(): React.ReactNode {
  return (
    <div className="flex flex-col items-center w-[80%] md:w-[40rem] p-1 pt-5 md:p-5">
      <h1 className="text-2xl mb-16">Not registered?</h1>
      <Button text="Sign Up" size="" />
      <h3 className="py-5">- or -</h3>
      <Button text="Log In" size="" />
    </div>
  );
}
