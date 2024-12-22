import Link from "next/link";

export default function Footer() {
  return (
      <div className = "bg-black">
      <div className="container px-5 py-24 mx-auto mt-10">
      <div className="flex flex-wrap md:text-left text-center -mb-10 -mx-4">
      
      <div className="lg:w-1/6 md:w-1/2 w-full px-4">
      <h2 className="font-bold font-serif text-white tracking-widest text-sm mb-3">
                                   Cars By Make
      </h2>
      <nav className="list-none mb-10">
      <li>
      <a className="text-gray-400 font-serif">ToyotaCarsForSale</a>
      </li>
      <li>
      <a className="text-gray-400 font-serif">SuzukiCarsForSale</a>
      </li>
      <li>
      <a className="text-gray-400 font-serif">HondaCarsForSale</a>
      </li>
      <li>
      <a className="text-gray-400 font-serif">DaihastuCarsForSale</a>
      </li>
      <li>
      <a className="text-gray-400 font-serif">MitsubishiCarsForSale</a>
      </li>
      <li>
      <a className="text-gray-400 font-serif">NissanCarsForSale</a>
      </li> 
      <li>
      <a className="text-gray-400 font-serif">MercedesCarsForSale</a>
      </li>
      <li>
      <a className="text-gray-400 font-serif">HyundaiCarsForSale</a>
      </li> 
      <li>
      <a className="text-gray-400 font-serif">BMWCarsForSale</a>
      </li>
      </nav>
      </div>
      <div className="lg:w-1/6 md:w-1/2 w-full px-4">
      <h2 className="font-bold font-serif text-white tracking-widest text-sm mb-3">
                                       Cars By City
      </h2>
      <nav className="list-none mb-10">
      <li>
      <a className="text-gray-400 font-serif">CarsinKarachi</a>
      </li>
      <li>
      <a className="text-gray-400 font-serif">CarsinLahore</a>
      </li>
      <li>
      <a className="text-gray-400 font-serif">CarsinIslamabad</a>
      </li>
      <li>
      <a className="text-gray-400 font-serif">CarsinRawalpindi</a>
      </li>
      <li>
      <a className="text-gray-400 font-serif">CarsinRawalpindi</a>
      </li>
      <li>
      <a className="text-gray-400 font-serif">CarsinPeshawar</a>
      </li>
      <li>
      <a className="text-gray-400 font-serif">CarsinFaisalabad</a>
      </li>
      <li>
      <a className="text-gray-400 font-serif">CarsinMultan</a>
      </li>
      <li>
      <a className="text-gray-400 font-serif">CarsinGujarnwala</a>
      </li>
      <li>
      <a className="text-gray-400 font-serif">CarsinSialkot</a>
      </li>
      <li>
      <a className="text-gray-400 font-serif">CarsinSargodha</a>
      </li>
      </nav>
      </div>
      <div className="lg:w-1/6 md:w-1/2 w-full px-4">
      <h2 className="font-bold font-serif text-white tracking-widest text-sm mb-3">
                                     Explore PakWheels
      </h2>
      <nav className="list-none mb-10">
      <li>
      <a className="text-gray-400 font-serif">Used Cars</a>
      </li>
      <li>
      <a className="text-gray-400 font-serif">Used Bikes</a>
      </li>
      <li>
      <a className="text-gray-400 font-serif">New Cars</a>
      </li>
      <li>
      <a className="text-gray-400 font-serif">Auto Parts & Accessories</a>
      </li>
      <li>
      <a className="text-gray-400 font-serif">Cool Rides</a>
      </li>
      <li>
      <a className="text-gray-400 font-serif">Forums</a>
      </li>
      <li>
      <a className="text-gray-400 font-serif">Autoshow</a>
      </li>
      <li>
      <a className="text-gray-400 font-serif">Sitemap</a>
      </li>
      </nav>
      </div>
      <div className="lg:w-1/6 md:w-1/2 w-full px-4">
      <h2 className="font-bold font-serif text-white tracking-widest text-sm mb-3">
                                   PakWheels.com
      </h2>
      <nav className="list-none mb-10">
      <li>
      <a className="text-gray-400 font-serif">About PakWheels.com</a>
      </li>
      <li>
      <a className="text-gray-400 font-serif">Our Products</a>
      </li>
      <li>
      <a className="text-gray-400 font-serif">Advertise With Us</a>
      </li>
      <li>
      <a className="text-gray-400 font-serif">How To Pay</a>
      </li>
      <li>
      <a className="text-gray-400 font-serif">FAQS</a>
      </li>
      <li>
      <a className="text-gray-400 font-serif">refunds & Returns</a>
      </li>
      <li>
      <a className="text-gray-400 font-serif">Carrers</a>
      </li>
      <li>
      <a className="text-gray-400 font-serif">Contact Us</a>
      </li>
      </nav>
      </div>
      <div className="lg:w-1/6 md:w-1/2 w-full px-4">
      <h2 className="font-bold font-serif text-white tracking-widest text-sm mb-3">
                                  Sell On PakWheels
      </h2>
      <nav className="list-none mb-10">
      <li>
      <a className="text-gray-400 font-serif">Sell Your Car</a>
      </li>
      <li>
      <a className="text-gray-400 font-serif">Sell Your Bike</a>
      </li>
      <li>
      <a className="text-gray-400 font-serif">Sell  Accessory</a>
      </li>
      <br/>
      <li>
      <a className="text-white font-serif ">Subscribe Newsletter</a>
      </li>
      <div className="mx-auto relative w-40 pt-2">
      <input
              type="text"
              id="footer-field"
              name="footer-field"
              placeholder = "name@email.com"
              className="w-full bg-white rounded  text-black font-serif  py-1 px-3"
      />
      </div>
      <span className="pt-6 inline-flex gap-3 lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto">
      <a className="text-gray-600 bg-gray-400 rounded-full py-2 px-2 cursor-pointer">
      <svg
            fill="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-5 h-5"
            viewBox="0 0 24 24"
      >
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
      </a>
      <a className="text-gray-600 bg-gray-400 rounded-full py-2 px-2 cursor-pointer">
      <svg
            fill="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-5 h-5"
            viewBox="0 0 24 24"
      >
      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
      </svg>
      </a>
      <a className="text-gray-600 bg-gray-400 rounded-full py-2 px-2 cursor-pointer">
      <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-5 h-5"
            viewBox="0 0 24 24"
       >
       <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
       <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
       </svg>
       </a>
       <Link href = "https://www.linkedin.com/in/muzna-amir-zubairi-280135264/" target = "blank" className="text-gray-600 bg-gray-400 rounded-full py-2 px-2 cursor-pointer">
       <svg
            fill="currentColor"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={0}
            className="w-5 h-5"
            viewBox="0 0 24 24"
        >
        <path
              stroke="none"
              d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
        />
        <circle cx={4} cy={4} r={2} stroke="none" />
        </svg>
        </Link>
        </span>
        </nav>
        </div>
        </div>
        </div>

        <div className="border-t border-gray-700 py-10">
        <p className="text-gray-500 text-sm px-3  text-center">
                        Copyright © 2003 - 2024 PakWheels (Pvt) Ltd. - All Rights Reserved.
        <br className="lg:block hidden" />
                        Terms of Service |  Privacy Policy
        <br className="lg:block hidden" />
                        Reproduction of material from any PakWheels.com pages without permission is strictly prohibited.
        </p>
        </div>
        <div className="bg-black">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
        <p className="text-white text-sm text-center sm:text-left">
                       @Muzna Amir Zubairi
        </p>
        <span className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-white text-sm">
                        Designed & Developed By Muzna Amir Zubairi 
        </span>
        </div>
        </div>
  </div>
  );
}