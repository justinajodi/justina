import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact, FaUniversity } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import { Book, Building, GraduationCap, School } from "lucide-react";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Qualification",
    hash: "#qualification",
  },
  {
    name: "Contact",
    hash: "#contact",
    
  },

] as const;

export const experiencesData = [

  {
    title: "BSC Computer Science",
    location: "K.V.Pendharkar College of Arts, Science and Commerce, Dombivili. In this phase i developed 5 projects using latest framework like react.",
    description:
      "CGPA - 9.9",
    icon: React.createElement(GraduationCap),
    date: "2024",
  },
  {
    title: "HSC",
    location: "ICLES Motilal Jhunjhunwala, Vashi",
    description:
      "Scored - 89%",
    icon: React.createElement(Building),
    date: "2021",
  },
  {
    title: "SSC",
    location: "IES Navi Mumbai High School, Vashi",
    description:
      "Scored - 84%",
    icon: React.createElement(School),
    date: "2019",
  },
] as const;

export const projectsData = [
  {
    title: "Eduquic",
    description:
      "Next js E-Learning Website with AI tools,Notes,Quizes and many more.",
    tags: ["Nextjs","Tailwind css","Typescript","Mysql","Prisma Client","Clerk","Uploadthings","Shadcn UI"],
    imageUrl: corpcommentImg,
  },
  {
    title: "MIU",
    description:
      "MERN stack Fashion E-commerce Website.",
    tags: ["Mongodb","Express","React","Nodejs","Cloudinary","JWT"],
    imageUrl: rmtdevImg,
  },
  {
    title: "FLEX",
    description:
      "Next js Collaborative and Real-time whiteboard.",
    tags: ["Nextjs","Tailwind css","Typescript","Mysql","Prisma Client","Clerk","Uploadthings","Shadcn UI" ],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "Express",
  "MySQL",
  "Python",

] as const;
