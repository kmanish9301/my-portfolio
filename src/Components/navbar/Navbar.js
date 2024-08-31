import React from "react";
import { navLinkData } from "../../Constants/index";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div
      id="home"
      className=" grid-rows-6 h-16 flex items-center justify-between font-titleFont"
    >
      <p className="text-lg tracking-wider cursor-pointer">
        {" "}
        Manish's Portfolio
      </p>

      <ul className="flex items-center gap-10">
        {navLinkData.length > 0 &&
          navLinkData.map(({ id, title, link }) => (
            <li
              key={id}
              className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300 z-10"
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Navbar;
