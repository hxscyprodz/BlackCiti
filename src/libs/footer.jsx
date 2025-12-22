import { Link } from 'react-router-dom'
import { Facebook, Instagram, Twitter, Linkedin} from 'lucide-react'

export default function Footer() {
    return (
      <div className="bg-black p-20 flex flex-col gap-20">
        <div className="grid grid-cols-4">
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
            <div className="flex gap-3">
              <Link className="bg-[#1F1F1F] p-2 rounded-2xl hover:bg-blue-800">
                <Facebook color="#999999" />
              </Link>
              <Link className="bg-[#1F1F1F] p-2 rounded-2xl hover:bg-blue-800">
                <Instagram color="#999999" />
              </Link>
              <Link className="bg-[#1F1F1F] p-2 rounded-2xl hover:bg-blue-800">
                <Twitter color="#999999" />
              </Link>
              <Link className="bg-[#1F1F1F] p-2 rounded-2xl hover:bg-blue-800">
                <Linkedin color="#999999" />
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-gray-200 font-semibold">Company Information</p>
            <ol className="text-[#999999] text-sm flex flex-col gap-3">
              <li className="hover:text-blue-600 cursor-pointer">About Us</li>
              <li className="hover:text-blue-600 cursor-pointer">Our Team</li>
              <li className="hover:text-blue-600 cursor-pointer">
                Mission Statement
              </li>
              <li className="hover:text-blue-600 cursor-pointer">Contact Us</li>
            </ol>
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-gray-200 font-semibold">Investment Products</p>
            <ol className="text-[#999999] text-sm flex flex-col gap-3">
              <li className="hover:text-blue-600 cursor-pointer">
                Asset Management
              </li>
              <li className="hover:text-blue-600 cursor-pointer">
                Wealth Management
              </li>
              <li className="hover:text-blue-600 cursor-pointer">
                Investment Research
              </li>
              <li className="hover:text-blue-600 cursor-pointer">
                Portfolio Management
              </li>
            </ol>
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-gray-200 font-semibold">
              Regulatory Information
            </p>
            <ol className="text-[#999999] text-sm flex flex-col gap-3">
              <li className="hover:text-blue-600 cursor-pointer">
                Disclosures
              </li>
              <li className="hover:text-blue-600 cursor-pointer">
                Privacy Policy
              </li>
              <li className="hover:text-blue-600 cursor-pointer">
                Terms of Use
              </li>
              <li className="hover:text-blue-600 cursor-pointer">Compliance</li>
            </ol>
          </div>
        </div>
        <div className='flex justify-between'>
          <p className="text-[#999999] text-sm"> {new Date().getFullYear()} BlackCiti Inv. All rights reserved</p>
          <p className='text-[#999999] text-sm'>Invest growth, secure your future, and watch your wealth flourish</p>
        </div>
      </div>
    );
}