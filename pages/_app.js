// import AOS from "aos";
// import "aos/dist/aos.css";
import Head from "next/head";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-scroll";
import BackToTop from "../components/BackToTop";
import "../styles/global.css";
import AboutMe from "./aboutme";
import ContactMe from "./contactme";
import Home from "./home";
import Projects from "./projects";
import SkillSet from "./skillset";

export default function App() {
  // useEffect(() => {
  //   AOS.init();
  //   AOS.refresh();
  // }, []);

  return (
    <div className="">
      <Head>
        <title>Khizer Javed Iqbal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Home />
        <AboutMe />
        <SkillSet />
        <Projects />
        <ContactMe />

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
      </main>

      <BackToTop />

      <footer className="flex flex-col gap-[48px] items-between py-[48px] mt-[90px]">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 justify-between w-full px-8 lg:px-[140px]">
          <div className="flex flex-col gap-4 w-full items-center sm:items-start col-span-2 sm:col-span-1">
            <h5 className="mb-2">Social Media</h5>
            <div className="flex gap-4">
              <FaFacebook size={30} className="social-media" />
              <FaLinkedin size={30} className="social-media" />
              <FaGithub size={30} className="social-media" />
              <FaTwitter size={30} className="social-media" />
            </div>
          </div>

          <div className="flex flex-col gap-4 w-full items-center sm:items-start col-span-2 sm:col-span-1">
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

          <div className="flex flex-col gap-4 w-full items-center sm:items-start col-span-2 sm:col-span-1">
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

          <div className="flex flex-col gap-4 w-full items-center sm:items-start col-span-2 sm:col-span-1">
            <h5 className="mb-2">Contact Me</h5>

            <Link to="contact" smooth={true} duration={500}>
              <button type="button" className="btn-primary w-full">
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
