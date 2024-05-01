"use client"

import Image from 'next/image';

const HomePage = () => {
  return (
    <div className="h-screen mt-10 flex flex-col">
      {/* Fixed Background 1 */}
      <div className="flex-1 relative bg-cover bg-center cd-fixed-bg cd-bg-1">
        <Image
          src="https://ideogram.ai/api/images/direct/nWoS1mvzT5WCXvQqizmFFw.png"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 flex justify-center items-center">
          <h1 className="text-white text-4xl md:text-6xl max-w-2xl text-center">
            Alternating fixed/scrolling backgrounds Pure CSS
          </h1>
        </div>
      </div>

      {/* Scrolling Background 1 */}
      <div className="flex-1 bg-gray-800 text-gray-400 cd-scrolling-bg cd-color-2">
        <div className="cd-container py-16 px-4 md:px-0 mx-auto max-w-screen-md">
          <p className="mb-4">
            For this pen I included only the vanilla CSS and only that necessary to demonstrate the effect but on the
            author's site at{' '}
            <a href="https://codyhouse.co/gem/alternate-fixed-scroll-backgrounds/" className="text-purple-300">
              codyhouse.co
            </a>
            , the creators are using Sass which I think is nicer. But for the sake of simplicity for this example I
            took the easy way out.
          </p>
          <p className="mb-4">
            As anyone who has tried knows, implementing sample code such as this into a site with a different
            architecture can be a little tricky but I did manage to weave it into a pre-existing project with a little
            work. I love the effect!
          </p>
        </div>
      </div>

      {/* Add more sections with fixed backgrounds and scrolling content as needed */}
    </div>
  );
};

export default HomePage;
