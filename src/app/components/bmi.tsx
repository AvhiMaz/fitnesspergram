"use client";

import React, { useState } from "react";

function BmiCalculator() {
  const [heightValue, setHeightValue] = useState<number | "">("");
  const [weightValue, setWeightValue] = useState<number | "">("");
  const [bmiValue, setBmiValue] = useState<number | "">("");
  const [bmiMessage, setBmiMessage] = useState<string>("");

  const calculateBmi = () => {
    if (heightValue && weightValue) {
      const heightInMeters = heightValue / 100;
      const bmi = (weightValue / (heightInMeters * heightInMeters)).toFixed(2);
      setBmiValue(Number(bmi));

      let message = "";
      if (bmi < "18.5") {
        message = "You are Underweight";
      } else if (bmi >= "18.5" && bmi < "25") {
        message = "You are Normal weight";
      } else if (bmi >= "25" && bmi < "30") {
        message = "You are Overweight";
      } else {
        message = "You are Obese";
      }
      setBmiMessage(message);
    } else {
      setBmiValue("");
      setBmiMessage("");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-center text-yellow-400 underline text-3xl lg:text-5xl mb-4">
        {" "}
        #BMICalculator
      </h1>
      <div className="input-container mb-4">
        <label htmlFor="height" className="block font-bold mb-1 text-white dark:text-white">
          Enter Your Height (cm):
        </label>
        <input
          type="number"
          id="height"
          value={heightValue}
          onChange={(e) => setHeightValue(Number(e.target.value))}
          className="w-full px-4 py-2 border border-gray-300 rounded-md text-black"
        />
      </div>
      <div className="input-container mb-4">
        <label htmlFor="weight" className="block font-bold mb-1  text-white dark:text-white">
          Enter Your Weight (kg):
        </label>
        <input
          type="number"
          id="weight"
          value={weightValue}
          onChange={(e) => setWeightValue(Number(e.target.value))}
          className="w-full px-4 py-2 border border-gray-300 rounded-md text-black"
        />
      </div>
      <button
        className="calculate-btn w-full py-2 bg-yellow-400 text-black text-lg font-semibold rounded-md"
        onClick={calculateBmi}
      >
        Click to Calculate BMI
      </button>
      {bmiValue !== "" && bmiMessage !== "" && (
        <div className="result mt-4 p-2 bg-black rounded-md">
          <p className="text-white dark:text-white">
            Your BMI: <span className="bmi-value font-bold">{bmiValue}</span>
          </p>
          <p className="text-white dark:text-white">
            Result:{" "}
            <span className="bmi-message text-rose-500 font-bold">
              {bmiMessage}
            </span>
          </p>
        </div>
      )}
    </div>
  );
}

export default BmiCalculator;
