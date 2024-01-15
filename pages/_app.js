import AOS from "aos";
import "aos/dist/aos.css";
import Head from "next/head";
import { useEffect } from "react";
import {
  FaArrowUp,
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
import CountingComponent from "../components/Cards";
import "../styles/global.css";
import BackToTop from "../components/BackToTop";
import Project from "../components/Project";

export default function Home() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="">
      <Head>
        <title>Khizer Javed Iqbal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Element name="top">
          <div className="h-full w-full grid grid-cols-2 pb-[100px]">
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
                <h1 data-aos="fade-right">I'm Khizer Javed Iqbal</h1>
                <div className="w-full flex items-center gap-4">
                  <Link to="contact" smooth={true} duration={500}>
                    <button
                      className="btn-primary"
                      data-aos="fade-up"
                      data-aos-delay="100"
                      type="button"
                    >
                      Contact
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

        <div className="container">
          <div data-aos="fade-up" data-aos-delay="100">
            <h2 className="text-center">About Us</h2>
          </div>

          <div className="section" data-aos="fade-left" data-aos-delay="100">
            <div className="grid grid-cols-2 gap-8">
              <div className="grid grid-cols-2 gap-4">
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
                  number={37668}
                  title="Working Hours"
                  data-aos="fade-right"
                  data-aos-delay="400"
                />
              </div>
              <div className="flex flex-col justify-between">
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

                <div className="grid grid-cols-4 gap-4">
                  <b>Name</b>
                  <b className="text-primary">Khizer Javed Iqbal</b>
                  <b>Zip code</b>
                  <b className="text-primary">46300</b>
                  <b>Date of birth</b>
                  <b className="text-primary">July 24, 1997</b>
                  <b>Email</b>
                  <b className="text-primary">khizerjaved25@gmail.com</b>
                  <b>Address</b>
                  <b className="text-primary">
                    Satellte Town, Rawalpindi, Pakistan
                  </b>
                  <b>Phone</b>
                  <b className="text-primary">+923085290106</b>
                </div>

                <div>
                  <button className="btn-primary">
                    <FaFilePdf /> Download CV
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="100">
            <h2 className="text-center">Projects</h2>
          </div>

          <div className="section" data-aos="fade-right" data-aos-delay="100">
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

          <div data-aos="fade-up" data-aos-delay="100">
            <h2 className="text-center">Contact Us</h2>
          </div>

          <Element name="contact" className="element">
            <div className="section" data-aos="fade-right" data-aos-delay="100">
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
        </div>
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
