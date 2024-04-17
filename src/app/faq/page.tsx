import React from "react";
import { Spotlight } from "@/app/components/ui/Spotlight";
import { CardStackDemo } from "../components/cstack";

export default function SpotlightPreview() {
  return (
    <>
      <div className="h-[40rem] flex-col w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        <CardStackDemo />
      </div>
    </>
  );
}
