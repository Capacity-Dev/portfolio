import { motion } from "framer-motion";

const variants = {
  hidden : {
    fontSize : "1rem"
  },
  visible : {
    fontSize : "8rem"
  }
}
const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-80">
      <div className="text-green-300">
        <motion.div variants={variants} initial={'hidden'} animate="visible" className="text-9xl font-bold text-center">404</motion.div>
        <p className="text-center font-extralight text-xl">Page Not Foud</p>
      </div>
    </div>
  );
};

export default NotFound;
