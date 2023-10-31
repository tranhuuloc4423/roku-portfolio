import React from "react";
import Shape from "./Shape";
import { icons } from "../../icons";
import avatar from "../../asset/ava_1.png";

const { FaFacebookSquare, BsInstagram, BsLinkedin, FaGithubSquare } = icons;

const Home = () => {
    return (
        <>
            <div
                className="h-screen w-[100%] md:w-[80%] flex flex-col items-center justify-center md:gap-4 relative z-20 text-title mx-auto"
                id="home"
            >
                <div className="w-[200px]  md:w-[300px] bg-[#FFDEE9] bg-gradient-to-b from-[#FFDEE9] to-[#B5FFFC] rounded-3xl overflow-hidden">
                    <img src={avatar} alt="avatar" className="object-cover" />
                </div>
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
                    Contact me
                </button>
            </div>
            <Shape />
        </>
    );
};

export default Home;
