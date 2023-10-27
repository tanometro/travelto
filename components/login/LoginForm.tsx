"use client";
import { useState } from "react";
import { signIn, useSession } from "next-auth/react";
import FormInput from "./FormInput/FormInput";
import validate from "./validate";

export const LoginForm = () => {
  const { data: session, status } = useSession();
  const [errors, setErrors] = useState<string[]>([]);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handlerSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const stateErrors: string[] = validate(name, email, password);
    setErrors([...stateErrors]);
    if (stateErrors.length === 0) {
      // aca llamo a la api

      const responseNextAuth = signIn("credentials", {
        email,
        password,
        redirect: false,
      });
    }
  };
  return (
    <>
      <h1 className="text-2xl mb-5">Log In</h1>
      <form onSubmit={handlerSubmit}>
        <FormInput
          type="mail"
          name="Email"
          value={email}
          handler={(event) => setEmail(event.target.value)}
        />
        <FormInput
          type="password"
          name="Password"
          value={password}
          handler={(event) => setPassword(event.target.value)}
        />
        <div className="relative mb-6 flex flex-col gap-y-4 w-[80%]">
          <button
            className="flex w-full justify-center p-30 rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            type="submit"
          >
            SIGN IN
          </button>

          <button
            type="button"
            className="flex w-full justify-center rounded-md bg-white px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-indigo-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 "
            onClick={() =>
              signIn("google", {
                redirect: false,
              })
            }
          >
            Sign In with Google
          </button>
        </div>
        {errors.length > 0 && (
          <div className="text-red-800">
            {errors.map((error, index) => (
              <p key={index}>{error}</p>
            ))}
          </div>
        )}
      </form>
    </>
  );
};
