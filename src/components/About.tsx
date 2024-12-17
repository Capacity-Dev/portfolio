import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  BiCode,
  BiLogoAndroid,
  BiLogoGithub,
  BiLogoLinkedinSquare,
  BiServer,
  BiSolidCloud,
  BiSolidData,
} from "react-icons/bi";
import { BsWindowDesktop } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const About = () => {
  const [contactModallOpen, setContactModalOpen] = useState(false);
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setContactModalOpen(false);
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  },[])

  return (
    <>
      <div className="w-full min-[720px]:w-9/12">
        <div className="w-full flex px-4 justify-between gap-5 items-center max-[720px]:flex-col">
          <motion.h1
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="text-6xl xl:text-7xl font-sans text-gray-100 font-bold my-3"
          >
            About <span className="text-green-300">Me</span>
          </motion.h1>
        </div>
        <div className="mt-6 text-justify">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="px-5"
          >
            <h2 className="text-2xl font-sans text-green-300 font-bold mb-4">
              Introduction
            </h2>
            <p className="mb-6">
              I’m <span className="font-bold">Agabo</span>, a passionate and
              dedicated software developer who loves turning ideas into
              functional and innovative software solutions. My journey in
              development has been fueled by curiosity, creativity, and the
              drive to solve real-world challenges through technology.
            </p>
          </motion.div>
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="px-5"
          >
            <h2 className="text-2xl font-sans text-green-300 font-bold mb-4">
              Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-900 p-4 rounded-xl shadow-sm shadow-gray-200 hover:shadow-green-200 hover:shadow-md transition-all duration-500">
                <h3 className="text-xl font-bold mb-2 text-green-300">
                  Efficiency
                </h3>
                <p>
                  Writing clean, maintainable, and scalable code that stands the
                  test of time.
                </p>
              </div>
              <div className="bg-gray-900 p-4 rounded-xl shadow-sm shadow-gray-200 hover:shadow-green-200 hover:shadow-md transition-all duration-500">
                <h3 className="text-xl font-bold mb-2 text-green-300">
                  User-Centric Design
                </h3>
                <p>
                  Prioritizing exceptional user experience in every application
                  development.
                </p>
              </div>
              <div className="bg-gray-900 p-4 rounded-xl shadow-sm shadow-gray-200 hover:shadow-green-200 hover:shadow-md transition-all duration-500">
                <h3 className="text-xl font-bold mb-2 text-green-300">
                  Innovation
                </h3>
                <p>
                  Continuously exploring new technologies to bring fresh ideas
                  to life.
                </p>
              </div>
              <div className="bg-gray-900 p-4 rounded-xl shadow-sm shadow-gray-200 hover:shadow-green-200 hover:shadow-md transition-all duration-500">
                <h3 className="text-xl font-bold mb-2 text-green-300">
                  Collaboration
                </h3>
                <p>
                  Working closely with clients and teams to deliver tailored
                  solutions.
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="px-5"
          >
            <h2 className="text-2xl font-sans text-green-300 font-bold mb-4">
              Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
              <div className="bg-gray-900 p-6 rounded-xl shadow-sm shadow-gray-200 hover:shadow-green-200 hover:shadow-md transition-all duration-500 group">
                <div className="flex items-center gap-3 mb-4">
                  <BiCode className="text-3xl text-green-300 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold">Frontend Development</h3>
                </div>
                <p>React, React Native, TypeScript, Tailwind CSS</p>
              </div>
              <div className="bg-gray-900 p-6 rounded-xl shadow-sm shadow-gray-200 hover:shadow-green-200 hover:shadow-md transition-all duration-500 group">
                <div className="flex items-center gap-3 mb-4">
                  <BiLogoAndroid className="text-3xl text-green-300 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold">Mobile Development</h3>
                </div>
                <p> React Native, NativeWind, Kotlin</p>
              </div>

              <div className="bg-gray-900 p-6 rounded-xl shadow-sm shadow-gray-200 hover:shadow-green-200 hover:shadow-md transition-all duration-500 group">
                <div className="flex items-center gap-3 mb-4">
                  <BiServer className="text-3xl text-green-300 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold">Backend Development</h3>
                </div>
                <p>Node.js, Python, PHP, Express, Laravel, Django</p>
              </div>

              <div className="bg-gray-900 p-6 rounded-xl shadow-sm shadow-gray-200 hover:shadow-green-200 hover:shadow-md transition-all duration-500 group">
                <div className="flex items-center gap-3 mb-4">
                  <BsWindowDesktop className="text-3xl text-green-300 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold">Desktop Development</h3>
                </div>
                <p>Electron, Tauri, PyWebview, Rust</p>
              </div>

              <div className="bg-gray-900 p-6 rounded-xl shadow-sm shadow-gray-200 hover:shadow-green-200 hover:shadow-md transition-all duration-500 group">
                <div className="flex items-center gap-3 mb-4">
                  <BiSolidData className="text-3xl text-green-300 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold">Database</h3>
                </div>
                <p>MongoDB, PostgreSQL, MySQL, Firebase</p>
              </div>

              <div className="bg-gray-900 p-6 rounded-xl shadow-sm shadow-gray-200 hover:shadow-green-200 hover:shadow-md transition-all duration-500 group">
                <div className="flex items-center gap-3 mb-4">
                  <BiSolidCloud className="text-3xl text-green-300 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold">Other Technologies</h3>
                </div>
                <p>
                  Git, Arduino, CircuitPython, Bluetooth, Lora, Embedded Systems
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="px-5"
          >
            <h2 className="text-2xl font-sans text-green-300 font-bold mb-4">
              Experience
            </h2>
            <p className="mb-6">
              Over 2 years of experience in software development, working on
              various projects from mobile applications to IoT solutions.
              Specialized in creating scalable web applications and integrating
              hardware with software solutions.
            </p>
            <p>Let Show some of my projects below!</p>

            <div className="w-full flex gap-10 mt-8">
              <NavLink
                to={"/projects"}
                className="bg-gray-900 py-2 px-6 rounded-xl shadow-sm shadow-gray-200 hover:bg-gray-800 hover:shadow-green-200 hover:text-green-200 hover:shadow-md transition-all duration-700"
              >
                Go to Projects
              </NavLink>
              <button
                onClick={() => setContactModalOpen(true)}
                className="bg-gray-900 py-2 px-6 rounded-xl shadow-sm shadow-gray-200 hover:shadow-green-200 hover:text-green-200 hover:shadow-md transition-all duration-700"
              >
                Contact Me
              </button>
            </div>
          </motion.div>
        </div>
      </div>
      <AnimatePresence>
        {contactModallOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="bg-gray-800 rounded-lg p-6 shadow-lg w-11/12 sm:w-96"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-xl font-semibold text-gray-100 mb-4">
                Contact Me Now !
              </h2>
              <div className="flex items-center gap-4">
                <div className="bg-gray-900 py-3 px-2 rounded-xl shadow-sm shadow-gray-200 hover:shadow-green-200 hover:shadow-md transition-all duration-700">
                  <span className="text-gray-300">+243 850 401 928</span>
                </div>

                <div className="flex gap-6">
                  <a
                    href="https://github.com/Capacity-Dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-900 p-3 rounded-xl shadow-sm shadow-gray-200 hover:shadow-green-200 hover:shadow-md hover:rotate-[360deg] transition-all duration-700"
                  >
                    <BiLogoGithub className="text-2xl text-gray-300 hover:text-green-300" />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/capacity-agabo/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-900 p-3 rounded-xl shadow-sm shadow-gray-200 hover:shadow-green-200 hover:shadow-md hover:rotate-[360deg] transition-all duration-700"
                  >
                    <BiLogoLinkedinSquare className="text-2xl text-gray-300 hover:text-green-300" />
                  </a>
                </div>
              </div>

              <button
                onClick={() => setContactModalOpen(false)}
                className="mt-4 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default About;
