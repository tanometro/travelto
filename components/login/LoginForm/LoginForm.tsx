"use client";
import { useState } from "react";
import { signIn, useSession } from "next-auth/react";
import FormInput from "../FormInput/FormInput";
import validate from "./validate";
import { useRouter } from "next/navigation";


export const LoginForm = () => {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [errors, setErrors] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handlerSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const stateErrors: string = validate(email, password);
    setErrors(stateErrors);
    if (stateErrors.length === 0) {
      // aca llamo a la api

      const responseNextAuth = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (responseNextAuth?.error) {
        // aca responde la app
        console.log("aca entra");

        setErrors(responseNextAuth.error);
        return;
      }
      if (status === "unauthenticated") {
        setErrors("Error no se encuentra registrado");
      }
      router.push("/");
    }
  };
  return (
    <>
      <h1 className="text-2xl mb-5">Log In</h1>
      <form onSubmit={handlerSubmit}>
        <FormInput
          type="email"
          name="Email"
          value={email}
          handler={(event) => setEmail(event.target.value)}
          autoComplete="email"
        />
        <FormInput
          type="password"
          name="Password"
          value={password}
          handler={(event) => setPassword(event.target.value)}
          autoComplete="off"
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
                callbackUrl: "/login",
              })
            }
          >
            Sign In with Google
          </button>
        </div>
        {errors && errors.length > 0 && (
          <div className="form-group relative mb-10 w-[80%] justify-self-center justify-center">
            {errors?.split("*").map((error, index) => (
              <p className="text-white bg-red-700" key={index}>* {error}</p>
            ))}
          </div>
        )}
      </form>
    </>
  );
};
