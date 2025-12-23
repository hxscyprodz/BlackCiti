import { useState } from "react";
import { Link } from "react-scroll";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export default function Socials() {
  const [isHover, setIsHover] = useState({});
  const handleHover = (id, isEntering) => {
    setIsHover((prevState) => ({
      ...prevState,
      [id]: isEntering,
    }));
  };
  const socials = [
    { id: "Facebook", icon: Facebook },
    { id: "Instagram", icon: Instagram },
    { id: "Twitter", icon: Twitter },
    { id: "Linkedin", icon: Linkedin },
  ];

  const socialLinks = socials.map((link) => {
    return (
      <Link
        key={link.id}
        to="#"
        className="bg-[#1F1F1F] p-2 rounded-2xl hover:bg-blue-800 cursor-pointer"
        onMouseEnter={() => handleHover(link.id, true)}
        onMouseLeave={() => handleHover(link.id, false)}
      >
        <link.icon color={isHover[link.id] ? "white" : "#999999"} />
      </Link>
    );
  });

  return <div className="flex gap-3">{socialLinks}</div>;
}
