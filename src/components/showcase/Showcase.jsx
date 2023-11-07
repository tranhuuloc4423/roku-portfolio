import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { projects, projectsTeam } from "../../assets";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import Event from "../event/Event";
import Project from "../project/Project";
const Showcase = () => {
    const [comp, setComp] = useState(0);
    console.log(comp);
    return (
        <div
            id="showcase"
            className="mt-[80px] flex flex-col items-center text-title md:w-[90%] mx-auto"
        >
            <div className="font-bold text-h1 text-center">
                Dự án và sự kiện
            </div>
            <div className="flex items-center gap-4">
                <div
                    className={`text-h3 font-medium cursor-pointer ${
                        comp == 0 ? "text-btn" : "text-[gray]"
                    }`}
                    onClick={() => setComp(0)}
                >
                    Sự kiện
                </div>
                <div
                    className={`text-h3 font-medium cursor-pointer ${
                        comp == 1 ? "text-btn" : "text-[gray]"
                    }`}
                    onClick={() => setComp(1)}
                >
                    Dự án nhóm
                </div>
                <div
                    className={`text-h3 font-medium cursor-pointer ${
                        comp == 2 ? "text-btn" : "text-[gray]"
                    }`}
                    onClick={() => setComp(2)}
                >
                    Dự án cá nhân
                </div>
            </div>

            {comp == 0 && <Event />}
            {comp == 1 && <Project projects={projectsTeam} />}
            {comp == 2 && <Project projects={projects} />}
        </div>
    );
};

export default Showcase;
