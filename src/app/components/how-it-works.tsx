"use client";

import React from "react";

const How: React.FC = () => {
  return (
    <>
      <div className="wrapper mt-20 flex items-center justify-center">
        <div className="fixed-bg bg-1">
          <div className="flex items-center justify-center mt-0 lg:mt-[70px] ">
            <div className="grid lg:grid-cols-4 gap-7 lg:gap-28 mt-10 mb-10 justify-center items-center">
              <div className="block max-w-[18rem] rounded-lg text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white">
                <div className="p-6 text-center bg-slate-900 rounded-lg">
                  <h1 className="text-bold text-white text-2xl text-center underline">
                    Login and Register
                  </h1>
                  <p className="text-base text-white">
                    Embark on your personal fitness journey; join us today
                  </p>
                </div>
              </div>
              <div className="block max-w-[18rem] rounded-lg text-surface shadow-secondary-1 dark:bg-surface-dark text-white">
                <div className="p-6 text-center bg-slate-900 rounded-lg">
                  <h1 className="text-bold text-2xl text-center underline">
                    Choose your plan
                  </h1>

                  <p className="text-base text-white text-center">
                    Choose the right diet plan you prefer and find your right
                    fit.
                  </p>
                </div>
              </div>
              <div className="block max-w-[18rem] rounded-lg text-surface shadow-secondary-1 dark:bg-surface-dark text-white">
                <div className="p-6 text-center bg-slate-900 rounded-lg">
                  <h1 className="text-bold text-white text-2xl text-center underline">
                    Order as you prefer
                  </h1>

                  <p className="text-base text-white text-center">
                    Select the duration of your plan as you like.
                  </p>
                </div>
              </div>
              <div className="block max-w-[18rem] rounded-lg text-surface shadow-secondary-1 dark:bg-surface-dark text-white">
                <div className="p-6 text-center bg-slate-900 rounded-lg">
                  <h1 className="text-bold underline text-2xl text-center">
                    Get fit with fitnesspergram
                  </h1>

                  <p className="text-base text-white">
                    Join our fitness journey and achieve your goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .wrapper {
          font-family: "Quicksand", sans-serif;
          line-height: 1.5;
          word-spacing: 4px;
          letter-spacing: 1px;
        }

        .fixed-bg {
          background-attachment: fixed;
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center center;
          height: 100%;
          width: 100%;
          color: white;
          text-align: center;
          display: table;
        }

        .fixed-bg h1 {
          display: table-cell;
          vertical-align: middle;
        }

        .bg-1 {
          background-image: url("https://iili.io/JgEXpIV.png");
        }
        @media (max-width: 768px) {
          .wrapper {
            height: 120vh;
          }
        }
        @media (min-width: 769px) {
          .wrapper {
            height: 40vh;
          }
        }
        @media (min-width: 768px) and (max-width: 1024px) {
          .wrapper {
            height: 60vh; /* Adjust the height as needed for medium screens */
          }
        }
      `}</style>
    </>
  );
};

export default How;
