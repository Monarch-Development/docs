'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useRef, useEffect, useState } from 'react';
import { FaGithub, FaDiscord, FaUsers, FaBullseye, FaCogs, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const socialLinks = [
  { icon: FaGithub, href: 'https://github.com/Monarch-Development' },
  { icon: FaDiscord, href: 'https://discord.com/invite/WKtk65yBC6' },
];

const teamMembers = [
  { name: 'IlMelons', role: 'Owner', avatar: 'ilmelons.png' },
  { name: 'Rico', role: 'Owner', avatar: 'rico.gif' },
  { name: 'Arctos', role: 'Team Manager', avatar: 'arctos.png' },
  { name: 'enty', role: 'Developer', avatar: 'enty.png' },
  { name: 'Mustache_dom', role: 'Developer', avatar: 'mustache_dom.png' },
  { name: 'Knoblauchbrot', role: 'Developer', avatar: 'knoblauchbrot.png' },
  { name: 'MadCap', role: 'Developer', avatar: 'madcap.png' }
];

export default function HomePage() {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % teamMembers.length);
    }, 3500);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [current]);

  const prev = () => setCurrent((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  const next = () => setCurrent((prev) => (prev + 1) % teamMembers.length);

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-purple-100 to-purple-200 dark:from-black dark:via-purple-950 dark:to-black text-black dark:text-white transition-colors duration-300">
      <section className="relative pt-0 overflow-hidden">
        <div className="absolute inset-0 animate-gradient bg-gradient-to-br from-purple-200 via-white to-purple-300 dark:from-purple-900 dark:via-black dark:to-purple-950 opacity-40" />
        <div className="relative z-10 flex flex-col items-center justify-center text-center py-36 px-4">
          <h1 className="text-6xl font-extrabold mb-4 bg-gradient-to-r from-purple-700 via-purple-500 to-purple-300 bg-clip-text text-transparent drop-shadow-lg">
            Monarch Development
          </h1>
          <p className="text-2xl mb-6 text-black/80 dark:text-white/80 font-medium">
            Built by community, for community
          </p>
          <div className="flex gap-4 mb-8 bg-white/70 dark:bg-black/40 p-4 rounded-xl shadow-lg backdrop-blur">
            {socialLinks.map(({ icon: Icon, href }) => (
              <Link key={href} href={href} target="_blank" className="p-2 hover:bg-purple-200/40 dark:hover:bg-purple-900/40 rounded-full transition shadow">
                <Icon size={26} className="text-purple-500 dark:text-purple-400" />
              </Link>
            ))}
          </div>
          <Link href="/docs" className="mt-4 rounded-full bg-gradient-to-r from-purple-400 to-purple-600 dark:from-purple-800 dark:to-purple-600 px-8 py-3 font-semibold text-white shadow-lg hover:scale-105 hover:bg-purple-900 transition">
            Get Started
          </Link>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: 'ABOUT US',
              content: 'Monarch Development is a group of selected developers in the FiveM community who follow the same goal',
              icon: <FaUsers className="text-purple-400 text-3xl mb-2" />,
            },
            {
              title: 'OUR GOAL',
              content: 'Reduce developers in the community who exploit their skills to make money with little effort',
              icon: <FaBullseye className="text-purple-500 text-3xl mb-2" />,
            },
            {
              title: 'OUR STANDARDS',
              content: 'Simple and functional scripts with features focused on ease of use and free to user suggestions',
              icon: <FaCogs className="text-purple-600 text-3xl mb-2" />,
            },
            {
              title: 'OUR DREAM',
              content: 'Create a framework and a collection of scripts with partners selected for passion and skill and not to gain economic profit from them',
              icon: <FaStar className="text-purple-700 text-3xl mb-2" />,
            },
          ].map((card, i) => (
            <div
              key={i}
              className="bg-white/80 dark:bg-black/60 backdrop-blur-lg rounded-2xl p-8 shadow-lg hover:scale-105 hover:shadow-2xl transition-all flex flex-col items-center text-center border border-purple-200 dark:border-purple-900"
            >
              {card.icon}
              <h3 className="text-2xl font-bold mb-2 text-purple-700 dark:text-purple-200">{card.title}</h3>
              <p className="text-black/80 dark:text-white/70">{card.content}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-4 bg-white/80 dark:bg-black/70 transition-colors">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold">Our Team</h2>
          <p className="text-black/70 dark:text-white/70">Extraordinary people behind our success</p>
        </div>
        <div className="relative max-w-xl mx-auto flex items-center">
          <button
            aria-label="Previous"
            onClick={prev}
            className="absolute left-0 z-10 bg-white/80 dark:bg-black/60 rounded-full p-2 shadow hover:scale-110 transition disabled:opacity-50"
            style={{ top: "50%", transform: "translateY(-50%)" }}
          >
            <FaChevronLeft className="text-purple-500 dark:text-purple-300" size={28} />
          </button>
          <div className="overflow-hidden w-full">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {teamMembers.map((member) => (
                <div
                  key={`${member.name}-${member.role}`}
                  className="flex-shrink-0 w-full flex flex-col items-center px-4"
                  style={{ minWidth: "100%" }}
                >
                  <div className="w-28 h-28 rounded-full overflow-hidden mb-4 bg-white dark:bg-black shadow-lg border-4 border-purple-200 dark:border-purple-800 transition-all duration-500">
                    <img
                      src={`/static/img/team/${member.avatar}`}
                      alt={`${member.name}'s avatar`}
                      width={112}
                      height={112}
                      className="object-cover w-full h-full"
                      loading="lazy"
                    />
                  </div>
                  <h4 className="font-semibold text-xl text-purple-700 dark:text-purple-200">{member.name}</h4>
                  <p className="text-black/70 dark:text-white/70">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
          <button
            aria-label="Next"
            onClick={next}
            className="absolute right-0 z-10 bg-white/80 dark:bg-black/60 rounded-full p-2 shadow hover:scale-110 transition disabled:opacity-50"
            style={{ top: "50%", transform: "translateY(-50%)" }}
          >
            <FaChevronRight className="text-purple-500 dark:text-purple-300" size={28} />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {teamMembers.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${current === idx ? "bg-purple-500 dark:bg-purple-300 scale-125" : "bg-purple-200 dark:bg-purple-800"}`}
              aria-label={`Go to member ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      <footer className="py-6 bg-white/70 dark:bg-black/90 text-center">
        <p className="text-black/60 dark:text-white/60">
          © {new Date().getFullYear()} Monarch Development
        </p>
      </footer>
    </main>
  );
}