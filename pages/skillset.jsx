import { motion } from "framer-motion";
import React, { useState } from "react";
import { Element } from "react-scroll";

const LANGUAGES = [
  { label: "Javascript", path: "/skillset/js.png", className: "" },
  { label: "Typescript", path: "/skillset/ts.png", className: "" },
  { label: "HTML5", path: "/skillset/html.png", className: "" },
  { label: "CSS", path: "/skillset/css.png", className: "" },
  { label: "LESS", path: "/skillset/less.png", className: "" },
  {
    label: "Tailwind CSS",
    path: "/skillset/tailwindcss.png",
    className: "pt-2",
  },
  { label: "MySQL", path: "/skillset/mysql.png", className: "rounded-full" },
  {
    label: "PostgreSQL",
    path: "/skillset/postgresql.png",
    className: "",
  },
  {
    label: "Sequelize",
    path: "/skillset/sequelize.png",
    className: "",
  },
];

const TECHNOLOGIES = [
  { label: "Node JS", path: "/skillset/nodejs.png", className: "rounded-full" },
  { label: "Nest JS", path: "/skillset/nestjs.png", className: "rounded-full" },
  { label: "EJS", path: "/skillset/ejs.png", className: "" },
  { label: "React JS", path: "/skillset/react.png", className: "rounded-full" },
  { label: "React Hook Form", path: "/skillset/rhf.png", className: "" },
  { label: "Next JS", path: "/skillset/nextjs.png", className: "rounded-full" },
  { label: "Redis", path: "/skillset/redis.png", className: "" },
  { label: "Redux", path: "/skillset/redux.png", className: "" },
  {
    label: "Socket IO",
    path: "/skillset/socketio.png",
    className: "rounded-full",
  },
  { label: "Stripe", path: "/skillset/stripe.png", className: "rounded-full" },
  {
    label: "Open AI Graph API",
    path: "/skillset/openai.png",
    className: "rounded-full",
  },
  { label: "Strapi", path: "/skillset/strapi.png", className: "rounded-full" },
  {
    label: "Framer Motion",
    path: "/skillset/framer.png",
    className: "rounded-full",
  },
  { label: "Vite JS", path: "/skillset/vitejs.png", className: "" },
  {
    label: "ANT Design",
    path: "/skillset/antdesign.png",
    className: "rounded-full",
  },
  {
    label: "Facebook Graph API",
    path: "/skillset/fb.png",
    className: "rounded-full",
  },
  {
    label: "Instagram Graph API",
    path: "/skillset/ig.png",
    className: "rounded-full",
  },
  {
    label: "Linkedin Graph API",
    path: "/skillset/in.png",
    className: "rounded-full",
  },
  {
    label: "Tiktok Graph API",
    path: "/skillset/tiktok.png",
    className: "rounded-full",
  },
];

const TOOLS = [
  { label: "Docker", path: "/skillset/docker.png", className: "rounded-full" },
  { label: "Github", path: "/skillset/github.png", className: "rounded-full" },
  { label: "Slack", path: "/skillset/slack.png", className: "" },
  {
    label: "Clickup",
    path: "/skillset/clickup.png",
    className: "w-[70%]",
  },
  {
    label: "Bitbucket",
    path: "/skillset/bitbucket.png",
    className: "",
  },
  {
    label: "Postman",
    path: "/skillset/postman.png",
    className: "rounded-full",
  },
  {
    label: "Termius",
    path: "/skillset/termius.png",
    className: "rounded-full",
  },
  { label: "PM2", path: "/skillset/pm2.png", className: "" },
];
const SkillSet = () => {
  const [hover, setHover] = useState(null);

  return (
    <Element name="skillset" className="element">
      <motion.h1
        viewport={{ once: true }}
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        className="text-center section-title"
        transition={{ delay: 0.2, duration: 0.3 }}
      >
        SKILL SET
      </motion.h1>

      <div className="skill-set section">
        <div className="my-container px-8 lg:px-[140px]">
          <div className="flex flex-col gap-8">
            <motion.h3
              viewport={{ once: true }}
              className="text-center title"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.3 }}
            >
              LANGUAGES
            </motion.h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
              {LANGUAGES.map((row, index) => (
                <motion.div
                  key={row.label}
                  viewport={{ once: true }}
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  onMouseLeave={() => setHover(null)}
                  onMouseEnter={() => setHover(row.label)}
                  transition={{ delay: (index + 1) / 10, duration: 0.3 }}
                  className="bg-white flex flex-col gap-2 justify-between items-center overflow-hidden border rounded-lg shadow-md hover:shadow-lg p-4"
                >
                  <motion.img
                    src={row.path}
                    transition={{ duration: 0.3 }}
                    className={`w-[70%] ${row.className}`}
                    animate={{ scale: hover === row.label ? 1.1 : 1 }}
                  />
                  <div className="flex justify-center px-2 py-3">
                    {row.label}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.h3
              viewport={{ once: true }}
              className="text-center title"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.3 }}
            >
              TECHNOLOGIES
            </motion.h3>

            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
              {TECHNOLOGIES.map((row, index) => (
                <motion.div
                  viewport={{ once: true }}
                  key={row.label}
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  onMouseLeave={() => setHover(null)}
                  onMouseEnter={() => setHover(row.label)}
                  transition={{ delay: (index + 1) / 10, duration: 0.3 }}
                  className="bg-white flex flex-col gap-2 justify-between items-center overflow-hidden border rounded-lg shadow-md hover:shadow-lg p-4"
                >
                  <motion.img
                    src={row.path}
                    transition={{ duration: 0.3 }}
                    className={`w-[70%] ${row.className}`}
                    animate={{ scale: hover === row.label ? 1.1 : 1 }}
                  />
                  <div className="flex justify-center">{row.label}</div>
                </motion.div>
              ))}
            </div>

            <motion.h3
              viewport={{ once: true }}
              className="text-center title"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.3 }}
            >
              TOOLS
            </motion.h3>

            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
              {TOOLS.map((row, index) => (
                <motion.div
                  key={row.label}
                  viewport={{ once: true }}
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  onMouseLeave={() => setHover(null)}
                  onMouseEnter={() => setHover(row.label)}
                  transition={{ delay: (index + 1) / 10, duration: 0.3 }}
                  className="bg-white flex flex-col gap-2 justify-between items-center overflow-hidden border rounded-lg shadow-md hover:shadow-lg p-4"
                >
                  <motion.img
                    src={row.path}
                    transition={{ duration: 0.3 }}
                    className={`w-[70%] ${row.className}`}
                    animate={{ scale: hover === row.label ? 1.1 : 1 }}
                  />
                  <div className="flex justify-center px-2 py-3">
                    {row.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default SkillSet;
