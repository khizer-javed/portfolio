import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const CountingComponent = (props) => {
  const { title, number, ...rest } = props;
  const [ref, inView] = useInView();

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="about-us-cards" {...rest}>
      <h2 ref={ref} className="text-primary">
        {inView && <CountUp end={number} duration={5} />}
      </h2>
      <h4>{title}</h4>
    </div>
  );
};

export default CountingComponent;
