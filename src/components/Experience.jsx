import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import ListIcon from "./ListIcon";

const experiences = [
  {
    id: 1,
    position: "Software Developer intern",
    company: "NatureMark System",
    companyLink: "https://www.linkedin.com/company/nature-mark-sys/",
    time: " April 2024 - June 2024",
    address: "REMOTE",
    work: "As a software developer on the Marketplace Building Team for Carbon Credit Verification and Sale and Purchase in NatureMark System, optimized API response by removing unwanted filters resulting in a 20% performance gain, and improved the loading time of Marketplace by optimizing images with added Tailwind CSS.",
  },
  {
    id: 2,
    position: "Web developer",
    company: "Suvidha Foundation",
    companyLink: "https://www.linkedin.com/company/suvidha-foundation/",
    time: "October 2023 - November 2023",
    address: "Remote",
    work: "Engineered a custom web tool for Admin to streamline the offer letter distribution process, resulting in a 40% increase in candidate response rate and 50% faster time-to-hire.",
  },
  
  
];

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <ListIcon reference={ref} />
      <motion.div>
        <h3
          className="capitalize font-bold text-2xl sm:text-xl xs:text-lg"
          intial={{ y: 50 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5, type: "spring" }}
        >
          {position}&nbsp;{" "}
          <a
            className="capitalize text-primary dark:text-primaryDark"
            target="_blank"
            href={companyLink}
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[50%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          {experiences.map(
            ({ id, position, company, companyLink, time, address, work }) => (
              <Details
                key={id}
                position={position}
                company={company}
                companyLink={companyLink}
                time={time}
                address={address}
                work={work}
              />
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default Experience;
