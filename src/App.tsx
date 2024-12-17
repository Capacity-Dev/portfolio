import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BiLogoGithub, BiLogoLinkedinSquare } from "react-icons/bi";

const Home = lazy(() => import("./components/Home"));
const About = lazy(() => import("./components/About"));
const Projects = lazy(() => import("./components/Projects"));

const year = new Date().getFullYear();

function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center h-[50vh]">
      <div className="w-12 h-12 border-4 border-gray-400 border-t-gray-200 rounded-full animate-spin"></div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="w-[100vw] h-[100vh] bg-[#272c35] text-gray-200 overflow-y-scroll">
        {/* Navbar */}
        <Navbar />
        {/* Content */}
        <div className="w-full flex justify-center max-sm:px-4 mt-14">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
            </Routes>
          </Suspense>
        </div>
        {/* Footer */}
        <div className="w-full flex justify-center py-3 mt-2 text-gray-500">
          <div className="flex max-sm:flex-col max-sm:gap-3 md:w-9/12 border-t-2 border-gray-600 pt-3 justify-between items-center">
            <h4>© {year} Capacity, All Rights Reserved</h4>
            <div className="flex gap-4">
              <a 
                href="https://github.com/Capacity-Dev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:rotate-[360deg] transition-transform duration-500"
              >
                <BiLogoGithub className="text-2xl hover:text-green-300" />
              </a>
              <a 
                href="https://www.linkedin.com/in/capacity-agabo/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:rotate-[360deg] transition-transform duration-500"
              >
                <BiLogoLinkedinSquare className="text-2xl hover:text-green-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;