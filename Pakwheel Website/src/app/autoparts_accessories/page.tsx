// ============================
//   IMAGE IMPORTS SECTION
// ============================
// Import Image component for optimized image rendering
import Image from "next/image";
import AutoPart_01 from "/images/part01.png";
import AutoPart_02 from "/images/part02.png";
import AutoPart_03 from "/images/part03.png";
import AutoPart_04 from "/images/part04.png";
import AutoPart_05 from "/images/part05.png";
import AutoPart_06 from "/images/part06.png";
import AutoPart_07 from "/images/part07.png";
import AutoPart_08 from "/images/part08.png";
import AutoPart_09 from "/images/part09.png";
import AutoPart_10 from "/images/part10.png";
import AutoPart_11 from "/images/part11.png";
import AutoPart_12 from "/images/part12.png";
import Poster from "/images/poster.png";



export default function AutoStore() {
	return (
        <div className = "mt-32">
   	    <h1 className = "ml-8 text-3xl py-3 font-bold font-serif pt-6">Auto Store Car Parts & Accessories</h1>
   	    <div className = "xl:flex lg:flex md:flex text-xl flex-wrap gap-10 ml-8 font-serif">
   	  	<h1><u className = "font-serif font-bold">Sub Category</u></h1>
   	  	<h1>Make</h1>
   	  	<h1>Model</h1>
   	  	<h1>Brand</h1>
   	    </div>
        <div className="container  px-4 py-6 mx-auto">
        <div className="flex flex-wrap mx-auto">
        <div className="lg:w-1/6 md:w-1/3 p-4 w-full px-2">
        <a className="block relative rounded-lg overflow-hidden py-6 bg-white border-0">
        <Image
                                alt="autoparts"
                                className="block mx-auto"
                                src={AutoPart_01}
        />
        <h3 className="pb-2 text-gray-400 font-serif font-bold text-sm tracking-widest text-center mb-1">
                                               Automatic Cars
        </h3>
        </a>
        </div>
        <div className="lg:w-1/6 md:w-1/3 p-4 w-full px-2">
        <a className="block relative rounded-lg overflow-hidden py-6 bg-white border-0">
        <Image
            alt="autoparts"
            className="block mx-auto"
            src={AutoPart_02}
        />
        <h3 className="pb-2 text-gray-400 font-serif font-bold text-sm tracking-widest text-center mb-1">
                                               Family Cars
        </h3>
        </a>
        </div>
        <div className="lg:w-1/6 md:w-1/3 p-4 w-full px-2">
        <a className="block relative rounded-lg overflow-hidden py-6 bg-white border-0">
        <Image
            alt="autoparts"
            className="block mx-auto"
            src={AutoPart_03}
        />
        <h3 className="pb-2 text-gray-400 font-serif font-bold text-sm tracking-widest text-center mb-1">
                                                   5 Seater
        </h3>
        </a>
        </div>
        <div className="lg:w-1/6 md:w-1/3 p-4 w-full px-2">
        <a className="block relative rounded-lg overflow-hidden py-6 bg-white border-0">
        <Image
            alt="autoparts"
            className="block mx-auto"
            src={AutoPart_04}
        />
        <h3 className="pb-2 text-gray-400 font-serif font-bold text-sm tracking-widest text-center mb-1">
                                          Small Cars
        </h3>
        </a>
        </div>
        <div className="lg:w-1/6 md:w-1/3 p-4 w-full px-2">
        <a className="block relative rounded-lg overflow-hidden py-6 bg-white border-0">
        <Image
            alt="autoparts"
            className="block mx-auto"
            src={AutoPart_05}
        />
        <h3 className="pb-2 text-gray-400 font-serif font-bold text-sm tracking-widest text-center mb-1">
                                          Big Cars
        </h3>
        </a>
        </div>
        <div className="lg:w-1/6 md:w-1/3 p-4 w-full px-2">
        <a className="block relative rounded-lg overflow-hidden py-6 bg-white border-0">
        <Image
            alt="autoparts"
            className="block mx-auto"
            src={AutoPart_06}
        />
        <h3 className="pb-2 text-gray-400 font-serif font-bold text-sm tracking-widest text-center mb-1">
                                         Imported Cars
        </h3>
        </a>
        </div>
        <div className="lg:w-1/6 md:w-1/3 p-4 w-full px-2">
        <a className="block relative rounded-lg overflow-hidden py-6 bg-white border-0">
        <Image
            alt="autoparts"
            className="block mx-auto"
            src={AutoPart_07}
        />
        <h3 className="pb-2 text-gray-400 font-serif font-bold text-sm tracking-widest text-center mb-1">
                                         Old Cars
        </h3> 
        </a>
        </div>
        <div className="lg:w-1/6 md:w-1/3 p-4 w-full px-2">
        <a className="block relative rounded-lg overflow-hidden py-6 bg-white border-0">
        <Image
            alt="autoparts"
            className="block mx-auto"
            src={AutoPart_08}
        />
        <h3 className="pb-2 text-gray-400 font-serif font-bold text-sm tracking-widest text-center mb-1">
                                        5 Door
        </h3>
        </a>
        </div>
        <div className="lg:w-1/6 md:w-1/3 p-4 w-full px-2">
        <a className="block relative rounded-lg overflow-hidden py-6 bg-white border-0">
        <Image
            alt="autoparts"
            className="block mx-auto"
            src={AutoPart_09}
        />
        <h3 className="pb-2 text-gray-400 font-serif font-bold text-sm tracking-widest text-center mb-1">
                                       4 Door
        </h3>
        </a>
        </div>
        <div className="lg:w-1/6 md:w-1/3 p-4 w-full px-2">
        <a className="block relative rounded-lg overflow-hidden py-6 bg-white border-0">
        <Image
            alt="autoparts"
            className="block mx-auto"
            src={AutoPart_10}
        />
        <h3 className="pb-2 text-gray-400 font-serif font-bold text-sm tracking-widest text-center mb-1">
                                      1000cc Cars
        </h3>
        </a>
        </div>
        <div className="lg:w-1/6 md:w-1/3 p-4 w-full px-2">
        <a className="block relative rounded-lg overflow-hidden py-6 bg-white border-0">
        <Image
            alt="autoparts"
            className="block mx-auto"
            src= {AutoPart_11}
        />
        <h3 className="pb-2 text-gray-400 font-serif font-bold text-sm tracking-widest text-center mb-1">
                                              1300cc Cars
        </h3>
        </a>
        </div>
        <div className="lg:w-1/6 md:w-1/3 p-4 w-full px-2">
        <a className="block relative rounded-lg overflow-hidden py-6 bg-white border-0">
        <Image
            alt="autoparts"
            className="block mx-auto"
            src= {AutoPart_12}
        />
        <h3 className="pb-2 text-gray-400 font-serif font-bold text-sm tracking-widest text-center mb-1">
                                             Japnese Cars
        </h3>
        </a>
        </div>
        </div>
        </div>
        <Image
            alt="autoparts"
            className="block mx-auto w-full h-full mt-10"
            src = {Poster}

        />
 </div>
	);
}