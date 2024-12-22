import { FaMobileScreenButton } from "react-icons/fa6";

export default function TopHeader() {
	return (

   <div>
          <div className="bg-black mx-auto flex flex-wrap px-4 py-2 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-red-600 mb-4 md:mb-0">
          <FaMobileScreenButton />
          <span className="ml-3 text-sm font-serif font-bold text-white cursor-pointer">Download App via SMS</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          </nav>
          <button className="inline-flex text-xs items-center border-0 py-1 px-3 focus:outline-none font-serif font-bold text-white mt-4 md:mt-0">
                                                             Sing Up
          </button>
          <button className="inline-flex text-xs items-center border-0 py-1 px-3 focus:outline-none font-serif font-bold text-white mt-4 md:mt-0">
                                                             Sing In
          </button>
          </div>
          <div className = "border border-gray-700"></div>
   </div>
	);
}