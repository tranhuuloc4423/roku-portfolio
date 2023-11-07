// events

import e1_1 from "./asset/events/event_1_1.JPG";
import e1_2 from "./asset/events/event_1_2.JPG";
import e1_3 from "./asset/events/event_1_3.JPG";
import e2_1 from "./asset/events/event_2_1.jpg";
import e2_2 from "./asset/events/event_2_2.jpg";
import e2_3 from "./asset/events/event_2_3.jpg";

// projects
import p1_1 from "./asset/project/p1_1.png";
import p1_2 from "./asset/project/p1_2.png";
import p1_3 from "./asset/project/p1_3.png";
import p2_1 from "./asset/project/p2_1.png";
import p2_2 from "./asset/project/p2_2.png";
import p2_3 from "./asset/project/p2_3.png";
import p3_1 from "./asset/project/p3_1.png";
import p3_2 from "./asset/project/p3_2.png";
import p3_3 from "./asset/project/p3_3.png";

// projects Team
import pt1_1 from "./asset/projectsTeam/p1_1.png";
import pt1_2 from "./asset/projectsTeam/p1_2.png";
import pt1_3 from "./asset/projectsTeam/p1_3.png";
import pt2_1 from "./asset/projectsTeam/p2_1.jpg";
import pt2_2 from "./asset/projectsTeam/p2_2.jpg";
import pt2_3 from "./asset/projectsTeam/p2_3.jpg";

// marks

import y1_1 from "./asset/marks/y1_1.png";
import y1_2 from "./asset/marks/y1_2.png";
import y2_1 from "./asset/marks/y2_1.png";
import y2_2 from "./asset/marks/y2_2.png";

// projectsTeam

const projects = [
    {
        title: "Wordie (Wordle clone)",
        idea: (
            <>
                <div>
                    Ban đầu tôi nảy ra một ý tưởng làm một game đơn giản trên
                    web để học hỏi thêm về Reactjs.
                </div>
                <div>
                    Sau đó tôi thấy một game khá phù hợp là wordle.Tìm hiểu sơ
                    bộ về trò chơi wordle cũng như cách hoạt động của trò chơi.
                </div>
            </>
        ),
        steps: (
            <>
                <div>setup dự án với reactjs.</div>
                <div>
                    Tạo các component (thành phần) để hiển thị ra giao diện web.
                </div>
                <div>Viết code phần logic cho game.</div>
            </>
        ),
        completed: (
            <>
                <div>Hoàn thành dự án wordle clone</div>
                <div>
                    Sau khi làm xong dự án game này tôi có được nhiều kinh
                    nghiệm về react context, pass props to component, và cách sử
                    dụng của một số hook (useState, useEffect, useRef,...),...{" "}
                </div>
                <a
                    href="https://wordie-react-d0i122t1g-tranhuuloc4423.vercel.app"
                    target="_blank"
                    className="underline text-white text-h3"
                >
                    wordie clone
                </a>
            </>
        ),
        imgs: [p1_1, p1_2, p1_3],
    },
    {
        title: "HuLo movie",
        idea: (
            <>
                <div>
                    Đây là một đồ án cuối kỳ năm nhất môn lập trình web nâng cao
                    của tôi.
                </div>
                <div>
                    Đồ án sử dụng thư viện jquery và api lấy từ the movie
                    database (TMDB).
                </div>
            </>
        ),
        steps: (
            <>
                <div>setup dự án với jquery.</div>
                <div>Setup và call api từ the movie database (TMDB).</div>
                <div>Viết code phần logic cho web.</div>
            </>
        ),
        completed: (
            <>
                <div>Thành phẩm cuối cùng.</div>
                <div>
                    Sau khi làm xong đồ án này tôi đã có kinh nghiệm làm việc
                    jquery cũng như là tìm kiếm một api nào đó và xử lý nó.
                </div>
                <a
                    href="https://tranhuuloc4423.github.io/HuLoMovie/"
                    target="_blank"
                    className="underline text-white text-h3"
                >
                    HuLo Movie
                </a>
            </>
        ),
        imgs: [p2_1, p2_2, p2_3],
    },
    {
        title: "Zingmp3 clone",
        idea: (
            <>
                <div>
                    Nghe nhạc là một trong các sở thích của tôi nên tôi muốn làm
                    một web liên quan đến âm nhạc.
                </div>
                <div>
                    Tìm hiểu về các chức năng của web zingmp3. Tìm hiểu về
                    zingmp3 api.
                </div>
            </>
        ),
        steps: (
            <>
                <div>Setup môi trường dự án với reactjs.</div>
                <div>Tạo các component (thành phần) để hiển thị.</div>
                <div>Viết các phần logic xử lý các sự kiện về âm thanh.</div>
            </>
        ),
        completed: (
            <>
                <div>
                    Sau khoản mấy tuần tôi cũng hoàn thành được dự án zingmp3
                    clone
                </div>
                <div>
                    Tôi đã học hỏi cũng như tích luỹ được nhiều kinh nghiệm
                    ngoài reactjs ví dụ như redux, redux-persist, react-router,
                    axios,..{" "}
                </div>
                <a
                    href="https://zingmp3-clone-3s4p03u10-tranhuuloc4423.vercel.app"
                    target="_blank"
                    className="underline text-white text-h3"
                >
                    zingmp3 clone
                </a>
            </>
        ),
        imgs: [p3_1, p3_2, p3_3],
    },
];

