"use client";

import Image from "next/image";
import logoImg from "../../assets/logo.png";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const footerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 🔥 TOP CONTENT ANIMATION (RUN ONCE ONLY)
      gsap.from(".footer-item", {
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
          toggleActions: "play none none none",
          once: true,
        },
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
      });

      // 🔥 COPYRIGHT ANIMATION (SEPARATE CONTROL)
      gsap.from(".footer-copyright", {
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 95%",
          toggleActions: "play none none none",
          once: true,
        },
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power3.out",
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="bg-[#080c15] pt-16 pb-8 px-6 border-t border-white/5"
    >
      <div className="container mx-auto">
        {/* TOP SECTION */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-10">
          {/* LOGO */}
          <motion.div className="footer-item" whileHover={{ scale: 1.05 }}>
            <Image src={logoImg} alt="Logo" width={40} height={40} />
          </motion.div>

          {/* LINKS */}
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
            {["Home", "About", "Skills", "Projects", "Contact"].map((link) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="footer-item text-gray-400 text-sm font-medium"
                whileHover={{ y: -3, color: "#fff" }}
              >
                {link}
              </motion.a>
            ))}
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex gap-6 text-white/70">
            <Link href="https://linkedin.com" target="_blank">
              <FaLinkedin size={22} />
            </Link>

            <Link href="https://github.com" target="_blank">
              <FaGithub size={22} />
            </Link>

            <Link href="https://facebook.com" target="_blank">
              <FaFacebook size={22} />
            </Link>

            <Link href="mailto:ashik778047@gmail.com">
              <SiGmail size={22} />
            </Link>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#ef4444]/30 to-transparent mb-8" />

        {/* COPYRIGHT (FIXED) */}
        <motion.div className="text-center footer-copyright">
          <p className="text-gray-500 text-xs md:text-sm tracking-wide">
            Copyright © {currentYear}{" "}
            <span className="text-gray-300 font-medium">Ashikur Rahman</span> |
            All Rights Reserved
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
