import { SpotlightPreview } from "./components/spot";
import { InfiniteMovingCardsDemo } from "./components/infinite";
import { AnimatedTooltipPreview } from "./components/animated";
import IdealCard from "./components/idealforcard";
import { WobbleCardDemo } from "./components/whyfitnesspergram";
import How from "./components/how-it-works";
import BmiCalculator from "./components/bmi";

export default function Home() {
  return (
    <>
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
    </>
  );
}
