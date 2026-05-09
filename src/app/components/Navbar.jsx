"use client";

import logoImg from "../../assets/logo.png";
import { useState, useEffect, useRef } from "react";
import { Link, Button } from "@heroui/react";
import Image from "next/image";
import { IoDocumentSharp } from "react-icons/io5";

import gsap from "gsap";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const navRef = useRef();

  const menuItems = [
    "Home",
    "About",
    "Skills",
    "Education",
    "Projects",
    "Contact",
  ];

  useEffect(() => {
    gsap.from(navRef.current, {
      y: -60,
      opacity: 0,
      duration: 1,
      ease: "power4.out",
    });

    gsap.from(".nav-item", {
      y: -20,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      delay: 0.3,
      ease: "power3.out",
    });
  }, []);

  // 🔥 smooth scroll + active set
  const handleClick = (item) => {
    setActive(item);

    const id = item.toLowerCase();
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }

    setIsMenuOpen(false);
  };

  return (
    <nav
      ref={navRef}
      className="fixed top-0 z-40 w-full border-b border-white/5 bg-background/70 backdrop-blur-lg"
    >
      <header className="container mx-auto flex h-16 items-center justify-between">
        {/* LEFT */}
        <div className="flex items-center gap-4">
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor">
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          <div className="flex items-center gap-3 nav-item">
            <Image src={logoImg} alt="Logo" width={40} height={40} />
          </div>
        </div>

        {/* DESKTOP MENU */}
        <ul className="hidden items-center gap-6 md:flex">
          {menuItems.map((item, i) => (
            <li key={i} className="nav-item ">
              <button
                onClick={() => handleClick(item)}
                className={`transition font-medium cursor-pointer ${
                  active === item
                    ? "text-[#3b82f6]"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>

        {/* RESUME */}
        <motion.div
          className="nav-item"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <a
            href="/resume.pdf"
            download="Ashikur_Rahman_Resume.pdf"
            target="_blank" // সেফটি হিসেবে এটি যোগ করুন
            rel="noopener noreferrer"
            className="no-underline"
          >
            <Button className="items-center gap-2 flex px-4 py-2 border border-[#3b82f6]/40 text-white hover:bg-[#3b82f6]/10 rounded-full font-medium cursor-pointer">
              <IoDocumentSharp /> Resume
            </Button>
          </a>
        </motion.div>
      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="border-t border-white/10 md:hidden overflow-hidden"
          >
            <ul className="flex flex-col gap-2 p-4">
              {menuItems.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <button
                    onClick={() => handleClick(item)}
                    className={`block py-2 w-full text-left cursor-pointer ${
                      active === item ? "text-[#3b82f6]" : "text-white/70"
                    }`}
                  >
                    {item}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
