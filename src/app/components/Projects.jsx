"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MoveUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export const projects = [
  // {
  //   id: 1,
  //   title: "Online Book Borrowing Platform",
  //   desc: "A comprehensive digital library system where users can browse, search, and borrow books with secure authentication using Better Auth.",
  //   tags: ["Next.js", "MongoDB", "Better Auth", "API"],
  //   image:
  //     "https://i.ibb.co.com/7t31QsDx/localhost-3000-Online-book-borrowing-platform-cvscreenshot.jpg",
  //   github: "https://github.com/ashikur-rahman/online-book-borrowing-platform",
  //   live: "https://online-book-borrowing.vercel.app",
  // },
  {
    id: 1,
    title: "PixGen Web Application",
    desc: "A creative web app for generating and customizing digital assets with secure user accounts and content management.",
    tags: ["Next.js", "Better Auth", "UI/UX", "API"],
    image:
      "https://i.ibb.co.com/v60Y6XQL/localhost-3000-pixgen-web-application-cvscreenshot.jpg",
    github:
      "https://github.com/ashikur-rahman-programmer/pixgen-web-application",
    live: "https://pixgen-web.vercel.app",
  },
  {
    id: 2,
    title: "The Dragon News Website",
    desc: "A dynamic news portal delivering real-time updates with authentication, protected content, and modern Next.js architecture.",
    tags: ["Next.js", "Better Auth", "MongoDB", "App Router"],
    image:
      "https://i.ibb.co.com/gFM6sfkT/localhost-3001-Dragon-News-Home-cvscreenshot.jpg",
    github:
      "https://github.com/ashikur-rahman-programmer/the-dragon-news-website",
    live: "https://the-dragon-news.vercel.app",
  },
  {
    id: 3,
    title: "Digital Tools Buying Website",
    desc: "A React-based platform for browsing and purchasing digital tools with API integration and dynamic UI.",
    tags: ["React", "JavaScript", "API", "CSS"],
    image:
      "https://i.ibb.co.com/7dVFr8nP/digital-tools-buying-website1-netlify-app-1024x768desktop-8e4aa6.jpg",
    github:
      "https://github.com/ashikur-rahman-programmer/Digital-Tools-Buying-Website",
    live: "https://digital-tools-buying-website1.netlify.app/",
  },
  {
    id: 4,
    title: "Job Application Tracker",
    desc: "Helps users track job applications, status, and progress with a clean UI.",
    tags: ["HTML", "CSS", "JavaScript"],
    image:
      "https://i.ibb.co.com/wZ6rT2t4/github-issues-tracker-web-application-netlify-app-Github-Tracker-Web-Application-cvscreenshot.jpg",
    github:
      "https://github.com/ashikur-rahman-programmer/job-application-tracker-website",
    live: "https://ashikur-rahman-programmer.github.io/job-application-tracker-website/",
  },
  {
    id: 5,
    title: "AI Model Hub",
    desc: "Showcases AI models and tools with a modern interface using React and APIs.",
    tags: ["React", "API", "Tailwind"],
    image:
      "https://i.ibb.co.com/8hFxM4X/ai-model-website-netlify-app-ai-model-hub-website-cvscreenshot.jpg",
    github: "https://github.com/ashikur-rahman-programmer/ai-model-hub-website",
    live: "https://ai-model-website.netlify.app/",
  },
  {
    id: 6,
    title: "GitHub Issues Tracker",
    desc: "Tracks GitHub issues using API and displays them in a structured UI.",
    tags: ["React", "API", "GitHub API"],
    image:
      "https://i.ibb.co.com/wZ6rT2t4/github-issues-tracker-web-application-netlify-app-Github-Tracker-Web-Application-cvscreenshot.jpg",
    github:
      "https://github.com/ashikur-rahman-programmer/github-issues-tracker-web-application",
    live: "https://github-issues-tracker-web-application.netlify.app/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-[#080c15] py-24 px-6 overflow-hidden">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#3b82f6] to-[#ef4444] bg-clip-text text-transparent mb-4">
            Recent Projects
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
            Here are some of the real-world projects I've built using the MERN
            stack.
          </p>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={30}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id} className="h-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="group relative p-[1px] rounded-[2rem] overflow-hidden h-full"
              >
                {/* Gradient Border */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#3b82f6] via-transparent to-[#ef4444] opacity-40 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Card */}
                <div className="relative bg-[#0a0f1a] rounded-[2rem] p-8 flex flex-col h-[540px]">
                  {/* Image */}
                  <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-6 flex-shrink-0 border border-white/5">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#3b82f6] transition-colors">
                    {project.title}
                  </h3>

                  {/* Desc */}
                  <p className="text-gray-400 text-sm leading-relaxed mb-5 line-clamp-2">
                    {project.desc}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-[#111827] text-[#3b82f6] text-xs rounded-full border border-[#3b82f6]/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3 mt-auto">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      whileHover={{ scale: 1.05 }}
                      className="hero-btn px-6 py-2 border border-[#3b82f6]/40 text-white rounded-full flex items-center gap-2 group cursor-pointer"
                    >
                      <FaGithub /> Code
                    </motion.a>

                    <motion.a
                      href={project.live}
                      target="_blank"
                      whileHover={{ scale: 1.05 }}
                      className="hero-btn px-6 py-2 border border-[#3b82f6]/40 text-white rounded-full flex items-center gap-2 group cursor-pointer"
                    >
                      <MoveUpRight /> Live
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
