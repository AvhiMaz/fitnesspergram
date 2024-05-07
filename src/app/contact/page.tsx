"use client";

import React from "react";
import { Spotlight } from "@/app/components/ui/Spotlight";
import { CardHoverEffectDemo } from "@/app/components/hovercard";

export default function SpotlightPreview() {
  return (
    <>
      <div className="min-h-screen w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        <div className=" p-4 max-w-7xl text-center mx-auto relative z-10  w-full pt-20 md:pt-0">
          <p className="text-yellow-400 text-bold lg:mt-20 text-2xl lg:text-5xl">
            #Connected
          </p>
          <CardHoverEffectDemo />
        </div>
      </div>
      <div>
        <section className="bg-black">
          <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white">
              Contact Us
            </h2>
            <p className="mb-8 lg:mb-16 font-light text-center text-yellow-400  sm:text-xl">
              Want to contact us? let us know more about you, share your contact details to stay in touch with fitnesspergram.
            </p>
            <form action="#" className="space-y-8">
              <div>
                <label className="block mb-2 text-sm font-medium text-yellow-400 ">
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Enter your Email ID"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-yellow-400">
                  Phone no.
                </label>
                <input
                  type="text"
                  id="subject"
                  className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Enter your Phone no."
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block mb-2 text-sm font-medium text-yellow-400">
                  Your message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Leave a message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="py-3 px-5 text-sm font-medium text-center text-black rounded-lg bg-primary-700 bg-yellow-400"
              >
                Send
              </button>
            </form>
          </div>
        </section>
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
