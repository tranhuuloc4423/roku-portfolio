import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
const Container = () => {
    const [showNav, setShowNav] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const isTop = window.scrollY === 0;
            setShowNav(isTop);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <div className="px-[60px] bg-[#f7f8fa] select-none">
            {showNav && <Navbar />}
            <Outlet />
        </div>
    );
};

export default Container;
