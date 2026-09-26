import React, { useState, useEffect } from "react";
import Header from "./Header";
import HeroConsole from "./HeroConsole";
import ExperienceLog from "./ExperienceLog";
import SkillsGlobe from "./SkillsGlobe";
import GithubProjectsExplorer from "./GithubProjectsExplorer";

// ════════════════════════════════════════
//  SIDE HUD NAVIGATION (Desktop & Mobile)
// ════════════════════════════════════════
const NAV_ITEMS = [
  { id: "hero", label: "Home", file: "main.ts", icon: "⟨/⟩" },
  { id: "about", label: "About.system", file: "about.md", icon: "ℹ" },
  { id: "skills", label: "Skills.matrix", file: "skills.json", icon: "⌘" },
  { id: "projects", label: "Projects.registry", file: "projects/", icon: "⎇" },
  { id: "experience", label: "Execution_Log", file: "experience.git", icon: "⚙" },
  { id: "education", label: "Education.log", file: "education.json", icon: "◈" },
];

function SideHudNav() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 250;
      for (const item of NAV_ITEMS) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Right HUD Floating Dot Navigation (Desktop) */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-center gap-3">
        <div className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#4338CA]/30 to-transparent -z-10" />
        {NAV_ITEMS.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="group relative flex items-center justify-center w-10 h-10 transition-all outline-none"
              aria-label={item.label}
            >
              {/* Tooltip Hover Badge */}
              <div className="absolute right-12 px-3 py-1.5 rounded-md bg-[#FFFFFF] border border-[#E5E2DC] text-xs font-mono whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all translate-x-2 group-hover:translate-x-0 pointer-events-none shadow-lg flex items-center gap-2">
                <span className="text-[#4338CA]">&gt;</span>
                <span className={isActive ? "text-[#4338CA] font-bold" : "text-[#5C6670]"}>{item.label}</span>
              </div>

              {/* Dot Ring Indicator */}
              <div className="relative w-full h-full flex items-center justify-center">
                {isActive ? (
                  <div className="rounded-full w-8 h-8 bg-[#FFFFFF] border-2 border-[#4338CA] text-[#4338CA] flex items-center justify-center font-mono text-xs shadow-[0_0_12px_rgba(67,56,202,0.25)]">
                    {item.icon}
                  </div>
                ) : (
                  <div className="w-3 h-3 rounded-full bg-[#E5E2DC] border border-[#E5E2DC] group-hover:w-4 group-hover:h-4 group-hover:border-[#4338CA]/60 group-hover:bg-[#4338CA]/20 transition-all" />
                )}
              </div>
            </a>
          );
        })}
      </div>

      {/* Bottom Floating Navigation Dock (Mobile) */}
      <nav
        className="fixed bottom-0 left-0 right-0 border-t border-[#E5E2DC] bg-[#FFFFFF]/95 backdrop-blur-md z-50 md:hidden px-3 py-2 flex justify-around items-center shadow-lg"
        style={{ paddingBottom: "calc(0.5rem + env(safe-area-inset-bottom))" }}
      >
        {NAV_ITEMS.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`p-2 rounded-lg font-mono text-xs transition-colors flex flex-col items-center gap-1 ${
                isActive ? "text-[#4338CA] bg-[#EEF0F7] border border-[#4338CA]/30" : "text-[#5C6670] hover:text-[#1A1A1A]"
              }`}
            >
              <span className="text-sm">{item.icon}</span>
              <span className="text-[10px]">{item.file.split(".")[0]}</span>
            </a>
          );
        })}
      </nav>
    </>
  );
}

