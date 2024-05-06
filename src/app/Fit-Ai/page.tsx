"use client";

import { Plus, Send, SendIcon } from "lucide-react";
import React from "react";

export default function AI() {
  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <div className="bg-slate-800 h-28 w-54 lg:h-48 lg:w-96 text-center flex items-center justify-center rounded-lg">
          - Post what you eat in a day - <br />- To keep track of your calories
          -
        </div>
      </div>
      <div className="">
        <div className="mx-3 lg:mx-10">
          <form>
            <label className="sr-only">Your message</label>
            <div className="flex items-center px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-700">
              <button
                type="button"
                className="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
              >
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 18"
                >
                  <path
                    fill="currentColor"
                    d="M13 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM7.565 7.423 4.5 14h11.518l-2.516-3.71L11 13 7.565 7.423Z"
                  />
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M18 1H2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
                  />
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM7.565 7.423 4.5 14h11.518l-2.516-3.71L11 13 7.565 7.423Z"
                  />
                </svg>
                <span className="sr-only">Upload image</span>
              </button>
              <button
                type="button"
                className="p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
              >
                <Plus />
                <span className="sr-only">Add emoji</span>
              </button>
              <textarea
                id="chat"
                rows={1}
                className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Your message..."
              ></textarea>
              <button
                type="submit"
                className="inline-flex justify-center p-2 text-yellow-500 rounded-full cursor-pointer hover:bg-yellow-500 dark:text-yellow-500 dark:hover:bg-gray-600"
              >
                <SendIcon />
                <span className="sr-only">Send message</span>
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="mt-20"></div>
    </>
  );
}
