import React from "react";
import mark from "../../asset/mark/mark.png";

const Mark = () => {
    return (
        <div
            id="study"
            className="h-screen w-[95%] md:w-[80%] flex justify-center items-center flex-col mx-auto"
        >
            <div className="font-bold text-h1 text-center text-title">
                Bảng điểm
            </div>
            <div>
                <img src={mark} alt="" className="border-[4px] border-title" />
            </div>
        </div>
    );
};

export default Mark;
