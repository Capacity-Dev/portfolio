import { motion } from "framer-motion";
import akaunti1 from "../assets/projects-demo/Akaunti-1.png";
import kgm1 from "../assets/projects-demo/KGManager-1.png";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoLink?: string;
  githubLink?: string;
}

const projectData: Project[] = [
  {
    id: 1,
    title: "Akaunti",
    description: "A full-stack Stock management system with user authentication, Inventory, and Point  of Sale (POS) functionality.",
    image: akaunti1,
    technologies: ["React", "PHP", "MySQL", "SCSS", "HTML", "CSS"],
    //demoLink: "about:blank",
    githubLink: "https://github.com/Capacity-Dev/akaunti"
  },
  {
    id: 2,
    title: "Kongo Green Manager",
    description: "A mini ERP software that includes several functionalities such as: Accounting, Stock management, Supplier management, Customer management and Human resources management.",
    image: kgm1,
    technologies: ["React", "TypeScript", "Tailwind CSS", "PHP", "MySQL", "HTML", "CSS"],
    demoLink: "http://kongo-green.fwh.is/"
  }
];

const Projects = () => {
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

  return (
    <div className="w-full min-[720px]:w-9/12">
      <motion.h1
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="text-6xl xl:text-7xl font-sans text-gray-100 font-bold my-3 px-4"
      >
        My <span className="text-green-300">Projects</span>
      </motion.h1>

      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 gap-8 px-5 mt-6"
      >
        {projectData.map((project) => (
          <div key={project.id} className="bg-gray-900 rounded-xl shadow-sm shadow-gray-200 hover:shadow-green-200 hover:shadow-md transition-all duration-500 overflow-hidden">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-green-300 mb-2">{project.title}</h3>
              <p className="text-gray-100 mb-4">{project.description}</p>
              
              <div className="mb-4">
                <h4 className="font-medium mb-2 text-green-300">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="bg-gray-800 text-gray-100 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                {project.demoLink && (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 py-2 px-6 rounded-xl shadow-sm shadow-gray-200 hover:shadow-green-200 hover:text-green-200 hover:shadow-md transition-all duration-700"
                  >
                    Live Demo
                  </a>
                )}
               { project.githubLink && <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 py-2 px-6 rounded-xl shadow-sm shadow-gray-200 hover:shadow-green-200 hover:text-green-200 hover:shadow-md transition-all duration-700"
                >
                  View Code
                </a>}
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
