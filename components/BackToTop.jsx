import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import { Link } from "react-scroll";

const BackToTop = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Link
      to="top"
      smooth={true}
      duration={500}
      className="back-to-top"
      style={{
        display: showScrollButton ? "block" : "none",
      }}
    >
      <FaArrowUp color="white" />
    </Link>
  );
};

export default BackToTop;
