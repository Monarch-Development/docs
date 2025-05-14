'use client';

import Link from 'next/link';
import { FaGithub, FaDiscord } from 'react-icons/fa';

const socialLinks = [
  { icon: FaGithub, href: 'https://github.com/Monarch-Development' },
  { icon: FaDiscord, href: 'https://discord.com/invite/RxpNTx2YKZ' },
];

const teamMembers = [
  { name: 'IlMelons', role: 'Owner', avatar: 'ilmelons.png' },
  { name: 'Rico', role: 'Owner', avatar: 'rico.gif' },
  { name: 'Arctos', role: 'Team Manager', avatar: 'arctos.png' },
  { name: 'enty', role: 'Developer', avatar: 'enty.png' },
  { name: 'Mustache_dom', role: 'Developer', avatar: 'mustache_dom.png' },
  { name: 'Knoblauchbrot', role: 'Developer', avatar: 'knoblauchbrot.png' },
  { name: 'MadCap', role: 'Developer', avatar: 'madcap.png'}
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">
      <section className="relative pt-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-purple-100 to-white dark:from-black dark:via-purple-900 dark:to-black" />
        <div className="relative z-10 flex flex-col items-center justify-center text-center py-32 px-4">
          <h1 className="text-5xl font-extrabold mb-4">Monarch Development</h1>
          <p className="text-xl mb-6 text-black/70 dark:text-white/70">Built by community, for community</p>
          <div className="flex gap-4 mb-8 bg-black/10 dark:bg-black/50 p-4 rounded-xl">
            {socialLinks.map(({ icon: Icon, href }) => (
              <Link key={href} href={href} target="_blank" className="p-2 hover:bg-white/20 rounded-full transition">
                <Icon size={22} />
              </Link>
            ))}
          </div>
          <Link href="/docs" className="mt-4 rounded-full bg-black/10 dark:bg-black/50 px-6 py-3 font-semibold hover:bg-white/30 transition">
            Get Started
          </Link>
        </div>
      </section>
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: 'ABOUT US',
              content: 'Monarch Development is a group of selected developers in the FiveM community who follow the same goal',
            },
            {
              title: 'OUR GOAL',
              content: 'Reduce developers in the community who exploit their skills to make money with little effort',
            },
            {
              title: 'OUR STANDARDS',
              content: 'Simple and functional scripts with features focused on ease of use and free to user suggestions',
            },
            {
              title: 'OUR DREAM',
              content: 'Create a framework and a collection of scripts with partners selected for passion and skill and not to gain economic profit from them',
            },
          ].map((card, i) => (
            <div key={i} className="bg-black/5 dark:bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
              <p className="text-black/70 dark:text-white/70">{card.content}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="py-20 px-4 bg-black/10 dark:bg-black/80 transition-colors">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold">Our Team</h2>
          <p className="text-black/70 dark:text-white/70">Extraordinary people behind our success</p>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div key={member.name} className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                <img
                  src={`/static/img/team/${member.avatar}`}
                  alt={`${member.name}'s avatar`}
                  width={96}
                  height={96}
                  className="object-cover w-full h-full">
                </img>
              </div>
              <h4 className="font-semibold">{member.name}</h4>
              <p className="text-black/70 dark:text-white/70">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
      <footer className="py-6 bg-black/5 dark:bg-black/90 text-center">
        <p className="text-black/60 dark:text-white/60">© {new Date().getFullYear()} Monarch Development</p>
      </footer>
    </main>
  );
}
