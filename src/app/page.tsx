import { SpotlightPreview } from "./components/spot";
import { InfiniteMovingCardsDemo } from "./components/infinite";
import { AnimatedTooltipPreview } from "./components/animated";
import IdealCard from "./components/idealforcard";
import { WobbleCardDemo } from "./components/whyfitnesspergram";
import How from "./components/how-it-works";

export default function Home() {
  return (
    <>
      <SpotlightPreview />
      <div className="flex items-center justify-center"></div>
      <div>
        <h1 className="flex items-center text-yellow-500 justify-center text-4xl">
          #IdealFor
        </h1>
      </div>
      <IdealCard />
      <div>
        <h1 className="flex items-center text-yellow-500 justify-center text-4xl">
          #HowItWorks
        </h1>
      </div>
      <How />
      <div>
        <h1 className="flex items-center text-yellow-500 justify-center text-4xl">
          #Whyfitnesspergram
        </h1>
      </div>
      <WobbleCardDemo />
      <div>
        <h1 className="flex items-center text-yellow-500 justify-center text-4xl">
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
