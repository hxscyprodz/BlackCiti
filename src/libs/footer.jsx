import { Link } from 'react-router-dom'
import Socials from '../components/Socials';

export default function Footer() {
    return (
      <div className="bg-black p-20 flex flex-col gap-20">
        <div className="grid sm:grid-cols-1 lg:grid-cols-4 space-y-10 space-x-10">
          <div className="flex flex-col gap-5">
            <div>
              <h1 className="text-3xl font-bold text-gray-200">
                Black<span className="text-blue-800 font-medium">Citi</span>{" "}
              </h1>
              <p className="text-gray-200 italic text-xs">
                Best investment solutions
              </p>
            </div>
            <div>
              <p className="text-[#999999] text-sm leading-relaxed">
                Expert investment guidance for a secure financial future.
                Delivering tailored solutions with integrity and expertise
              </p>
            </div>
            <Socials />
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-gray-200 font-semibold">Company Information</p>
            <ol className="text-[#999999] text-sm flex flex-col gap-3">
              <li className="hover:text-blue-600 cursor-pointer w-fit">
                About Us
              </li>
              <li className="hover:text-blue-600 cursor-pointer w-fit">
                Our Team
              </li>
              <li className="hover:text-blue-600 cursor-pointer w-fit">
                Mission Statement
              </li>
              <li className="hover:text-blue-600 cursor-pointer w-fit">
                Contact Us
              </li>
            </ol>
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-gray-200 font-semibold">Investment Products</p>
            <ol className="text-[#999999] text-sm flex flex-col gap-3">
              <li className="hover:text-blue-600 cursor-pointer w-fit">
                Asset Management
              </li>
              <li className="hover:text-blue-600 cursor-pointer w-fit">
                Wealth Management
              </li>
              <li className="hover:text-blue-600 cursor-pointer w-fit">
                Investment Research
              </li>
              <li className="hover:text-blue-600 cursor-pointer w-fit">
                Portfolio Management
              </li>
            </ol>
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-gray-200 font-semibold">
              Regulatory Information
            </p>
            <ol className="text-[#999999] text-sm flex flex-col gap-3">
              <li className="hover:text-blue-600 cursor-pointer w-fit">
                Disclosures
              </li>
              <li className="hover:text-blue-600 cursor-pointer w-fit">
                Privacy Policy
              </li>
              <li className="hover:text-blue-600 cursor-pointer w-fit">
                Terms of Use
              </li>
              <li className="hover:text-blue-600 cursor-pointer w-fit">
                Compliance
              </li>
            </ol>
          </div>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-5 justify-between 
          items-center">
          <p className="text-[#999999] text-sm text-center sm:text-center md:text-left m-0">
            {new Date().getFullYear()} BlackCiti Inv. All rights reserved
          </p>
          <p className="text-[#999999] text-sm text-center">
            Invest growth, secure your future, and watch your wealth flourish
          </p>
        </div>
      </div>
    );
}