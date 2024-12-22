// ============================
//   IMAGE IMPORTS SECTION
// ============================
// Import Image component for optimized image rendering
import Image from "next/image";
import FeaturedNewCar_01 from "/images/featurednewcar_01.png";
import FeaturedNewCar_02 from "/images/featurednewcar_02.png";
import FeaturedNewCar_03 from "/images/featurednewcar_03.png";
import FeaturedNewCar_04 from "/images/featurednewcar_04.png";
import Brand_01 from "/images/b1.png";
import Brand_02 from "/images/b2.png";
import Brand_03 from "/images/b3.png";
import Brand_04 from "/images/b4.png";
import Brand_05 from "/images/b5.png";
import Brand_06 from "/images/b6.png";
import Brand_07 from "/images/b7.png";
import Brand_08 from "/images/b8.png";
import Brand_09 from "/images/b9.png";
import Brand_10 from "/images/b10.png";
import Brand_11 from "/images/b11.png";
import Brand_12 from "/images/b12.png";
import Brand_13 from "/images/b13.png";
import Brand_14 from "/images/b14.png";
import Brand_15 from "/images/b15.png";
import Brand_16 from "/images/b16.png";
import Brand_17 from "/images/b17.png";
import Brand_18 from "/images/b18.png";




export default function FeaturedNewCar() {
	return (
   <div>
   	      <div className = "bg-gray-100 ">
          <div className="container px-5 py-10 mx-auto">
          <div className=" flex flex-col">
          <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
          <h1 className="sm:w-2/5 text-black font-serif font-bold text-3xl mb-2 sm:mb-0">
                                  Featured New Cars
          </h1>
          <p className="sm:w-3/5 leading-relaxed font-serif text-blue-400 pl-0 lg:pl-80 xl:pl-80">
                                  View All New Cars
          </p>
          </div>
          </div>
          <div className="flex flex-wrap ">
          <div className="mx-auto p-4 md:w-1/4 lg:w-1/4 xl:w-1/4 sm:w-1/1  sm:mb-0 mb-6">
          <div className="rounded-lg bg-white  overflow-hidden ">
          <Image
            alt="car_img"
            className="w-60 "
            src={FeaturedNewCar_01}
          />
          <h2 className="text-center px-3 text-md font-serif font-bold text-blue-900">
                                  Toyota Corolla
          </h2>
          <h3 className="text-center px-3 font-serif font-bold text-green-700 ">
                                  PKR 59.7 - 79.5 lacs
          </h3>
          <div className="flex justify-center my-3">
          <svg
                className="w-4 h-4 text-yellow-300 me-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
          >
         <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
         </svg>
         <svg
               className="w-4 h-4 text-yellow-300 me-1"
               aria-hidden="true"
               xmlns="http://www.w3.org/2000/svg"
               fill="currentColor"
               viewBox="0 0 22 20"
          >
         <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
         </svg>
         <svg
               className="w-4 h-4 text-yellow-300 me-1"
               aria-hidden="true"
               xmlns="http://www.w3.org/2000/svg"
               fill="currentColor"
               viewBox="0 0 22 20"
          >
         <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
         </svg>
         <svg
               className="w-4 h-4 text-yellow-300 me-1"
               aria-hidden="true"
               xmlns="http://www.w3.org/2000/svg"
               fill="currentColor"
               viewBox="0 0 22 20"
          >
         <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
         </svg>
         <svg
               className="w-4 h-4 text-gray-300 me-1 dark:text-gray-500"
               aria-hidden="true"
               xmlns="http://www.w3.org/2000/svg"
               fill="currentColor"
               viewBox="0 0 22 20"
         >
         <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
         </svg>
         <p className="ms-1 text-sm font-medium text-gray-400">
                                                    627 Reviews
         </p>
         </div>
         </div>
       
         </div>
         <div className="mx-auto p-4 md:w-1/4 lg:w-1/4 xl:w-1/4 sm:w-1/1  sm:mb-0 mb-6">
         <div className="rounded-lg bg-white  overflow-hidden ">
         <Image
            alt="car_img"
            className="w-60 "
            src={FeaturedNewCar_02}
         />
         <h2 className="text-center px-3 text-md font-serif font-bold text-blue-900">
                                                     Suzuki Alto
         </h2>
         <h3 className="text-center px-3 font-serif font-bold text-green-700 ">
                                               PKR 23.3 - 30.5 lacs
         </h3>
         <div className="flex justify-center my-3">
         <svg
                className="w-4 h-4 text-yellow-300 me-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
         >
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
        <svg
                className="w-4 h-4 text-yellow-300 me-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
         >
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
        <svg
                className="w-4 h-4 text-yellow-300 me-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
        >
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
        <svg
                className="w-4 h-4 text-yellow-300 me-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
        >
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
        <svg
                className="w-4 h-4 text-gray-300 me-1 dark:text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
        >
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
        <p className="ms-1 text-sm font-medium text-gray-400">
                                                      202 Reviews
        </p>
        </div>
        </div>
       
        </div>
        <div className="mx-auto p-4 md:w-1/4 lg:w-1/4 xl:w-1/4 sm:w-1/1  sm:mb-0 mb-6">
        <div className="rounded-lg bg-white  overflow-hidden">
        <Image
            alt="car_img"
            className="w-60"
            src={FeaturedNewCar_03}
        />
        <h2 className="text-center px-3 text-md font-serif font-bold text-blue-900 mt-5">
                                                Honda City
        </h2>
        <h3 className="text-center px-3 font-serif font-bold text-green-700 mt-2">
                                      PKR 46.5 - 58.5 lacs
        </h3>
        <div className="flex justify-center my-4">
        <svg
               className="w-4 h-4 text-yellow-300 me-1"
               aria-hidden="true"
               xmlns="http://www.w3.org/2000/svg"
               fill="currentColor"
               viewBox="0 0 22 20"
        >
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
        <svg
               className="w-4 h-4 text-yellow-300 me-1"
               aria-hidden="true"
               xmlns="http://www.w3.org/2000/svg"
               fill="currentColor"
               viewBox="0 0 22 20"
        >
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
        <svg
               className="w-4 h-4 text-yellow-300 me-1"
               aria-hidden="true"
               xmlns="http://www.w3.org/2000/svg"
               fill="currentColor"
               viewBox="0 0 22 20"
        >
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
        <svg
               className="w-4 h-4 text-yellow-300 me-1"
               aria-hidden="true"
               xmlns="http://www.w3.org/2000/svg"
               fill="currentColor"
               viewBox="0 0 22 20"
        >
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
        <svg
               className="w-4 h-4 text-gray-300 me-1 dark:text-gray-500"
               aria-hidden="true"
               xmlns="http://www.w3.org/2000/svg"
               fill="currentColor"
               viewBox="0 0 22 20"
        >
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
        <p className="ms-1 text-sm font-medium text-gray-400">
                                                      457 Reviews
        </p>
        </div>
        </div>
      
        </div>
        <div className="mx-auto p-4 md:w-1/4 lg:w-1/4 xl:w-1/4 sm:w-1/1  sm:mb-0 mb-6">
        <div className="rounded-lg bg-white overflow-hidden">
        <Image
            alt="car_img"
            className="w-60"
            src={FeaturedNewCar_04}
        />
        <h2 className="text-center px-3 text-md font-serif font-bold text-blue-900 mt-5">
                                    Honda Civic
        </h2>
        <h3 className="text-center px-3 font-serif font-bold text-green-700 mt-2">
                                   PKR 86.6 - 99.0 lacs
        </h3>
        <div className="flex justify-center my-3">
        <svg
              className="w-4 h-4 text-yellow-300 me-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
        >
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
        <svg
              className="w-4 h-4 text-yellow-300 me-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
        >
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
        <svg
              className="w-4 h-4 text-yellow-300 me-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
        >
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
        <svg
              className="w-4 h-4 text-yellow-300 me-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
        >
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
        <svg
              className="w-4 h-4 text-gray-300 me-1 dark:text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
        >
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
        <p className="ms-1 text-sm font-medium text-gray-400">
                                                 363 Reviews
        </p>
        </div>
        </div>
        </div>
        </div>
        </div>

        <div className="px-6 flex flex-wrap sm:flex-row flex-col py-6 mb-12 mt-6">
        <h1 className="sm:w-2/5 text-black font-serif font-bold text-3xl mb-2 sm:mb-0">
                                                  New Cars by Make
        </h1>
        </div>
        <div className="container px-5 mx-auto">
        <div className="flex flex-wrap -m-4 mx-auto">
        <div className="lg:w-1/6 md:w-1/3 p-4 w-full">
        <a className="block relative w-40 h-40 mx-auto  rounded-full bg-white overflow-hidden">
        <Image
            alt="cars-logo"
            className = "w-40 h-40"
            src={Brand_01}
        />
        </a>
        <div className="mt-4">
        <h2 className="text-center text-black font-bold font-serif text-lg ">
                                       Suzuki
        </h2>
        </div>
        </div>
        <div className="lg:w-1/6 md:w-1/3 p-4 w-full">
        <a className="block relative w-40 h-40 mx-auto  rounded-full bg-white overflow-hidden">
        <Image
            alt="cars-logo"
            className = "w-40 h-40"
            src={Brand_02}
        />
        </a>
        <div className="mt-4">
        <h2 className="text-center text-black font-bold font-serif text-lg ">
                                              Toyota
        </h2>
        </div>
        </div>
        <div className="lg:w-1/6 md:w-1/3 p-4 w-full">
        <a className="block relative w-40 h-40 mx-auto  rounded-full bg-white overflow-hidden">
        <Image
            alt="cars-logo"
            className = "w-40 h-40"
            src={Brand_03}
        />
        </a>
        <div className="mt-4">
        <h2 className="text-center text-black font-bold font-serif text-lg ">
                                                  Honda
        </h2>
        </div>
        </div>
        <div className="lg:w-1/6 md:w-1/3 p-4 w-full">
        <a className="block relative w-40 h-40 mx-auto  rounded-full bg-white overflow-hidden">
        <Image
            alt="cars-logo"
            className = "w-40 h-40"
            src={Brand_04}
        />
        </a>
        <div className="mt-4">
        <h2 className="text-center text-black font-bold font-serif text-lg ">
                                               KIA
        </h2>
        </div>
        </div>
        <div className="lg:w-1/6 md:w-1/3 p-4 w-full">
        <a className="block relative w-40 h-40 mx-auto  rounded-full bg-white overflow-hidden">
        <Image
            alt="cars-logo"
            className = "w-40 h-40"
            src={Brand_05}
        />
        </a>
        <div className="mt-4">
        <h2 className="text-center text-black font-bold font-serif text-lg ">
                                            Hyundai
        </h2>
        </div>
        </div>
        <div className="lg:w-1/6 md:w-1/3 p-4 w-full">
        <a className="block relative w-40 h-40 mx-auto  rounded-full bg-white overflow-hidden">
        <Image
            alt="cars-logo"
            className = "w-40 h-40"
            src={Brand_06}
        />
        </a>
        <div className="mt-4">
        <h2 className="text-center text-black font-bold font-serif text-lg ">
                                               MG
        </h2>
        </div>
        </div>

        <div className="lg:w-1/6 md:w-1/3 p-4 w-full mt-6">
        <a className="block relative w-40 h-40 mx-auto  rounded-full bg-white overflow-hidden">
        <Image
            alt="cars-logo"
            className = "w-40 h-40"
            src={Brand_07}
        />
        </a>
        <div className="mt-4">
        <h2 className="text-center text-black font-bold font-serif text-lg ">
                                             Changan
        </h2>
        </div>
        </div>
        <div className="lg:w-1/6 md:w-1/3 p-4 w-full mt-6">
        <a className="block relative w-40 h-40 mx-auto  rounded-full bg-white overflow-hidden">
        <Image
            alt="cars-logo"
            className = "w-40 h-40"
            src={Brand_08}
        />
        </a>
        <div className="mt-4">
        <h2 className="text-center text-black font-bold font-serif text-lg ">
                                                   BYD
        </h2>
        </div>
        </div>
        <div className="lg:w-1/6 md:w-1/3 p-4 w-full mt-6">
        <a className="block relative w-40 h-40 mx-auto  rounded-full bg-white overflow-hidden">
        <Image
            alt="cars-logo"
            className = "w-40 h-40"
            src={Brand_09}
        />
        </a>
        <div className="mt-4">
        <h2 className="text-center text-black font-bold font-serif text-lg ">
                                                      BMW
        </h2>
        </div>
        </div>
        <div className="lg:w-1/6 md:w-1/3 p-4 w-full mt-6">
        <a className="block relative w-40 h-40 mx-auto  rounded-full bg-white overflow-hidden">
        <Image
            alt="cars-logo"
            className = "w-40 h-40"
            src={Brand_10}
        />
        </a>
        <div className="mt-4">
        <h2 className="text-center text-black font-bold font-serif text-lg ">
                                                Audi
        </h2>
        </div>
        </div>
        <div className="lg:w-1/6 md:w-1/3 p-4 w-full mt-6">
        <a className="block relative w-40 h-40 mx-auto  rounded-full bg-white overflow-hidden">
        <Image
            alt="cars-logo"
            className = "w-40 h-40"
            src={Brand_11}
        />
        </a>
        <div className="mt-4">
        <h2 className="text-center text-black font-bold font-serif text-lg ">
                                                Proton
        </h2>
        </div>
        </div>
        <div className="lg:w-1/6 md:w-1/3 p-4 w-full mt-6">
        <a className="block relative w-40 h-40 mx-auto  rounded-full bg-white overflow-hidden">
        <Image
            alt="cars-logo"
            className = "w-40 h-40"
            src={Brand_12}
        />
        </a>
        <div className="mt-4">
        <h2 className="text-center text-black font-bold font-serif text-lg ">
                                                United
        </h2>
        </div>
        </div>

        <div className="lg:w-1/6 md:w-1/3 p-4 w-full mt-6">
        <a className="block relative w-40 h-40 mx-auto  rounded-full bg-white overflow-hidden">
        <Image
            alt="cars-logo"
            className = "w-40 h-40"
            src={Brand_13}
        />
        </a>
        <div className="mt-4">
        <h2 className="text-center text-black font-bold font-serif text-lg ">
                                                 Porsche
        </h2>
        </div>
        </div>
        <div className="lg:w-1/6 md:w-1/3 p-4 w-full mt-6">
        <a className="block relative w-40 h-40 mx-auto  rounded-full bg-white overflow-hidden">
        <Image
            alt="cars-logo"
            className = "w-40 h-40"
            src={Brand_14}
        />
        </a>
        <div className="mt-4">
        <h2 className="text-center text-black font-bold font-serif text-lg ">
                                        Mercedes Benz
        </h2>
        </div>
        </div>
        <div className="lg:w-1/6 md:w-1/3 p-4 w-full mt-6">
        <a className="block relative w-40 h-40 mx-auto  rounded-full bg-white overflow-hidden">
        <Image
            alt="cars-logo"
            className = "w-40 h-40"
            src={Brand_15}
        />
        </a>
        <div className="mt-4">
        <h2 className="text-center text-black font-bold font-serif text-lg ">
                                                Prince
        </h2>
        </div>
        </div>
        <div className="lg:w-1/6 md:w-1/3 p-4 w-full mt-6">
        <a className="block relative w-40 h-40 mx-auto  rounded-full bg-white overflow-hidden">
        <Image
            alt="cars-logo"
            className = "w-40 h-40"
            src={Brand_16}
        />
        </a>
        <div className="mt-4">
        <h2 className="text-center text-black font-bold font-serif text-lg ">
                                               DFSK
        </h2>
        </div>
        </div>
        <div className="lg:w-1/6 md:w-1/3 p-4 w-full mt-6">
        <a className="block relative w-40 h-40 mx-auto  rounded-full bg-white overflow-hidden">
        <Image
            alt="cars-logo"
            className = "w-40 h-40"
            src={Brand_17}
        />
        </a>
        <div className="mt-4">
        <h2 className="text-center text-black font-bold font-serif text-lg ">
                                                  Isuzu
        </h2>
        </div>
        </div>
        <div className="lg:w-1/6 md:w-1/3 p-4 w-full mt-6">
        <a className="block relative w-40 h-40 mx-auto  rounded-full bg-white overflow-hidden">
        <Image
            alt="cars-logo"
            className = "w-40 h-40"
            src={Brand_18}
        />
        </a>
        <div className="mt-4">
        <h2 className="text-center text-black font-bold font-serif text-lg ">
                                                      FAW
        </h2>
        </div>
        </div>
        </div>
        </div>
        </div>
   </div>
 );
}