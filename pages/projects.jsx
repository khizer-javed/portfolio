import { motion } from "framer-motion";
import { Element } from "react-scroll";
import Project from "../components/Project";

const PROJECTS = [
  {
    id: 1,
    label: "Abev.ai",
    preview: "https://www.abev.ai/en",
    thumbnail: "/projects/abev-thumbnail.png",
  },
  {
    id: 2,
    label: "Cellar",
    preview: "https://nyccellar.com/",
    thumbnail: "/projects/cellar-thumbnail.png",
  },
  {
    id: 3,
    label: "Nangarra Games",
    preview: "https://nangarra.games/",
    thumbnail: "/projects/ng-thumbnail.png",
  },
  {
    id: 4,
    label: "Drag Drop Workout",
    preview: "https://dragdropworkout.vercel.app/",
    thumbnail: "/projects/ddw-thumbnail.png",
  },
];

const Projects = () => {
  return (
    <Element name="projects" className="element">
      <motion.h1
        viewport={{ once: true }}
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        className="text-center section-title px-8 lg:px-[140px]"
        transition={{ delay: 0.2, duration: 0.3 }}
      >
        PORTFOLIO
      </motion.h1>

      <div className="my-container px-8 lg:px-[140px]">
        <div className="grid sm:grid-cols-2 md:grid-cols-2 justify-between gap-8">
          {PROJECTS.map((row) => (
            <motion.div
              key={row.id}
              viewport={{ once: true }}
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.3 }}
            >
              <Project data={row} />
            </motion.div>
          ))}
        </div>
      </div>
    </Element>
  );
};

export default Projects;
