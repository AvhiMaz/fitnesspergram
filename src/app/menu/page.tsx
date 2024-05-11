"use client";

import React from "react";
import MenuVeg from "../components/veg";
import MenuVegan from "../components/vegan";
import TopUp from "../components/top-ups";
import Sidebar from "../components/sidebar";

export default function Menu() {
  return (
    <>
      <p className=" mt-32 text-center text-yellow-400 text-5xl">#NonVeg</p>
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4">
        <div className="mt-20 lg:mt-10 flex items-center justify-center">
          <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-72">
            <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-56">
              <img
                src="https://ideogram.ai/api/images/direct/WU6_hTDWTKy6IsFrgS8zuQ.png"
                alt="card-image"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                  Chicken Thali Twist
                </p>
                <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                  ₹129.00
                </p>
              </div>
              <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
                Calories: 344kcal <br />
                ∙Protein: 45.8g <br />
                ∙Carbs: 23.5g <br />
                ∙Fats: 5.54g
              </p>
            </div>
            <div className="p-6 pt-0">
              <button
                className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                type="button"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        <div className="mt-10 flex items-center justify-center">
          <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-72">
            <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-56">
              <img
                src="https://ideogram.ai/api/images/direct/3U4G0Q9CQqGMvyc2x8Tdrg.png"
                alt="card-image"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                  Egg Delight Thali
                </p>
                <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                  ₹99.00
                </p>
              </div>
              <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
                Calories: 154kcal <br />
                ∙Protein: 30g <br />
                ∙Carbs: 9g <br />
                ∙Fats: 8.57g
              </p>
            </div>
            <div className="p-6 pt-0">
              <button
                className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                type="button"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        <div className="mt-10 flex items-center justify-center">
          <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-72">
            <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-56">
              <img
                src="https://ideogram.ai/api/images/direct/mbSQcAl4RgGxEBu01Ppxiw.png"
                alt="card-image"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                  Fish Thali
                </p>
                <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                  ₹119.00
                </p>
              </div>
              <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
                Calories: 305kcal <br />
                ∙Protein: 32.5g <br />
                ∙Carbs: 23g <br />
                ∙Fats: 9g
              </p>
            </div>
            <div className="p-6 pt-0">
              <button
                className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                type="button"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        <div className="mt-10 flex items-center justify-center">
          <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-72">
            <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-56">
              <img
                src="https://ideogram.ai/api/images/direct/XXoKCx4EQpKfJU0DlCF7yA.png"
                alt="card-image"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                  Boiled Meal
                </p>
                <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                  ₹95.00
                </p>
              </div>
              <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
                Calories: 154kcal <br />
                ∙Protein: 30g <br />
                ∙Carbs: 9g <br />
                ∙Fats: 8.57g
              </p>
            </div>
            <div className="p-6 pt-0">
              <button
                className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                type="button"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <MenuVeg />
      <MenuVegan />
      <TopUp />
      <Sidebar />
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