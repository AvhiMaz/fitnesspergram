"use client";
import React from "react";
import { HeroScrollDemo } from "../components/scrollscreen";
import { LampDemo } from "../components/sabka-lamp";

export default function SparklesPreview() {
  return (
    <>
    <div>
      <LampDemo/>
    </div>
    <HeroScrollDemo/>
    </>
  );
}
