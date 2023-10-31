import React from "react";
import avatar from "../../asset/ava_1.png";
import projects from "../../projects";
import skill1 from "../../asset/skills/skill_1.jpg";
import skill2 from "../../asset/skills/skill_2.jpg";
import skill3 from "../../asset/skills/skill_3.jpg";
import skill4 from "../../asset/skills/skill_4.jpg";

const About = () => {
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
            id="about"
            className="h-screen mt-[800px] md:mt-[50px] w-[90%] md:w-[80%] mx-auto flex items-center flex-col text-title justify-center md:gap-[44px]"
        >
            <div>
                <div className="font-bold text-h1 text-center">Giới Thiệu</div>
                <div className="flex justify-between items-center mt-4 flex-col md:flex-row md:gap-4">
                    <div className="w-[250px] bg-[#FFDEE9] bg-gradient-to-b from-[#FFDEE9] to-[#B5FFFC] rounded-full overflow-hidden">
                        <img
                            src={avatar}
                            alt="avatar"
                            className="object-cover"
                        />
                    </div>
                    <div className="flex justify-between flex-col md:w-[70%] bg-body p-8 rounded-2xl text-l md:text-h3 shadow-1">
                        <div className="leading-8">
                            Xin chào, tôi là Trần Hữu Lộc, một sinh viên của
                            trường Đại học Lạc Hồng. Tôi đam mê chuyên ngành
                            front-end và sẵn sàng đưa kiến thức và kỹ năng của
                            mình vào công việc. Tôi luôn cố gắng học hỏi và nâng
                            cao khả năng để trở thành một chuyên gia front-end
                            đáng tin cậy.
                        </div>
                        <button className="bg-btn rounded-3xl font-bold text-white px-6 py-2 text-h3 hover:scale-75 transition-all select-none mt-4 lg:w-[300px] lg:mx-auto">
                            Download CV
                        </button>
                    </div>
                </div>
            </div>
            <div>
                <div className="font-bold text-h1 text-center">Các Kỹ năng</div>
                <div className="text-l md:text-h3 text-center py-4">
                    Ngoài chuyên môn chính là front-end ra thì tôi còn có một số
                    kỹ năng khác.
                </div>
                <div className="flex w-[100%] mx-auto flex-col md:flex-row md:flex-wrap md:justify-between lg:flex-nowrap">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="w-[95%] md:w-[45%] lg:w-[25%] p-4 bg-white m-2 flex justify-center items-center flex-col rounded-3xl shadow-1"
                        >
                            <div className="text-h3 pb-4">{skill.text}</div>
                            <img
                                src={skill.image}
                                className="w-[450px] h-[250px] object-cover object-top hover:scale-90 transition-all"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;
