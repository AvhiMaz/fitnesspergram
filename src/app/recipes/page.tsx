import { LayoutGridDemo } from "../components/menu-grid";
import { LampDemo } from "../components/sabka-lamp";

export default function Recipe() {
  return (
    <>
    <div>
        <LampDemo/>
    </div>
    <div>
      <p className="text-center text-6xl">
        Non-Vegetarian 
      </p>
      <p className="text-center mt-2 text-2xl text-yellow-500">
        Try our delecious range of freshly prepared non-vegetarian meals
      </p>
      <LayoutGridDemo/>
      <p>
        vegetarian
      </p>
      <LayoutGridDemo/>
    </div>
    </>
  );
}
