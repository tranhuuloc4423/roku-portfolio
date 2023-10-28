import React from "react";
import Shape from "./Shape";
import { icons } from "../../icons";

const { FaFacebookSquare, BsInstagram, BsLinkedin, FaGithubSquare } = icons;

const Home = () => {
    return (
        <>
            <div
                className="h-screen w-full mx-auto flex flex-col items-center justify-center gap-4 relative z-20 text-title"
                id="home"
            >
                <img
                    src="https://lh3.googleusercontent.com/a/ACg8ocIp0VvTxAfbizo8_SJAyYs76ql1XRM28LCpulMgrvdz0A=s288-c-no"
                    alt=""
                    className="rounded-full"
                />
                <div className="font-bold text-h1">Roku</div>
                <div className="font-normal text-h3">
                    I'm a Front-End developer
                </div>
                <div className="flex gap-8 items-center text-h1 py-4">
                    <a href="#" className="hover:scale-[120%] transition-all">
                        <FaFacebookSquare />
                    </a>
                    <a href="#" className="hover:scale-[120%] transition-all">
                        <BsInstagram />
                    </a>
                    <a href="#" className="hover:scale-[120%] transition-all">
                        <BsLinkedin />
                    </a>
                    <a href="#" className="hover:scale-[120%] transition-all">
                        <FaGithubSquare />
                    </a>
                </div>

                <button className="bg-btn rounded-3xl font-bold text-white px-6 py-2 text-h3 hover:scale-75 transition-all select-none">
                    Hire me
                </button>
            </div>
            <Shape />
        </>
    );
};

export default Home;
