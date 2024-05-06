"use client";

import Link from "next/link";
import { useState } from "react";
import { InfiniteMovingCardsDemo } from "./components/infinite";
import { AnimatedTooltipPreview } from "./components/animated";
import BmiCalculator from "./components/bmi";
import IdealCard from "./components/idealforcard";
import { SpotlightPreview } from "./components/spot";
import How from "./components/how-it-works";

export default function Home() {
  const [showChatBotText, setShowChatBotText] = useState(true);

  const scrollToAi = () => {
    console.log("AI button clicked!");
  };

  const handleRemoveChatBotText = () => {
    setShowChatBotText(true);
  };

  return (
    <>
      {/* {showChatBotText && (
        <div className="fixed top-5 right-5 flex items-center bg-white rounded-md p-2 shadow-md">
          <p className="mr-2">Ask our chat bot</p>
          <button onClick={handleRemoveChatBotText}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-gray-600"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM4 10a6 6 0 1112 0 6 6 0 01-12 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      )} */}
      <SpotlightPreview />
      <div className="flex items-center justify-center"></div>
      <div>
        <h1 className="flex mt-20 underline items-center text-yellow-500 justify-center text-4xl lg:text-5xl">
          #IdealFor
        </h1>
      </div>
      <IdealCard />
      <div>
        <h1 className="flex mt-20 underline items-center text-yellow-500 justify-center text-4xl lg:text-5xl">
          #HowItWorks
        </h1>
      </div>
      <How />
      <div className="mt-10">
        <BmiCalculator />
      </div>
      <div className="mt-20 mb-10 underline text-yellow-500 text-bold">
        <h1 className="flex  items-center text-yellow-500 justify-center text-4xl lg:text-5xl">
          #TopReviews
        </h1>
      </div>
      <InfiniteMovingCardsDemo />
      <div className="mt-20 bg-black">
        <AnimatedTooltipPreview />
      </div>
      <Link href="/Fit-Ai">
        <button
          onClick={scrollToAi}
          className="fixed bottom-10 rounded-full right-10 bg-yellow-500 text-white px-4 py-2 shadow-lg z-10"
        >
          <svg
            className="w-[25px] h-[40px] lg:h-[65px] lg:w-[50px]"
            width="50px"
            height="65px"
            viewBox="0 0 512 512"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>ai</title>
            <g
              id="Page-1"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
            >
              <g
                id="icon"
                fill="#000000"
                transform="translate(64.000000, 64.000000)"
              >
                <path
                  d="M320,64 L320,320 L64,320 L64,64 L320,64 Z M171.749388,128 L146.817842,128 L99.4840387,256 L121.976629,256 L130.913039,230.977 L187.575039,230.977 L196.319607,256 L220.167172,256 L171.749388,128 Z M260.093778,128 L237.691519,128 L237.691519,256 L260.093778,256 L260.093778,128 Z M159.094727,149.47526 L181.409039,213.333 L137.135039,213.333 L159.094727,149.47526 Z M341.333333,256 L384,256 L384,298.666667 L341.333333,298.666667 L341.333333,256 Z M85.3333333,341.333333 L128,341.333333 L128,384 L85.3333333,384 L85.3333333,341.333333 Z M170.666667,341.333333 L213.333333,341.333333 L213.333333,384 L170.666667,384 L170.666667,341.333333 Z M85.3333333,0 L128,0 L128,42.6666667 L85.3333333,42.6666667 L85.3333333,0 Z M256,341.333333 L298.666667,341.333333 L298.666667,384 L256,384 L256,341.333333 Z M170.666667,0 L213.333333,0 L213.333333,42.6666667 L170.666667,42.6666667 L170.666667,0 Z M256,0 L298.666667,0 L298.666667,42.6666667 L256,42.6666667 L256,0 Z M341.333333,170.666667 L384,170.666667 L384,213.333333 L341.333333,213.333333 L341.333333,170.666667 Z M0,256 L42.6666667,256 L42.6666667,298.666667 L0,298.666667 L0,256 Z M341.333333,85.3333333 L384,85.3333333 L384,128 L341.333333,128 L341.333333,85.3333333 Z M0,170.666667 L42.6666667,170.666667 L42.6666667,213.333333 L0,213.333333 L0,170.666667 Z M0,85.3333333 L42.6666667,85.3333333 L42.6666667,128 L0,128 L0,85.3333333 Z"
                  id="Combined-Shape"
                ></path>
              </g>
            </g>
          </svg>
        </button>
      </Link>
    </>
  );
}
