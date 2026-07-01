/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Cpu, Code2, Sparkles, FolderOpen, Terminal } from "lucide-react";
import { motion } from "motion/react";
import { skillCategories } from "../data";

export default function SkillsGrid() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const categoryIcons: Record<string, React.ReactNode> = {
    "frontend-web": <Code2 className="w-4 h-4 text-blue-400" />,
    "core-programming": <Terminal className="w-4 h-4 text-cyan-400" />,
    "ai-cognitive": <Sparkles className="w-4 h-4 text-indigo-400" />,
    "productivity": <Cpu className="w-4 h-4 text-sky-400" />,
  };

  const tabs = [
    { id: "all", label: "All Skills" },
    { id: "frontend-web", label: "Web Development" },
    { id: "core-programming", label: "Programming" },
    { id: "ai-cognitive", label: "AI & Agents" },
    { id: "productivity", label: "Productivity" },
  ];

  return (
    <section id="skills" className="py-24 bg-zinc-950 border-t border-zinc-900 relative">
      <div className="absolute bottom-0 right-1/4 w-[350px] h-[350px] bg-blue-600/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-3">
          <h2 className="text-sm font-mono tracking-widest text-blue-400 uppercase">Capabilities</h2>
          <h3 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Professional Skillsets
          </h3>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                id={`skills-tab-${tab.id}`}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 border focus:outline-none cursor-pointer ${
                  isActive
                    ? "bg-blue-500/10 border-blue-500/30 text-blue-400 font-semibold"
                    : "bg-zinc-900/40 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Grid of Skills */}
        <div className="space-y-12">
          {skillCategories
            .filter((category) => activeTab === "all" || category.id === activeTab)
            .map((category) => (
              <div key={category.id} className="space-y-6 text-left">
                {/* Category Header */}
                <div className="flex items-center gap-2 border-b border-zinc-800/60 pb-3">
                  <div className="p-1.5 bg-zinc-900 border border-zinc-800 rounded-lg">
                    {categoryIcons[category.id] || <FolderOpen className="w-4 h-4 text-zinc-400" />}
                  </div>
                  <h4 className="text-base font-display font-bold text-white uppercase tracking-wide">
                    {category.title}
                  </h4>
                </div>

                {/* Skills layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.skills.map((skill, sIdx) => (
                    <motion.div
                      key={sIdx}
                      id={`skill-block-${category.id}-${sIdx}`}
                      whileHover={{ scale: 1.01 }}
                      className="bg-zinc-900/30 border border-zinc-850 p-5 rounded-2xl flex flex-col justify-between hover:bg-zinc-900/50 hover:border-zinc-800 transition-all"
                    >
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-sm font-semibold text-zinc-200 tracking-wide">
                          {skill.name}
                        </span>
                        <span className="text-xs font-mono text-cyan-400 bg-cyan-500/5 px-2 py-0.5 rounded-md border border-cyan-500/10">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Bar indicator */}
                      <div className="space-y-2">
                        <div className="h-1.5 bg-zinc-950 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: sIdx * 0.05 }}
                            className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"
                          />
                        </div>
                        
                        {/* Interactive dynamic descriptive states */}
                        <div className="flex justify-between text-[10px] font-mono text-zinc-500">
                          <span>Progressive</span>
                          <span>{skill.level >= 85 ? "Expertise" : skill.level >= 75 ? "Proficient" : "Adaptive"}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
        </div>

        {/* Callout of continuous growth */}
        <div className="mt-16 p-6 bg-zinc-900/20 border border-zinc-850 rounded-2xl text-center max-w-xl mx-auto">
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans">
            "Software toolsets expand constantly. My priority remains adapting to new API standards, improving logic architectures, and implementing clean code."
          </p>
        </div>

      </div>
    </section>
  );
}
