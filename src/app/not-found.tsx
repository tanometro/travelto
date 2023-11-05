"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();
  return (
    <main className=" place-content-center">
      <h1>404 - La página que buscas no existe.</h1>
      <button
        className=" text-center justify-center text-6xl"
        onClick={() => router.back()}
      >
        Volver
      </button>
    </main>
  );
}
