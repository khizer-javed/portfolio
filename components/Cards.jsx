import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const CountingComponent = (props) => {
  const { title, number, ...rest } = props;
  const [ref, inView] = useInView();

  return (
    <div
      className="border shadow-lg rounded-md grid justify-center items-center p-8 min-h-[250px]"
      {...rest}
    >
      <h2 ref={ref} className="text-primary text-center">
        {inView && <CountUp end={number} duration={5} />}
      </h2>
      <h4 className="text-center">{title}</h4>
    </div>
  );
};

export default CountingComponent;
