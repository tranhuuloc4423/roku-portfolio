import "./App.css";
import "./index.css";
import Home from "./components/home/Home";
import Skills from "./components/skills/Skills";
import { Routes, Route } from "react-router-dom";
import Showcase from "./components/showcase/Showcase";
import Mark from "./components/mark/Mark";
import Container from "./components/container/Container";

function App() {
    document.title = "Roku - portfolio";
    return (
        <div className="mx-auto font-poppins bg-[#f7f8fa]">
            <Routes>
                <Route path={"/*"} element={<Container />}>
                    <Route path="" element={<Home />} />
                    <Route path="skill" element={<Skills />} />
                    <Route path="showcase" element={<Showcase />} />
                    <Route path="mark" element={<Mark />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
