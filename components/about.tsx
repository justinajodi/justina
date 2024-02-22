"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
       "I'm a full stack developer with a passion for crafting innovative solutions and bringing ideas to life. With a solid foundation in both front-end and back-end technologies, I thrive on tackling complex challenges and creating seamless user experiences.

My journey in software development began with a curiosity-driven exploration of coding languages and frameworks. Over the years, I've honed my skills in HTML, CSS, JavaScript, and various backend technologies such as Node.js, Python, and PHP. Whether it's building responsive web applications, designing intuitive user interfaces, or optimizing database performance, I'm dedicated to delivering high-quality solutions that exceed expectations.

Beyond technical expertise, I believe in the power of collaboration and continuous learning. I enjoy working closely with cross-functional teams to understand project requirements, brainstorm creative solutions, and iterate towards success. My adaptability and enthusiasm for learning new technologies allow me to stay at the forefront of industry trends and best practices.
   </p>
    </motion.section>
  );
}
