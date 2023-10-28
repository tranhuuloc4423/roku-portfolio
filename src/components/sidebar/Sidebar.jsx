import React from "react";
import { icons } from "../../icons";

const {
    LuGraduationCap,
    IoLayersOutline,
    BiBriefcase,
    AiOutlineHome,
    RiShoppingBagFill,
    AiOutlineUser,
} = icons;
const Sidebar = () => {
    return (
        <div className="fixed h-screen w-[100px] top-0 bottom-0 left-0 bg-text flex flex-col items-center justify-between pt-2 pb-2 z-[9999]">
            <div className="font-bold font-akaya text-[4rem] hover:scale-90 transition-all cursor-pointer">
                R<span className="text-first">.</span>
            </div>
            <ul className="font-bold text-h1 flex gap-8 flex-col">
                <li>
                    <a href="#home">
                        <AiOutlineHome />
                    </a>
                </li>

                <li>
                    <a href="#about">
                        <AiOutlineUser />
                    </a>
                </li>

                <li>
                    <LuGraduationCap />
                </li>

                <li>
                    <IoLayersOutline />
                </li>
            </ul>
            <div className="font-bold text-h1">R.</div>
        </div>
    );
};

export default Sidebar;
