"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaBuilding } from "react-icons/fa";
import { HiOutlineAcademicCap } from "react-icons/hi";

const educationData = [
  {
    type: "Academic",
    degree: "Diploma in Engineering (Civil Technology)",
    institute: "Pabna Polytechnic Institute, Pabna",
    details: [
      { label: "Board", value: "Bangladesh Technical Education Board, Dhaka" },
      { label: "Session", value: "2018 - 2019" },
      { label: "Passing Year", value: "2022" },
      { label: "Result", value: "3.60 (Out of 4.00)" },
    ],
    icon: <FaGraduationCap className="text-[#3b82f6] w-8 h-8" />,
  },
  {
    type: "Academic",
    degree: "Secondary School Certificate (S.S.C)",
    institute: "Sreekole Aziza Smrity High School",
    details: [
      { label: "Board", value: "Rajshahi" },
      { label: "Group", value: "Science" },
      { label: "Passing Year", value: "2018" },
      { label: "Result", value: "4.56 (Out of 5.00)" },
    ],
    icon: <HiOutlineAcademicCap className="text-[#3b82f6] w-8 h-8" />,
  },
  {
    type: "Experience",
    degree: "Industrial Attachment (Internship)",
    institute: "Public Works Department (PWD)",
    details: [
      { label: "Address", value: "Pabna, Bangladesh" },
      { label: "Duration", value: "Three Months" },
      { label: "Role", value: "Industrial Trainee" },
    ],
    icon: <FaBuilding className="text-[#ef4444] w-8 h-8" />,
  },
];

export default function Education() {
  return (
    <section id="education" className="bg-[#080c15] py-24 px-6 overflow-hidden">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tighter"
          >
            <span className="bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent">
              Academic &{" "}
            </span>
            <span className="bg-gradient-to-r from-[#3b82f6] to-[#ef4444] bg-clip-text text-transparent">
              Experience
            </span>
          </motion.h2>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative p-[1px] rounded-3xl overflow-hidden bg-gradient-to-br from-white/10 to-transparent"
            >
              {/* Animated Border/Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#3b82f6] via-transparent to-[#ef4444] opacity-20 group-hover:opacity-60 transition-opacity duration-500" />

              {/* Main Content Card */}
              <div className="relative bg-[#0a0f1a] rounded-3xl h-full p-8 flex flex-col">
                {/* Header with Icon */}
                <div className="flex items-start justify-between mb-6">
                  <div className="p-3 bg-white/5 rounded-2xl group-hover:bg-[#3b82f6]/10 transition-colors">
                    {edu.icon}
                  </div>
                  <span
                    className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full ${
                      edu.type === "Experience"
                        ? "bg-[#ef4444]/10 text-[#ef4444]"
                        : "bg-[#3b82f6]/10 text-[#3b82f6]"
                    }`}
                  >
                    {edu.type}
                  </span>
                </div>

                {/* Degree & Institute */}
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-[#3b82f6] transition-colors">
                  {edu.degree}
                </h3>
                <p className="text-white/60 font-medium mb-6 italic">
                  {edu.institute}
                </p>

                {/* Details List */}
                <div className="mt-auto space-y-3">
                  {edu.details.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex gap-8 justify-between items-center text-sm border-b border-white/5 pb-2 last:border-0"
                    >
                      <span className="text-white/40">{item.label}</span>
                      <span className="text-white/80 font-semibold">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Decorative Element */}
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#3b82f6]/5 blur-[60px] rounded-full group-hover:bg-[#3b82f6]/10 transition-all" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
