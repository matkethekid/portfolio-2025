"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Image, { StaticImageData } from "next/image";
import mateja1 from "../../public/mateja1.webp";
import foodie from "../../public/foodie.webp";
import studiozid from "../../public/studiozid2.png";
import precizna from "../../public/precizna.webp";
import aistartup from "../../public/aistartup.webp";
import hikariagency from '../../public/hikariagency.webp';
import { motion } from "motion/react";

interface Project {
    id: number;
    title: string;
    description: string;
    image: StaticImageData;
    techStack: string[];
}

const projects: Project[] = [
    {
        id: 1,
        title: "Mateja Stoev portfolio",
        description: "A sleek and immersive portfolio crafted with a dark aesthetic and emerald highlights - designed to spotlight web projects through a minimalist yet impactful visual experience.",
        image: mateja1,
        techStack: ["Nextjs", "Tailwind", "React"]
    },
    {
        id: 2,
        title: "Studio Zid",
        description: "A clean and functional website built for a painting service studio - developed with Next.js and integrated backend for Google-based login and client reviews, combining simplicity with user-focused utility.",
        image: studiozid,
        techStack: ["Nextjs", "Tailwind", "React"]
    },
    {
        id: 3,
        title: "Precizna Poljoprivreda",
        description: "A bright and user-friendly platform for precision agriculture - featuring an interactive map, real-time data visualization, and an intuitive admin panel for streamlined land and crop management.",
        image: precizna,
        techStack: ["React"]
    },
    {
        id: 4,
        title: "Foodieland",
        description: "A fresh and inviting recipe website inspired by a Figma design - built to showcase diverse culinary content through a clean layout, vibrant imagery, and an intuitive browsing experience.",
        image: foodie,
        techStack: ["Nextjs", "Tailwind", "React"]
    },
    {
        id: 5,
        title: "AI Startup",
        description: "Great design from uistore.design - fully responsive dark theme with violet highlights.",
        image: aistartup,
        techStack: ["Nextjs", "Tailwind", "React"]
    },
    {
        id: 6,
        title: "Hikari Agency",
        description: "Hikari Agency is a modern digital agency specializing in fullstack solutions, combining elegant design with robust, scalable technology. Built with a sleek dark theme, the platform reflects Hikari’s core values: precision, innovation, and aesthetic excellence.",
        image: hikariagency,
        techStack: ["Nextjs", "Tailwind", "React"]
    }
];

