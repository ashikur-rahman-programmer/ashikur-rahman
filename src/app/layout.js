import { Montserrat } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/lib/Providers";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ashikur Rahman - Web Developer",
  description:
    "Ashikur Rahman is a passionate web developer with expertise in building modern and responsive websites.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${montserrat.className} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="bg-[#020202] text-white antialiased">
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
