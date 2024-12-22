// ============================
//   IMAGE IMPORTS SECTION
// ============================
// Import Image component for optimized image rendering
import Image from "next/image";
import FeaturedUsedCar_01 from "/images/featuredusedcar_01.png";
import FeaturedUsedCar_02 from "/images/featuredusedcar_02.png";
import FeaturedUsedCar_03 from "/images/featuredusedcar_03.png";
import FeaturedUsedCar_04 from "/images/featuredusedcar_04.png";



export default function FeaturedUsedCars() {
	return (
   <div>
              <div className="container px-5 py-10 mx-auto">
              <div className=" flex flex-col">
              <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
              <h1 className="sm:w-2/5 text-black font-serif font-bold text-3xl mb-2 sm:mb-0">
                                     Featured Used Cars For Sale
              </h1>
              <p className="sm:w-2/5 leading-relaxed font-serif text-blue-400 pl-0 lg:pl-80 xl:pl-80">
                                     View All Featured Used Cars.
              </p>
              </div>
              </div>
              <div className="flex flex-wrap ">
              <div className="mx-auto p-4 md:w-1/4 lg:w-1/4 xl:w-1/4 sm:w-1/1  sm:mb-0 mb-6">
              <div className="rounded-lg bg-white overflow-hidden">
              <Image
                    alt="car_img"
                    className = "w-60"
                    src={FeaturedUsedCar_01}
              />

             <h2 className="px-3 text-md font-serif font-bold text-blue-900 mt-5">
                                    Mitsubishi Rvr 2012
             </h2>
             <h3 className="px-3 font-serif font-bold text-green-700 mt-2">
                                    PKR 2,975,000
             </h3>
             <p className="px-3 pb-6 font-serif text-gray-400 leading-relaxed mt-2">
                                   Karachi
             </p>
             </div>
             </div>
             <div className="mx-auto p-4 md:w-1/4 lg:w-1/4 xl:w-1/4 sm:w-1/1  sm:mb-0 mb-6">
             <div className="rounded-lg bg-white overflow-hidden">
             <Image
                    alt="car_img"
                    className = "w-60"
                    src={FeaturedUsedCar_02}
             />
             <h2 className="px-3 text-md font-serif font-bold text-blue-900 mt-5">
                                  Toyota Passo 2015
             </h2>
             <h3 className="px-3 font-serif font-bold text-green-700 mt-2">
                                   PKR 2,980,000
             </h3>
             <p className="px-3 pb-4 font-serif text-gray-400 leading-relaxed mt-2">
                                  Rawalpindi
             </p>
             </div>
             </div>


             <div className="mx-auto p-4 md:w-1/4 lg:w-1/4 xl:w-1/4 sm:w-1/1  sm:mb-0 mb-6">
             <div className="rounded-lg bg-white  overflow-hidden">
             <Image
                    alt="car_img"
                  className = "w-60"
                  src={FeaturedUsedCar_03}
             />
             <h2 className="px-3 text-md font-serif font-bold text-blue-900 mt-5">
                                 Nissan Sunny 2006
             </h2>
             <h3 className="px-3 font-serif font-bold text-green-700 mt-2">
                                PKR 1,570,000
             </h3>
             <p className="px-3 pb-4  font-serif text-gray-400 leading-relaxed mt-2">
                                Islamabad
             </p>
             </div>
             </div>



             <div className="mx-auto p-4 md:w-1/4 lg:w-1/4 xl:w-1/4 sm:w-1/1  sm:mb-0 mb-6">
             <div className="rounded-lg bg-white overflow-hidden">
             <Image
                    alt="car_img"
                    className = "w-60"
                    src={FeaturedUsedCar_04}
             />
             <h2 className="px-3 text-md font-serif font-bold text-blue-900 mt-5">
                                   Mercedes Benz E Class 2008
             </h2>
             <h3 className="px-3 font-serif font-bold text-green-700 mt-2">
                                   PKR 4,600,000
             </h3>
             <p className="px-3 pb-4 font-serif text-gray-400 leading-relaxed mt-2">
                                   Faisalabad
             </p>
             </div>
             </div>
             </div>
             </div>
       </div>
 );
}