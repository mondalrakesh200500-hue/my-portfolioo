/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface PersonalInfo {
  name: string;
  role: string;
  email: string;
  phone: string;
  location: string;
  address: string;
  dob: string;
  nationality: string;
  gender: string;
  maritalStatus: string;
  languages: { language: string; proficiency: string }[];
  careerObjective: string;
  personalQualities: string[];
}

export interface EducationItem {
  degree: string;
  institute: string;
  board: string;
  duration: string;
  gpaOrPercentage: string;
  breakdown?: { label: string; value: string }[];
  isPursuing?: boolean;
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  keyFeatures: string[];
  demoUrl?: string;
  githubUrl?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  skills: { name: string; level: number }[]; // Level out of 100
}

export interface InternshipItem {
  title: string;
  provider: string;
  duration: string;
  period: string;
  roleDescription: string;
  keyTakeaways: string[];
}
