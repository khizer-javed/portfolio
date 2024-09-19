import { motion } from "framer-motion";
import { Element } from "react-scroll";
import Project from "../components/Project";

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
        PROJECTS
      </motion.h1>

      <div className="my-container px-8 lg:px-[140px]">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          <motion.div
            viewport={{ once: true }}
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.3 }}
          >
            <Project />
          </motion.div>

          <motion.div
            viewport={{ once: true }}
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.3 }}
          >
            <Project />
          </motion.div>

          <motion.div
            viewport={{ once: true }}
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.3 }}
          >
            <Project />
          </motion.div>

          <motion.div
            viewport={{ once: true }}
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.3 }}
          >
            <Project />
          </motion.div>
        </div>
      </div>
    </Element>
  );
};

export default Projects;
