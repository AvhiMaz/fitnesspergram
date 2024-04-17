
import { SpotlightPreview } from "./components/spot";
import { InfiniteMovingCardsDemo } from "./components/infinite";
import { AnimatedTooltipPreview } from "./components/animated";


export default function Home() {
  return ( 
    <>
     <SpotlightPreview/>
     <div>
      <h1 className="flex items-center justify-center text-2xl">
        Top Reviews
      </h1>
     </div>
     <InfiniteMovingCardsDemo/>
     <div className="mt-20">
     <AnimatedTooltipPreview/>
     </div>
     <div className="text-center mb-20">
     © 2024 fitnesspergram . Email : info@fitnesspergram |<br/> Phone : +917086615792
Business Address : uday ka ghar
     </div>
     </>
  );
}
