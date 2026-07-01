/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { PersonalInfo, EducationItem, ProjectItem, SkillCategory, InternshipItem } from "./types";

export const personalInfo: PersonalInfo = {
  name: "RAKESH MANDAL",
  role: "BCA Student & AI Agent Architect",
  email: "Mondalrakesh3790@gmail.com",
  phone: "+91 8116407242",
  location: "Midnapore, West Bengal, India",
  address: "Makrampue, Thatrachak, Narayangarh, Paschim Medinipur",
  dob: "29-11-2005",
  nationality: "Indian",
  gender: "Male",
  maritalStatus: "Unmarried",
  languages: [
    { language: "Bengali", proficiency: "Read, Write, Speak" },
    { language: "Hindi", proficiency: "Read, Speak" },
    { language: "English", proficiency: "Read, Write, Speak" }
  ],
  careerObjective: "To obtain a good position in an esteemed industry where I can contribute to the development of the company and grow with the organization.",
  personalQualities: [
    "Responsible & Disciplined",
    "Dedicated, Hardworking and Quick Learner",
    "Self Motivated, Positive Attitude and Team Player",
    "Good Communication Skills and Ability to Work under Pressure"
  ]
};

export const educationHistory: EducationItem[] = [
  {
    degree: "Bachelor in Computer Application (BCA)",
    institute: "Midnapore City College",
    board: "Vidyasagar University",
    duration: "2023-27",
    gpaOrPercentage: "7.53 CGPA (Avg)",
    isPursuing: true,
    breakdown: [
      { label: "1st Semester", value: "7.90 GPA" },
      { label: "2nd Semester", value: "8.50 GPA" },
      { label: "3rd Semester", value: "7.70 GPA" },
      { label: "4th Semester", value: "7.18 GPA" },
      { label: "5th Semester", value: "6.40 GPA" }
    ]
  },
  {
    degree: "Higher Secondary Exam (12th)",
    institute: "G.M.S.S.S.M NIKATAN (H.S)",
    board: "W.B.C.H.S.E",
    duration: "Passed 2023",
    gpaOrPercentage: "73.00%",
    isPursuing: false
  },
  {
    degree: "Secondary Exam (10th)",
    institute: "G.M.S.S.S.M NIKATAN (H.S)",
    board: "W.B.B.S.E",
    duration: "Passed 2021",
    gpaOrPercentage: "67.00%",
    isPursuing: false
  }
];

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend-web",
    title: "Web Development",
    skills: [
      { name: "HTML5 / CSS3", level: 92 },
      { name: "JavaScript (ES6+)", level: 85 },
      { name: "TypeScript", level: 75 },
      { name: "React & Vite", level: 80 },
      { name: "Tailwind CSS", level: 90 }
    ]
  },
  {
    id: "core-programming",
    title: "Core Programming",
    skills: [
      { name: "Python", level: 82 },
      { name: "Java", level: 78 },
      { name: "C Programming", level: 80 },
      { name: "SQL Databases", level: 70 }
    ]
  },
  {
    id: "ai-cognitive",
    title: "AI & Cognitive Agents",
    skills: [
      { name: "AI Agent Architecture", level: 88 },
      { name: "Google Gemini SDK", level: 85 },
      { name: "ChatGPT Prompting", level: 90 },
      { name: "Automation Toolchains", level: 80 }
    ]
  },
  {
    id: "productivity",
    title: "Productivity & Hardware",
    skills: [
      { name: "IoT Node Integrations", level: 75 },
      { name: "MS Office Suite (Word, Excel, PPT)", level: 85 },
      { name: "GitHub Version Control", level: 80 }
    ]
  }
];

export const internshipExperience: InternshipItem = {
  title: "From Learner to Builder: Become an AI Agent Architect",
  provider: "IBM SkillsBuild",
  duration: "1 Month",
  period: "20/07/2025 to 22/08/2025",
  roleDescription: "Intensive training and experiential building focused on cognitive system architectures, natural language processing, and prompt-engineered automations.",
  keyTakeaways: [
    "Designed and tested automated multi-step custom agent pipelines using state-of-the-art cognitive frameworks.",
    "Engineered system prompts to enable reliable structured output and formatting from LLM services.",
    "Constructed prototype workflow automations bridging file-handling engines with cloud-based intelligence.",
    "Completed core modules on AI safety, agentic guardrails, and responsive telemetry systems."
  ]
};

export const projectsList: ProjectItem[] = [
  {
    id: "ai-agent-architect",
    title: "Aura Agent Workflow Engine",
    description: "An automated document intelligence and report compiler designed around agentic pipelines. Integrates Gemini API to parse PDFs, extract structured telemetry data, and compile automated Markdown briefs based on user custom constraints.",
    category: "AI Agent Architecture",
    tags: ["Gemini API", "TypeScript", "Node.js", "AI Agents"],
    keyFeatures: [
      "Dynamic prompt routing based on file types",
      "Robust state machine handling long-running task flows",
      "Generates beautifully structured custom analytical reports",
      "Safe, structured output compliance using schema constraints"
    ],
    demoUrl: "#",
    githubUrl: "https://github.com/mondalrakesh200500"
  },
  {
    id: "responsive-dashboard",
    title: "Nova Web Telemetry Hub",
    description: "A fast, fully responsive monitoring suite featuring beautiful micro-interactions, responsive charts, and fluid layout panels. Supports dynamic search, filter controls, and local-storage dashboard persistence.",
    category: "Web Development",
    tags: ["React 19", "Vite", "Tailwind CSS", "Motion"],
    keyFeatures: [
      "Ultra-responsive grid conforming to high-end PCs and mobile screens",
      "Dynamic search, multi-tag filtering, and quick actions",
      "Fully integrated interactive dark mode and custom fluid graphs",
      "Zero-dependency local layout persistence"
    ],
    demoUrl: "#",
    githubUrl: "https://github.com/mondalrakesh200500"
  },
  {
    id: "iot-smart-panel",
    title: "Beacon IoT Node Controller",
    description: "A beautiful hardware status controller prototype showcasing simulated environmental sensors (humidity, temp, system load) with rich UI state controls. Ideal for visualizing micro-controller nodes.",
    category: "IoT Project",
    tags: ["React", "Lucide Icons", "CSS Animations", "IoT Mock"],
    keyFeatures: [
      "Real-time responsive telemetry dashboards with simulated web sockets",
      "Interactive slider switches to toggling simulated node states",
      "Low latency, high speed animation layouts optimized for touch devices",
      "Diagnostic console displaying logs and system events"
    ],
    demoUrl: "#",
    githubUrl: "https://github.com/mondalrakesh200500"
  }
];
