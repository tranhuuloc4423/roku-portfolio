import "./App.css";
import Home from "./components/home/Home";
import Sidebar from "./components/sidebar/Sidebar";
import About from "./components/about/About";
import "./index.css";
import Showcase from "./components/showcase/Showcase";
import Mark from "./components/mark/Mark";
import { useState } from "react";
import { icons } from "./icons";

const { AiOutlineMenu } = icons;
function App() {
    const [openMenu, setOpenMenu] = useState(true);
    return (
        <div className="mx-auto font-poppins">
            <span
                className={`lg:hidden z-[99999] fixed border-first inline-block ${
                    openMenu ? "ml-[90px] md:ml-[110px]" : "ml-[20px]"
                } top-[30px]`}
                onClick={() => setOpenMenu(!openMenu)}
            >
                <AiOutlineMenu size={32} />
            </span>
            <Sidebar openMenu={openMenu} />
            <Home />
            <About />
            <Showcase />
            <Mark />
        </div>
    );
}

export default App;
