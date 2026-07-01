/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { ArrowDown, Mail, Phone, MapPin, Terminal, Cpu, Award } from "lucide-react";
import { motion } from "motion/react";
import { personalInfo } from "../data";

// Since the path contains a generated timestamp, we will load it directly.
const AVATAR_PATH = "/src/assets/images/rakesh_avatar_1782846255214.jpg";
const BANNER_PATH = "/src/assets/images/abstract_nodes_1782846269808.jpg";

export default function Hero() {
  const [terminalTab, setTerminalTab] = useState<"about" | "agent" | "config">("agent");
  const [typedText, setTypedText] = useState("");
  const fullAgentCode = `class AIAgentArchitect {
  constructor() {
    this.name = "Rakesh Mandal";
    this.credentials = "IBM SkillsBuild Certified";
    this.focus = "Cognitive Workflows & LLM APIs";
  }

  async runDeployment() {
    const pipe = await compilePrompt("From Learner to Builder");
    return \`Deploying agentic pipeline...\`;
  }
}`;

  useEffect(() => {
    let index = 0;
    setTypedText("");
    const interval = setInterval(() => {
      if (index < fullAgentCode.length) {
        setTypedText((prev) => prev + fullAgentCode.charAt(index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 12);
    return () => clearInterval(interval);
  }, [terminalTab]); // re-run or just run once

  const scrollNext = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-zinc-950"
    >
      {/* Background Banner with Opacity Mask */}
      <div className="absolute inset-0 z-0 opacity-15">
        <img
          src={BANNER_PATH}
          alt="Abstract Network Nodes"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950" />
      </div>

      {/* Decorative Blur Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl animate-pulse -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Info Columns */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-xs font-mono text-blue-400 tracking-wide"
            >
              <Award className="w-3.5 h-3.5 text-blue-400" />
              <span>IBM CERTIFIED AI AGENT ARCHITECT</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-2"
            >
              <h1 className="text-4xl sm:text-6xl font-display font-bold tracking-tight text-white">
                Hi, I'm{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400 font-extrabold block mt-2 sm:inline sm:mt-0">
                  {personalInfo.name}
                </span>
              </h1>
              <p className="text-lg sm:text-xl font-medium text-zinc-300 font-display">
                {personalInfo.role}
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-zinc-400 text-base max-w-xl leading-relaxed"
            >
              {personalInfo.careerObjective}
            </motion.p>

            {/* Quick Contact Chips */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-3 py-2"
            >
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2 px-3.5 py-1.5 bg-zinc-900 border border-zinc-800 rounded-lg text-xs text-zinc-300 hover:border-zinc-700 hover:text-white transition-all cursor-pointer"
              >
                <Mail className="w-3.5 h-3.5 text-blue-400" />
                <span>{personalInfo.email}</span>
              </a>
              <a
                href={`tel:${personalInfo.phone}`}
                className="flex items-center gap-2 px-3.5 py-1.5 bg-zinc-900 border border-zinc-800 rounded-lg text-xs text-zinc-300 hover:border-zinc-700 hover:text-white transition-all cursor-pointer"
              >
                <Phone className="w-3.5 h-3.5 text-cyan-400" />
                <span>{personalInfo.phone}</span>
              </a>
              <span className="flex items-center gap-2 px-3.5 py-1.5 bg-zinc-900 border border-zinc-800 rounded-lg text-xs text-zinc-300">
                <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                <span>{personalInfo.location}</span>
              </span>
            </motion.div>

            {/* Primary Calls to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-2"
            >
              <button
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                id="hero-projects-btn"
                className="px-6 py-3.5 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold rounded-xl text-center shadow-lg hover:shadow-blue-500/20 transition-all cursor-pointer focus:outline-none"
              >
                Explore Animated Work
              </button>
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                id="hero-contact-btn"
                className="px-6 py-3.5 bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-800 hover:border-zinc-700 font-semibold rounded-xl text-center transition-all cursor-pointer focus:outline-none"
              >
                Contact Me
              </button>
            </motion.div>
          </div>

          {/* Right Side: Interactive Developer Portrait & Agent Shell */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            
            {/* Custom Interactive Portrait Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="relative aspect-square w-72 h-72 sm:w-80 sm:h-80 mx-auto rounded-3xl overflow-hidden group shadow-2xl border-2 border-zinc-800/80 hover:border-blue-500/50 transition-colors"
            >
              <img
                src={AVATAR_PATH}
                alt="Rakesh Mandal - Software Developer"
                className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              {/* Overlay styling for tech vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-80" />
              
              <div className="absolute bottom-4 left-4 right-4 bg-zinc-900/80 backdrop-blur-md border border-zinc-800 rounded-2xl p-3 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-semibold text-white tracking-wide">Rakesh Mandal</h4>
                  <p className="text-[10px] font-mono text-cyan-400">Vidyasagar University '27</p>
                </div>
                <div className="flex gap-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">Available</span>
                </div>
              </div>
            </motion.div>

            {/* Custom Code Terminal Mock */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col text-left max-w-md mx-auto w-full"
            >
              {/* Header */}
              <div className="px-4 py-3 bg-zinc-950 border-b border-zinc-800/80 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-blue-400" />
                  <span className="text-xs font-mono text-zinc-300">architect_shell.ts</span>
                </div>
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                </div>
              </div>

              {/* Shell Tabs */}
              <div className="flex bg-zinc-950/40 border-b border-zinc-800/50">
                <button
                  onClick={() => setTerminalTab("agent")}
                  className={`flex-1 px-3 py-2 text-center text-xs font-mono border-r border-zinc-800/40 transition-colors focus:outline-none cursor-pointer ${
                    terminalTab === "agent" ? "bg-zinc-900 text-blue-400 border-t-2 border-blue-500" : "text-zinc-500 hover:text-zinc-300"
                  }`}
                >
                  [Cognitive Agent]
                </button>
                <button
                  onClick={() => setTerminalTab("about")}
                  className={`flex-1 px-3 py-2 text-center text-xs font-mono border-r border-zinc-800/40 transition-colors focus:outline-none cursor-pointer ${
                    terminalTab === "about" ? "bg-zinc-900 text-cyan-400 border-t-2 border-cyan-500" : "text-zinc-500 hover:text-zinc-300"
                  }`}
                >
                  [Qualities]
                </button>
              </div>

              {/* Terminal Viewports */}
              <div className="p-4 min-h-[160px] font-mono text-xs overflow-auto bg-zinc-950/20">
                {terminalTab === "agent" && (
                  <div className="space-y-1">
                    <div className="flex items-center gap-1.5 text-zinc-500">
                      <span>$</span>
                      <span>npx tsx compile-agent.ts</span>
                    </div>
                    <pre className="text-zinc-300 select-all whitespace-pre-wrap leading-relaxed font-mono text-[11px]">
                      {typedText}
                      <span className="inline-block w-1.5 h-4 bg-blue-400 animate-pulse ml-0.5" />
                    </pre>
                  </div>
                )}

                {terminalTab === "about" && (
                  <div className="space-y-3">
                    <div className="text-zinc-500 flex items-center gap-1.5">
                      <span>$</span>
                      <span>query --target="personal_traits"</span>
                    </div>
                    <div className="space-y-2">
                      {personalInfo.personalQualities.map((quality, index) => (
                        <div key={index} className="flex items-start gap-2 text-zinc-300 text-[11px]">
                          <span className="text-cyan-400">✓</span>
                          <span>{quality}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>

          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          onClick={scrollNext}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 cursor-pointer group"
        >
          <span className="text-[10px] font-mono tracking-widest text-zinc-500 group-hover:text-blue-400 transition-colors">
            SCROLL DOWN
          </span>
          <ArrowDown className="w-4 h-4 text-zinc-500 group-hover:text-blue-400 transition-colors" />
        </motion.div>
      </div>
    </section>
  );
}
