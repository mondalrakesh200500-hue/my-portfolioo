/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { GraduationCap, Calendar, Award, BookOpen, ChevronRight, Check } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { educationHistory } from "../data";

export default function AcademicTimeline() {
  const [activeSemestersOpen, setActiveSemestersOpen] = useState(false);

  return (
    <section id="education" className="py-24 bg-zinc-950 border-t border-zinc-900 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-600/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-3">
          <h2 className="text-sm font-mono tracking-widest text-cyan-400 uppercase">Education Journey</h2>
          <h3 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Academic Qualifications
          </h3>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Timeline side */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="relative border-l border-zinc-800 ml-4 pl-8 space-y-10">
              
              {educationHistory.map((edu, idx) => {
                const isBca = edu.degree.includes("BCA") || edu.degree.includes("Bachelor");
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.15 }}
                    className="relative group"
                  >
                    {/* Circle marker */}
                    <div className="absolute -left-[41px] top-1.5 p-1 bg-zinc-950 rounded-full border border-zinc-800 group-hover:border-cyan-400 transition-colors">
                      <div className="w-3 h-3 rounded-full bg-zinc-800 group-hover:bg-cyan-400 transition-colors flex items-center justify-center">
                        {edu.isPursuing && <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping" />}
                      </div>
                    </div>

                    {/* Content Card */}
                    <div className="bg-zinc-900/50 border border-zinc-850 p-6 rounded-2xl group-hover:border-zinc-800 transition-all shadow-md">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-[11px] font-medium rounded-full">
                          {edu.duration}
                        </span>
                        {edu.isPursuing && (
                          <span className="px-2.5 py-0.5 bg-green-500/10 border border-green-500/20 text-green-400 text-[10px] font-semibold rounded-full uppercase tracking-widest animate-pulse">
                            In Progress
                          </span>
                        )}
                      </div>

                      <h4 className="text-lg font-display font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {edu.degree}
                      </h4>
                      <p className="text-zinc-300 text-sm font-medium mt-1">
                        {edu.institute}
                      </p>
                      <p className="text-zinc-500 text-xs font-mono mt-0.5">
                        Board/Uni: {edu.board}
                      </p>

                      <div className="mt-4 pt-4 border-t border-zinc-800/60 flex items-center justify-between">
                        <div>
                          <span className="text-zinc-500 text-[10px] uppercase tracking-wider block font-mono">
                            Result / Score
                          </span>
                          <span className="text-sm font-display font-semibold text-white">
                            {edu.gpaOrPercentage}
                          </span>
                        </div>
                        
                        {isBca && (
                          <button
                            onClick={() => setActiveSemestersOpen(!activeSemestersOpen)}
                            className="px-3 py-1.5 bg-zinc-950 border border-zinc-800 hover:border-zinc-700 rounded-lg text-xs font-mono text-zinc-300 flex items-center gap-1 cursor-pointer select-none"
                            id="view-gpa-breakdown"
                          >
                            <span>Breakdown</span>
                            <ChevronRight className={`w-3.5 h-3.5 transition-transform duration-300 ${activeSemestersOpen ? "rotate-90" : ""}`} />
                          </button>
                        )}
                      </div>

                      {/* BCA Semesters Breakdown Accordion */}
                      {isBca && (
                        <AnimatePresence>
                          {activeSemestersOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden mt-4 pt-4 border-t border-zinc-850 space-y-2.5"
                            >
                              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                                {edu.breakdown?.map((sem, sIdx) => (
                                  <div key={sIdx} className="bg-zinc-950 border border-zinc-850 p-2.5 rounded-xl text-center">
                                    <span className="text-[10px] text-zinc-500 font-mono uppercase block">{sem.label}</span>
                                    <span className="text-xs font-bold text-cyan-400 mt-0.5 block">{sem.value}</span>
                                  </div>
                                ))}
                              </div>
                              <p className="text-[10px] font-mono text-zinc-500 text-center italic mt-1">
                                Overall average GPA across all semesters: 7.53
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      )}

                    </div>
                  </motion.div>
                );
              })}

            </div>
          </div>

          {/* Graphical representation/Visual card */}
          <div className="lg:col-span-5 text-left space-y-6">
            <div className="bg-zinc-900/40 border border-zinc-850 rounded-2xl p-6 sm:p-8 space-y-6">
              <div className="p-3 bg-cyan-500/10 rounded-xl border border-cyan-500/20 w-fit">
                <GraduationCap className="w-6 h-6 text-cyan-400" />
              </div>
              
              <div className="space-y-2">
                <h4 className="text-xl font-display font-semibold text-white">Performance Overview</h4>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  Consistently demonstrating solid problem-solving capability. The academic curve represents steady preparation across standard computing fundamentals, systems, and algorithms.
                </p>
              </div>

              {/* Progress Gauges */}
              <div className="space-y-4 pt-4 border-t border-zinc-800">
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-zinc-400">Undergrad (BCA Avg)</span>
                    <span className="text-cyan-400">75.3% Equiv.</span>
                  </div>
                  <div className="h-1.5 bg-zinc-950 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" style={{ width: "75.3%" }} />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-zinc-400">Higher Secondary (12th)</span>
                    <span className="text-blue-400">73.0%</span>
                  </div>
                  <div className="h-1.5 bg-zinc-950 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 rounded-full" style={{ width: "73%" }} />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-zinc-400">Secondary (10th)</span>
                    <span className="text-sky-400">67.0%</span>
                  </div>
                  <div className="h-1.5 bg-zinc-950 rounded-full overflow-hidden">
                    <div className="h-full bg-sky-500 rounded-full" style={{ width: "67%" }} />
                  </div>
                </div>
              </div>

              {/* Key Academics Highlights */}
              <div className="space-y-2.5 pt-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500">
                  Relevant Coursework topics
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {["Data Structures", "OOP concepts", "Relational Databases", "Computer Networking", "Web Architectures"].map((topic, i) => (
                    <span key={i} className="px-2.5 py-1 bg-zinc-950 border border-zinc-800 rounded-lg text-[10px] font-mono text-zinc-400 flex items-center gap-1">
                      <Check className="w-3 h-3 text-cyan-400" />
                      {topic}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
