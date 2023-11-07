import React, { useState } from "react";
import { icons } from "../../icons";
// import { Link } from "react-scroll";
import { Link } from "react-router-dom";
import Home from "../home/Home";

const { AiOutlineMenu } = icons;
const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false);
    return (
        <>
            <div className="fixed w-screen top-0 left-0 flex items-center bg-[#f7f8fa] justify-between px-[40px] z-[9999] md:justify-between">
                <Link to={""} elment={<Home />}>
                    <div className="font-bold font-akaya text-[3rem] hover:scale-90 transition-all cursor-pointer">
                        R<span className="text-first">.</span>
                    </div>
                </Link>
                <div
                    className="relative block md:hidden cursor-pointer"
                    onClick={() => setShowNavbar(!showNavbar)}
                >
                    <AiOutlineMenu size={30} />
                </div>
                <ul
                    className={`sm:overflow-hidden font-semibold text-h3 gap-4 flex sm:flex-col sm:items-center ${
                        showNavbar ? "sm:py-4" : "sm:h-0"
                    } sm:top-full left-0 w-screen bg-text sm:absolute transition-all md:relative md:flex-row md:bg-[transparent] md:w-auto md:overflow-visible`}
                >
                    <li
                        className="hover:scale-90 transition-all cursor-pointer inline-block"
                        onClick={() => setShowNavbar(false)}
                    >
                        <Link to="">Giới thiệu</Link>
                    </li>

                    <li
                        className="hover:scale-90 transition-all cursor-pointer inline-block"
                        onClick={() => setShowNavbar(false)}
                    >
                        <Link to="skill">Kỹ năng</Link>
                    </li>

                    <li
                        className="hover:scale-90 transition-all cursor-pointer inline-block"
                        onClick={() => setShowNavbar(false)}
                    >
                        <Link to="showcase">Dự án và sự kiện</Link>
                    </li>

                    <li
                        className="hover:scale-90 transition-all cursor-pointer inline-block"
                        onClick={() => setShowNavbar(false)}
                    >
                        <Link to="mark">Thành tích học tập</Link>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Navbar;