const projectsTeam = [
    {
        title: "Dự án nhóm nói về thành tựu của Việt Nam sau 35 năm đổi mới. (Lịch sử Đảng)",
        idea: (
            <>
                <div>Lên ý tưởng và phân chia công việc</div>
            </>
        ),
        steps: (
            <>
                <div>- Tìm kiếm nội dung</div>
                <div>- Làm powerpoint, word</div>
                <div>- Thuyết trình</div>
            </>
        ),
        completed: (
            <>
                <div>
                    Về phần dự án này tôi đã học cũng như tích luỹ được nhiều
                    kinh nghiệm về kỹ năng làm việc nhóm. Cũng như một số kỹ
                    năng khác như giao tiếp, kỹ năng tư duy phản biện, khả năng
                    tổ chức công việc,...
                </div>
            </>
        ),
        imgs: [pt1_1, pt1_2, pt1_3],
    },
    {
        title: "Dự án nhóm làm game C# với engine Unity",
        idea: (
            <>
                <div>Lên ý tưởng và phân chia công việc</div>
                <div>
                    Tìm hiểu sơ bộ về cách triển khai Unity cũng như là các chức
                    năng game cần có
                </div>
            </>
        ),
        steps: (
            <>
                <div>- Setup môi trường Unity và Visual Studio Code 2022</div>
                <div>- Code các chức năng có trong game</div>
                <div>- Debug và hoàn thiện game</div>
            </>
        ),
        completed: (
            <>
                <div>
                    MMặc dù game không phải là một lĩnh vực mà tôi theo đuổi,
                    việc phát triển game vẫn đem lại cho tôi niềm thú vị, vì vậy
                    tôi đã quyết định thực hiện một dự án về phát triển game. Dự
                    án này đã giúp tôi rèn luyện kỹ năng toán học và kiến thức
                    về ngôn ngữ C#, đồng thời cải thiện khả năng làm việc nhóm
                    của tôi.
                </div>
            </>
        ),
        imgs: [pt2_1, pt2_2, pt2_3],
    },
];

const events = [
    {
        text: "Sự kiện Đấu trường thông tin (cisco)",
        desc: "Là một sự kiện được câu lạc bộ mạng cisco tổ chức nhằm tạo sân chơi cho các bạn khoa Công nghệ thông tin Mục đích của sự kiện nhằm giúp sinh viên học hỏi cũng như ôn lại kiến thức về mạng máy tính.",
        whatIgot:
            "Mặc dù không đạt giải nhưng tôi đã củng cố lại kiến thức về mạng máy tính như tính địa chỉ ip, cách thức hoạt động của hệ thống mạng...",
        img: [e1_1, e1_2, e1_3],
    },
    {
        text: "Sự kiện Workshop kiểm thử phần mềm phối hợp với FPT software HCM",
        desc: "Một buổi Workshop được nhà trường phối hợp với FPT sortware HCM tổ chức để giúp sinh viên có một góc nhìn thực tế về cách thức và quy trình làm việc của một teser là như thế nào.\n",
        whatIgot:
            "Nhờ sự tìm hiểu và lắng nghe, tôi đã đạt một phần thưởng trong buổi workshop.Ngoài phần quà đó, kiến thức về kiểm thử (testing) là một thứ còn quan trọng hơn. Ví dụ như quy trình kiểm thử, test case (trường hợp kiểm thử), test scope (phạm vi kiểm thử), testing documentation (tài liệu kiểm thử),...",
        img: [e2_1, e2_2, e2_3],
    },
];

const marks = [
    {
        title: "Bảng điểm năm nhất",
        desc: "Mặc dù trong hơn một học kỳ, việc học trực tuyến mang đến nhiều khó khăn, nhưng tôi vẫn kiên nhẫn tìm kiếm và học hỏi những kiến thức liên quan không chỉ đến môn học chính, mà còn cả những kiến thức ngoại khóa.",
        imgs: [y1_1, y1_2],
    },
    {
        title: "Bảng điểm năm hai",
        desc: "Năm hai là một năm khó khăn về việc học đối với tôi, bởi vì tôi phải đi làm thêm ở bên ngoài, làm ảnh hưởng đến thời gian học của mình. Tuy vậy, điều đó không làm giảm đi sự nỗ lực của tôi trong việc học tập trên trường.",
        imgs: [y2_1, y2_2],
    },
];
export { events, projects, projectsTeam, marks };
