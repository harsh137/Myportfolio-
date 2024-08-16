import AnimatedText from "../components/AnimatedText";
import { GithubIcon } from "../components/Icons";
import Layout from "../components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import project1 from "../../public/images/projects/carrent.png";
import project2 from "../../public/images/projects/jobit.png";
import project3 from "../../public/images/projects/tripguide.png";
import project4 from "../../public/images/projects/navarithi.png"

import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);


const FeaturedProjects = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full flex items-center justify-between rounded-3xl rounded-br-2xl border border-solid border-dark bg-light shadow-2xl p-12 relative dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
                  <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]'/>
      <Link href={link} target="_blank" className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full">
        <FramerImage src={img} alt={title} className="w-full h-auto" whileHover={{scale:1.05}} transition={{duration:0.2}} />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">{type}</span>
        <Link href={link} target="_blank" className="hover:underline underline-offset-2">
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">{summary}</p>
      <div className="mt-2 flex items-center">
        <Link href={github} target="_blank" className="w-10">
          <GithubIcon />
        </Link>
        <Link href={link} target="_blank" className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibol dark:bg-light dark:text-dark sm:px-4 sm:text-base">
          Visit Project
        </Link>
      </div>
      </div>
    </article>
  );
};
const Project = ({ type, title, img, link, github, summary }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border boder-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4">
      <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] sm:h-[102%] xs:rounded-[1.5rem]'/>
      <Link href={link} target="_blank" className="w-full cursor-pointer overflow-hidden rounded-lg">
        <FramerImage src={img} alt={title} className="w-full h-auto" whileHover={{scale:1.05}} transition={{duration:0.2}} priority
                sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw, 50vw" />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">{type}</span>
        <span className="text-dark font-medium text-xl dark:text-light lg:text-lg md:text-base">{summary}</span>
        <Link href={link} target="_blank" className="hover:underline underline-offset-2">
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">{title}</h2>
        </Link>
      <div className="w-full mt-2 flex items-center justify-between">
        <Link href={link} target="_blank" className="text-lg font-semibold p-2 px-3 border border-solid border-dark rounded-lg hover:bg-dark hover:text-light cursor-pointer dark:border-light dark:text-light md:text-base">
          Visit
        </Link>
        <Link href={github} target="_blank" className="w-8 md:w-6">
          <GithubIcon />
        </Link>
        
      </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Harsh Gupta | Projects </title>
        <meta
          name="description"
          content="This is projects page for my portfolio website. It displays some of my projects highlighting my skills amd tech-stacks"
        />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light mt-16">
        <Layout className="pt-16">
          <AnimatedText text="Imagination Trumps Knowledge!" className="mb-16 lg:!text-7xl sm:!text-6xl sm:mb-8 xs:!text-4xl" />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProjects
                type="Featured Project"
                title="Prompt GPT | Public AI Prompt "
                summary="It's a public AI prompt sharing website,  user can register and login , and can Share their best prompt in public,  user can also add the TAGS to there prompt to help other user to find that prompt easily, It also have feed page were user can see all the public shared prompt at one place. This project Build Using NEXT-JS "
                img={project1}
                link="prompt-gpt.guptaharsh.me"
                github="https://github.com/harsh137/PromptGPT"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
               <Project
                type="Project"
                title="SuperHero Wiki | Every Superhero And Supervillan"
                summary="This website is a collection of superheroes and supervillains built using public superhero APIs. It provides easy access to information about all your favorite characters in one place. This Project is build using React"
                img={project2}
                link="superhero.guptaharsh.me"
                github="https://github.com/harsh137/SwperHeroWiki"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
                <Project
                type="Project"
                title="AI Image Genrator | Create image of what you think"
                summary="This project is an AI Image Generator built using the Open AI API and Vite technology. It allows users to generate unique and creative images using advanced artificial intelligence technology. With this AI-powered tool, users can create images effortlessly that have never been seen before"
                img={project3}
                link=""
                github="https://github.com/harsh137/AI-Image-Generator"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
                <Project
                type="Project"
                title="NAVARITIH | Student Fourm"
                summary=" Fully responsive web application created for the Navaritih Student Forum and Increase the Presence of the Student
Forum by 100% at same time Increase the registration by 80%."
                img={project4}
                link="https://navaritih.vercel.app/"
                github="https://github.com/harsh137/Navaritih"
              />
            </div>
           
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
