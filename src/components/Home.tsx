import { NavLink } from "react-router-dom";
import myPhoto from "../assets/ag-img.png";
import { motion } from "framer-motion";
const part1 = "I'm";
const part2 = "Agabo Kajabika";

const Home = () => {
  const sentense = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.8,
        staggerChildren: 0.15,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const imageAnimation = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        duration: 1.5,
        bounce: 0.4,
      },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const buttonHover = {
    scale: 1.05,
    transition: {
      duration: 0.2,
    },
  };

  return (
    <div className="w-full min-[720px]:w-9/12">
      <div className="w-full flex px-4 justify-between gap-5 items-center max-[720px]:flex-col">
        <motion.div
          variants={imageAnimation}
          initial="hidden"
          animate="visible"
          whileHover={{ scale: 1.1 }}
          className="rounded-full object-cover border-4 w-60 h-60 xl:w-64 xl:h-64 border-green-400 overflow-hidden"
        >
          <img src={myPhoto} className="object-cover w-full h-full" />
        </motion.div>
        <div className="max-md:text-center max-md:mt-4">
          <motion.h2
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="text-2xl font-sans text-gray-100 font-bold"
          >
            Hello !
          </motion.h2>
          <motion.h1
            variants={sentense}
            initial="hidden"
            animate="visible"
            className="text-6xl xl:text-7xl font-sans text-gray-100 font-bold my-3"
          >
            {part1.split("").map((l, i) => (
              <motion.span key={l + "1" + i} variants={letter}>
                {l}
              </motion.span>
            ))}{" "}
            <span className="text-green-300">
              {part2.split("").map((l, i) => (
                <motion.span key={l + "1" + i} variants={letter}>
                  {l}
                </motion.span>
              ))}{" "}
            </span>
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="text-2xl text-gray-100 font-bold hover:bg-gradient-to-r hover:from-green-400 hover:to-red-500 hover:bg-clip-text hover:text-transparent transition-all duration-300"
          >
            Electronician & Software Developer
          </motion.p>
        </div>
      </div>
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        className="mt-6 text-justify"
      >
        <p className="px-5">
          I'm a versatile software developer with a passion for crafting
          innovative solutions to real-world problems. From building
          user-friendly mobile apps with React Native and Kotlin to implementing
          powerful backend systems in Python, PHP, and Javascript, I thrive on
          creating efficient, scalable, and impactful software. My projects
          range from connected IoT applications to intuitive stock management
          systems and APIs that streamline business processes. With a strong
          focus on user experience and clean code, I'm always eager to learn,
          adapt, and bring ideas to life through technology.
        </p>
        <div className="w-full flex gap-10 mt-4 px-5">
          <NavLink to="/about">
            <motion.button
              whileHover={buttonHover}
              whileTap={{ scale: 0.95 }}
              className="bg-gray-900 py-2 px-6 rounded-xl shadow-sm shadow-gray-200 hover:bg-gray-800 hover:shadow-green-200 hover:text-green-200 hover:shadow-md transition-all duration-700"
            >
              More Infos About Me
            </motion.button>
          </NavLink>
          <NavLink to="/projects">
            <motion.button
              whileHover={buttonHover}
              whileTap={{ scale: 0.95 }}
              className="bg-gray-900 py-2 px-6 rounded-xl shadow-sm shadow-gray-200 hover:shadow-green-200 hover:text-green-200 hover:shadow-md transition-all duration-700"
            >
              My Projects
            </motion.button>
          </NavLink>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
