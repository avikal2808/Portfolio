import React, { useState, useEffect } from "react";
import Header from "./Header";
import HeroConsole from "./HeroConsole";
import ExperienceLog from "./ExperienceLog";



// ════════════════════════════════════════
//  SECTION WRAPPER
// ════════════════════════════════════════
function Section({ id, label, children }) {
  return (
    <section id={id} className="w-full bg-[#0a0d14] py-16 px-4 font-mono text-sm">
      <div className="max-w-5xl mx-auto space-y-6">
        {/* Section Header */}
        <div className="border-b border-gray-800/80 pb-4">
          <h2 className="text-3xl font-bold text-[#3ed882] tracking-wide flex items-center gap-2">
            <span className="text-[#3ed882]">#</span> {label}
          </h2>
        </div>
        {children}
      </div>
    </section>
  );
}

// ════════════════════════════════════════
//  EDUCATION
// ════════════════════════════════════════
const EDU_DATA = [
  {
    degree: "B.Tech — Computer Science & Engineering",
    institution: "JSS Academy of Technical Education",
    location: "Noida, UP",
    period: "2023 – 2027",
    gpa: "Expected 8.5 CGPA",
    highlights: [
      "Data Structures & Algorithms",
      "Database Management Systems",
      "Operating Systems",
      "Computer Networks",
      "Web Technologies",
    ],
    color: "cyan",
  },
  {
    degree: "Class XII — Science (PCM + CS)",
    institution: "CISCE Board",
    location: "India",
    period: "2022",
    gpa: "96%",
    highlights: [
      "Physics, Chemistry, Mathematics",
      "Computer Science",
      "English Core",
    ],
    color: "purple",
  },
];

