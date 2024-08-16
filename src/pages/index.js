import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profilePic from "../../public/images/profile/developer-pic-1.jpg";
import AnimatedText from "../components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "../components/Icons";
import HireMe from "../components/HireMe";
import lightBulb from '../../public/images/svgs/miscellaneous_icons_1.svg';
import TransitionEffect from "../components/TransitionEffect";

const Home = () => {
  return (
    <>
      <Head>
        <title>Harsh gupta | Home</title>
        <meta name="description" content="This is the home page for the Harsh Gupta Portfolio website" />
      </Head>
      <TransitionEffect />
      <main className="flex items-center text-dark w-full min-h-screen mt-24 pt-16">
        <Layout className="pt-0 md:pt-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 mr-12 md:w-full">
              <Image
                src={profilePic}
                alt="Harsh Gupta"
                className="w-full h-auto lg:hidden md:inline-block md:w-full"
                priority
                
                
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText text="Turning Vision Into Reality With Code And Design." className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"/>
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                As a skilled full-stack developer, I am dedicated to turning
                ideas into innovative web applications. Explore my latest
                projects and articles, showcasing my expertise in React.js and
                web development.
              </p>
              <div className="flex flex-wrap md:flex-col md:gap-2 items-center self-start mt-2 lg:self-center">
                <Link href="/Harsh_Gupta_resume.pdf" target={"_blank"}className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:border-light md:p-2 md:px-4 md:text-base" download={true}>Resume <LinkArrow className={"w-6 ml-1"} /></Link>
                <Link href="mailto:guptaharsh137@gmail.com" target={"_blank"} className="ml-4 text-lg font-medium capitalize text-dark underline underline-offset-2 dark:text-light md:text-base md:m-0">Contact</Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
        <div className="absolute right-8 bottom-8 inline-block w-24 md:hidden">
          <Image src={lightBulb} alt="Harsh Gupta" className="w-full h-auto"/>
        </div>
      </main>
    </>
  );
};

export default Home;
