"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import Image from "next/image";
import aboutImg from "@/assets/about.png";

import { FaGithub } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef();

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      // 🔥 Image animation
      tl.from(".about-image", {
        x: -80,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
      });

      // 🔥 Content animation (staggered)
      tl.from(
        ".about-text",
        {
          y: 40,
          opacity: 0,
          duration: 0.6,
          stagger: 0.2,
          ease: "power3.out",
        },
        "-=0.6",
      );

      // 🔥 Subtle floating effect on image
      gsap.to(".about-image-inner", {
        y: -10,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 bg-[#080c15] overflow-hidden"
    >
      <div className="container mx-auto md:py-6 px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* LEFT IMAGE */}
        <div className="about-image relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-red-500 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000" />

          <div className="about-image-inner relative bg-[#0d121f] rounded-3xl overflow-hidden w-full h-[350px] md:h-[420px] border border-white/10">
            <Image
              src={aboutImg}
              alt="Ashikur Rahman About"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="space-y-6">
          <h2 className="about-text text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#3b82f6] to-[#ef4444] bg-clip-text text-transparent">
            About <span className="text-blue-500">Me</span>
          </h2>

          <div className="space-y-4 text-gray-400 text-lg leading-relaxed">
            <p className="about-text">
              I am a passionate{" "}
              <span className="text-white">Full Stack Web Developer</span>with
              strong expertise in modern JavaScript technologies. I enjoy
              building scalable and responsive web applications that solve
              real-world problems.
            </p>

            <p className="about-text">
              I specialize in both frontend and backend development using the
              MERN stack and modern UI libraries. I always focus on: Clean and
              maintainable code Performance optimization User-friendly UI/UX
              design API integration and backend architecture
            </p>
          </div>

          <motion.a
            href="https://github.com/ashikur-rahman-programmer/"
            target="_blank"
            whileHover={{ scale: 1.05 }}
            className="hero-btn px-6 py-2 border border-[#3b82f6]/40 text-white rounded-full inline-flex items-center gap-2 group cursor-pointer"
          >
            <FaGithub /> View My Github
          </motion.a>
        </div>
      </div>
    </section>
  );
}
