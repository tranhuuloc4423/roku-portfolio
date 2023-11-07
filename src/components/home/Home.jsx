import React from "react";
import Shape from "./Shape";
import { icons } from "../../icons";
import avatar from "../../asset/avatar.png";
import { Link } from "react-router-dom";
import Skills from "../skills/Skills";
import Showcase from "../showcase/Showcase";
import Mark from "../mark/Mark";

const { FaFacebookSquare, BsInstagram, BsLinkedin, FaGithubSquare } = icons;

const Home = () => {
    return (
        <>
            <div
                className="h-screen w-[80%] mt-[80px] md:mt-0 md:w-[80%] flex flex-col items-center justify-center relative z-20 text-title mx-auto md:flex-row"
                id="home"
            >
                <div className="flex-1 flex flex-col items-center gap-4">
                    <div className="rounded-full overflow-hidden  hover:scale-95 transition-all">
                        <img
                            src={avatar}
                            alt="avatar"
                            className="object-cover object-center w-[300px] h-[300px] md:w-[500px] md:h-[500px]"
                        />
                    </div>
                    <div className="flex gap-8 items-center text-h1 py-4">
                        <a
                            href="#"
                            className="hover:scale-[120%] transition-all"
                        >
                            <FaFacebookSquare />
                        </a>
                        <a
                            href="#"
                            className="hover:scale-[120%] transition-all"
                        >
                            <BsInstagram />
                        </a>
                        <a
                            href="#"
                            className="hover:scale-[120%] transition-all"
                        >
                            <BsLinkedin />
                        </a>
                        <a
                            href="#"
                            className="hover:scale-[120%] transition-all"
                        >
                            <FaGithubSquare />
                        </a>
                    </div>
                </div>
                <div className="flex-1 md:w-[40%] rounded-r-3xl text-l md:text-h3">
                    <div className="text-[4rem] md:text-[5rem]">Chào</div>
                    <div className="text-[1.5rem] md:text-[1.8rem]">
                        Một chút về bản thân tôi
                    </div>
                    <div className="leading-8">
                        <div>Họ và tên: Trần Hữu Lộc</div>
                        <div>Giới tính: Nam</div>
                        <div>Trường: Đại học Lạc Hồng</div>
                        <div>Lớp: 21CT114</div>
                        <div>Chuyên ngành: Công nghệ thông tin</div>
                    </div>
                    <div className="flex gap-4 my-4">
                        <Link to={"skill"} element={<Skills />}>
                            <div className="w-[100px] h-[100px]  md:w-[150px] md:h-[150px] bg-[#eea302] rounded-full flex items-center justify-center border-[1px] border-[black] hover:scale-95 transition-all cursor-pointer">
                                Kỹ năng
                            </div>
                        </Link>
                        <Link to={"showcase"} element={<Showcase />}>
                            <div className="w-[100px] h-[100px] md:w-[150px] md:h-[150px] bg-[#ff3b25] rounded-full flex flex-col items-center justify-center border-[1px] border-[black] hover:scale-95 transition-all cursor-pointer">
                                <span>Dự án</span>
                                <span>và</span>
                                <span>sự kiện</span>
                            </div>
                        </Link>
                        <Link to={"mark"} element={<Mark />}>
                            <div className="w-[100px] h-[100px] md:w-[150px] md:h-[150px] bg-[#80d8da] rounded-full flex flex-col items-center justify-center border-[1px] border-[black] hover:scale-95 transition-all cursor-pointer">
                                <span>Thành tích</span>
                                <span>học tập</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <Shape />
        </>
    );
};

export default Home;
