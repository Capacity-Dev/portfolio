import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  BiChevronRight,
  BiHome,
  BiLogoGithub,
  BiLogoLinkedinSquare,
  BiMenu,
  BiX,
} from "react-icons/bi";
import { AnimatePresence, motion } from "framer-motion";

const NAV_LINKS = [
  {
    label: "About",
    path: "/about",
  },
  {
    label: "Projects",
    path: "/projects",
  },
];

const Navbar = () => {
  const [inputText, setInputText] = useState("");
  const [showTooltip, setShowTooltip] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isInvalid, setIsInvalid] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const navigate = useNavigate();

  // List of allowed routes
  const allowedRoutes = ["home", "about", "projects"];
  useEffect(() => {
    const currentPath = window.location.pathname.split("/")[1];
    //if in allowed routes, set input text to current path
    if (allowedRoutes.includes(currentPath)) {
      console.log("done");
      setInputText(currentPath);
    }
  }, [navigate]);

  useEffect(() => {
    //get the current path
    const handleKeyUp = (event: KeyboardEvent) => {
      const key = event.key;

      if (key === "Enter") {
        // Handle Enter key press
        const lowerCaseText = inputText.toLowerCase();
        if (lowerCaseText == "") return navigate("/");
        if (lowerCaseText === "help") {
          setShowModal(true);
        } else if (allowedRoutes.includes(lowerCaseText)) {
          navigate(lowerCaseText == "home" ? "/" : `/${lowerCaseText}`);
        } else {
          // Trigger invalid command color change
          setIsInvalid(true);
          setTimeout(() => setIsInvalid(false), 500); // Revert color after 1 second
        }
      } else if (
        key.length === 1 &&
        key.match(/^[\w\s!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]$/)
      ) {
        // Handle printable characters
        setInputText((prev) => prev + key);
      } else if (key === "Backspace") {
        // Handle backspace
        setInputText((prev) => prev.slice(0, -1));
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setShowModal(false);
      }
    };

    // Attach keyup and escape listeners
    window.addEventListener("keyup", handleKeyUp);
    window.addEventListener("keydown", handleEscape);

    // Cleanup listeners on component unmount
    return () => {
      window.removeEventListener("keyup", handleKeyUp);
      window.removeEventListener("keydown", handleEscape);
    };
  }, [inputText, navigate]);

  return (
    <>
      <div className="w-full mt-3 flex justify-center fixed h-max z-50">
        <div className="h-[58px] w-11/12 md:w-9/12 p-2 rounded-2xl border bg-black/10 backdrop-blur-md z-50 pointer-events-auto mt-4 mx-auto flex sticky transform-gpu justify-between gap-0.5 px-1  [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] sm:gap-1 md:gap-2 items-center">
          <div
            className="cursor-pointer"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
          >
            <div className="transition-transform transform hover:scale-110 flex h-6 items-center justify-between rounded-xl p-5 font-mono text-xl font-semibold space-x-2">
              <NavLink className="flex items-center space-x-2" to="/">
                <BiHome className="text-gray-200 text-2xl" />{" "}
                <span>
                  <BiChevronRight className="text-gray-200 text-2xl" />
                </span>
              </NavLink>
              <div className="font-mono inline-flex items-center">
                <span className="text-gray-200"> ~/ </span>
                {/* Display typed text */}
                <motion.span
                  className="text-gray-300 font-thin text-sm"
                  animate={{
                    color: isInvalid ? "#f87171" : "rgb(134,239,172)", // Red on invalid, green otherwise
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                >
                  {inputText}
                </motion.span>
                {/* Animated Cursor */}
                <motion.span
                  className="ml-2 w-[0.3ch] h-[1.1em]"
                  style={{ backgroundColor: "rgb(188, 182, 182)" }}
                  animate={{ opacity: [1, 0] }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 1.2,
                    ease: "easeInOut",
                  }}
                />{" "}
              </div>
            </div>
            <AnimatePresence>
              {showTooltip && (
                <motion.div
                  className="absolute left-0 -bottom-10 flex items-center justify-center w-auto px-4 py-2 text-sm text-white bg-gray-700 rounded-md shadow-md gap-1"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                >
                  Type{" "}
                  <span className="ml-1 font-bold text-green-300">help</span>to
                  see options
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <div className="flex items-center text-base leading-5 p-5">
            <div className="hidden sm:flex">
              {NAV_LINKS.map((link, index) => (
                <NavLink
                  key={"NAVLINK-" + index}
                  to={link.path}
                  className="block px-4 py-2 text-gray-200 hover:text-green-300 font-bold transition-all duration-1000 ease-in-out"
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
            <div className="sm:hidden">
              <button
                type="button"
                className="ml-1 mr-1 h-8 w-8 rounded py-1"
                aria-label="Toggle Menu"
                onClick={() => setShowMobileMenu(!showMobileMenu)}
              >
                {!showMobileMenu ? (
                  <BiMenu className="text-gray-200 text-2xl hover:text-green-300" />
                ) : (
                  <BiX className="text-gray-200 text-2xl hover:text-green-300" />
                )}
              </button>
              <motion.div
                className="fixed top-16 -right-20 z-10 min-h-screen w-full bg-gradient-to-b from-gray-800 to-gray-900 backdrop-blur-lg"
                initial={{ x: "100%" }}
                animate={{ x: showMobileMenu ? -80 : "100%" }}
                transition={{ type: "tween", duration: 0.3 }}
              >
                <motion.button
                  type="button"
                  aria-label="toggle modal"
                  className="fixed h-full w-full cursor-auto focus:outline-none"
                  onClick={() => setShowMobileMenu(false)}
                />
                <motion.nav
                  className="fixed mt-8 h-full w-full"
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {NAV_LINKS.map((link, index) => (
                    <motion.div
                      key={index}
                      className="px-12 py-4 border-b border-gray-700/50"
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                    >
                      <NavLink
                        to={link.path}
                        className="text-2xl font-bold tracking-widest text-gray-100 hover:text-green-300 transition-all duration-300 flex items-center gap-3"
                        onClick={() => setShowMobileMenu(false)}
                      >
                        {link.label}
                      </NavLink>
                    </motion.div>
                  ))}

                  <motion.div
                    className="absolute top-56 w-full px-12"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    <h3 className="text-gray-400 mb-4 text-sm tracking-wider">
                      CONNECT WITH ME
                    </h3>
                    <div className="flex gap-6">
                      <a
                        href="https://github.com/capacity-dev"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-green-300 transition-all duration-300"
                      >
                        <BiLogoGithub className="text-3xl" />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/capacity-agabo/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-green-300 transition-all duration-300"
                      >
                        <BiLogoLinkedinSquare className="text-3xl" />
                      </a>
                    </div>
                  </motion.div>
                </motion.nav>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <div className=" mt-24"></div>
      <AnimatePresence>
        {showModal && (
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
                Help Menu
              </h2>
              <p className="text-gray-300 mb-4">
                Type any of the following commands:
              </p>
              <ul className="list-disc list-inside text-gray-200">
                <li>
                  <strong>home</strong>: Go to the homepage.
                </li>
                <li>
                  <strong>about</strong>: Learn more about me.
                </li>
                <li>
                  <strong>projects</strong>: View my projects collection.
                </li>
              </ul>
              <button
                onClick={() => setShowModal(false)}
                className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
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

export default Navbar;
