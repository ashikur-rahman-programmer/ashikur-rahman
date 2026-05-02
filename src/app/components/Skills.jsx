"use client";
import React from "react";
import { motion } from "framer-motion";

import { AiOutlineHtml5 } from "react-icons/ai";
import { FaCss3Alt, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript, IoLogoNodejs } from "react-icons/io5";
import { TbBrandNextjs } from "react-icons/tb";
import { SiBetterauth, SiExpress, SiHeroui, SiMongodb } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";

const skills = [
  {
    title: "HTML5",
    icon: <AiOutlineHtml5 className="text-[#3b82f6] w-12 h-12" />,
  },
  {
    title: "CSS3",
    icon: <FaCss3Alt className="text-[#3b82f6] w-12 h-12" />,
  },
  {
    title: "Tailwind CSS",
    icon: <RiTailwindCssFill className="text-[#3b82f6] w-12 h-12" />,
  },
  {
    title: "JavaScript",
    icon: <IoLogoJavascript className="text-[#3b82f6] w-12 h-12" />,
  },
  {
    title: "React.js",
    icon: <FaReact className="text-[#3b82f6] w-12 h-12" />,
  },
  {
    title: "Next.js",
    icon: <TbBrandNextjs className="text-[#3b82f6] w-12 h-12" />,
  },
  {
    title: "Node.js",
    icon: <IoLogoNodejs className="text-[#3b82f6] w-12 h-12" />,
  },
  {
    title: "MongoDB",
    icon: <SiMongodb className="text-[#3b82f6] w-12 h-12" />,
  },
  {
    title: "Express.js",
    icon: <SiExpress className="text-[#3b82f6] w-12 h-12" />,
  },
  {
    title: "Better Auth",
    icon: <SiBetterauth className="text-[#3b82f6] w-12 h-12" />,
  },
  {
    title: "GitHub",
    icon: <VscGithub className="text-[#3b82f6] w-12 h-12" />,
  },
  { title: "HeroUI", icon: <SiHeroui className="text-[#3b82f6] w-12 h-12" /> },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-[#080c15] py-24 px-6 overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tighter "
          >
            <span className="bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent">
              Skills &{" "}
            </span>
            <span className="bg-gradient-to-r from-[#3b82f6] to-[#ef4444] bg-clip-text text-transparent">
              Tech Stack
            </span>
          </motion.h2>
        </div>

        {/* Square Grid with icon and title only */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -8 }}
              className="group relative p-[1px] aspect-square overflow-hidden rounded-2xl"
            >
              {/* Left to Right Gradient Border */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#3b82f6] via-transparent to-[#ef4444] opacity-40 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Internal Card Content */}
              <div className="relative bg-[#0a0f1a] rounded-2xl h-full flex flex-col items-center justify-center p-6 text-center">
                {/* Subtle Inner Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#3b82f6]/5 to-[#ef4444]/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Icon Container */}
                <div className="relative mb-4 transition-transform duration-500 group-hover:scale-110">
                  {skill.icon}
                </div>

                {/* Title */}
                <h3 className="relative z-10 text-lg md:text-xl font-bold text-white group-hover:text-[#3b82f6] transition-colors duration-300">
                  {skill.title}
                </h3>

                {/* Bottom Soft Glow */}
                <div className="absolute -bottom-8 -right-8 w-20 h-20 bg-[#ef4444]/10 blur-[40px] rounded-full group-hover:bg-[#ef4444]/20 transition-all" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