function Education() {
  return (
    <Section id="education" label="Education_Log">
      <div className="grid md:grid-cols-2 gap-6">
        {EDU_DATA.map((edu) => {
          const accent =
            edu.color === "cyan"
              ? {
                border: "border-cyan-500/30",
                bg: "bg-cyan-500/5",
                text: "text-cyan-400",
                badge: "bg-cyan-500/15 text-cyan-300 border border-cyan-500/30",
                glow: "box-glow-cyan",
              }
              : {
                border: "border-purple-500/30",
                bg: "bg-purple-500/5",
                text: "text-purple-400",
                badge: "bg-purple-500/15 text-purple-300 border border-purple-500/30",
                glow: "box-glow-purple",
              };

          return (
            <div
              key={edu.degree}
              className={`rounded-xl border ${accent.border} ${accent.bg} ${accent.glow} p-6 relative overflow-hidden`}
            >
              {/* Corner accent */}
              <div className={`absolute top-0 right-0 w-16 h-16 ${accent.text} opacity-10 font-mono text-6xl leading-none select-none`}>
                &#10094;
              </div>

              <div className="font-mono text-xs text-gray-500 mb-1">{edu.period}</div>
              <h3 className={`font-mono font-bold text-sm ${accent.text} mb-1`}>
                {edu.degree}
              </h3>
              <p className="text-white text-sm font-medium mb-0.5">{edu.institution}</p>
              <p className="text-gray-500 text-xs mb-3">{edu.location}</p>

              <span className={`inline-block font-mono text-xs px-2 py-0.5 rounded ${accent.badge} mb-4`}>
                {edu.gpa}
              </span>

              <div className="space-y-1">
                {edu.highlights.map((h) => (
                  <div key={h} className="flex items-center gap-2 font-mono text-xs text-gray-400">
                    <span className={`${accent.text}`}>▸</span>
                    {h}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

// ════════════════════════════════════════
//  SKILLS
// ════════════════════════════════════════
const SKILL_CATEGORIES = [
  {
    label: "Languages",
    icon: "⟨/⟩",
    color: "green",
    skills: ["Python", "JavaScript", "TypeScript", "C++", "SQL"],
  },
  {
    label: "Backend",
    icon: "⚙",
    color: "cyan",
    skills: ["Node.js", "Express.js", "FastAPI", "REST APIs", "JWT Auth"],
  },
  {
    label: "Databases",
    icon: "◈",
    color: "yellow",
    skills: ["PostgreSQL", "MongoDB", "Redis", "SQLite"],
  },
  {
    label: "Frontend",
    icon: "◻",
    color: "purple",
    skills: ["React", "Tailwind CSS", "HTML5", "CSS3", "Vite"],
  },
  {
    label: "Tools",
    icon: "⌘",
    color: "pink",
    skills: ["Git", "Docker", "Postman", "VS Code", "Linux"],
  },
];

const COLOR_MAP = {
  green: { card: "border-green-500/25 bg-green-500/5", icon: "text-green-400", tag: "bg-green-500/10 text-green-300 border-green-500/20", label: "text-green-400" },
  cyan: { card: "border-cyan-500/25 bg-cyan-500/5", icon: "text-cyan-400", tag: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20", label: "text-cyan-400" },
  yellow: { card: "border-yellow-500/25 bg-yellow-500/5", icon: "text-yellow-400", tag: "bg-yellow-500/10 text-yellow-300 border-yellow-500/20", label: "text-yellow-400" },
  purple: { card: "border-purple-500/25 bg-purple-500/5", icon: "text-purple-400", tag: "bg-purple-500/10 text-purple-300 border-purple-500/20", label: "text-purple-400" },
  pink: { card: "border-pink-500/25 bg-pink-500/5", icon: "text-pink-400", tag: "bg-pink-500/10 text-pink-300 border-pink-500/20", label: "text-pink-400" },
};

function Skills() {
  return (
    <Section id="skills" label="Skills_Matrix">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {SKILL_CATEGORIES.map((cat) => {
          const c = COLOR_MAP[cat.color];
          return (
            <div key={cat.label} className={`rounded-xl border ${c.card} p-5 hover:scale-[1.02] transition-transform duration-200`}>
              <div className="flex items-center gap-3 mb-4">
                <span className={`font-mono text-lg ${c.icon}`}>{cat.icon}</span>
                <span className={`font-mono text-xs font-bold uppercase tracking-widest ${c.label}`}>
                  {cat.label}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((s) => (
                  <span
                    key={s}
                    className={`font-mono text-xs px-2.5 py-1 rounded border ${c.tag}`}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

// ════════════════════════════════════════
//  PROJECTS
// ════════════════════════════════════════
const PROJECTS = [
  {
    id: "ULTRON",
    codename: "ULTRON",
    title: "Ultron — AI Monitoring Agent",
    desc: "A distributed AI-powered monitoring system with real-time alerting, anomaly detection via ML pipelines, and a RESTful control plane exposing system telemetry.",
    stack: ["Python", "FastAPI", "PostgreSQL", "Redis", "React"],
    status: "Deployment in Progress",
    color: "cyan",
    repo: "https://github.com/avikal2808",
    metrics: ["5+ RESTful endpoints", "Real-time telemetry", "ML anomaly detection"],
  },
  {
    id: "BARTR",
    codename: "BARTR",
    title: "Bartr — Skill Exchange Platform",
    desc: "A peer-to-peer skill barter marketplace with JWT authentication, smart matching algorithms, and a websocket-powered real-time chat system.",
    stack: ["Node.js", "Express", "MongoDB", "React", "Socket.io"],
    status: "Deployment in Progress",
    color: "purple",
    repo: "https://github.com/avikal2808",
    metrics: ["20% match efficiency gain", "Real-time messaging", "JWT auth flow"],
  },
  {
    id: "TERRANEST",
    codename: "TERRANEST",
    title: "TerraNest — Eco Housing Platform",
    desc: "A sustainable housing discovery platform featuring property listings with eco-ratings, carbon footprint calculators, and geolocation filtering.",
    stack: ["React", "Supabase", "PostgreSQL", "Tailwind", "Vite"],
    status: "Deployment in Progress",
    color: "green",
    repo: "https://github.com/avikal2808",
    metrics: ["Sub-10ms queries", "Geo-based filtering", "Eco-rating engine"],
  },
];

const PROJ_COLORS = {
  cyan: { border: "border-cyan-500/30", bg: "bg-cyan-500/5", accent: "text-cyan-400", badge: "bg-yellow-500/15 border-yellow-400/50 text-yellow-300", glow: "hover:box-glow-cyan" },
  purple: { border: "border-purple-500/30", bg: "bg-purple-500/5", accent: "text-purple-400", badge: "bg-yellow-500/15 border-yellow-400/50 text-yellow-300", glow: "hover:box-glow-purple" },
  green: { border: "border-green-500/30", bg: "bg-green-500/5", accent: "text-green-400", badge: "bg-yellow-500/15 border-yellow-400/50 text-yellow-300", glow: "hover:box-glow-green" },
};

function Projects() {
  return (
    <Section id="projects" label="Projects_Registry">
      <div className="grid md:grid-cols-3 gap-6">
        {PROJECTS.map((p) => {
          const c = PROJ_COLORS[p.color];
          return (
            <div
              key={p.id}
              className={`rounded-xl border ${c.border} ${c.bg} ${c.glow} p-6 flex flex-col gap-4 transition-all duration-300 hover:scale-[1.02]`}
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-2">
                <div>
                  <div className={`font-mono text-xs ${c.accent} mb-1 tracking-widest`}>
                    PROJECT::{p.codename}
                  </div>
                  <h3 className="text-white text-sm font-semibold leading-snug">{p.title}</h3>
                </div>
              </div>

              {/* Deployment badge */}
              <span className={`self-start inline-flex items-center gap-1.5 font-mono text-xs px-2.5 py-1 rounded border ${c.badge} badge-pulse`}>
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
                {p.status}
              </span>

              {/* Description */}
              <p className="text-gray-400 text-xs leading-relaxed">{p.desc}</p>

              {/* Metrics */}
              <div className="space-y-1">
                {p.metrics.map((m) => (
                  <div key={m} className={`font-mono text-xs ${c.accent} flex items-center gap-2`}>
                    <span className="text-gray-600">▸</span>
                    {m}
                  </div>
                ))}
              </div>

              {/* Stack */}
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {p.stack.map((s) => (
                  <span key={s} className="font-mono text-xs px-2 py-0.5 rounded bg-gray-800/80 border border-gray-700/50 text-gray-400">
                    {s}
                  </span>
                ))}
              </div>

              {/* GitHub link */}
              <a
                href={p.repo}
                target="_blank"
                rel="noopener noreferrer"
                className={`font-mono text-xs ${c.accent} hover:underline flex items-center gap-1.5 transition-colors mt-1`}
              >
                <span>⎇</span>
                github.com/avikal2808
              </a>
            </div>
          );
        })}
      </div>
    </Section>
  );
}



// ════════════════════════════════════════
//  FOOTER
// ════════════════════════════════════════
function Footer() {
  return (
    <footer className="border-t border-gray-800/60 py-8 px-6">
      <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-gray-600">
        <span>
          <span className="text-green-400">©</span> {new Date().getFullYear()} Avikal Pandey
        </span>
        <span>
          Built with <span className="text-green-400">React</span> +{" "}
          <span className="text-cyan-400">Tailwind</span>
        </span>
        <a
          href="https://github.com/avikal2808"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-green-400 transition-colors"
        >
          github.com/avikal2808 ↗
        </a>
      </div>
    </footer>
  );
}

// ════════════════════════════════════════
//  ROOT COMPONENT
// ════════════════════════════════════════
export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <Header />
      <main>
        <HeroConsole />
        <Education />
        <Skills />
        <Projects />
        <ExperienceLog />
      </main>
      <Footer />
    </div>
  );
}