// ════════════════════════════════════════
//  SECTION WRAPPER
// ════════════════════════════════════════
function Section({ id, label, children, subtitle }) {
  return (
    <section id={id} className="w-full bg-transparent py-20 px-4 font-mono text-sm relative border-t border-[#E5E2DC]">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Section Header */}
        <div className="border-b border-[#E5E2DC] pb-4 space-y-1">
          <h2 className="text-3xl font-bold text-[#4338CA] tracking-wide flex items-center gap-2">
            <span className="text-[#4338CA]">&gt;</span> #{label}
          </h2>
          {subtitle && <p className="text-[#5C6670] font-sans text-sm">{subtitle}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}

// ════════════════════════════════════════
//  ABOUT.SYSTEM
// ════════════════════════════════════════
function AboutSystem() {
  const stats = [
    { value: "150+", label: "LeetCode DSA Solved", sub: "Core Java & Algorithms", color: "text-[#4338CA]" },
    { value: "< 2s", label: "AI Response Latency", sub: "ULTRON Multithreaded Speech", color: "text-[#0D9488]" },
    { value: "~30%", label: "Query Latency Reduction", sub: "PostgreSQL & PostGIS KNN", color: "text-[#4338CA]" },
    { value: "5+", label: "REST Microservice Endpoints", sub: "Spring Boot & Telstra Specs", color: "text-[#0D9488]" },
  ];

  return (
    <Section id="about" label="About.system" subtitle="System Diagnostic & Developer Specifications">
      <div className="grid lg:grid-cols-3 gap-8 items-start font-sans">
        
        {/* Main Bio Card */}
        <div className="lg:col-span-2 bg-[#FFFFFF] border border-[#E5E2DC] rounded-xl p-6 sm:p-8 space-y-6 shadow-md">
          <div className="flex items-center gap-3 border-b border-[#E5E2DC] pb-4">
            <div className="w-3 h-3 rounded-full bg-[#0D9488] animate-pulse" />
            <span className="font-mono text-xs text-[#0D9488] font-semibold uppercase tracking-wider">
              Status: Operational &bull; CS Undergrad @ JSS Noida
            </span>
          </div>

          <p className="text-[#1A1A1A] leading-relaxed text-base">
            I am a <strong className="text-[#1A1A1A] font-bold">B.Tech Computer Science student (2023–2027)</strong> at JSS Academy of Technical Education, Noida, with a deep focus on building robust, scalable backend systems and high-efficiency APIs.
          </p>

          <p className="text-[#5C6670] leading-relaxed text-sm">
            My engineering expertise spans <strong className="text-[#1A1A1A]">Core Java (OOP, Collections, Multithreading)</strong>, <strong className="text-[#1A1A1A]">Spring Boot microservices</strong>, relational schema design with <strong className="text-[#1A1A1A]">PostgreSQL</strong>, and spatial querying using <strong className="text-[#1A1A1A]">PostGIS</strong>. I take pride in writing clean, modular code backed by strict design patterns and unit tests.
          </p>

          <div className="pt-2 font-mono text-xs text-[#5C6670] space-y-2 border-t border-[#E5E2DC]">
            <div className="flex items-center gap-2">
              <span className="text-[#4338CA]">▸</span>
              <span className="text-[#1A1A1A] font-medium">Core Focus:</span> High-throughput REST APIs, Geospatial Indexing & System Security
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#4338CA]">▸</span>
              <span className="text-[#1A1A1A] font-medium">Current Location:</span> Noida / NCR, India
            </div>
          </div>
        </div>

        {/* Stats Grid Side Column */}
        <div className="grid grid-cols-2 lg:grid-cols-1 gap-4 font-mono">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-[#FFFFFF] border border-[#E5E2DC] rounded-xl p-5 hover:border-[#4338CA]/40 transition-colors shadow-sm"
            >
              <div className={`text-3xl font-extrabold ${stat.color} mb-1`}>{stat.value}</div>
              <div className="text-xs font-bold text-[#1A1A1A] mb-0.5">{stat.label}</div>
              <div className="text-[11px] text-[#5C6670]">{stat.sub}</div>
            </div>
          ))}
        </div>

      </div>
    </Section>
  );
}

// ════════════════════════════════════════
//  SKILLS MATRIX
// ════════════════════════════════════════
const SKILL_CATEGORIES = [
  {
    label: "Languages",
    icon: "⟨/⟩",
    color: "indigo",
    skills: ["Core Java (OOP/Collections)", "Python", "JavaScript", "SQL"],
  },
  {
    label: "Backend & Frameworks",
    icon: "⚙",
    color: "teal",
    skills: ["Spring Boot", "REST APIs", "Hibernate / JPA", "Node.js", "Express"],
  },
  {
    label: "Databases & Spatial",
    icon: "◈",
    color: "amber",
    skills: ["PostgreSQL", "PostGIS", "MySQL", "MongoDB"],
  },
  {
    label: "Tools & DevOps",
    icon: "⌘",
    color: "indigoSoft",
    skills: ["Git", "GitHub", "Docker", "Maven", "JUnit", "Postman", "Vercel", "Render"],
  },
];

