"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import profileImg from "../../assets/profile.png";
import { motion } from "framer-motion";
import gsap from "gsap";
import TypeWriter from "./TypeWriter";
import { GoProject } from "react-icons/go";
import { SiHey } from "react-icons/si";

// 🔥 Social Icons
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import Link from "next/link";

export default function Hero() {
  const heroRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(".hero-subtitle", {
      y: 30,
      opacity: 0,
      duration: 0.6,
      ease: "power3.out",
    })
      .from(
        ".hero-title",
        {
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: "power4.out",
        },
        "-=0.3",
      )
      .from(
        ".hero-type",
        {
          opacity: 0,
          duration: 0.5,
        },
        "-=0.4",
      )
      .from(
        ".hero-desc",
        {
          opacity: 0,
          y: 20,
          duration: 0.5,
        },
        "-=0.3",
      )
      .from(
        ".hero-image",
        {
          scale: 0.7,
          opacity: 0,
          duration: 0.9,
          ease: "power4.out",
        },
        "-=0.6",
      )
      .from(
        ".hero-btn",
        {
          opacity: 0,
          y: 20,
          stagger: 0.08,
          duration: 0.4,
        },
        "-=0.5",
      );

    gsap.to(".bg-glow", {
      scale: 1.4,
      duration: 6,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative bg-[#080c15] flex items-center justify-center px-6 pt-20 pb-5 md:pt-24 md:pb-10 overflow-hidden"
    >
      {/* Glow */}
      <div className="bg-glow absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-600/10 blur-[150px] rounded-full -z-10" />

      <div className="bg-glow absolute bottom-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-red-600/10 blur-[150px] rounded-full -z-10" />

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
        {/* LEFT */}
        <div className="order-2 md:order-1 z-10 text-center lg:text-left">
          <h2 className="hero-subtitle text-xl md:text-2xl font-bold text-white/70 mb-2">
            Hey, I'm
          </h2>

          <h1 className="hero-title text-3xl md:text-5xl font-black leading-[0.9]">
            <span className="bg-gradient-to-r from-cyan-600 via-purple-600 to-blue-700 bg-clip-text text-transparent">
              Ashikur Rahman
            </span>
          </h1>

          <div className="hero-type text-2xl md:text-4xl py-2">
            <TypeWriter />
          </div>

          <p className="hero-desc text-gray-400 text-lg max-w-lg italic mt-4 mx-auto lg:mx-0">
            I build modern, fast, and scalable web applications using React,
            Next.js, and the MERN stack.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-5 pt-6 justify-center lg:justify-start">
            {/* 🔥 VIEW PROJECTS */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => {
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="hero-btn px-6 py-2 border border-[#3b82f6]/40 text-white rounded-full flex items-center gap-2 cursor-pointer"
            >
              <GoProject /> View Projects
            </motion.button>

            {/* 🔥 SAY HELLO */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => {
                window.location.href = "mailto:ashik778047@gmail.com";
              }}
              className="hero-btn px-6 py-2 border border-[#3b82f6]/40 text-white rounded-full flex items-center gap-2 cursor-pointer"
            >
              Say Hello! <SiHey />
            </motion.button>
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex gap-6 pt-6 justify-center lg:justify-start text-white/70">
            <Link href="https://linkedin.com" target="_blank">
              <FaLinkedin size={25} />
            </Link>

            <Link href="https://github.com" target="_blank">
              <FaGithub size={25} />
            </Link>

            <Link href="https://facebook.com" target="_blank">
              <FaFacebook size={25} />
            </Link>

            <Link href="mailto:ashik778047@gmail.com">
              <SiGmail size={25} />
            </Link>
          </div>
        </div>

        {/* RIGHT */}
        <div className="order-1 md:order-2 relative flex justify-center items-center h-[350px] md:h-[550px] w-full">
          <div className="hero-image relative w-[340px] h-[340px] md:w-[480px] md:h-[480px] rounded-full p-[4px] bg-gradient-to-b from-[#3b82f6] via-purple-500 to-[#ef4444]">
            <div className="w-full h-full rounded-full bg-[#080c15] overflow-hidden">
              <Image
                src={profileImg}
                alt="Ashikur Rahman"
                className="w-full h-full object-cover scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
