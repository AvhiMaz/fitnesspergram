import Image from "next/image";
import React from "react";

const Card: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-4">
        <div className="card relative ml-12 mr-10 h-72 w-72 bg-gradient-to-br from-yellow-400 to-orange-600 rounded-lg mt-20 flex items-center justify-center overflow-hidden transition-all duration-600 ease-in-out hover:rotate-5 hover:scale-110 hover:shadow-lg">
          <svg
            version="1.0"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            width="110px"
            height="110px"
            viewBox="0 0 64 64"
            enable-background="new 0 0 64 64"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0" />

            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            />

            <g id="SVGRepo_iconCarrier">
              {" "}
              <g>
                {" "}
                <path
                  fill="#000000"
                  d="M39.294,31.296l-7.976,7.976c-0.391,0.391-0.441,1.074-0.051,1.465c0.389,0.391,1.09,0.324,1.48-0.066 l7.96-7.96c0.391-0.391,0.391-1.025,0-1.414C40.317,30.905,39.685,30.905,39.294,31.296z"
                />{" "}
                <path
                  fill="#000000"
                  d="M47.293,39.295l-7.976,7.976c-0.391,0.391-0.441,1.074-0.051,1.465c0.389,0.391,1.09,0.324,1.48-0.066 l7.96-7.96c0.391-0.391,0.391-1.025,0-1.414C48.316,38.904,47.684,38.904,47.293,39.295z"
                />{" "}
                <path
                  fill="#000000"
                  d="M31.29,23.292l-7.976,7.976c-0.391,0.391-0.441,1.074-0.051,1.465c0.389,0.391,1.09,0.324,1.48-0.066 l7.96-7.96c0.391-0.391,0.391-1.025,0-1.414C32.313,22.901,31.681,22.901,31.29,23.292z"
                />{" "}
                <path
                  fill="#000000"
                  d="M62.828,37.172L46.702,21.046l-1.767-1.767C44.974,18.857,45,18.433,45,18.001c0-7.731-6.268-14-14-14 c-0.432,0-1.312,0.069-1.328,0.071c0.001,0-0.006-0.006-0.005-0.005c-4.067,0.384-7.616,2.515-9.916,5.626 c-0.005,0.006-0.009,0.012-0.014,0.019c-0.425,0.577-0.808,1.187-1.142,1.826c-0.033,0.062-0.069,0.124-0.102,0.187 c-0.027,0.054-0.051,0.109-0.077,0.164c-0.116,0.234-0.232,0.469-0.334,0.711c-0.688,1.641-1.069,3.439-1.079,5.328 C17.004,17.951,17,17.976,17,18l0,0v0.001v0.009c0.001,0.614,0.047,1.217,0.124,1.811c0.002-0.001,0.005-0.002,0.007-0.002 c0.2-0.06,0.393-0.136,0.578-0.225c0.063-0.029,0.121-0.068,0.184-0.102c0.111-0.061,0.223-0.12,0.328-0.191 c0.093-0.062,0.179-0.133,0.266-0.202c0.061-0.048,0.123-0.095,0.181-0.147c0.11-0.098,0.211-0.204,0.31-0.313 c0.017-0.019,0.036-0.034,0.053-0.054v-0.005C19.629,17.885,20,16.991,20,16c0-0.619-0.152-1.199-0.404-1.723 c0.249-0.762,0.572-1.488,0.961-2.174C21.455,13.152,22,14.512,22,16c0,3.313-2.687,6-6,6s-6-2.687-6-6 c0-2.916,2.081-5.344,4.838-5.885c-0.4,0.818-0.758,1.662-1.032,2.545C12.72,13.375,12,14.603,12,16 c0,1.018,0.402,1.924,1.031,2.627c0.001,0.012,0.002,0.022,0.002,0.033c0.249,0.277,0.537,0.515,0.853,0.715 c0.017,0.011,0.032,0.024,0.05,0.035l0,0c0.33,0.202,0.692,0.354,1.077,0.452c0.005,0.001,0.01,0.003,0.015,0.005 c0.003,0.001,0.008,0.002,0.011,0.004c0.028,0.006,0.055,0.02,0.084,0.025l0,0h0.001c0,0-0.067-0.687-0.103-1.305 C15.012,18.396,15,18.201,15,18.002V18c0-0.059,0.008-0.115,0.009-0.174c0.022-2.054,0.436-4.01,1.162-5.809 c0.207-0.514,0.446-1.01,0.704-1.495c0.059-0.11,0.113-0.224,0.175-0.333c0.052-0.093,0.11-0.182,0.164-0.273 c0.171-0.291,0.35-0.574,0.537-0.853c0.066-0.099,0.133-0.196,0.2-0.293c0.246-0.347,0.502-0.688,0.773-1.013 c0.007-0.008,0.014-0.016,0.021-0.023c0.28-0.334,0.576-0.654,0.883-0.964c0.043-0.044,0.087-0.087,0.13-0.13 c1.673-1.654,3.707-2.942,5.977-3.734c0.72-0.252,1.458-0.461,2.221-0.607c0.986-0.19,2.003-0.298,3.045-0.298 c8.837,0,16,7.163,16,16c0,1.042-0.107,2.059-0.298,3.045l1.656,1.655C48.764,21.201,49,19.629,49,18c0-9.94-8.059-18-18-18 c-1.663,0-3.266,0.244-4.793,0.666C25.557,0.236,24.791,0,24,0H4C1.791,0,0,1.791,0,4v20c0,1.061,0.422,2.078,1.172,2.828l36,36 C37.952,63.609,38.977,64,40,64s2.048-0.391,2.828-1.172l20-20C64.391,41.267,64.391,38.733,62.828,37.172z M42.965,17.309 L31.692,6.036C37.765,6.383,42.617,11.235,42.965,17.309z M21.85,34.146c-1.17-1.17-1.127-3.117,0.042-4.286l7.984-7.984 c1.17-1.17,3.073-1.169,4.243,0.001c1.169,1.169,1.169,3.073-0.001,4.243h0.002l-7.992,7.99 C24.958,35.28,23.018,35.316,21.85,34.146z M29.854,42.15c-1.17-1.17-1.127-3.117,0.042-4.286l7.984-7.984 c1.17-1.17,3.073-1.169,4.243,0.001c1.169,1.169,1.169,3.073-0.001,4.243h0.002l-7.992,7.99 C32.962,43.284,31.021,43.32,29.854,42.15z M50.123,42.123l-7.992,7.99c-1.17,1.17-3.11,1.206-4.278,0.036 c-1.17-1.17-1.127-3.117,0.042-4.286l7.984-7.984c1.17-1.17,3.073-1.169,4.243,0.001c1.169,1.169,1.169,3.073-0.001,4.243H50.123z"
                />{" "}
              </g>{" "}
            </g>
          </svg>
          <div className="card__content absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-45 w-full h-full bg-slate-900 opacity-0 transition-all duration-600 ease-in-out hover:rotate-0 hover:opacity-100">
            <p className="card__title mt-10 text-center text-3xl font-bold text-white underline">
              Affordability
            </p>
            <p className="card__description text-sm text-center mt-6 mx-3 text-white">
            Fitnesspergram offers meticulously designed and affordable services tailored for the young generation and bachelors. As a fitness food delivery and meal prep company, we ensure convenient and nutritious meals to support your health goals effortlessly.
            </p>
          </div>
        </div>
        <div className="card relative ml-12 mr-10 h-72 w-72 bg-gradient-to-br from-yellow-400 to-orange-600 rounded-lg mt-20 flex items-center justify-center overflow-hidden transition-all duration-600 ease-in-out hover:rotate-5 hover:scale-110 hover:shadow-lg">
          <svg
            width="130px"
            height="130px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0" />

            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            />

            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.43157 15.6193L8.3807 20.5684C9.28489 21.4726 9.73699 21.9247 10.2891 21.9892C10.4123 22.0036 10.5368 22.0036 10.6601 21.9892C11.2121 21.9247 11.6642 21.4726 12.5684 20.5684C13.4726 19.6642 13.9247 19.2122 13.9892 18.6601C14.0036 18.5368 14.0036 18.4123 13.9892 18.2891C13.9247 17.737 13.4726 17.2849 12.5684 16.3807L11.4565 15.2688L8.35253 12.1648L7.6193 11.4316C6.71511 10.5274 6.26301 10.0753 5.71092 10.0108C5.58768 9.9964 5.46318 9.9964 5.33994 10.0108C4.78785 10.0753 4.33575 10.5274 3.43156 11.4316C2.52737 12.3358 2.07528 12.7879 2.0108 13.3399C1.9964 13.4632 1.9964 13.5877 2.0108 13.7109C2.07528 14.263 2.52737 14.7151 3.43157 15.6193ZM12.1648 8.35253L15.2688 11.4565L16.3807 12.5684C17.2849 13.4726 17.737 13.9247 18.2891 13.9892C18.4123 14.0036 18.5368 14.0036 18.6601 13.9892C19.2122 13.9247 19.6642 13.4726 20.5684 12.5684C21.4726 11.6642 21.9247 11.2121 21.9892 10.6601C22.0036 10.5368 22.0036 10.4123 21.9892 10.2891C21.9247 9.73699 21.4726 9.28489 20.5684 8.3807L15.6193 3.43156C14.7151 2.52737 14.263 2.07528 13.7109 2.0108C13.5877 1.9964 13.4632 1.9964 13.3399 2.0108C12.7879 2.07528 12.3358 2.52737 11.4316 3.43156C10.5274 4.33575 10.0753 4.78785 10.0108 5.33994C9.9964 5.46318 9.9964 5.58768 10.0108 5.71092C10.0753 6.26301 10.5274 6.71511 11.4316 7.6193L12.1648 8.35253Z"
                fill="#000000"
              />{" "}
              <path
                opacity="0.5"
                d="M11.4566 15.2688L15.2688 11.4565L12.1648 8.35254L8.35254 12.1648L11.4566 15.2688Z"
                fill="#000000"
              />{" "}
              <path
                opacity="0.5"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17.489 1.96772C17.7819 1.67482 18.2567 1.67482 18.5496 1.96772L21.6536 5.07173C21.9465 5.36462 21.9465 5.83949 21.6536 6.13239C21.3607 6.42528 20.8859 6.42528 20.593 6.13239L17.489 3.02838C17.1961 2.73548 17.1961 2.26061 17.489 1.96772ZM1.96772 17.4876C2.26061 17.1947 2.73548 17.1947 3.02838 17.4876L6.13239 20.5916C6.42528 20.8845 6.42528 21.3594 6.13239 21.6523C5.83949 21.9452 5.36462 21.9452 5.07173 21.6523L1.96772 18.5483C1.67482 18.2554 1.67482 17.7805 1.96772 17.4876Z"
                fill="#000000"
              />{" "}
            </g>
          </svg>
          <div className="card__content absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-45 w-full h-full bg-slate-900 opacity-0 transition-all duration-600 ease-in-out hover:rotate-0 hover:opacity-100">
            <p className="card__title underline mt-10 text-center text-3xl font-bold text-white">
              High Protein
            </p>
            <p className="card__description text-sm text-center mt-6 mx-3 text-white">
            At Fitnesspergram, we provide a diverse range of high-protein meal prep options. Whether you're looking to build muscle or maintain a balanced diet, our menu offers nutritious and delicious meals to support your fitness journey effectively.
            </p>
          </div>
        </div>
        <div className="card relative ml-12 mr-10 h-72 w-72 bg-gradient-to-br from-yellow-400 to-orange-600 rounded-lg mt-20 flex items-center justify-center overflow-hidden transition-all duration-600 ease-in-out hover:rotate-5 hover:scale-110 hover:shadow-lg">
          <svg
            width="130px"
            height="130px"
            viewBox="0 0 512 512"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>ai</title>
            <g
              id="Page-1"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
            >
              <g
                id="icon"
                fill="#000000"
                transform="translate(64.000000, 64.000000)"
              >
                <path
                  d="M320,64 L320,320 L64,320 L64,64 L320,64 Z M171.749388,128 L146.817842,128 L99.4840387,256 L121.976629,256 L130.913039,230.977 L187.575039,230.977 L196.319607,256 L220.167172,256 L171.749388,128 Z M260.093778,128 L237.691519,128 L237.691519,256 L260.093778,256 L260.093778,128 Z M159.094727,149.47526 L181.409039,213.333 L137.135039,213.333 L159.094727,149.47526 Z M341.333333,256 L384,256 L384,298.666667 L341.333333,298.666667 L341.333333,256 Z M85.3333333,341.333333 L128,341.333333 L128,384 L85.3333333,384 L85.3333333,341.333333 Z M170.666667,341.333333 L213.333333,341.333333 L213.333333,384 L170.666667,384 L170.666667,341.333333 Z M85.3333333,0 L128,0 L128,42.6666667 L85.3333333,42.6666667 L85.3333333,0 Z M256,341.333333 L298.666667,341.333333 L298.666667,384 L256,384 L256,341.333333 Z M170.666667,0 L213.333333,0 L213.333333,42.6666667 L170.666667,42.6666667 L170.666667,0 Z M256,0 L298.666667,0 L298.666667,42.6666667 L256,42.6666667 L256,0 Z M341.333333,170.666667 L384,170.666667 L384,213.333333 L341.333333,213.333333 L341.333333,170.666667 Z M0,256 L42.6666667,256 L42.6666667,298.666667 L0,298.666667 L0,256 Z M341.333333,85.3333333 L384,85.3333333 L384,128 L341.333333,128 L341.333333,85.3333333 Z M0,170.666667 L42.6666667,170.666667 L42.6666667,213.333333 L0,213.333333 L0,170.666667 Z M0,85.3333333 L42.6666667,85.3333333 L42.6666667,128 L0,128 L0,85.3333333 Z"
                  id="Combined-Shape"
                ></path>
              </g>
            </g>
          </svg>
          <div className="card__content absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-45 w-full h-full bg-slate-900 opacity-0 transition-all duration-600 ease-in-out hover:rotate-0 hover:opacity-100">
          <p className="card__title underline mt-10 text-center text-3xl font-bold text-white">
              Fit AI
            </p>
            <p className="card__description text-sm text-center mt-6 mx-3 text-white">
            At Fitnesspergram, our innovative FIT AI tool simplifies tracking your nutrition intake. Just snap a photo or type in your meals, and FIT AI will accurately register the macros and calories consumed, making it effortless to monitor your dietary habits and stay on track with your fitness goals.
            </p>
          </div>
        </div>
        <div className="card relative ml-12 mr-10 h-72 w-72 bg-gradient-to-br from-yellow-400 to-orange-600 rounded-lg mt-20 flex items-center justify-center overflow-hidden transition-all duration-600 ease-in-out hover:rotate-5 hover:scale-110 hover:shadow-lg">
          <svg
            version="1.1"
            id="_x32_"
            xmlns="http://www.w3.org/2000/svg"
            width="130px"
            height="130px"
            viewBox="0 0 512 512"
          >
            <g>
              <path
                className="st0"
                d="M214.2,319.991L214.2,319.991L214.2,319.991C197.34,301.585,232.293,180.319,27.075,97.569
		c-33.75,6.125-71.688,176.672,127.719,228.844c59.609,29.797,50.219,79.469,50.219,107.078h38.344
		c0,0-15.688-87.578,54.375-119.672c47.672-21.828,179.328-28.828,214.265-225.547C445.387,49.757,208.825,124.835,214.2,319.991z
		 M165.84,286.804c-4.063,2.813-9.641,1.797-12.453-2.266c-19.516-28.266-73.484-93.484-97.344-117.281
		c-3.5-3.484-3.5-9.156,0-12.641c3.484-3.5,9.156-3.5,12.641,0c25.344,25.391,78.688,89.859,99.422,119.734
		C170.918,278.413,169.903,283.991,165.84,286.804z M415.965,141.663c-65.25,41.234-118.578,109.844-142.625,147.109
		c-2.672,4.141-8.219,5.328-12.359,2.656c-4.141-2.688-5.328-8.219-2.641-12.375c25.141-38.766,79.141-108.766,148.047-152.5
		c4.172-2.656,9.688-1.406,12.344,2.766C421.372,133.491,420.137,139.007,415.965,141.663z"
              />
            </g>
          </svg>
          <div className="card__content absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-45 w-full h-full bg-slate-900 opacity-0 transition-all duration-600 ease-in-out hover:rotate-0 hover:opacity-100">
          <p className="card__title underline mt-10 text-center text-3xl font-bold text-white">
              Fresh & Healthy
            </p>
            <p className="card__description text-sm text-center mt-6 mx-3 text-white">
            Fitnesspergram stands out as the healthier option among all meal services. Our carefully crafted meals prioritize nutrition without compromising on taste, ensuring you receive balanced, wholesome, and satisfying options that promote overall wellness and vitality.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
