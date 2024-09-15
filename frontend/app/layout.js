import localFont from "next/font/local";
import "./globals.css";

import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["400", "900"],

  subsets: ["latin"],
});
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en " className="h-full">
      <body
        className={`${roboto.className} antialiased bg-[#F2F2F2] min-h-full flex flex-col justify-between`}
      >
        <header className="flex justify-between pt-6 px-[65px]">
          <h1 className="font-bold text-xl text-[#282796]">DOCAID</h1>
          <button className="bg-[#282796] text-white px-8 py-4 font-bold rounded-lg">
            Logout
          </button>
        </header>
        {children}
        <footer className="bg-[#282796] h-[178px] flex flex-col justify-end p-7">
          <p className="text-white text-xl">All rights reserved by MedAura</p>
        </footer>
      </body>
    </html>
  );
}
