"use client";
import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";

const words = [
  "Web Developer",
  "Future Full Stack Developer",
  "Frontend Developer",
];

export default function TypeWriter() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const fullText = words[currentWordIndex];

      if (!isDeleting) {
        // অক্ষর যোগ করা
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setSpeed(150); // টাইপিং স্পিড
      } else {
        // অক্ষর মোছা
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setSpeed(50); // মোছার স্পিড ফাস্ট
      }

      // যদি পুরো শব্দ টাইপ শেষ হয়
      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000); // ২ সেকেন্ড বিরতি
      }
      // যদি পুরো শব্দ মোছা শেষ হয়
      else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    };

    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, speed]);

  return (
    <div className="h-10 flex items-center justify-center lg:justify-start mt-2">
      <p className="text-blue-300 text-2xl md:text-3xl font-bold  mt-2">
        {currentText}
        <span className="ml-1 border-r-2 border-blue-500 animate-pulse"></span>
      </p>
    </div>
  );
}
