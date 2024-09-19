import React from "react";
import { Element, Link } from "react-scroll";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <Element name="top">
      <div className="h-full w-full grid sm:grid-cols-2">
        <div className="flex flex-col h-full w-full items-center sm:items-start justify-between bg-white gap-[80px] sm:gap-8 px-8 lg:px-[140px] py-[30px]">
          <motion.h3
            viewport={{ once: true }}
            initial={{ y: 70, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            Khizer.
          </motion.h3>

          <div className="flex flex-col gap-8 w-full">
            <motion.div
              viewport={{ once: true }}
              initial={{ y: 70, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.3 }}
            >
              <h3 className="text-primary text-center sm:text-start">
                <Typewriter
                  options={{
                    strings: ["Web Developer", "Project Manager", "Team Lead"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h3>
            </motion.div>
            <div>
              <motion.div
                viewport={{ once: true }}
                initial={{ x: -70, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.3 }}
              >
                <h1 className="name-heading text-center sm:text-start">I'm</h1>
              </motion.div>

              <motion.div
                viewport={{ once: true }}
                initial={{ x: -70, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.3 }}
              >
                <h1 className="name-heading text-center sm:text-start">
                  Khizer Javed Iqbal
                </h1>
              </motion.div>
            </div>
            <div className="w-full flex items-center justify-center sm:justify-start gap-4">
              <Link to="contact" smooth={true} duration={500}>
                <motion.button
                  type="button"
                  className="btn-primary"
                  viewport={{ once: true }}
                  initial={{ y: 70, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.3 }}
                >
                  Connect
                </motion.button>
              </Link>
              <Link to="projects" smooth={true} duration={500}>
                <motion.button
                  className="btn-secondary"
                  viewport={{ once: true }}
                  initial={{ y: 70, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.3 }}
                >
                  Projects
                </motion.button>
              </Link>
            </div>
          </div>
          <p></p>
        </div>
        <img
          className="h-[100vh] w-full object-cover hidden sm:block"
          src="/inhanced-full.jpg"
        />
      </div>
    </Element>
  );
};

export default Home;
