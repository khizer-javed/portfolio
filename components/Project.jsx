import { motion } from "framer-motion";
import React, { useState } from "react";

const Project = ({ data }) => {
  const [hover, setHover] = useState(false);

  return (
    <div className="project">
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className="flex items-center justify-center relative w-full"
      >
        <div className="rounded-xl overflow-hidden w-full">
          <motion.img
            initial={{ filter: "blur(0px)", scale: 1 }}
            animate={{
              filter: hover ? "blur(2px)" : "blur(0px)",
              scale: hover ? 1.1 : 1,
            }}
            transition={{ duration: 0.3 }}
            src={data.thumbnail}
            className="w-full h-[300px] z-50"
          />
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: hover ? 1 : 0 }}
          className="w-full flex justify-center gap-4 z-50 absolute"
        >
          <a href={data.preview} target="_blank">
            <button type="button" className="btn-primary">
              <h5>Preview</h5>
            </button>
          </a>
          <button type="button" className="btn-primary">
            <h5>Details</h5>
          </button>
        </motion.div>
      </div>
      <h3 className="py-4">{String(data.label).toUpperCase()}</h3>
    </div>
  );
};

export default Project;
