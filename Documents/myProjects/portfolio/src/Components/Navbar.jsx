import React, { useState, useRef, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const sidebarRef = useRef(null);

    const handleNav = () => {
        setNav(!nav);
    };

    const closeNav = () => {
        setNav(false);  // Close the sidebar
    };

    const handleClickOutside = (event) => {
        if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
            setNav(false);  // Close the sidebar if clicked outside
        }
    };

    // Add the event listener for clicks outside the sidebar
    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);

        // Cleanup the event listener on component unmount
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        // Navbar container - wraps everything
        <div className="bg-stone-100 fixed w-screen top-0 left-0 z-50">
            {/* Inner container for content alignment */}
            <div className="flex justify-between items-center max-w-[1200px] mx-auto px-4 h-[60px]">
                {/* Logo */}
                <h1 className="text-sky-500 text-3xl font-bold">Kai Song</h1>

                {/* Desktop navigation links (hidden on mobile) */}
                <ul className="hidden md:flex ml-auto">
                    <li className="p-5"><a href="#">Home</a></li>
                    <li className="p-5"><a href="#skills">Skills</a></li>
                    <li className="p-5"><a href="#projects">Projects</a></li>
                    <li className="p-5"><a href="#about">About</a></li>
                    <li className="p-5"><a href="#contact">Contact</a></li>
                </ul>

                {/* Mobile menu toggle button */}
                <div onClick={handleNav} className="block md:hidden cursor-pointer">
                    {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
                </div>
            </div>

            {/* Mobile navigation menu */}
            <div ref={sidebarRef} className={nav ? "fixed h-full left-0 top-0 w-[50%] bg-gray-200" : "left-[-100%] hidden sm"}>
                <div >
                    {/* Mobile menu logo */}
                    <h1 className="text-sky-500 text-3xl font-bold">Kai Song</h1>

                    {/* Mobile menu links */}
                    <ul>
                        <li className="p-1"><a href="#" onClick={closeNav}>Home</a></li>
                        <li className="p-1"><a href="#projects" onClick={closeNav}>Projects</a></li>
                        <li className="p-1"><a href="#about" onClick={closeNav}>About</a></li>
                        <li className="p-1"><a href="#contact" onClick={closeNav}>Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
