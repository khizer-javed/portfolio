import { motion } from "framer-motion";
import { useState } from "react";
import { RiSendPlaneLine } from "react-icons/ri";
import { Element } from "react-scroll";

const ContactMe = () => {
  const [loading, setLoading] = useState(false);

  return (
    <Element name="contact" className="element">
      <motion.h1
        viewport={{ once: true }}
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        className="text-center section-title px-8 lg:px-[140px]"
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
          <div className="grid sm:grid-cols-3 md:grid-cols-2 rounded-xl overflow-hidden">
            <img
              src="/contact-bg.png"
              className="hidden sm:block object-cover h-full "
            />
            <div className="grid sm:grid-cols-2 gap-8 p-8 items-center bg-white w-full col-span-2 md:col-span-1">
              <div className="flex flex-col w-full gap-2 col-span-2 md:col-span-1">
                <label for="firstName">First Name</label>
                <input type="text" id="firstName" />
              </div>

              <div className="flex flex-col w-full gap-2 col-span-2 md:col-span-1">
                <label for="lastName">Last Name</label>
                <input type="text" id="lastName" />
              </div>

              <div className="flex flex-col w-full gap-2 col-span-2 md:col-span-1">
                <label for="phone">Phone Number</label>
                <input type="number" id="phone" />
              </div>

              <div className="flex flex-col w-full gap-2 col-span-2 md:col-span-1">
                <label for="email">Email</label>
                <input type="email" id="email" />
              </div>

              <div className="flex flex-col w-full gap-2 col-span-2 md:col-span-1">
                <label for="companyName">Company Name</label>
                <input type="text" id="companyName" />
              </div>

              <div className="flex flex-col w-full gap-2 col-span-2 md:col-span-1">
                <label for="companyWebsite">Company Website</label>
                <input type="text" id="companyWebsite" />
              </div>

              <div className="flex flex-col w-full gap-2 col-span-2">
                <label for="Message">Message</label>
                <textarea id="Message" rows={5} />
              </div>

              <div className="flex justify-between col-span-2">
                <button className="btn-primary flex items-center gap-2 w-full sm:w-fit">
                  <RiSendPlaneLine />
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </Element>
  );
};

export default ContactMe;
