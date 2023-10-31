import React from "react";
import { icons } from "../../icons";
import { Link } from "react-scroll";

const {
    LuGraduationCap,
    IoLayersOutline,
    BiBriefcase,
    AiOutlineHome,
    RiShoppingBagFill,
    AiOutlineUser,
} = icons;
const Sidebar = ({ openMenu }) => {
    return (
        <>
            {openMenu && (
                <div className="fixed w-[80px] md:w-[100px] top-0 bottom-0 left-0 bg-text flex flex-col items-center justify-between pt-2 pb-2 z-[9999]">
                    <div className="font-bold font-akaya text-[4rem] hover:scale-90 transition-all cursor-pointer">
                        R<span className="text-first">.</span>
                    </div>
                    <ul className="font-bold text-h1 flex gap-8 flex-col">
                        <li className="hover:scale-90 transition-all">
                            <Link
                                to="home"
                                spy={true}
                                smooth={true}
                                offset={50}
                                duration={500}
                            >
                                <AiOutlineHome />
                            </Link>
                        </li>

                        <li className="hover:scale-90 transition-all">
                            <Link
                                to="about"
                                spy={true}
                                smooth={true}
                                offset={50}
                                duration={500}
                            >
                                <AiOutlineUser />
                            </Link>
                        </li>

                        <li className="hover:scale-90 transition-all">
                            <Link
                                to="showcase"
                                spy={true}
                                smooth={true}
                                offset={50}
                                duration={500}
                            >
                                <IoLayersOutline />
                            </Link>
                        </li>

                        <li className="hover:scale-90 transition-all">
                            <Link
                                to="study"
                                spy={true}
                                smooth={true}
                                offset={50}
                                duration={500}
                            >
                                <LuGraduationCap />
                            </Link>
                        </li>
                    </ul>
                    <div className="font-bold text-h1">R.</div>
                </div>
            )}
        </>
    );
};

export default Sidebar;
