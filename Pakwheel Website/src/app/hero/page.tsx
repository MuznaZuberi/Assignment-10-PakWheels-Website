import { FaSearch } from "react-icons/fa";

export default function Hero() {
	return (

   <div>
   	  <div className = "bg-blue-950 py-40">
   	  <h1 className = "text-center font-bold font-serif lg:text-4xl xl:text-4xl text-2xl text-white">Find Used Cars In Pakistan</h1>
   	  <p  className = "text-center font-bold font-serif text-xs lg:text-sm xl:text-sm text-white">With thousands of cars, we have just the right one for you</p>

      <div className="container px-3 py-10 mx-auto">
      <div className="flex lg:w-2/3  sm:flex-row flex-col mx-auto items-end">
      <div className="relative flex-grow w-full">
      <input
          type="text"
          id="full-name"
          name="full-name"
          placeholder = "Car Maker or Model"
          className="w-full bg-opacity-50 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-3 px-3 leading-8 transition-colors duration-200 ease-in-out"
      />
      </div>
      <div className="relative flex-grow w-full">
      <input
          type="email"
          id="email"
          name="email"
          placeholder = "All Cities"
          className="w-full  bg-opacity-50 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-3 px-3 leading-8 transition-colors duration-200 ease-in-out"
      />
      </div>
      <div className="relative flex-grow w-full">
      <input
          type="email"
          id="email"
          name="email"
          placeholder = "Price Range"
          className="w-full  bg-opacity-50  focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-3 px-3 leading-8 transition-colors duration-200 ease-in-out"
      />
      </div>
      <button className="text-white border-0 py-4 px-8 bg-green-600 rounded text-2xl md:flex lg:flex hidden">
      <FaSearch />
      </button>
      </div>
      </div>
               


      <div className="flex justify-center">
      <button className="inline-flex text-white bg-blue-950 border border-1 py-2 px-8 focus:outline-none  rounded text-sm">
      <a className="text-white inline-flex font-serif items-center">
                                            Advanced Filter
      <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
      >
      <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
      </a>
      </button>
      </div>
   	  </div>
   </div>
 );
}