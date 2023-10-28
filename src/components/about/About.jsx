import React from "react";

const About = () => {
    const skills = [
        {
            text: "Development",
            percent: 50,
        },
        {
            text: "UI/UX",
            percent: 50,
        },
        {
            text: "Photography",
            percent: 50,
        },
    ];
    return (
        <div
            id="about"
            className="h-screen w-[70%] mx-auto flex items-center flex-col text-title justify-center"
        >
            <div className="font-bold text-h1">About Me</div>
            <div className="flex justify-between items-center mt-4">
                <div>
                    <img
                        src="https://lh3.googleusercontent.com/a/ACg8ocIp0VvTxAfbizo8_SJAyYs76ql1XRM28LCpulMgrvdz0A=s288-c-no"
                        alt=""
                        className="rounded-full"
                    />
                </div>
                <div className="flex justify-between w-[70%] bg-body p-8 rounded-2xl text-h3 shadow-1">
                    <div className="w-1/2">
                        <div className="leading-8">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Repellendus excepturi, accusamus ullam quasi
                            et beatae vel ea placeat incidunt vitae natus
                            delectus, doloribus nam ipsa iure dolor. Eaque,
                            commodi placeat.
                        </div>
                        <button className="bg-btn rounded-3xl font-bold text-white px-6 py-2 text-h3 hover:scale-75 transition-all select-none mt-4">
                            Download CV
                        </button>
                    </div>
                    <div className="w-1/2 flex flex-col justify-between">
                        {skills.map((skill, index) => (
                            <div key={index}>
                                <div className="flex justify-between pb-4">
                                    <span>{skill.text}</span>
                                    <span>{`${skill.percent}%`}</span>
                                </div>
                                <div>
                                    <div
                                        className={`relative w-full h-3 bg-[#d2d2d2] rounded-full z-10`}
                                    >
                                        <div
                                            className={`absolute w-[${skill.percent}%] h-3 bg-first z-20 rounded-full`}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
