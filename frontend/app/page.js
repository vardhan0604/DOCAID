"use client";

import { useRef } from "react";

export default function Home() {
  const otpRefs = useRef([]);

  return (
    <main className="bg-[#F2F2F2] h-screen">
      <article className="bg-white cardShadow py-[20px] px-[33px] w-full max-w-[1050px] mx-auto rounded-xl">
        <h2 className="font-bold text-2xl">Enter Aadhar Card</h2>
        <p>Enter aadhar number to search user</p>
        <section className="flex justify-center mt-[52px]">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((curr, index) => {
            return (
              <input
                className={` outline-none border-[1px] border-black/20 w-[62px] h-[62px] mr-1 text-center last:mr-0 rounded-lg ${
                  (index + 1) % 4 == 0 && index + 1 != 12 ? "mr-[60px]" : ""
                }`}
                onKeyDown={(e) => {
                  if (
                    e.code != "Backspace" &&
                    !e.code.includes("Digit") &&
                    e.code != "KeyV" &&
                    e.ctrlKey != true
                  ) {
                    e.preventDefault();
                  }
                }}
                onChange={(e) => {
                  if (/[0-9]/.test(e.target.value)) {
                    e.target.value = e.target.value[e.target.value.length - 1];

                    if (otpRefs.current[index + 1]) {
                      otpRefs.current[index + 1]?.focus();
                    }
                  } else {
                    if (e.target.value == "") {
                      otpRefs.current[index - 1]?.focus();
                    }
                    e.target.value = "";
                  }
                }}
                ref={(e) => {
                  otpRefs.current[index] = e;
                }}
              />
            );
          })}
        </section>
        <section className="mt-[55px] flex justify-between">
          <button className="px-4 p-2 bg-black/10 rounded-md font-bold">
            cancel
          </button>
          <button className="bg-[#282796] text-white px-4 p-2 rounded-md font-bold">
            verify
          </button>
        </section>
      </article>
    </main>
  );
}