const COLOR_MAP = {
  indigo: { card: "border-[#4338CA]/25 bg-[#FFFFFF] shadow-md hover:border-[#4338CA]/50", icon: "text-[#4338CA]", tag: "bg-[#EEF0F7] text-[#4338CA] border border-[#4338CA]/20", label: "text-[#4338CA]" },
  teal: { card: "border-[#0D9488]/25 bg-[#FFFFFF] shadow-md hover:border-[#0D9488]/50", icon: "text-[#0D9488]", tag: "bg-[#CCFBF1] text-[#0D9488] border border-[#0D9488]/25", label: "text-[#0D9488]" },
  amber: { card: "border-amber-500/25 bg-[#FFFFFF] shadow-md hover:border-amber-500/50", icon: "text-amber-600", tag: "bg-amber-50 text-amber-700 border border-amber-200", label: "text-amber-700" },
  indigoSoft: { card: "border-[#E5E2DC] bg-[#FFFFFF] shadow-md hover:border-[#4338CA]/40", icon: "text-[#4338CA]", tag: "bg-[#F1F0EC] text-[#1A1A1A] border border-[#E5E2DC]", label: "text-[#1A1A1A]" },
  // aliases
  green: { card: "border-[#4338CA]/25 bg-[#FFFFFF] shadow-md", icon: "text-[#4338CA]", tag: "bg-[#EEF0F7] text-[#4338CA] border border-[#4338CA]/20", label: "text-[#4338CA]" },
  cyan: { card: "border-[#0D9488]/25 bg-[#FFFFFF] shadow-md", icon: "text-[#0D9488]", tag: "bg-[#CCFBF1] text-[#0D9488] border border-[#0D9488]/25", label: "text-[#0D9488]" },
  yellow: { card: "border-amber-500/25 bg-[#FFFFFF] shadow-md", icon: "text-amber-600", tag: "bg-amber-50 text-amber-700 border border-amber-200", label: "text-amber-700" },
  purple: { card: "border-[#4338CA]/25 bg-[#FFFFFF] shadow-md", icon: "text-[#4338CA]", tag: "bg-[#EEF0F7] text-[#4338CA] border border-[#4338CA]/20", label: "text-[#4338CA]" },
};

