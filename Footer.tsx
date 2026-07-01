/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Github, Mail, Phone, Heart, Award, Terminal } from "lucide-react";
import { personalInfo } from "../data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          
          {/* Logo Brand */}
          <div className="space-y-1">
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <Terminal className="w-4 h-4 text-blue-400" />
              <span className="font-display font-bold text-white tracking-tight">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase">
              BCA STUDENT & AI AGENT ARCHITECT
            </p>
          </div>

          {/* Social Links / Action channels */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/mondalrakesh200500"
              target="_blank"
              rel="noreferrer"
              className="p-2 bg-zinc-900 border border-zinc-850 rounded-xl text-zinc-400 hover:text-white hover:border-zinc-700 transition-all cursor-pointer"
              title="GitHub Profile"
              id="footer-github"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2 bg-zinc-900 border border-zinc-850 rounded-xl text-zinc-400 hover:text-white hover:border-zinc-700 transition-all cursor-pointer"
              title="Mail Me"
              id="footer-mail"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={`tel:${personalInfo.phone}`}
              className="p-2 bg-zinc-900 border border-zinc-850 rounded-xl text-zinc-400 hover:text-white hover:border-zinc-700 transition-all cursor-pointer"
              title="Call Me"
              id="footer-call"
            >
              <Phone className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Bottom sub-credits block */}
        <div className="mt-8 pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-center">
          <p className="text-xs text-zinc-500 font-mono">
            &copy; {currentYear} Rakesh Mandal. All Rights Reserved.
          </p>

          <p className="text-xs text-zinc-600 flex items-center gap-1 justify-center sm:justify-end font-mono">
            <span>Built with React & Tailwind</span>
            <Heart className="w-3 h-3 text-blue-500 fill-blue-500" />
            <span>&bull; IBM SkillsBuild Certified</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
