/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { FolderGit2, ArrowUpRight, Github, Code2, Sparkles, Cpu, ChevronDown, Check, Activity, Terminal } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { projectsList } from "../data";

export default function ProjectCards() {
  const [expandedCardId, setExpandedCardId] = useState<string | null>(null);
  const [simulationState, setSimulationState] = useState<Record<string, string>>({});
  const [simulatingId, setSimulatingId] = useState<string | null>(null);

  const projectCategoryIcons: Record<string, React.ReactNode> = {
    "AI Agent Architecture": <Sparkles className="w-5 h-5 text-blue-400" />,
    "Web Development": <Code2 className="w-5 h-5 text-cyan-400" />,
    "IoT Project": <Cpu className="w-5 h-5 text-indigo-400" />,
  };

  const toggleExpand = (id: string) => {
    if (expandedCardId === id) {
      setExpandedCardId(null);
    } else {
      setExpandedCardId(id);
    }
  };

  const runProjectSimulation = (id: string) => {
    setSimulatingId(id);
    setSimulationState((prev) => ({ ...prev, [id]: "Initializing environment..." }));

    setTimeout(() => {
      setSimulationState((prev) => ({ ...prev, [id]: "Deploying workflow node... ⏳" }));
    }, 800);

    setTimeout(() => {
      if (id === "ai-agent-architect") {
        setSimulationState((prev) => ({
          ...prev,
          [id]: "Success: 🤖 Aura Agent compiled. Ready for files input.",
        }));
      } else if (id === "responsive-dashboard") {
        setSimulationState((prev) => ({
          ...prev,
          [id]: "Success: ⚡ Nova dashboard layout synchronized locally.",
        }));
      } else {
        setSimulationState((prev) => ({
          ...prev,
          [id]: "Success: 📟 IoT Beacon emitting telemetry data. (Node #402)",
        }));
      }
      setSimulatingId(null);
    }, 1800);
  };

  return (
    <section id="projects" className="py-24 bg-zinc-950 border-t border-zinc-900 relative">
      <div className="absolute top-0 left-1/3 w-[450px] h-[450px] bg-blue-500/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-3">
          <h2 className="text-sm font-mono tracking-widest text-blue-400 uppercase">My Creations</h2>
          <h3 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Featured Projects
          </h3>
          <p className="text-zinc-400 text-xs sm:text-sm max-w-lg mx-auto leading-relaxed">
            A handpicked selection of animated web frameworks, AI automation architectures, and IoT integrations representing my coding interests.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />
        </div>

        {/* Projects Grid with Layout Animation */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left items-start">
          {projectsList.map((project) => {
            const isExpanded = expandedCardId === project.id;
            const currentSim = simulationState[project.id];

            return (
              <motion.div
                layout
                key={project.id}
                id={`project-card-${project.id}`}
                className={`bg-zinc-900/40 border rounded-3xl overflow-hidden hover:bg-zinc-900/60 transition-all shadow-xl group cursor-default flex flex-col justify-between ${
                  isExpanded ? "border-blue-500/50 shadow-blue-500/5 col-span-1 md:col-span-2 lg:col-span-1" : "border-zinc-850 hover:border-zinc-800"
                }`}
              >
                {/* Header graphic */}
                <div className="p-6 pb-4 border-b border-zinc-800/60 flex items-start justify-between">
                  <div className="p-3 bg-zinc-950 border border-zinc-850 rounded-2xl">
                    {projectCategoryIcons[project.category] || <FolderGit2 className="w-5 h-5 text-zinc-400" />}
                  </div>
                  <span className="text-[10px] font-mono text-zinc-500 bg-zinc-950 border border-zinc-850 px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <h4 className="text-lg sm:text-xl font-display font-bold text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 bg-zinc-950 border border-zinc-850 text-zinc-400 font-mono text-[10px] rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Expanded Details container */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-4 border-t border-zinc-800/50 overflow-hidden text-left"
                    >
                      <div className="py-4 space-y-3">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 block">
                          Key Architect Features
                        </span>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {project.keyFeatures.map((feature, fIdx) => (
                            <div key={fIdx} className="flex items-start gap-2 text-xs text-zinc-300">
                              <Check className="w-3.5 h-3.5 text-green-400 mt-0.5 shrink-0" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>

                        {/* Interactive Sandbox Simulator */}
                        <div className="mt-4 pt-4 border-t border-zinc-850 space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest flex items-center gap-1">
                              <Activity className="w-3.5 h-3.5 text-blue-400" />
                              Interactive Sandbox
                            </span>
                            
                            <button
                              disabled={simulatingId !== null}
                              onClick={() => runProjectSimulation(project.id)}
                              className="px-2 py-1 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/20 rounded text-[10px] font-mono text-blue-400 cursor-pointer disabled:opacity-50 select-none"
                            >
                              {simulatingId === project.id ? "Running..." : "Test Deploy"}
                            </button>
                          </div>

                          <div className="bg-zinc-950 border border-zinc-850 p-2.5 rounded-lg min-h-[44px] flex items-center">
                            <p className="text-[11px] font-mono text-zinc-400 select-all w-full">
                              {currentSim ? (
                                <span className={currentSim.includes("Success") ? "text-green-400" : "text-blue-400 animate-pulse"}>
                                  {currentSim}
                                </span>
                              ) : (
                                <span className="text-zinc-600 italic">Click "Test Deploy" to simulate execution shell logs...</span>
                              )}
                            </p>
                          </div>
                        </div>

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Card footer actions */}
                <div className="p-6 pt-4 border-t border-zinc-800/60 bg-zinc-900/20 flex items-center justify-between gap-2">
                  <button
                    onClick={() => toggleExpand(project.id)}
                    className="text-xs font-mono font-medium text-zinc-400 hover:text-white flex items-center gap-1 cursor-pointer focus:outline-none select-none"
                    id={`project-expand-${project.id}`}
                  >
                    <span>{isExpanded ? "Hide Details" : "View Features"}</span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} />
                  </button>

                  <div className="flex items-center gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 bg-zinc-950 border border-zinc-850 rounded-xl text-zinc-400 hover:text-white hover:border-zinc-700 transition-all cursor-pointer"
                      title="View on GitHub"
                      id={`project-github-${project.id}`}
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    
                    <a
                      href={project.demoUrl}
                      className="p-2 bg-blue-500/10 border border-blue-500/20 rounded-xl text-blue-400 hover:text-white hover:bg-blue-600 hover:border-blue-500 transition-all cursor-pointer"
                      title="Launch Live Prototype"
                      id={`project-demo-${project.id}`}
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
