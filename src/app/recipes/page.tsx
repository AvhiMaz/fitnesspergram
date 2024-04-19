import { LayoutGridDemo } from "../components/menu-grid";

export default function Recipe() {
  return (
    <>
      <div className="mt-56">
        <p className="text-center text-2xl lg:text-6xl">Non-Vegetarian</p>
        <p className="text-center mt-2 text-xl lg:text-2xl mx-2 text-yellow-500">
          Try our delecious range of freshly prepared non-vegetarian meals
        </p>
        <LayoutGridDemo />
        <p className="text-center text-2xl lg:text-6xl">Vegetarian</p>
        <p className="text-center mt-2 text-xl lg:text-2xl mx-2 text-yellow-500">
          Try our delecious range of freshly prepared vegetarian meals
        </p>
        <LayoutGridDemo />
      </div>
    </>
  );
}
