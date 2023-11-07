import React from "react";
import { marks } from "../../assets";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
const Mark = () => {
    return (
        <div className="w-full mt-[80px] sm:pb-8">
            <div className="font-bold text-h1 text-center text-title">
                Thành tích học tập
            </div>
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
                className="mySwiper w-[90%] md:w-[80%]"
            >
                {marks.map((mark, index) => (
                    <SwiperSlide
                        key={index}
                        className="flex flex-col items-center"
                    >
                        <div className="text-h2 text-center mb-8">
                            {mark.title}
                        </div>
                        <div className="flex gap-4 md:flex-row flex-col">
                            <div className="flex-1 overflow-hidden border-title border-4 rounded-xl">
                                <img
                                    src={mark?.imgs[0]}
                                    alt=""
                                    className="object-cover object-center w-full h-full hover:scale-110 transition-all"
                                />
                            </div>
                            <div className="flex-1 overflow-hidden border-title border-4 rounded-xl">
                                <img
                                    src={mark?.imgs[1]}
                                    alt=""
                                    className="object-cover object-center w-full h-full hover:scale-110 transition-all"
                                />
                            </div>
                        </div>
                        <div className="mt-4 text-h3">{mark.desc}</div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Mark;
