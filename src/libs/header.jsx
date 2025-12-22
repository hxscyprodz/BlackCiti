import { Link } from "react-scroll";

export default function Header() {
  return (
    <header
      className="flex items-center justify-between fixed top-0 bg-black 
        left-0 right-0 h-20 px-20 z-50"
    >
      <div>
        <h1 className="text-3xl font-bold text-gray-200">Black<span className="text-blue-800 font-medium">Citi</span> </h1>
        <p className="text-gray-200 italic text-xs">
          Best investment solutions
        </p>
      </div>
      <nav className="flex gap-7 text-gray-200">
        <Link to="Home" smooth={true} duration={500} 
          className="cursor-pointer">
          Home</Link>
        <Link to="About" smooth={true} duration={500} 
          className="cursor-pointer">
          About
        </Link>
        <Link to="Teams" smooth={true} duration={500} 
          className="cursor-pointer">
          Teams</Link>
        <Link to="#">Services</Link>
        <Link to="#">Contact</Link>
      </nav>
    </header>
  );
}
