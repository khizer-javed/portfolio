import AOS from "aos";
import "aos/dist/aos.css";
import Head from "next/head";
import { useEffect, useState } from "react";
import {
  FaFacebook,
  FaFilePdf,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { Element, Link } from "react-scroll";
import Typewriter from "typewriter-effect";
import BackToTop from "../components/BackToTop";
import CountingComponent from "../components/Cards";
import Project from "../components/Project";
import "../styles/global.css";
import { motion } from "framer-motion";
import { RiSendPlaneLine } from "react-icons/ri";

const LANGUAGES = [
  { label: "Javascript", path: "/skillset/js.png", className: "" },
  { label: "Typescript", path: "/skillset/ts.png", className: "" },
  { label: "HTML5", path: "/skillset/html.png", className: "" },
  { label: "CSS", path: "/skillset/css.png", className: "" },
  { label: "LESS", path: "/skillset/less.png", className: "" },
  {
    label: "Tailwind CSS",
    path: "/skillset/tailwindcss.png",
    className: "pt-7",
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
  { label: "Open AI", path: "/skillset/openai.png", className: "rounded-full" },
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

export default function Home() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = `${window.origin}/CV.pdf`;
    link.download = "Khizer Javed Iqbal.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const calculateWorkingHours = (startDate) => {
    const workHoursPerDay = 9;
    const now = new Date();
    let totalHours = 0;
    const start = new Date(startDate);

    if (start > now) {
      return 0;
    }

    for (
      let date = new Date(start);
      date <= now;
      date.setDate(date.getDate() + 1)
    ) {
      const dayOfWeek = date.getDay();

      if (dayOfWeek >= 1 && dayOfWeek <= 5) {
        totalHours += workHoursPerDay;
      }
    }

    return totalHours;
  };

  return (
    <div className="">
      <Head>
        <title>Khizer Javed Iqbal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Element name="top">
          <div className="h-full w-full grid grid-cols-2">
            <div className="flex flex-col h-full w-full items-start justify-between bg-white px-8 lg:px-[140px] py-[30px]">
              <h3 data-aos="fade-right">
                <b>Khizer.</b>
              </h3>
              <div className="flex flex-col gap-8">
                <h3 className="text-primary" data-aos="fade-down">
                  <Typewriter
                    options={{
                      strings: [
                        "Web Developer",
                        "Project Manager",
                        "Team Lead",
                      ],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </h3>
                <div>
                  <h1 data-aos="fade-right" className="name-heading">
                    I'm
                  </h1>
                  <h1 data-aos="fade-right" className="name-heading">
                    Khizer Javed Iqbal
                  </h1>
                </div>
                <div className="w-full flex items-center gap-4">
                  <Link to="contact" smooth={true} duration={500}>
                    <button
                      className="btn-primary"
                      data-aos="fade-up"
                      data-aos-delay="100"
                      type="button"
                    >
                      Connect
                    </button>
                  </Link>
                  <Link to="projects" smooth={true} duration={500}>
                    <button
                      className="btn-secondary"
                      data-aos="fade-up"
                      data-aos-delay="200"
                    >
                      Projects
                    </button>
                  </Link>
                </div>
              </div>
              <p className="w-full text-center"></p>
            </div>
            <img
              className="h-[100vh] w-full object-cover"
              src="/inhanced-full.jpg"
            />
          </div>
        </Element>

        <Element name="aboutme">
          <motion.h1
            viewport={{ once: true }}
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="text-center section-title"
            transition={{ delay: 0.2, duration: 0.3 }}
          >
            ABOUT ME
          </motion.h1>

          <div className="section">
            <div className="my-container px-8 lg:px-[140px]">
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="grid md:grid-cols-2 gap-4">
                  <motion.div
                    viewport={{ once: true }}
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.3 }}
                  >
                    <CountingComponent number={5} title="Happy Clients" />
                  </motion.div>

                  <motion.div
                    viewport={{ once: true }}
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.3 }}
                  >
                    <CountingComponent number={10} title="Projects Done" />
                  </motion.div>

                  <motion.div
                    viewport={{ once: true }}
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.3 }}
                  >
                    <CountingComponent number={1569} title="Coffees" />
                  </motion.div>

                  <motion.div
                    viewport={{ once: true }}
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.3 }}
                  >
                    <CountingComponent
                      number={calculateWorkingHours("03/01/2019")}
                      title="Working Hours"
                    />
                  </motion.div>
                </div>
                <div className="flex flex-col gap-4 justify-between">
                  <h5 className="text-primary">About Me</h5>
                  <h2>Enterprise Web Applications Specialist.</h2>
                  <p className="text-justify">
                    With a focus on crafting robust solutions for large-scale
                    organizations, I am an accomplished Enterprise Web
                    Application Developer. My expertise lies in developing
                    sophisticated data management systems, dynamic social media
                    marketing platforms, and efficient medical appointment
                    applications. Leveraging extensive experience, I am
                    dedicated to delivering scalable and innovative solutions
                    that empower enterprises to navigate and thrive in the
                    ever-evolving digital landscape.
                  </p>

                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <b>Name</b>
                      <b className="text-primary">Khizer Javed Iqbal</b>
                    </div>
                    <div className="flex items-center justify-between">
                      <b>Date of birth</b>
                      <b className="text-primary">July 24, 1997</b>
                    </div>
                    <div className="flex items-center justify-between">
                      <b>Address</b>
                      <b className="text-primary">Rawalpindi, Pakistan</b>
                    </div>
                  </div>

                  <div>
                    <button className="btn-primary" onClick={downloadCV}>
                      <FaFilePdf /> Download CV
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Element>

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

          <div className="section">
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
                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
                  {LANGUAGES.map((row, index) => (
                    <motion.div
                      viewport={{ once: true }}
                      key={row.label}
                      initial={{ y: 100, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ delay: (index + 1) / 10, duration: 0.3 }}
                      className="flex flex-col gap-3 justify-between items-center overflow-hidden border rounded-lg shadow-md hover:shadow-lg p-4"
                    >
                      <motion.img
                        src={row.path}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                        className={`w-[70%] ${row.className}`}
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

                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
                  {TECHNOLOGIES.map((row, index) => (
                    <motion.div
                      viewport={{ once: true }}
                      key={row.label}
                      initial={{ y: 100, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ delay: (index + 1) / 10, duration: 0.3 }}
                      className="flex flex-col gap-3 justify-between items-center overflow-hidden border rounded-lg shadow-md hover:shadow-lg p-4"
                    >
                      <motion.img
                        src={row.path}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                        className={`w-[70%] ${row.className}`}
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

                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
                  {TOOLS.map((row, index) => (
                    <motion.div
                      key={row.label}
                      viewport={{ once: true }}
                      initial={{ y: 100, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ delay: (index + 1) / 10, duration: 0.3 }}
                      className="flex flex-col gap-3 justify-between items-center overflow-hidden border rounded-lg shadow-md hover:shadow-lg p-4"
                    >
                      <motion.img
                        src={row.path}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                        className={`w-[70%] ${row.className}`}
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

        <Element name="projects" className="element">
          <motion.h1
            viewport={{ once: true }}
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="text-center section-title"
            transition={{ delay: 0.2, duration: 0.3 }}
          >
            PROJECTS
          </motion.h1>

          <div className="my-container px-8 lg:px-[140px]">
            <div className="grid grid-cols-4 gap-4">
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

        {/* <div className="box">
          <i className="fas fa-quote-left fa2"></i>
          <div className="text">
            <i className="fas fa-quote-right fa1"></i>
            <div>
              <h3>Quote of the day</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </div> */}

        <Element name="contact" className="element">
          <motion.h1
            viewport={{ once: true }}
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="text-center section-title"
            transition={{ delay: 0.2, duration: 0.3 }}
          >
            CONNECT WITH ME
          </motion.h1>

          <motion.div
            className="contact"
            initial={{ opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.3 }}
          >
            <div className="my-container px-8 lg:px-[140px]">
              <div className="grid sm:grid-cols-2 rounded-xl overflow-hidden">
                <img className="hidden sm:block" src="/contact-bg.png" />
                <div className="grid grid-cols-2 gap-8 p-8 items-center justify-center bg-white">
                  <div className="flex flex-col gap-2">
                    <label for="firstName">First Name</label>
                    <input type="text" id="firstName" />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label for="lastName">Last Name</label>
                    <input type="text" id="lastName" />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label for="phone">Phone Number</label>
                    <input type="number" id="phone" />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label for="email">Email</label>
                    <input type="email" id="email" />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label for="companyName">Company Name</label>
                    <input type="text" id="companyName" />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label for="companyWebsite">Company Website</label>
                    <input type="text" id="companyWebsite" />
                  </div>

                  <div className="flex flex-col gap-2 sm:col-span-2">
                    <label for="Message">Message</label>
                    <textarea id="Message" rows={5} />
                  </div>

                  <div className="flex justify-between sm:col-span-2">
                    <button className="btn-primary flex items-center gap-2">
                      <RiSendPlaneLine />
                      {loading ? "Sending..." : "Send Message"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </Element>
      </main>

      <BackToTop />

      <footer className="flex flex-col gap-[48px] items-between bg-white py-[48px] mt-[90px]">
        <div className="grid grid-cols-4 gap-8 justify-between w-full px-8 lg:px-[140px]">
          <div className="flex flex-col gap-4">
            <h5 className="mb-2">Social Media</h5>
            <div className="flex gap-4">
              <FaFacebook size={30} className="social-media" />
              <FaLinkedin size={30} className="social-media" />
              <FaGithub size={30} className="social-media" />
              <FaTwitter size={30} className="social-media" />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h5 className="mb-2">Services</h5>
            <ul className="flex flex-col gap-2">
              <li>
                <a className="link">Web Design</a>
              </li>
              <li>
                <a className="link">App Development</a>
              </li>
              <li>
                <a className="link">Cloud Services</a>
              </li>
              <li>
                <a className="link">IT Management</a>
              </li>
              <li>
                <a className="link">Database Design</a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h5 className="mb-2">Useful Links</h5>
            <ul className="flex flex-col gap-2">
              <li>
                <Link
                  className="link"
                  to="aboutme"
                  smooth={true}
                  duration={500}
                >
                  About Me
                </Link>
              </li>
              <li>
                <Link
                  className="link"
                  to="skillset"
                  smooth={true}
                  duration={500}
                >
                  Skill Set
                </Link>
              </li>
              <li>
                <Link
                  className="link"
                  to="projects"
                  smooth={true}
                  duration={500}
                >
                  Projects
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h5 className="mb-2">Contact Me</h5>

            <Link to="contact" smooth={true} duration={500}>
              <button type="button" className="btn-primary">
                Connect
              </button>
            </Link>
          </div>
        </div>
        <hr className="border-gray-100" />
        <p className="w-full text-center px-8 lg:px-[140px]">
          Copyright ©{new Date().getFullYear()} All rights reserved by Khizer
          Javed Iqbal.
        </p>
      </footer>
    </div>
  );
}
