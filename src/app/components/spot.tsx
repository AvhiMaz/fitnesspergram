import React from "react";
import { Spotlight } from "@/app/components/ui/Spotlight";
import { TypewriterEffectSmoothDemo } from "./typewriter";

export function SpotlightPreview() {
  const mainStyle = {
    backgroundImage: `url('https://iili.io/Jg1Hi1S.md.png')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "80vh",
  };
  return (
    <div
      style={mainStyle}
      className=" w-full rounded-md flex md:items-center md:justify-center antialiased bg-grid-white/[0.02] relative overflow-hidden"
    >
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <TypewriterEffectSmoothDemo />
      </div>
    </div>
  );
}
