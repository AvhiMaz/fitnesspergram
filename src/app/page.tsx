
import { SpotlightPreview } from "./components/spot";
import { InfiniteMovingCardsDemo } from "./components/infinite";
import { AnimatedTooltipPreview } from "./components/animated";


export default function Home() {
  return ( 
    <>
     <SpotlightPreview/>
     <div>
      <h1 className="flex items-center text-white justify-center text-2xl">
        Top Reviews
      </h1>
     </div>
     <InfiniteMovingCardsDemo/>
     <div className="mt-20 bg-black">
     <AnimatedTooltipPreview/>
     </div>
     <footer className="text-center text-white">
     © 2024 fitnesspergram | Email : info@fitnesspergram |<br/> Phone : +917086615792
Business Address : uday ka ghar <br/>             




--------- @ ----------
     </footer>
     </>
  );
}
