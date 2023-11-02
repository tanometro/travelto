import "./globals.css";
import type { Metadata } from "next";
import SessionAuthProvider from "@/src/context/SessionAuthProvider";
import { Inter } from "next/font/google";
import { CartProvider } from "@/src/app/context/cart";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Welcome to TravelTo",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <SessionAuthProvider>{children}</SessionAuthProvider>
        </CartProvider>
      </body>
    </html>
  );
}
