/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Award, Calendar, CheckSquare, GraduationCap, ArrowUpRight, ShieldCheck, Terminal, HelpCircle } from "lucide-react";
import { motion } from "motion/react";
import { internshipExperience } from "../data";

export default function InternshipCard() {
  return (
    <section id="experience" className="py-24 bg-zinc-950 border-t border-zinc-900 relative">
      {/* Decorative radial mask */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/5 via-zinc-950 to-zinc-950 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center mb-16 space-y-3">
          <h2 className="text-sm font-mono tracking-widest text-blue-400 uppercase">Professional Experience</h2>
          <h3 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Training & Internships
          </h3>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />
        </div>

        {/* Custom Visual Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left">
          
          {/* Badge & Certification info */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl relative overflow-hidden group shadow-2xl"
            >
              {/* Highlight Background shine */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all duration-500" />
              
              <div className="flex justify-between items-start mb-6">
                <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-2xl">
                  <Award className="w-8 h-8 text-blue-400" />
                </div>
                <span className="px-3 py-1 bg-zinc-950 border border-zinc-800 rounded-full text-[10px] font-mono text-zinc-400">
                  Credential ID: IBM-SB-2025
                </span>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block">
                  {internshipExperience.provider}
                </span>
                <h4 className="text-2xl font-display font-extrabold text-white tracking-tight leading-tight">
                  AI Agent Architect
                </h4>
                <p className="text-zinc-500 text-xs mt-1 font-mono">
                  Certified Internship Program
                </p>
              </div>

              {/* Quick Details List */}
              <div className="mt-8 space-y-4 pt-6 border-t border-zinc-800">
                <div className="flex items-center gap-3 text-zinc-300 text-sm">
                  <Calendar className="w-4 h-4 text-blue-400 shrink-0" />
                  <div>
                    <span className="text-zinc-500 text-[10px] uppercase font-mono block">Duration / Period</span>
                    <span className="font-medium text-xs sm:text-sm text-zinc-300">{internshipExperience.period}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-zinc-300 text-sm">
                  <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                  <div>
                    <span className="text-zinc-500 text-[10px] uppercase font-mono block">Architect focus</span>
                    <span className="font-medium text-xs sm:text-sm text-zinc-300">Agentic Pipelines & System Prompting</span>
                  </div>
                </div>
              </div>

              {/* Extra Link block */}
              <div className="mt-8">
                <a
                  href="https://skillsbuild.org/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-blue-400 hover:text-white transition-colors cursor-pointer"
                >
                  Verify on IBM SkillsBuild
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Core Responsibilities & Learnings list */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block">
                WHAT I ACCOMPLISHED
              </span>
              <h4 className="text-xl sm:text-2xl font-display font-bold text-white tracking-tight">
                Learnings & Realized Milestones
              </h4>
              <p className="text-zinc-400 text-sm leading-relaxed">
                During this experiential builder campaign, I operated as an AI Agent Architect, testing and assembling reliable, prompt-engineered components to handle asynchronous client workflows.
              </p>
            </div>

            {/* List items mapping */}
            <div className="grid grid-cols-1 gap-4 pt-2">
              {internshipExperience.keyTakeaways.map((takeaway, idx) => (
                <div
                  key={idx}
                  className="p-5 bg-zinc-900/40 border border-zinc-850 hover:border-zinc-800 rounded-2xl flex gap-4 hover:bg-zinc-900/60 transition-all group"
                  id={`takeaway-item-${idx}`}
                >
                  <div className="p-2 bg-zinc-950 rounded-xl border border-zinc-800 group-hover:border-blue-500/20 transition-colors h-fit shrink-0">
                    <CheckSquare className="w-4 h-4 text-blue-400" />
                  </div>
                  <div>
                    <h5 className="text-sm font-semibold text-white tracking-wide mb-1">
                      {idx === 0 && "Agent Pipelines Layout"}
                      {idx === 1 && "Prompt Engineering Precision"}
                      {idx === 2 && "Automated Workflow Construction"}
                      {idx === 3 && "Safety Guardrails & Compliance"}
                    </h5>
                    <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                      {takeaway}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
