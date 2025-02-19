// Navbar Component

import { useState } from "react";
import Logo from "../assets/images/logo.svg"
import Menu from "../assets/images/icon-menu.svg"
import MenuClose from "../assets/images//icon-menu-close.svg"

 const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
      <nav className="flex justify-between  items-center py-4  w-full">
        {/* <h1 className="text-3xl font-bold">W.</h1> */}
        <div>
            <a href="#">
                <img src={Logo} alt="Logo" />
            </a>
        </div>
        <div>

            <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                <img src={Menu} alt="menu" />
                <img src={MenuClose} alt="menuClose" />
            </button>
            <ul className={`md:flex space-x-6 ${isOpen ? "block" : "hidden"} absolute md:static top-16 left-0 w-full bg-white md:bg-transparent p-4 md:p-0 shadow-none gap-10`}>
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">New</li>
            <li className="cursor-pointer">Popular</li>
            <li className="cursor-pointer">Trending</li>
            <li className="cursor-pointer">Categories</li>
            </ul>
        </div>
      </nav>
    );
  };
  export default Navbar