import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import projects from "../../projects";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
const Showcase = () => {
    return (
        <div
            id="showcase"
            className="h-screen small:mt-[800px] md:mt-[0] lg:mt-4 flex flex-col items-center justify-center text-title md:w-[90%] mx-auto"
        >
            <div className="font-bold text-h1">Recent Projects</div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper w-[80%] md:w-[90%] lg:w-[80%]"
            >
                {projects.map((project, index) => (
                    <SwiperSlide
                        key={index}
                        className="flex justify-center items-center"
                    >
                        <div className="text-h3 pb-4 text-center">
                            {project.text}
                        </div>
                        <a
                            href={project.link}
                            className="flex justify-center items-center"
                            target="_blank"
                        >
                            <img
                                src={project.image}
                                className="h-[250px] md:w-[80%] md:h-[500px] object-cover object-top hover:scale-90 transition-all rounded-xl shadow-1"
                            />
                        </a>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Showcase;
