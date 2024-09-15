import AOS from "aos";
import "aos/dist/aos.css";
import Head from "next/head";
import { useEffect } from "react";
import {
  FaFacebook,
  FaFilePdf,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { FiSmartphone } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { Element, Link } from "react-scroll";
import Typewriter from "typewriter-effect";
import BackToTop from "../components/BackToTop";
import CountingComponent from "../components/Cards";
import Project from "../components/Project";
import "../styles/global.css";

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
            <div className="flex flex-col h-full w-full items-start justify-between main-text">
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
                  <button
                    className="btn-secondary"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    Projects
                  </button>
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

        <div data-aos="fade-up" data-aos-delay="100">
          <h1 className="text-center section-title">ABOUT ME</h1>
        </div>

        <div className="section" data-aos="fade-left" data-aos-delay="100">
          <div className="container p-4 sm:p-0">
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="grid md:grid-cols-2 gap-4">
                <CountingComponent
                  number={5}
                  title="Happy Clients"
                  data-aos="fade-right"
                  data-aos-delay="300"
                />

                <CountingComponent
                  number={10}
                  title="Projects Done"
                  data-aos="fade-right"
                  data-aos-delay="200"
                />

                <CountingComponent
                  number={1569}
                  title="Coffees"
                  data-aos="fade-right"
                  data-aos-delay="500"
                />

                <CountingComponent
                  number={calculateWorkingHours("03/01/2019")}
                  title="Working Hours"
                  data-aos="fade-right"
                  data-aos-delay="400"
                />
              </div>
              <div className="flex flex-col gap-4 justify-between">
                <h5 className="text-primary">About Me</h5>
                <h2>Enterprise Web Applications Specialist.</h2>
                <p>
                  With a focus on crafting robust solutions for large-scale
                  organizations, I am an accomplished Enterprise Web Application
                  Developer. My expertise lies in developing sophisticated data
                  management systems, dynamic social media marketing platforms,
                  and efficient medical appointment applications. Leveraging
                  extensive experience, I am dedicated to delivering scalable
                  and innovative solutions that empower enterprises to navigate
                  and thrive in the ever-evolving digital landscape.
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

        <div data-aos="fade-up" data-aos-delay="100">
          <h1 className="text-center section-title">SKILL SET</h1>
        </div>

        <div className="section" data-aos="fade-right" data-aos-delay="100">
          <div className="container p-4 sm:p-0">
            <div className="flex flex-col gap-8">
              <h3 className="text-center title" data-aos="fade-up">
                LANGUAGES
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
                {LANGUAGES.map((row, index) => (
                  <div
                    key={row.label}
                    data-aos="fade-up"
                    className="flex flex-col gap-3 justify-between items-center overflow-hidden border rounded-lg shadow-md hover:shadow-lg p-4"
                    data-aos-delay={`${index + 1}00`}
                  >
                    <img
                      src={row.path}
                      className={`w-[80%] ${row.className}`}
                    />
                    <div className="flex justify-center px-2 py-3">
                      {row.label}
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="text-center title" data-aos="fade-up">
                TECHNOLOGIES
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
                {TECHNOLOGIES.map((row, index) => (
                  <div
                    key={row.label}
                    data-aos="fade-up"
                    className="flex flex-col gap-3 justify-between items-center overflow-hidden border rounded-lg shadow-md hover:shadow-lg p-4"
                    data-aos-delay={`${index + 1}00`}
                  >
                    <img
                      src={row.path}
                      className={`w-[80%] ${row.className}`}
                    />
                    <div className="flex justify-center">{row.label}</div>
                  </div>
                ))}
              </div>

              <h3 className="text-center title" data-aos="fade-up">
                TOOLS
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
                {TOOLS.map((row, index) => (
                  <div
                    key={row.label}
                    data-aos="fade-up"
                    className="flex flex-col gap-3 justify-between items-center overflow-hidden border rounded-lg shadow-md hover:shadow-lg p-4"
                    data-aos-delay={`${index + 1}00`}
                  >
                    <img
                      src={row.path}
                      className={`w-[80%] ${row.className}`}
                    />
                    <div className="flex justify-center px-2 py-3">
                      {row.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div data-aos="fade-up" data-aos-delay="100">
          <h1 className="text-center section-title">PROJECTS</h1>
        </div>

        <div className="section" data-aos="fade-right" data-aos-delay="100">
          <div className="container">
            <div className="grid grid-cols-4 gap-4">
              <div data-aos="fade-up" data-aos-delay="100">
                <Project />
              </div>
              <div data-aos="fade-up" data-aos-delay="200">
                <Project />
              </div>
              <div data-aos="fade-up" data-aos-delay="300">
                <Project />
              </div>
              <div data-aos="fade-up" data-aos-delay="400">
                <Project />
              </div>
            </div>
          </div>
        </div>

        <div data-aos="fade-up" data-aos-delay="100">
          <h1 className="text-center section-title">CONNECT WITH ME</h1>
        </div>

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
          <div data-aos="fade-right" data-aos-delay="100">
            <div className="contact">
              <div className="grid grid-cols-2">
                <img src="/contact-bg.png" />
                <div className="flex flex-col gap-8 p-8 items-center justify-center bg-white">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <div data-aos="fade-right" data-aos-delay="300">
                        <FiSmartphone size={20} />
                      </div>
                      <p data-aos="fade-left" data-aos-delay="300">
                        +92 3085290106
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div data-aos="fade-right" data-aos-delay="300">
                        <HiOutlineMail size={20} />
                      </div>
                      <p data-aos="fade-left" data-aos-delay="300">
                        khizerjaved25@gmail.com
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div data-aos="fade-right" data-aos-delay="300">
                        <FaGithub size={20} />
                      </div>
                      <p data-aos="fade-left" data-aos-delay="300">
                        khizerjaved25@gmail.com
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div data-aos="fade-up" data-aos-delay="300">
                      <FaFacebook size={30} className="social-media" />
                    </div>
                    <div data-aos="fade-up" data-aos-delay="400">
                      <FaLinkedin size={30} className="social-media" />
                    </div>
                    <div data-aos="fade-up" data-aos-delay="500">
                      <FaGithub size={30} className="social-media" />
                    </div>
                    <div data-aos="fade-up" data-aos-delay="600">
                      <FaTwitter size={30} className="social-media" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Element>
      </main>

      <BackToTop />

      <footer>
        {/* <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <img src="/vercel.svg" alt="Vercel" className="" />
        </a> */}
        <p className="w-full text-center">
          Copyright ©2024 All rights reserved by Khizer Javed Iqbal.
        </p>
      </footer>
    </div>
  );
}
