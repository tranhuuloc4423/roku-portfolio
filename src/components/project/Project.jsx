import React from "react";
import { events } from "../../assets";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
const Project = ({ projects }) => {
    console.log(events);
    return (
        <div className="flex justify-center items-center w-[100%] pb-8">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 8000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper w-[90%]"
            >
                {projects.map((project, index) => (
                    <SwiperSlide
                        key={index}
                        className="flex flex-col items-center h-[100%]"
                    >
                        <div className="text-h2 text-center">
                            {project?.title}
                        </div>
                        <div className="flex gap-4 flex-col items-center justify-between h-[80%]">
                            <div className="flex items-center justify-between bg-text p-4 rounded-3xl w-full">
                                <div className="flex-1 flex flex-col items-center justify-center">
                                    <div className="text-h3 text-[#ccc]">
                                        Tìm hiểu và lên ý tưởng
                                    </div>
                                    <div className="p-4 bg-[#8988a9] rounded-xl mt-4">
                                        {project?.idea}
                                    </div>
                                </div>
                                <div className="flex-1 flex items-center justify-center">
                                    <img
                                        src={project.imgs[0]}
                                        alt=""
                                        className="object-cover object-center h-[200px]"
                                    />
                                </div>
                            </div>
                            <div className="flex items-center justify-between bg-text p-4 rounded-3xl w-full">
                                <div className="flex-1 flex items-center justify-center">
                                    <img
                                        src={project.imgs[1]}
                                        alt=""
                                        className="object-cover object-center h-[200px]"
                                    />
                                </div>
                                <div className="flex-1 flex flex-col items-center justify-center">
                                    <div className="text-h3 text-[#ccc]">
                                        Quy trình thực hiện
                                    </div>
                                    <div className="p-4 bg-[#8988a9] rounded-xl mt-4">
                                        {project?.steps}
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-between bg-text p-4 rounded-3xl w-full">
                                <div className="flex-1 flex flex-col items-center justify-center">
                                    <div className="text-h3 text-[#ccc]">
                                        Kết quả đạt được
                                    </div>
                                    <div className="p-4 bg-[#8988a9] rounded-xl mt-4">
                                        {project?.completed}
                                    </div>
                                </div>
                                <div className="flex-1 flex items-center justify-center">
                                    <img
                                        src={project.imgs[2]}
                                        alt=""
                                        className="object-cover object-center h-[200px]"
                                    />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Project;
