import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import ListIcon from "./ListIcon";

const experiences = [
  {
    id: 1,
    position: "Software Developer intern",
    company: "NatureMark System",
    companyLink: "https://www.ellucian.com/",
    time: " January 2025 - May 2025",
    address: "Sy No 76 & 86, Primeco Union City, ITPL Main Rd, Sadara Mangala Industrial Area, Pattandur Agrahara, Kadugodi, Bengaluru, Karnataka 560067",
    work: [
      "Optimized productivity card API endpoints using caching and compression to boost throughput significantly.",
      "Integrated Google Workspace APIs with OAuth 2.0, improving user personalization and increasing daily interactions.",
      "Implemented AWS DynamoDB for backend storage, enhancing query response times for large user datasets.",
      "Engineered cross-platform authentication logic across multiple microservices, drastically reducing implementation time."
    ],
  },
  {
    id: 2,
    position: "Software Developer intern",
    company: "NatureMark System",
    companyLink: "https://www.naturemarksystems.com/",
    time: " April 2024 - June 2024",
    address: "REMOTE",
    work:[
  "Improved API efficiency by filtering redundant backend responses, enhancing user experience across platforms.",
  "Refactored image handling and compression, enabling faster page loads on various devices and browsers.",
  "Applied Tailwind CSS to accelerate UI build times, speeding up product release iterations.",
  "Collaborated with developers to deploy a Node.js verification engine, significantly reducing manual workload."
]  
},
  {
    id: 3,
    position: "Web developer",
    company: "Suvidha Foundation",
    companyLink: "https://suvidhafoundationedutech.org/",
    time: "October 2023 - November 2023",
    address: "Remote",
    work:[
  "Developed a neural network model for resume shortlisting, automating candidate screening with high accuracy.",
  "Built an admin web tool using Flask to streamline offer letter distribution and improve candidate engagement.",
  "Designed and integrated a secure SQLite database with role-based access and encryption for candidate data.",
  "Automated hiring workflows, reducing time-to-hire and increasing overall recruitment efficiency."
]
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
        <ul className="list-disc pl-5 font-medium w-full md:text-sm space-y-1">
          {work.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
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
