  

//========================================//
//        React Icons                     //
//========================================//  
import { FaSearch } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaTag } from "react-icons/fa6";
import { FaBook } from "react-icons/fa";
import { MdOutlineStopCircle } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import { FaThumbsUp } from "react-icons/fa";
import { BsFillFileEarmarkSpreadsheetFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { FaCarAlt } from "react-icons/fa";
import { RiMotorbikeFill } from "react-icons/ri";

export default function Header() {

	return (
    <div>
            <div className="bg-black text-white mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <a className="text-white flex font-bold font-serif items-center mb-4 md:mb-0">
            <span className="ml-2 text-lg cursor-pointer">PAKWHEELSC<b className = "text-red-600">@</b>M</span>
            </a>
            <nav className="text-white text-center">
            <ul className="menu menu-horizontal px-1">

            <li>
            <details>
            <summary className = "mr-6 font-serif font-bold">Used Cars</summary>
             <ul className="flex xl:flex-row gap-8 flex-col bg-base-100 rounded-t-none text-black">
            <li className = "gap-8">
            <a><FaSearch /><b className = "font-serif text-md py-3">Find Used Cars For Sale</b></a>
            <a><FaStar />Featured Used Cars</a>
            <a><FaTag />Sell Your Car</a>
            <a><FaBook />Used Car Dealers</a>
            <a><MdOutlineStopCircle />Price Calculator</a>
            </li>

            <li className = "flex gap-8">
            <a><TiTick /><b className = "font-serif text-md py-3">Pakwheels Certified Cars</b></a>
            <a><FaThumbsUp />Pakwheels Car Inspection</a>
            <a><FaThumbsUp />Pakwheels Sell It For Me</a>
            <a><BsFillFileEarmarkSpreadsheetFill />Auction Sheet Veifiction</a>
            </li>

            <li className = "flex">
              <a><FaLocationDot /><b className = "font-serif text-md py-3">Popular Cities</b></a>
              <a>Karachi</a>
              <a>Lahore</a>
              <a>Islamabad</a>
              <a>Rawalpindi</a>
              <a>Peshawar</a>
              <a>Faislabad</a>
              <a>Multan</a>
              <a>Gujarnwala</a>
            </li>

            <li className = "flex">
              <a><FaCarAlt /><b className = "font-serif text-md py-3">Popular Models</b></a>
              <a>Toyota Corolla</a>
              <a>Honda Civic</a>
              <a>Honda City</a>
              <a>Suzuki Cultus</a>
              <a>Suzuki Mehran</a>
              <a>Toyota Vitz</a>
              <a>Suzuki Alto</a>
              <a>Toyota Prado</a>
            </li>
            </ul>
            </details>
            </li>
 
            <li>
            <details>
            <summary className = "mr-6 font-bold font-serif">New Cars</summary>
            <ul className="flex xl:flex-row gap-32 flex-col rounded-t-none text-black">
            <li className = "gap-4">
            <a><FaSearch /><b className = "font-serif text-md py-3">Find New Cars</b></a>
            <a>Car Comparisons</a>
            <a>Reviews</a>
            <a>Prices</a>
            <a>On Road Price</a>
            <a>New Car Delivers</a>
            </li>


            <li className = "flex">
            <a><FaCarAlt /><b className = "font-serif text-md py-3">Popular Brands</b></a>
              <a>Suzuki Cars</a>
              <a>Toyota Cars</a>
              <a>Honda Cars</a>
              <a>KIA Cars</a>
              <a>Hyundai Cars</a>
              <a>Changan Cars</a>
              <a>MG Cars</a>
              <a>BMW Cars</a>
              <a>Audi Cars</a>
            </li>


            <li className = "flex">
              <a><FaCarAlt /><b className = "font-serif text-md py-3">Popular New Cars</b></a>
              <a>Honda Civic</a>
              <a>Suzuki Alto</a>
              <a>Suzuki Cultus</a>
              <a>Honda City</a>
              <a>Toyota Corolla</a>
              <a>Toyota Yaris</a>
              <a>Changan Aisvin</a>
              <a>Suzuki Wagon R</a>
              <a>KIA Sportage</a>


            </li>
            </ul>
            </details>
            </li>



            <li>
            <details>
            <summary className = "mr-6 font-bold font-serif">Bikes</summary>
            <ul className="flex xl:flex-row flex-col gap-20 bg-base-100 rounded-t-none text-black">
            <li className = "gap-10">
            <a><FaSearch /><b className = "font-serif text-md">Find Used Bikes</b></a>
            <a><RiMotorbikeFill />Used Bikes Listing</a>
            <a><FaStar />Featured Used Bikes</a>
            <a><FaTag />Sell Your Bike</a>
            </li>

            <li className = "gap-10">
            <a><FaSearch /><b className = "font-serif text-md">Find New Bikes</b></a>
            <a><RiMotorbikeFill />Bikes Comparisons</a>
            <a><FaStar />Bike Reviews</a>
            <a><FaTag />New Bikes Prices</a>
            </li>

            <li>
            <a><RiMotorbikeFill /><b className = "font-serif text-md">Popular New Bikes</b></a>
            <a>Honda CG 125</a>
            <a>Yamaha YBR 125</a>
            <a>Honda CD 70</a>
            <a>Honda CG 125</a>
            <a>Suzuki GD 1105</a>
            <a>Suzuki GS 150</a>
            <a>Honda Pridor</a>
            <a>Yamaha YBR 12GS</a>
            <a>Honda CB 150F</a>
            </li>
            </ul>
            </details>
            </li>

            <li>
            <details>
            <summary className = "mr-6 font-bold font-serif">Auto Store</summary>
            <ul className="flex xl:flex-row flex-col gap-4 bg-base-100 rounded-t-none text-black">
            <li className = "gap-8">
            <a>Pakwheels Autostore</a>
            <a>Find Auto Parts</a>
            <a>Sell Car Parts</a>
            </li>
            </ul>
            </details>
            </li>
            </ul>
            <a className="ml-4 mr-6 font-bold font-serif text-sm cursor-pointer">Videos</a>
            <a className="mr-6 font-bold font-serif text-sm cursor-pointer">Forums</a>
            <a className="mr-6 font-bold font-serif text-sm cursor-pointer">Blog</a>
            </nav>
            <button className="mx-auto  inline-flex items-center text-sm bg-rose-700 text-white font-serif font-bold border-0 py-2 px-6 focus:outline-none  rounded-lg  mt-4 md:mt-0">
                                                    Post an AD
            </button>
            </div>
    </div>
 );
}