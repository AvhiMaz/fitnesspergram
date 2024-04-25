"use client";

import React from "react";
import { Spotlight } from "@/app/components/ui/Spotlight";
import { CardHoverEffectDemo } from "@/app/components/hovercard";

export default function SpotlightPreview() {
  return (
    <div className="min-h-screen w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className=" p-4 max-w-7xl text-center mx-auto relative z-10  w-full pt-20 md:pt-0">
        <p className="text-yellow-500 text-bold lg:mt-20 text-2xl lg:text-5xl">
          #Connected
        </p>
        <CardHoverEffectDemo />
      </div>
    </div>
  );
}
