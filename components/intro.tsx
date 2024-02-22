"use client";

import TypewriterComponent from "typewriter-effect";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { ArrowDownToLine, ArrowRight, Download, Github, InstagramIcon, LinkedinIcon, TwitterIcon, Youtube, YoutubeIcon } from "lucide-react";
import { Button } from "./ui/button";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const imageStyle = {
    borderRadius: '50%',
    border: '1px solid #fff',
  }
   

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
     
      <div className="grid grid-cols-1 sm:grid-cols-12">
      <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className=" mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold mt-10">
            <span className="">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <div className=" text-rose-500">
        <TypewriterComponent
          options={{
            strings: [
              "Designer.",
              "Developer.",
              "Dynamic.",
              "Versatile.",
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
          </h1>
      
          <div>
       
           
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full ml-20 w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative mt-10">
            <Image
              src="/I.jpg"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 drop-shadow-lg dark:drop-shadow-none dark:shadow-[0_0_4px_#fff,0_0_10px_#fb7185,0_0_20px_#fb7185,0_0_50px_#881337,0_0_50px_#881337,0_0_70px_#0c0a09]"
              width={300}
              height={300}
              style={imageStyle} 
            />
          </div>
        </motion.div>
      </div>

     
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        {/* <Link
          href="#contact"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
         <Button variant={"default"}> Contact me here{" "}
          <ArrowRight className="opacity-70 group-hover:translate-x-1 transition" /></Button>
        </Link> */}

        <a
              href="/CV.pdf"
          download
        >
           <Button variant={"default"}> <ArrowDownToLine className="opacity-60 group-hover:translate-y-1 transition" />Download CV{""}
         </Button>
        </a>

      

        <a
          href=" https://github.com/justinajodi"
          target="_blank"
        >
          <Button variant={"ghost"}>  <Github/>{" "} Github</Button>
        
        </a>
        <a
           href=" https://github.com/justinajodi"
          target="_blank"
        >
          <Button variant={"ghost"}>  <YoutubeIcon/> {" "}Yotube</Button>
        </a>
        <a
         href=" https://github.com/justinajodi"
          target="_blank"
        >
      <Button variant={"ghost"}>  <InstagramIcon/>{" "} Instagram</Button>
        </a>
      </motion.div>
    </section>
  );
}
{/* <div className="grid grid-cols-1 sm:grid-cols-12">
<motion.h1
  className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
  initial={{ opacity: 0, y: 100 }}
  animate={{ opacity: 1, y: 0 }}
>
  <div className="text-black font-bold py-10 text-center space-y-5">
    <div className="text-6xl font-black dark:text-zinc-50 sm:text-5xl md:text-6xl lg:text-7xl space-y-5 ">
      <h1>Learn 10X faster. </h1>
      <div className=" text-rose-500">
        <TypewriterComponent
          options={{
            strings: [
              "Designer.",
              "Developer.",
              "Dynamic.",
              "Versatile.",
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
    </div>
    <div className="text-lg font-medium  md:text-xl dark:text-zinc-50 ">
      Elevate your learning with Eduquic.
    </div>
    <div>
      <Link
        href={"/"}
        className="relative px-5 py-2 font-medium text-3xl text-white group"
      >
        <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-rose-500 group-hover:bg-rose-700 group-hover:skew-x-12"></span>
        <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-rose-600 group-hover:bg-rose-500 group-hover:-skew-x-12"></span>
        <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-rose-700 -rotate-12"></span>
        <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-rose-500 -rotate-12"></span>
        <span className="relative">Explore</span>
      </Link>
    </div>
  </div>
</motion.h1>
<motion.div
  initial={{ opacity: 0, scale: 0.5 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.5 }}
  className="col-span-4 place-self-center mt-4 lg:mt-0"
>
  <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
    <Image
      src="/I.jpg"
      alt="hero image"
      className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
      width={300}
      height={300}
    />
  </div>
</motion.div>
</div> */}