import AnimatedText from "../components/AnimatedText";
import Layout from "../components/Layout";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import profilePic from "../../public/images/profile/developer-pic-2.jpg";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Education from "../components/Education";
import TransitionEffect from "../components/TransitionEffect";

const about = () => {
  return (
    <>
      <Head>
        <title>HARSH GUPTA | About </title>
        <meta
          name="description"
          content="This is about me page for my portfolio website."
        />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center mt-16">
        <Layout className="pt-16">
          <AnimatedText text="Passion Fuels Purpose!" className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8" />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Biography
              </h2>
              <p className="font-medium">
                👋 Hello, I&apos;m Harsh Gupta, a seasoned full-stack developer
                with a passion for crafting innovative software solutions. With
                a solid foundation in software development and project
                management, I bring a versatile skill set to the table.
              </p>
             
              <p className="my-4 font-medium">
                🌐 I&apos;m also honing my skills 
                into full-stack wizardry with MERN STACK
                My creations include a dynamic Prompt_GPT, a vibrant
                Navritih Student Fourm.
              </p>
              <p className="font-medium">
                💼 I&apos;m on the lookout for exciting opportunities as a
                &quot;Full-Stack Developer&quot; and &quot;Software Project
                Manager.&quot; My track record speaks volumes, and I&apos;m
                ready to take on the responsibilities that come with these
                roles.
              </p>
            </div>
            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
              <Image
                src={profilePic}
                alt="Harsh Gupta"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw, 33vw"
              />
            </div>
            
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;
