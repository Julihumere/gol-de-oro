import type { Metadata } from "next";
import { Poppins, Irish_Grover } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["400", "900"],
});

const irishGrover = Irish_Grover({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-irish-grover",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Gol de oro",
  description: "Crea tus equipos con tus jugadores favoritos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${irishGrover.variable} bg-[#0e0e0e] w-screen h-screen `}
    >
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
