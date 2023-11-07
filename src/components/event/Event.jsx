import React, { useState } from "react";
import { events } from "../../assets";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
const Event = () => {
    const [showContent, setShowContent] = useState(false);
    const [showContent2, setShowContent2] = useState(false);
    console.log(events);
    return (
        <div className="w-screen flex justify-center items-center mt-10 sm:pb-4">
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
                {events.map((event, index) => (
                    <SwiperSlide key={index} className="flex">
                        <div className="text-h2 text-center">{event.text}</div>
                        <div className="flex gap-4 md:flex-row flex-col">
                            <div
                                className="relative flex-1 overflow-hidden"
                                onMouseEnter={() => setShowContent(true)}
                                onMouseLeave={() => setShowContent(false)}
                            >
                                <img
                                    src={event?.img[0]}
                                    alt=""
                                    className="object-cover object-center w-full"
                                />
                                {/* bg-[#8988a9] */}
                                <div
                                    className={`p-4 bg-[#8988a9] absolute bottom-0 transition-all ${
                                        showContent
                                            ? "animate-slide-up"
                                            : "bottom-[-100%]"
                                    }`}
                                >
                                    <div className="text-h3">{event.desc}</div>
                                </div>
                            </div>
                            <div
                                className="relative flex-1 overflow-hidden"
                                onMouseEnter={() => setShowContent2(true)}
                                onMouseLeave={() => setShowContent2(false)}
                            >
                                <img
                                    src={event?.img[2]}
                                    alt=""
                                    className="object-cover object-center w-full"
                                />
                                {showContent2 && (
                                    <div
                                        className={`p-4 bg-[#8988a9] absolute bottom-0 transition-all ${
                                            showContent2
                                                ? "animate-slide-up"
                                                : "bottom-[-100%]"
                                        }`}
                                    >
                                        <div className="text-h3">
                                            {event.whatIgot}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Event;
