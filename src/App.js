import "./App.css";
import Home from "./components/home/Home";
import Sidebar from "./components/sidebar/Sidebar";
import About from "./components/about/About";
import "./index.css";

function App() {
    return (
        <div className="mx-auto font-poppins">
            <Sidebar />
            <Home />
            <About />
        </div>
    );
}

export default App;
