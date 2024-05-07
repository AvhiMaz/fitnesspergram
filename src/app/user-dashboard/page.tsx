"use client";

import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    borderColor: string;
    backgroundColor: string;
  }[];
}

const BarChart = () => {
  const [chartData, setChartData] = useState<ChartData>({
    labels: [],
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    if (typeof window !== "undefined") {
      setChartData({
        labels: ["Meal 1", "Meal 2", "Meal 3", "Meal 4", "Meal 5"],
        datasets: [
          {
            label: "Calories (Kcal)",
            data: [182, 291, 609, 293, 482],
            borderColor: "rgb(240, 180, 17)",
            backgroundColor: "rgb(240, 180, 17)",
          },
        ],
      });
      setChartOptions({
        plugins: {
          legend: {
            position: "top",
          },
          title: {
            display: true,
            text: "Daily Calorie Count",
          },
        },
        maintainAspectRatio: false,
        responsive: true,
      });
    }
  }, []);

  return (
    <>
      <div className="bg-black min-h-screen">
        <div className="w-full mt-20 flex justify-center items-center relative p-4 rounded-lg bg-black">
          <Bar data={chartData} options={chartOptions} />
        </div>
      </div>
      <div className="text-bold text-xl ml-1 lg:ml-10 rounded-lg text-white">
        <h1>Total Calories : </h1>
        <h1>Total Protien : </h1>
        <h1>Total Carbs : </h1>
        <h1>Total Fats : </h1>
      </div>
      <div className="mt-10"></div>
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
};

export default BarChart;
