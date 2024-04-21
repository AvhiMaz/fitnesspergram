"use client";
import { TypewriterEffectSmooth } from "@/app/components/ui/typewriter-effect";
import Image from "next/image";
import Logo from "../images/fitnesspergram-removebg.png";
import Link from "next/link";

export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "start",
      className: "text-white",
    },
    {
      text: "your",
      className: "text-white",
    },
    {
      text: "fitness",
      className: "text-white",
    },
    {
      text: "journey",
      className: "text-white",
    },
    {
      text: "@fitnesspergram.store",
      className: "text-[#f97316] dark:text-[#f97316]",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[25rem]  ">
      <Image src={Logo} alt="Logo" width={200} height={200} />
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-5">
        <Link href="/price">
          <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
            View Pricings
          </button>
        </Link>
        <Link href="/sign-in">
          <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
            Sign in / Login
          </button>
        </Link>
      </div>
    </div>
  );
}