const ProjectsPage = () => {
    const router = useRouter();
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
    const [isActive, setIsActive] = useState<boolean>(false);
    const [isProjectOpen, setIsProjectOpen] = useState<boolean>(false);
    const [currentProject, setCurrentProject] = useState<any>([]);

    function toggleMenu() {
        setIsActive(prevState => !prevState);
        setIsSidebarOpen(prevState => !prevState);
    }

    function seeProjectDetails(index: number) {
        setIsProjectOpen(true);
        setCurrentProject(projects[index]);
        document.body.style.overflowY = 'hidden';
    }

    function closeProject() {
        setIsProjectOpen(false);
        setCurrentProject([]);
        document.body.style.overflowY = 'auto';
    }
  return (
    <div className='flex flex-1 flex-col w-full min-h-screen max-sm:px-0 px-7 bg-transparent py-7 max-w-5xl max-sm:max-w-8xl mx-auto z-20 relative'>
      <div className="px-7">
        <Navbar isSidebarOpen={isSidebarOpen}/>
      </div>
        <div className={isProjectOpen ? 'bg-black w-full h-full fixed inset-0 opacity-[0.8] z-40' : 'hidden'}></div>
        <div className={isProjectOpen ? 'fixed inset-0 flex items-center justify-center z-50' : 'hidden'} onClick={closeProject}>
            <div className="w-full max-w-5xl h-[80%] flex flex-col-reverse lg:flex-row items-center justify-center rounded-lg">
                <div className="rounded-l-[10px] w-full h-full relative p-1">
                    <Image src={currentProject.image} alt={'image'} className="w-full h-full object-cover flex z-1 rounded-[10px]"/>
                    <div className={'bg-linear-to-r from-black/1 via-black/50 to-black w-[40%] h-full opacity-[0.8] z-20 top-0 right-0 absolute'}></div>
                </div>
                <div className="bg-[#06070a] rounded-[10px] opacity-[1] rounded-r-[10px] w-full h-full flex flex-col gap-10 pt-7 pb-7 pl-7 pr-7">
                    <h1 className="text-4xl font-bold">{currentProject.title}</h1>
                    <div className="w-[90%] h-[2px] mx-auto bg-linear-to-r from-black via-emerald-950 to-black"></div>
                    <p className="text-slate-300 text-md">{currentProject.description}</p>
                    <div className="flex flex-col w-full">
                        <h2 className="text-emerald-600">SERVICES</h2>
                        <div className="flex flex-wrap gap-5">
                            <p>aaaaa</p>
                            <p>asdasdasdasd</p>
                            <p>asdasdasdasdasd</p>
                            <p>asddddasdasdasdada</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div>
        <motion.button initial={{ y: 0, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: .3 }} onClick={() => toggleMenu()} className="md:hidden bg-neutral-500/30 absolute top-14 right-7 w-10 h-10 flex items-center justify-center rounded-xl transition-all duration-200 border border-neutral-500 group z-23" aria-label="Toggle menu">
            <div className="relative flex flex-col items-center justify-center w-5 h-5 overflow-hidden">
              <span className={`absolute w-5 h-[2px] bg-white/50 rounded-full transform transition-transform duration-300 ease-in-out ${isActive ? "rotate-45" : "-translate-y-1.5"}`}></span>
              <span className={`absolute w-5 h-[2px] bg-white/50 rounded-full transform transition-all duration-200 ease-in-out ${isActive ? "opacity-0" : "opacity-100"}`}></span>
              <span className={`absolute w-5 h-[2px] bg-white/50 rounded-full transform transition-transform duration-300 ease-in-out ${isActive ? "-rotate-45" : "translate-y-1.5"}`}></span>
            </div>
        </motion.button>
      </div>
      <div className={isSidebarOpen ? 'hidden' : 'w-full h-[550px] flex flex-1 mt-10 max-sm:mb-250 max-lg:mb-220 lg:mb-130 xl:mb-140 flex-col gap-y-5'}>
        <div className="w-full h-full  flex flex-col gap-y-5">
            <motion.h1 initial={{ y: 0, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: .3 }} className="text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-white via-emerald-300 to-white">My Showcase</motion.h1>
            <motion.p initial={{ y: 0, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: .3 }} className="text-lg text-slate-300 text-center">Take a look at my portfolio of responsive websites and web apps — designed for performance, usability, and unique brand experiences.</motion.p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-6 w-full mt-30 px-4">
            {
                projects.map((project, index) => (
                    <div key={index} onClick={() => seeProjectDetails(index)} className="w-full rounded-lg group cursor-pointer bg-linear-to-br from-emerald-500/60 to-black border border-emerald-500/20 hover:border-emerald-500/80 transition-all duration-300 flex flex-col">
                        <div className="w-full h-full aspect-video relative mt-0">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-fill h-full rounded-t-lg"
                            />
                        </div>
                        <div className="flex flex-col gap-y-2 w-full p-5">
                            <h3 className="text-2xl font-semibold group-hover:text-emerald-300">
                                {project.title}
                            </h3>
                            <p className="text-slate-300 text-sm">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-3 mt-3">
                                {
                                    project.techStack.map((techStack, index) => (
                                    <span key={index} className="px-5 py-1 rounded-full bg-gradient-to-r from-emerald-400/80 to-green-400 text-white text-sm">
                                        {techStack}
                                    </span>
                                ))
                                }
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default ProjectsPage;