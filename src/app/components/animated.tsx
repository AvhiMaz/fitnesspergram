"use client";
import React from "react";
import { AnimatedTooltip } from "@/app/components/ui/animated-tooltip";
const people = [
  {
    id: 1,
    name: "Priyangshu Das",
    designation: "Founder / Chief Executive Officer",
    image: "https://avatars.githubusercontent.com/u/167234039?v=4",
  },
  {
    id: 2,
    name: "Avhi Mazumder",
    designation: "Chief Technical Officer",
    image: "https://avatars.githubusercontent.com/u/102310138?v=4",
  },
  {
    id: 3,
    name: "Uday Hajong",
    designation: "Chief Finance Officer",
    image:
      "https://iili.io/JSyrAss.jpg",
  },
  {
    id: 4,
    name: "Afzal Mazumder",
    designation: "Marketing Incharge",
    image:
      "https://iili.io/JSyePNs.jpg",
  },
];

export function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
