"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, Phone, MapPin } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef();

  // 🔥 form state
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-left", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        x: -60,
        opacity: 0,
        duration: 0.8,
        ease: "power4.out",
      });

      gsap.from(".contact-form", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        x: 60,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
        ease: "power4.out",
      });

      gsap.to(".contact-glow", {
        scale: 1.3,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // 🔥 input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 🔥 submit + reset
  const handleSubmit = () => {
    const mailtoLink = `mailto:ashik778047@gmail.com?subject=Portfolio Contact&body=
Name: ${form.name}%0A
Email: ${form.email}%0A
Phone: ${form.phone}%0A
Company: ${form.company}%0A
Message: ${form.message}`;

    window.location.href = mailtoLink;

    // RESET FORM
    setForm({
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    });
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="bg-[#080c15] py-24 px-6 relative overflow-hidden"
    >
      {/* Glow */}
      <div className="contact-glow absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#ef4444]/5 blur-[120px] rounded-full -z-10" />

      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contact Us
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm md:text-base">
            Have a project in mind? Let's connect.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* LEFT */}
          <div className="contact-left space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">
                Get in touch today
              </h3>
              <p className="text-gray-400 max-w-md">
                I'm open to projects and ideas.
              </p>
            </div>

            <div className="space-y-6">
              {/* EMAIL */}
              <motion.div
                whileHover={{ x: 8 }}
                className="flex items-center gap-4 group"
              >
                <div className="p-3 bg-[#111827] rounded-lg border border-white/5 group-hover:border-[#3b82f6]/50 transition">
                  <Mail />
                </div>
                <a
                  href="mailto:ashik778047@gmail.com"
                  className="text-gray-300 hover:text-white transition"
                >
                  ashik778047@gmail.com
                </a>
              </motion.div>

              {/* PHONE */}
              <motion.div
                whileHover={{ x: 8 }}
                className="flex items-center gap-4 group"
              >
                <div className="p-3 bg-[#111827] rounded-lg border border-white/5 group-hover:border-[#3b82f6]/50 transition">
                  <Phone />
                </div>
                <span className="text-gray-300">01640371957</span>
              </motion.div>

              {/* LOCATION */}
              <motion.div
                whileHover={{ x: 8 }}
                className="flex items-center gap-4 group"
              >
                <div className="p-3 bg-[#111827] rounded-lg border border-white/5 group-hover:border-[#3b82f6]/50 transition">
                  <MapPin />
                </div>
                <span className="text-gray-300">Pabna, Dhaka, Bangladesh</span>
              </motion.div>
            </div>
          </div>

          {/* RIGHT */}
          <motion.div className="contact-form group relative p-px rounded-3xl overflow-hidden">
            <motion.div
              whileHover={{ y: -5 }}
              className="absolute inset-0 bg-gradient-to-r from-[#3b82f6] via-transparent to-[#ef4444] opacity-30 group-hover:opacity-100 transition-opacity duration-500"
            />

            <div className="relative bg-[#0a0f1a] p-8 md:p-10 rounded-3xl">
              <form className="space-y-6">
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="w-full bg-[#111827] border border-white/5 rounded-xl px-5 py-3.5 text-white outline-none"
                />

                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full bg-[#111827] border border-white/5 rounded-xl px-5 py-3.5 text-white outline-none"
                />

                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Phone"
                  className="w-full bg-[#111827] border border-white/5 rounded-xl px-5 py-3.5 text-white outline-none"
                />

                <input
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  placeholder="Company"
                  className="w-full bg-[#111827] border border-white/5 rounded-xl px-5 py-3.5 text-white outline-none"
                />

                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Message"
                  className="w-full bg-[#111827] border border-white/5 rounded-xl px-5 py-3.5 text-white outline-none resize-none"
                />

                {/* SEND BUTTON */}
                <motion.button
                  onClick={handleSubmit}
                  whileHover={{ y: -5 }}
                  className="hero-btn px-6 py-2 border border-[#3b82f6]/40 text-white rounded-full w-full flex items-center gap-2 cursor-pointer justify-center"
                >
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
