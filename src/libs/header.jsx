import { Link as RouterLink } from 'react-router-dom'
import { Link as ScrollLink } from "react-scroll"
import { Menu } from 'lucide-react'

export default function Header() {
  return (
    <header
      className="flex items-center justify-between fixed top-0 bg-black 
        left-0 right-0 h-20 px-5 z-50"
    >
      <div className="flex flex-col items-center justify-center">
        <img src="/blackciti.svg" alt="" />

        <p className="text-gray-200 italic text-[10px]">
          Best investment solutions
        </p>
      </div>
      <div className='lg:hidden'>
        <Menu color='white' />
      </div>
      <nav className="hidden sm:hidden lg:flex gap-7 text-gray-200 ">
        <ScrollLink
          to="Home"
          smooth={true}
          duration={500}
          className="cursor-pointer"
        >
          Home
        </ScrollLink>
        <ScrollLink
          to="About"
          smooth={true}
          duration={500}
          className="cursor-pointer"
        >
          About
        </ScrollLink>
        <ScrollLink
          to="Teams"
          smooth={true}
          duration={500}
          className="cursor-pointer"
        >
          Teams
        </ScrollLink>
        <RouterLink to="/services">Services</RouterLink>
        <ScrollLink
          to="FAQS"
          smooth={true}
          duration={500}
          className="cursor-pointer"
        >
          FAQS
        </ScrollLink>
        <RouterLink to="#">Contact</RouterLink>
      </nav>
    </header>
  );
}
