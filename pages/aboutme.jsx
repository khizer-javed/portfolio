import { motion } from "framer-motion";
import { FaFilePdf } from "react-icons/fa";
import { Element } from "react-scroll";
import CountingComponent from "../components/Cards";

const AboutMe = () => {
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

      <div className="aboutme section">
        <div className="my-container px-8 lg:px-[140px]">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="grid md:grid-cols-2 gap-4">
              <motion.div
                viewport={{ once: true }}
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.3 }}
                className="bg-white"
              >
                <CountingComponent number={5} title="Happy Clients" />
              </motion.div>

              <motion.div
                viewport={{ once: true }}
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.3 }}
                className="bg-white"
              >
                <CountingComponent number={10} title="Projects Done" />
              </motion.div>

              <motion.div
                viewport={{ once: true }}
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.3 }}
                className="bg-white"
              >
                <CountingComponent number={1569} title="Coffees" />
              </motion.div>

              <motion.div
                viewport={{ once: true }}
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.3 }}
                className="bg-white"
              >
                <CountingComponent
                  number={calculateWorkingHours("03/01/2019")}
                  title="Working Hours"
                />
              </motion.div>
            </div>
            <div className="flex flex-col gap-4 justify-between">
              <h2>Enterprise Web Applications Specialist.</h2>
              <p className="text-justify">
                With a focus on crafting robust solutions for large-scale
                organizations, I am an accomplished Enterprise Web Application
                Developer. My expertise lies in developing sophisticated data
                management systems, dynamic social media marketing platforms,
                and efficient medical appointment applications. Leveraging
                extensive experience, I am dedicated to delivering scalable and
                innovative solutions that empower enterprises to navigate and
                thrive in the ever-evolving digital landscape.
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
                  <b className="text-primary">Islamabad, Pakistan</b>
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
  );
};

export default AboutMe;
