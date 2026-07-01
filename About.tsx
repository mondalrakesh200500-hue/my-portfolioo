/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Shield, Sparkles, Zap, Heart, Languages, MapPin, Calendar, User, Flag } from "lucide-react";
import { motion } from "motion/react";
import { personalInfo } from "../data";

export default function About() {
  const qualityIcons = [
    <Shield className="w-5 h-5 text-blue-400" />,
    <Sparkles className="w-5 h-5 text-cyan-400" />,
    <Zap className="w-5 h-5 text-indigo-400" />,
    <Heart className="w-5 h-5 text-sky-400" />
  ];

  const profileMeta = [
    { label: "Full Name", value: personalInfo.name, icon: <User className="w-4 h-4 text-blue-400" /> },
    { label: "Date of Birth", value: personalInfo.dob, icon: <Calendar className="w-4 h-4 text-cyan-400" /> },
    { label: "Nationality", value: personalInfo.nationality, icon: <Flag className="w-4 h-4 text-indigo-400" /> },
    { label: "Address", value: personalInfo.address, icon: <MapPin className="w-4 h-4 text-sky-400" /> },
  ];

  return (
    <section id="about" className="py-24 bg-zinc-950 border-t border-zinc-900 relative">
      <div className="absolute inset-0 bg-radial-gradient from-blue-500/5 via-transparent to-transparent pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center mb-16 space-y-3">
          <h2 className="text-sm font-mono tracking-widest text-blue-400 uppercase">Profile Details</h2>
          <h3 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            About Me & Core Values
          </h3>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Column 1: Detailed Bio & Info Cards */}
          <div className="lg:col-span-6 space-y-8 text-left">
            <div className="bg-zinc-900/40 border border-zinc-850 p-6 sm:p-8 rounded-2xl space-y-6">
              <h4 className="text-xl font-display font-semibold text-white">
                Who Is Rakesh Mandal?
              </h4>
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                I am a dedicated, disciplined, and quick-learning computer science undergraduate currently pursuing my BCA degree at Midnapore City College. 
                With a passion for web technologies, IoT, and automated workflow agents, I seek to apply cognitive engineering principles to solve practical visual and technical challenges.
              </p>

              {/* Grid of details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-zinc-800">
                {profileMeta.map((meta, idx) => (
                  <div key={idx} className="flex gap-3 items-start p-2 hover:bg-zinc-900/30 rounded-xl transition-all">
                    <div className="p-2 bg-zinc-950 rounded-lg border border-zinc-800">
                      {meta.icon}
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 block">
                        {meta.label}
                      </span>
                      <span className="text-xs sm:text-sm text-zinc-300 font-medium">
                        {meta.value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages Grid */}
            <div className="bg-zinc-900/40 border border-zinc-850 p-6 rounded-2xl space-y-4">
              <div className="flex items-center gap-2 mb-2">
                <Languages className="w-5 h-5 text-blue-400" />
                <h4 className="text-md font-display font-semibold text-white">Languages Proficiency</h4>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {personalInfo.languages.map((lang, idx) => (
                  <div key={idx} className="bg-zinc-950 border border-zinc-850 p-4 rounded-xl flex flex-col justify-between hover:border-zinc-700 transition-colors">
                    <span className="text-sm font-semibold text-white">{lang.language}</span>
                    <span className="text-[11px] font-mono text-cyan-400 mt-1">{lang.proficiency}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Personal Qualities */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6 text-left">
            <div className="space-y-4">
              <h4 className="text-xl font-display font-semibold text-white">
                Personal Qualities & Strengths
              </h4>
              <p className="text-zinc-400 text-sm">
                These core traits enable me to approach complex design structures and coding sessions with confidence and continuous discipline.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {personalInfo.personalQualities.map((quality, idx) => (
                <motion.div
                  key={idx}
                  id={`quality-card-${idx}`}
                  whileHover={{ y: -4, borderColor: "rgba(59, 130, 246, 0.4)" }}
                  className="bg-zinc-900/60 border border-zinc-850 p-5 rounded-2xl flex flex-col space-y-3 shadow-lg transition-all cursor-default"
                >
                  <div className="p-2.5 bg-zinc-950 rounded-xl border border-zinc-800 w-fit">
                    {qualityIcons[idx % qualityIcons.length]}
                  </div>
                  <div>
                    <h5 className="text-sm font-semibold text-white">{quality.split("and")[0]}</h5>
                    {quality.includes("and") && (
                      <p className="text-[11px] font-mono text-zinc-500 mt-0.5">
                        {quality.split("and")[1].trim()}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Extra summary of traits */}
            <div className="p-5 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-2xl flex items-center gap-4">
              <div className="w-2.5 h-12 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full shrink-0" />
              <p className="text-xs text-zinc-300 leading-relaxed italic">
                "Continuous adaptation, attention to detail, and a focus on clean modular state management are the pillars of my coding process."
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
