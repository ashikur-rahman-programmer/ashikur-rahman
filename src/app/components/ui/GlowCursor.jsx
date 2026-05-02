"use client";
import { useEffect, useState } from "react";

export default function GlowCursor() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-50 transition-opacity duration-500"
      style={{
        // সাইজ ৬০০ থেকে কমিয়ে ৩০০ করেছি এবং অপাসিটি কমিয়ে ০.১ করেছি
        background: `radial-gradient(200px at ${mousePos.x}px ${mousePos.y}px, rgba(29, 78, 216, 0.1), transparent 70%)`,
      }}
    />
  );
}
