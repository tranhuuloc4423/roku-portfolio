import React from "react";
import skill1 from "../../asset/skills/skill_1.jpg";
import skill2 from "../../asset/skills/skill_2.jpg";
import skill3 from "../../asset/skills/skill_3.jpg";
import skill4 from "../../asset/skills/skill_4.jpg";
import main_skill from "../../asset/skills/main_skill.png";

const Skills = () => {
    const skills = [
        {
            text: "Kỹ năng phân tích vấn đề",
            image: skill1,
        },
        {
            text: "Kỹ năng làm việc nhóm",
            image: skill2,
        },
        {
            text: "Kỹ năng lên kế hoạch",
            image: skill3,
        },
        {
            text: "Kỹ năng tư duy phản biện",
            image: skill4,
        },
    ];
    return (
        <div
            id="skill"
            className="mt-[80px] md:w-[90%] mx-auto text-title justify-center md:gap-[44px] sm:pb-4"
        >
            <div className="font-bold text-h1 text-center">Kỹ năng</div>
            <div className="flex items-center flex-col md:flex-row ">
                <div className="flex-1 flex flex-col items-center">
                    <div className="text-h2 my-4">
                        kỹ năng chuyên môn và các công nghệ
                    </div>
                    <img src={main_skill} alt="" />
                    <div className="flex flex-wrap gap-4 w-[70%] mx-auto">
                        <span className="text-h3 p-2 bg-btn rounded-xl">
                            HTML
                        </span>
                        <span className="text-h3 p-2 bg-btn rounded-xl">
                            CSS
                        </span>
                        <span className="text-h3 p-2 bg-btn rounded-xl">
                            Sass
                        </span>
                        <span className="text-h3 p-2 bg-btn rounded-xl">
                            Tailwindcss
                        </span>
                        <span className="text-h3 p-2 bg-btn rounded-xl">
                            jQuery
                        </span>
                        <span className="text-h3 p-2 bg-btn rounded-xl">
                            Javascript
                        </span>
                        <span className="text-h3 p-2 bg-btn rounded-xl">
                            Reactjs
                        </span>
                        <span className="text-h3 p-2 bg-btn rounded-xl">
                            Redux
                        </span>
                        <span className="text-h3 p-2 bg-btn rounded-xl">
                            C#
                        </span>
                        <span className="text-h3 p-2 bg-btn rounded-xl">
                            Java
                        </span>
                        <span className="text-h3 p-2 bg-btn rounded-xl">
                            C++
                        </span>
                    </div>
                </div>
                <div className="flex-1">
                    <div className="text-l md:text-h3 text-center py-4">
                        Ngoài chuyên môn chính là front-end ra thì tôi còn có
                        một số kỹ năng khác.
                    </div>
                    <div className="flex w-[100%] mx-auto flex-col md:flex-row md:flex-wrap md:justify-between lg:flex-wrap">
                        {skills.map((skill, index) => (
                            <div
                                key={index}
                                className="w-[95%] md:w-[45%] lg:w-[45%] p-4 bg-white m-2 flex justify-center items-center flex-col rounded-3xl shadow-1"
                            >
                                <div className="text-h3 pb-4">{skill.text}</div>
                                <img
                                    src={skill.image}
                                    className="w-full object-cover object-top hover:scale-90 transition-all"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
