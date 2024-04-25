"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/app/components/ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className=" rounded-md flex flex-col antialiased bg-black dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "I absolutely loved the concept of Fitnesspergram! The meals were not only healthy but also incredibly delicious. The packaging was neat and convenient. Looking forward to subscribing regularly!",
    name: "Dipankar Saikia",
    title: "",
  },
  {
    quote:
      "The meals from Fitnesspergram exceeded my expectations. Each dish was bursting with flavor, and the portion sizes were just right. The idea of calorie-counted meals delivered daily is brilliant!",
    name: "Rima Devi",
    title: "",
  },
  {
    quote: "Fitnesspergram's meals are a game-changer for anyone looking to eat healthier without compromising on taste. The packaging kept everything fresh, and I appreciated the variety of options available.",
    name: "Hemanta Borah",
    title: "",
  },
  {
    quote:
      "I'm so impressed with Fitnesspergram's approach. The meals tasted homemade and were packed with nutrients. The packaging was eco-friendly too! Can't wait to continue this journey.",
    name: "Ananya Baruah",
    title: "",
  },
  {
    quote:
      "Kudos to Fitnesspergram for making healthy eating so enjoyable! The meals were not only visually appealing but also incredibly tasty. It's the perfect solution for busy individuals.",
    name: "Debajit Sharma",
    title: "",
  },
  {
    quote:
      "Fitnesspergram's meals were a pleasant surprise! The flavors were well-balanced, and I loved the convenience of having nutritious meals delivered daily. Highly recommend trying it out!",
    name: "Suman Das",
    title: "",
  },
  {
    quote:
      "I'm grateful for discovering Fitnesspergram. The meals were fresh, flavorful, and thoughtfully prepared. The concept of calorie-controlled meals delivered to your doorstep is fantastic!",
    name: "Priya Hazarika",
    title: "",
  },
  {
    quote: "Fitnesspergram is a game-changer! The meals were not only healthy but also incredibly tasty. I appreciate the effort put into creating balanced meals for busy individuals like me.",
    name: "Pallavi Barman",
    title: ""
  },
  {
    quote: "I'm so glad I tried Fitnesspergram. The meals were top-notch in terms of taste and quality. The concept of having calorie-controlled meals delivered daily is brilliant for maintaining a healthy lifestyle.",
    name: "Saurav Das",
    title: ""
  }
];
