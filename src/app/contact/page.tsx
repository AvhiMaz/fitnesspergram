"use client";

import React from "react";
import { Spotlight } from "@/app/components/ui/Spotlight";
import { CardHoverEffectDemo } from "@/app/components/hovercard";
import Submission from "../components/submission";

export default function SpotlightPreview() {
  return (
    <>
      <div className="min-h-screen w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        <div className=" p-4 max-w-7xl text-center mx-auto relative z-10  w-full pt-20 md:pt-0">
          <p className="text-yellow-400 text-bold lg:mt-20 text-2xl lg:text-5xl">
            #Connected
          </p>
          <CardHoverEffectDemo />
        </div>
      </div>
      <div>
        <section className="bg-black">
          <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white">
              Contact Us
            </h2>
            <p className="mb-8 lg:mb-16 font-light text-center text-yellow-400  sm:text-xl">
              Want to contact us? let us know more about you, share your contact details to stay in touch with fitnesspergram.
            </p>
            <Submission />
          </div>
        </section>
      </div>
      <footer className="text-center text-white">
        <p className="text-[15px]">
          © 2024 fitnesspergram | Email : info@fitnesspergram.store |
          <br /> Phone : +917086615792 | Business Address : Guwahati
          <br />
          --------- @ ----------
        </p>
      </footer>
    </>
  );
}