function SkillsMatrix() {
  return (
    <Section id="skills" label="Skills.matrix" subtitle="Interactive 3D Skill Mesh & Technical Stack">
      <div className="space-y-8">
        {/* Interactive 3D Globe Component */}
        <SkillsGlobe />

        {/* Categorized Skills Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {SKILL_CATEGORIES.map((cat) => {
            const c = COLOR_MAP[cat.color] || COLOR_MAP.indigo;
            return (
              <div key={cat.label} className={`rounded-xl border ${c.card} p-6 hover:scale-[1.01] transition-transform duration-200 shadow-md`}>
                <div className="flex items-center gap-3 mb-5 border-b border-[#E5E2DC] pb-3">
                  <span className={`font-mono text-xl ${c.icon}`}>{cat.icon}</span>
                  <span className={`font-mono text-xs font-bold uppercase tracking-wider ${c.label}`}>
                    {cat.label}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {cat.skills.map((s) => (
                    <span
                      key={s}
                      className={`font-mono text-xs px-3 py-1 rounded border ${c.tag}`}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

// ════════════════════════════════════════
//  PROJECTS REGISTRY
// ════════════════════════════════════════
function ProjectsRegistry() {
  return (
    <Section id="projects" label="Projects.registry" subtitle="System Architecture & Open-Source Repositories">
      <GithubProjectsExplorer />
    </Section>
  );
}

// ════════════════════════════════════════
//  EDUCATION & ACHIEVEMENTS
// ════════════════════════════════════════
function EducationAndAchievements() {
  return (
    <Section id="education" label="Education.log" subtitle="Academic Background & Algorithmic Problem Solving">
      <div className="grid md:grid-cols-2 gap-6">
        
        {/* Education Card */}
        <div className="rounded-xl border border-[#4338CA]/25 bg-[#FFFFFF] p-6 space-y-4 shadow-md hover:border-[#4338CA]/40 transition-colors">
          <div className="flex items-center justify-between border-b border-[#E5E2DC] pb-3">
            <h3 className="font-mono font-bold text-sm text-[#4338CA] uppercase tracking-wider">
              Degree & Institution
            </h3>
            <span className="font-mono text-xs text-[#5C6670]">2023 – 2027</span>
          </div>

          <div>
            <h4 className="text-[#1A1A1A] text-base font-bold mb-1">B.Tech in Computer Science</h4>
            <p className="text-[#5C6670] text-sm font-medium">JSS Academy of Technical Education, Noida</p>
            <p className="text-[#5C6670] text-xs">India</p>
          </div>

          <div className="space-y-2 pt-2 border-t border-[#E5E2DC]">
            <div className="text-xs text-[#5C6670] font-mono font-semibold">Core Coursework:</div>
            <div className="flex flex-wrap gap-2">
              {['Data Structures & Algorithms', 'Object-Oriented Programming', 'System Design', 'Computer Networks'].map((course) => (
                <span key={course} className="font-mono text-xs px-2.5 py-1 rounded bg-[#EEF0F7] border border-[#4338CA]/20 text-[#4338CA]">
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* DSA & Achievements Card */}
        <div className="rounded-xl border border-[#0D9488]/25 bg-[#FFFFFF] p-6 space-y-4 shadow-md hover:border-[#0D9488]/40 transition-colors">
          <div className="flex items-center justify-between border-b border-[#E5E2DC] pb-3">
            <h3 className="font-mono font-bold text-sm text-[#0D9488] uppercase tracking-wider">
              Algorithmic Problem Solving
            </h3>
            <span className="font-mono text-xs text-[#0D9488] font-bold bg-[#CCFBF1] px-2 py-0.5 rounded border border-[#0D9488]/25">150+ SOLVED</span>
          </div>

          <div>
            <h4 className="text-[#1A1A1A] text-base font-bold mb-1">LeetCode Competitive DSA</h4>
            <p className="text-[#5C6670] text-sm leading-relaxed">
              Solved 150+ Data Structures & Algorithms problems in Core Java, mastering optimized logical thinking, space-time complexity analysis, and advanced collection structures.
            </p>
          </div>

          <div className="space-y-2 pt-2 border-t border-[#E5E2DC]">
            <div className="text-xs text-[#5C6670] font-mono font-semibold">Focus Areas:</div>
            <div className="flex flex-wrap gap-2">
              {['Java Collections', 'Arrays & Strings', 'Trees & Graphs', 'Dynamic Programming', 'SQL Optimization'].map((topic) => (
                <span key={topic} className="font-mono text-xs px-2.5 py-1 rounded bg-[#CCFBF1] border border-[#0D9488]/25 text-[#0D9488]">
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </Section>
  );
}

// ════════════════════════════════════════
//  FOOTER
// ════════════════════════════════════════
function Footer() {
  return (
    <footer className="border-t border-[#E5E2DC] py-10 px-6 bg-[#FFFFFF] relative z-10 shadow-sm">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#5C6670]">
        <div className="flex items-center gap-2">
          <span className="text-[#4338CA]">©</span> {new Date().getFullYear()} <span className="text-[#1A1A1A] font-semibold">Avikal Pandey</span>
          <span className="text-[#E5E2DC]">&bull;</span>
          <span>System Architect</span>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/avikal2808"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#4338CA] transition-colors"
          >
            GitHub ↗
          </a>
          <a
            href="mailto:avikalpandey2004@gmail.com"
            className="hover:text-[#0D9488] transition-colors"
          >
            Email ↗
          </a>
          <span className="text-[#5C6670]">Built with React & Tailwind</span>
        </div>
      </div>
    </footer>
  );
}

// ════════════════════════════════════════
//  ROOT PORTFOLIO COMPONENT
// ════════════════════════════════════════
export default function Portfolio() {
  return (
    <div className="min-h-screen text-[#1A1A1A] relative">
      <SideHudNav />
      <Header />
      <main className="pb-16 md:pb-0">
        <HeroConsole />
        <AboutSystem />
        <SkillsMatrix />
        <ProjectsRegistry />
        <ExperienceLog />
        <EducationAndAchievements />
      </main>
      <Footer />
    </div>
  );
}

