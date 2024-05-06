import { ImagesSliderDemo } from "@/app/components/image-slide";
import { SparklesPreview } from "@/app/components/textspark";

export default function Plans() {
  return (
    <>
      <div>
        <SparklesPreview />
      </div>
      <div>
        <ImagesSliderDemo />
      </div>
      <footer className="text-center text-white">
        <p className="text-[15px]">
          © 2024 fitnesspergram | Email : info@fitnesspergram.store |
          <br /> Phone : +917086615792 | Business Address : Guwahati
          <br />
          --------- @ ----------
        </p>
      </footer>
    </>
  );
}
