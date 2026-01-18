"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Linkedin,
  Drone,
  Users,
  MapPinned,
  GraduationCap,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";


export default function TrivoraWebsite() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0B0B3B] via-slate-900 to-black text-white">
      
      {/* Navbar */}
<header className="sticky top-0 z-50 bg-[#0B0B3B]/80 backdrop-blur border-b border-white/10">
  <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
    <div className="flex items-center gap-3">
      <Image
        src="/logo.png"
        alt="Trivora Consultancy Logo"
        width={40}
        height={40}
        priority
      />
      <span className="text-xl font-bold tracking-wide">
        Trivora Consultancy
      </span>
    </div>

    <nav className="hidden md:flex gap-8 text-sm">
      <a href="#services" className="hover:text-[#FF8A00]">Services</a>
      <a href="#about" className="hover:text-[#FF8A00]">About</a>
      <a href="#contact" className="hover:text-[#FF8A00]">Contact</a>
    </nav>
  </div>
</header>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Workforce & Drone Intelligence
            <span className="block text-[#FF8A00] font-bold tracking-wide">
              Powered by Expertise
            </span>
          </h1>

          <p className="mt-6 text-slate-300 max-w-xl">
            Trivora Consultancy delivers advanced drone solutions, GIS intelligence,
            and HR-driven recruitment & training services tailored for modern industries.
          </p>

          <div className="mt-8 flex gap-4">
            <a href="#contact">
              <Button className="bg-[#FF8A00] hover:bg-[#FF8A00]/90 text-black font-semibold">
                Get in Touch
              </Button>
            </a>

            <a href="#services">
              <Button
                variant="outline"
                className="border-[#FF8A00] text-[#FF8A00] hover:bg-[#FF8A00] hover:text-black"
              >
                Explore Services
              </Button>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-[#FF8A00]/20 blur-3xl rounded-full" />
        </motion.div>
      </section>

      {/* Services */}
      <section id="services" className="bg-black/30 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
            Our Services
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Drone className="h-10 w-10 text-[#FF8A00]" />,
                title: "Drone Surveys",
                desc: "High-precision aerial surveys for mapping, inspection and analytics.",
              },
              {
                icon: <MapPinned className="h-10 w-10 text-[#FF8A00]" />,
                title: "Drone Pilots & GIS Experts",
                desc: "Certified pilots and GIS professionals for mission-critical projects.",
              },
              {
                icon: <Users className="h-10 w-10 text-[#FF8A00]" />,
                title: "Recruitment Solutions",
                desc: "End-to-end hiring solutions across HR and drone technology domains.",
              },
              {
                icon: <GraduationCap className="h-10 w-10 text-[#FF8A00]" />,
                title: "Training & Development",
                desc: "Skill-based training programs in HR operations and drone technologies.",
              },
            ].map((s, i) => (
              <motion.div key={i} whileHover={{ y: -8 }}>
                <Card className="bg-slate-900/90 border-[#FF8A00]/30 shadow-lg shadow-[#FF8A00]/10 h-full">
                  <CardContent className="p-6">
                    {s.icon}
                    <h3 className="mt-4 font-semibold text-lg">{s.title}</h3>
                    <p className="mt-2 text-sm text-slate-300">{s.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Why Trivora?</h2>
            <p className="mt-6 text-slate-300">
              We bridge the gap between skilled human capital and advanced drone-based
              intelligence. Our consultancy blends HR excellence with cutting-edge
              aerial and GIS technologies.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {[
              "Industry Expertise",
              "Certified Professionals",
              "Scalable Solutions",
              "Client-Centric Approach",
            ].map((t, i) => (
              <div
                key={i}
                className="bg-[#0B0B3B]/70 border border-white/10 rounded-xl p-6 text-center"
              >
                <p className="font-semibold">{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-black/40 py-24">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Contact Us
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="flex items-center gap-3">
                <Mail className="text-[#FF8A00]" /> trivoraconsultancy@gmail.com
              </p>
              <p className="flex items-center gap-3">
                <Phone className="text-[#FF8A00]" /> 7307111066
              </p>
              <a
                href="https://www.linkedin.com/company/trivoraconsultancy/"
                target="_blank"
                className="flex items-center gap-3 hover:text-[#FF8A00]"
              >
                <Linkedin /> LinkedIn Profile
              </a>
            </div>

            <form className="space-y-4">
              <Input placeholder="Your Name" />
              <Input type="email" placeholder="Email Address" />
              <Textarea placeholder="Your Message" />
              <Button className="w-full bg-[#FF8A00] hover:bg-[#FF8A00]/90 text-black font-semibold">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-slate-400 py-8 border-t border-white/10">
        © {new Date().getFullYear()} Trivora Consultancy. All rights reserved.
      </footer>
    </div>
  );
}
