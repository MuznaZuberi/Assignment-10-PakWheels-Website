// ============================
//   IMAGE IMPORTS SECTION
// ============================
// Import Image component for optimized image rendering
import Image from "next/image";
import UsedCar_01 from "/images/usedcar_01.png";
import UsedCar_02 from "/images/usedcar_02.png";
import UsedCar_03 from "/images/usedcar_03.png";
import UsedCar_04 from "/images/usedcar_04.png";
import UsedCar_05 from "/images/usedcar_05.png";
import UsedCar_06 from "/images/usedcar_06.png";
import UsedCar_07 from "/images/usedcar_07.png";
import UsedCar_08 from "/images/usedcar_08.png";
import UsedCar_09 from "/images/usedcar_09.png";
import UsedCar_10 from "/images/usedcar_10.png";
import UsedCar_11 from "/images/usedcar_11.png";
import UsedCar_12 from "/images/usedcar_12.png";


export default function UsedCars() {
	return (
   <div className = "bg-gray-100 mt-10">
   	  
   	  <h1 className = "ml-8 text-3xl py-3 font-bold font-serif pt-6">Browse Used Cars</h1>
   	  <div className = "xl:flex lg:flex md:flex text-xl flex-wrap gap-10 ml-8 font-serif">
   	  <h1><u className = "font-serif font-bold">Category</u></h1>
   	  <h1>City</h1>
   	  <h1>Make</h1>
   	  <h1>Model</h1>
   	  <h1>Budget</h1>
   	  <h1>Body Type</h1>
   	  </div>


      <div className="container  px-4 py-6 mx-auto">
      <div className="flex flex-wrap mx-auto">

   

      <div className="lg:w-1/6 md:w-1/3 p-4 w-full px-2">
      <a className="block relative rounded-lg overflow-hidden py-6 bg-white border-0">
      <Image
            alt="car_img"
            className="block mx-auto"
            src={UsedCar_01}

      />
      <h3 className="pt-3 text-gray-400 font-serif font-bold text-sm tracking-widest text-center mb-1">
                                                   Automatic Cars
      </h3>
      </a>
      </div>
      <div className="lg:w-1/6 md:w-1/3 p-4 w-full px-2">
      <a className="block relative rounded-lg overflow-hidden py-6 bg-white border-0">
      <Image
            alt="car_img"
            className="block mx-auto"
            src={UsedCar_02}
      />
      <h3 className="pt-3 text-gray-400 font-serif font-bold text-sm tracking-widest text-center mb-1">
                                                 Family Cars
      </h3>
      </a>
      </div>
      <div className="lg:w-1/6 md:w-1/3 p-4 w-full px-2">
      <a className="block relative rounded-lg overflow-hidden py-6 bg-white border-0">
      <Image
            alt="car_img"
            className="block mx-auto"
            src={UsedCar_03}
      />
      <h3 className="pt-3 text-gray-400 font-serif font-bold text-sm tracking-widest text-center mb-1">
                                               5 Seater
      </h3>
      </a>
      </div>
      <div className="lg:w-1/6 md:w-1/3 p-4 w-full px-2">
      <a className="block relative rounded-lg overflow-hidden py-6 bg-white border-0">
      <Image
            alt="car_img"
            className="block mx-auto"
            src={UsedCar_04}
      />
      <h3 className="pt-3 text-gray-400 font-serif font-bold text-sm tracking-widest text-center mb-1">
                                            Small Cars
      </h3>
      </a>
      </div>
      <div className="lg:w-1/6 md:w-1/3 p-4 w-full px-2">
      <a className="block relative rounded-lg overflow-hidden py-6 bg-white border-0">
      <Image
            alt="car_img"
            className="block mx-auto"
            src={UsedCar_05}
      />
      <h3 className="pt-3 text-gray-400 font-serif font-bold text-sm tracking-widest text-center mb-1">
                                        Big Cars
      </h3>
      </a>
      </div>
      <div className="lg:w-1/6 md:w-1/3 p-4 w-full px-2">
      <a className="block relative rounded-lg overflow-hidden py-6 bg-white border-0">
      <Image
            alt="car_img"
            className="block mx-auto"
            src={UsedCar_06}
      />
      <h3 className="pt-3 text-gray-400 font-serif font-bold text-sm tracking-widest text-center mb-1">
                                        Imported Cars
      </h3>
      </a>
      </div>


      <div className="lg:w-1/6 md:w-1/3 p-4 w-full px-2">
      <a className="block relative rounded-lg overflow-hidden py-6 bg-white border-0">
      <Image
            alt="car_img"
            className="block mx-auto"
            src={UsedCar_07}
      />
      <h3 className="pt-2 text-gray-400 font-serif font-bold text-sm tracking-widest text-center mb-1">
                                                     Old Cars
      </h3>
      </a>
      </div>
      <div className="lg:w-1/6 md:w-1/3 p-4 w-full px-2">
      <a className="block relative rounded-lg overflow-hidden py-6 bg-white border-0">
      <Image
            alt="car_img"
            className="block mx-auto"
            src={UsedCar_08}
      />
      <h3 className="pt-2 text-gray-400 font-serif font-bold text-sm tracking-widest text-center mb-1">
                                                        5 Door
      </h3>
      </a>
      </div>
      <div className="lg:w-1/6 md:w-1/3 p-4 w-full px-2">
      <a className="block relative rounded-lg overflow-hidden py-6 bg-white border-0">
      <Image
            alt="car_img"
            className="block mx-auto"
            src={UsedCar_09}
      />
      <h3 className="pt-3 text-gray-400 font-serif font-bold text-sm tracking-widest text-center mb-1">
                                                     4 Door
      </h3>
      </a>
      </div>
      <div className="lg:w-1/6 md:w-1/3 p-4 w-full px-2">
      <a className="block relative rounded-lg overflow-hidden py-6 bg-white border-0">
          <Image
            alt="car_img"
            className="block mx-auto"
            src={UsedCar_10}
      />
      <h3 className="pt-3 text-gray-400 font-serif font-bold text-sm tracking-widest text-center mb-1">
                                                 1000cc Cars
      </h3>
      </a>
      </div>
      <div className="lg:w-1/6 md:w-1/3 p-4 w-full px-2">
      <a className="block relative rounded-lg overflow-hidden py-6 bg-white border-0">
      <Image
            alt="car_img"
            className="block mx-auto"
            src={UsedCar_11}
      />
      <h3 className="pt-3 text-gray-400 font-serif font-bold text-sm tracking-widest text-center mb-1">
                                                       1300cc Cars
      </h3>
      </a>
      </div>
      <div className="lg:w-1/6 md:w-1/3 p-4 w-full px-2">
      <a className="block relative rounded-lg overflow-hidden py-6 bg-white border-0">
      <Image
            alt="car_img"
            className="block mx-auto"
            src={UsedCar_12}
      />
      <h3 className="pt-2 text-gray-400 font-serif font-bold text-sm tracking-widest text-center mb-1">
                                                         Japnese Cars
      </h3>
      </a>
      </div>
      </div>
      </div>
   </div>
	);
}