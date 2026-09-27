import React, { useEffect, useState } from 'react';

function Section({ id, prompt, title, subtitle, children }) {
  return (
    <section id={id} className="relative w-full max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16 scroll-mt-24">
      <div className="mb-8 sm:mb-10">
        <div className="flex items-center gap-2 font-mono text-sm sm:text-base">
          <span className="text-[#2563EB]">&gt;</span>
          <span className="text-[#111827] font-bold tracking-tight">{prompt}</span>
        </div>
        {subtitle && (
          <p className="mt-2 pl-6 text-sm sm:text-base text-[#475569]">{subtitle}</p>
        )}
      </div>
      {children}
    </section>
  );
}

function AboutSystem() {
  return (
    <div className="bg-[#FFFFFF] border border-[#D9DEE6] rounded-xl p-5 sm:p-7 shadow-card space-y-6">
      <div className="grid md:grid-cols-3 gap-5 sm:gap-6">
        <div className="md:col-span-2 space-y-3 text-sm sm:text-[15px] text-[#111827] leading-relaxed">
          <p>
            <span className="text-[#2563EB] font-mono font-semibold">&gt;</span>{" "}
            Final-year <span className="font-semibold text-[#111827]">Computer Science undergraduate (2023 – 2027)</span> with
            hands-on backend engineering experience building <span className="text-[#111827] font-medium">Spring Boot REST APIs,
            PostGIS geospatial systems, and distributed service architectures</span>.
          </p>
          <p>
            <span className="text-[#2563EB] font-mono font-semibold">&gt;</span>{" "}
            Strong focus on <span className="font-semibold text-[#111827]">Java / JVM internals</span>, clean object-oriented
            design, and production-grade code quality backed by <span className="font-medium text-[#111827]">JUnit testing</span> and Docker-based workflows.
          </p>
          <p>
            <span className="text-[#2563EB] font-mono font-semibold">&gt;</span>{" "}
            Solved <span className="font-semibold text-[#2563EB]">150+ DSA problems on LeetCode</span> and completed structured
            engineering simulations at <span className="font-medium text-[#111827]">JPMorgan Chase &amp; Co.</span> and <span className="font-medium text-[#111827]">Telstra</span> (Forage).
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 content-start">
          <div className="bg-[#FFFFFF] border border-[#D9DEE6] rounded-lg p-3 sm:p-4 text-center shadow-sm">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#2563EB] leading-none">150+</div>
            <div className="mt-2 text-[11px] sm:text-xs text-[#475569] font-mono">LeetCode DSA Solved</div>
          </div>
          <div className="bg-[#FFFFFF] border border-[#D9DEE6] rounded-lg p-3 sm:p-4 text-center shadow-sm">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#0F9D8A] leading-none">&lt; 2s</div>
            <div className="mt-2 text-[11px] sm:text-xs text-[#475569] font-mono">AI Response Latency</div>
          </div>
          <div className="bg-[#FFFFFF] border border-[#D9DEE6] rounded-lg p-3 sm:p-4 text-center shadow-sm">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#0F9D8A] leading-none">~30%</div>
            <div className="mt-2 text-[11px] sm:text-xs text-[#475569] font-mono">Query Latency Reduction</div>
          </div>
          <div className="bg-[#FFFFFF] border border-[#D9DEE6] rounded-lg p-3 sm:p-4 text-center shadow-sm">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#2563EB] leading-none">3+</div>
            <div className="mt-2 text-[11px] sm:text-xs text-[#475569] font-mono">Systematic Projects</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SkillsMatrix() {
  const groups = [
    {
      title: 'Backend',
      items: [
        { name: 'Java', tag: 'OOP / Collections' },
        { name: 'Spring Boot', tag: 'REST / JPA / AOP' },
        { name: 'JSP / Servlet', tag: 'MVC Pattern' },
        { name: 'Python', tag: 'Scripting' },
      ],
    },
    {
      title: 'Databases',
      items: [
        { name: 'PostgreSQL', tag: 'Relational' },
        { name: 'PostGIS', tag: 'Geospatial Index' },
        { name: 'SQL / PL/pgSQL', tag: 'Triggers / Procs' },
        { name: 'MongoDB', tag: 'Document Store' },
      ],
    },
    {
      title: 'Engineering',
      items: [
        { name: 'Docker', tag: 'Containerization' },
        { name: 'Postman', tag: 'API Debugging' },
        { name: 'JUnit', tag: 'Unit Testing' },
        { name: 'Git', tag: 'Version Control' },
      ],
    },
    {
      title: 'Frontend',
      items: [
        { name: 'HTML / CSS', tag: 'Semantic UI' },
        { name: 'JavaScript', tag: 'DOM / ES6+' },
        { name: 'React', tag: 'Component UI' },
        { name: 'Tailwind CSS', tag: 'Design System' },
      ],
    },
  ];

  return (
    <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
      {groups.map((group) => (
        <div key={group.title} className="bg-[#FFFFFF] border border-[#D9DEE6] rounded-xl p-5 shadow-card">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#2563EB]"></span>
            <span className="font-mono text-xs text-[#2563EB] font-bold uppercase tracking-wider">
              :: {group.title}_stack
            </span>
          </div>
          <ul className="space-y-2.5 text-sm">
            {group.items.map((it) => (
              <li key={it.name} className="flex items-center justify-between">
                <span className="font-semibold text-[#111827]">{it.name}</span>
                <span className="text-[11px] font-mono text-[#475569] bg-[#F8FAFC] border border-[#D9DEE6] px-2 py-0.5 rounded">
                  {it.tag}
                </span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function Education() {
  const schools = [
    {
      name: 'JSS Academy of Technical Education, Noida',
      degree: 'B.Tech in Computer Science and Engineering',
      period: '2023 – 2027',
      meta: [
        { k: 'Status', v: 'Pursuing (3rd Year)' },
        { k: 'Core Focus', v: 'Data Structures, OOP, Operating Systems, DBMS, Computer Networks' },
      ],
    },
    {
      name: 'Delhi Public School, Ghaziabad',
      degree: 'Class XII (CBSE) – Science (PCM + IP)',
      period: '2021 – 2022',
      meta: [
        { k: 'Board Score', v: '94.4% Aggregate' },
        { k: 'Highlights', v: 'Computer Science (IP) Topper, CBSE Merit' },
      ],
    },
  ];

  return (
    <ol className="relative border-l border-[#D9DEE6] ml-3 space-y-8">
      {schools.map((s) => (
        <li key={s.name} className="ml-5">
          <span className="absolute -left-[9px] flex items-center justify-center w-4 h-4 rounded-full bg-[#FFFFFF] border-2 border-[#2563EB]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]"></span>
          </span>
          <div className="bg-[#FFFFFF] border border-[#D9DEE6] rounded-xl p-5 shadow-card">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
              <h3 className="font-bold text-[#111827] text-base sm:text-lg">{s.name}</h3>
              <span className="text-xs font-mono text-[#475569] bg-[#F8FAFC] border border-[#D9DEE6] px-2 py-0.5 rounded w-fit">
                {s.period}
              </span>
            </div>
            <div className="font-mono text-xs sm:text-sm text-[#2563EB] font-medium mb-3">{s.degree}</div>
            <dl className="grid sm:grid-cols-2 gap-2 text-xs sm:text-sm">
              {s.meta.map((m) => (
                <div key={m.k} className="flex gap-2">
                  <dt className="text-[#475569] min-w-[84px] font-mono">{m.k}:</dt>
                  <dd className="text-[#111827] font-medium">{m.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </li>
      ))}
    </ol>
  );
}

function SideHudNav({ activeSection }) {
  const items = [
    { id: 'about', label: 'About', idx: '01' },
    { id: 'skills', label: 'Skills', idx: '02' },
    { id: 'projects', label: 'Projects', idx: '03' },
    { id: 'experience', label: 'Experience', idx: '04' },
    { id: 'education', label: 'Education', idx: '05' },
  ];
  return (
    <nav className="hidden xl:flex fixed right-6 top-1/2 -translate-y-1/2 z-30 font-mono text-xs text-[#111827] flex-col items-end gap-5">
      <div className="relative flex flex-col items-end gap-5">
        <div className="absolute right-1.5 top-0 bottom-0 w-px bg-[#D9DEE6]"></div>
        {items.map((it) => {
          const active = activeSection === it.id;
          return (
            <a
              key={it.id}
              href={`#${it.id}`}
              className="group relative flex items-center gap-3 pr-0.5"
            >
              <span className={`transition-all duration-200 ${active ? 'text-[#2563EB] translate-x-0 opacity-100' : 'text-[#94A3B8] -translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 group-hover:text-[#2563EB]'}`}>
                [{it.idx}]
              </span>
              <span className={`transition-colors ${active ? 'text-[#111827] font-bold' : 'text-[#475569] group-hover:text-[#111827]'}`}>
                {it.label}
              </span>
              <span className={`w-3 h-3 rounded-full border-2 transition-all ${active ? 'bg-[#2563EB] border-[#2563EB]' : 'border-[#D9DEE6] group-hover:border-[#2563EB]'}`}></span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('about');
  const [mousePos, setMousePos] = useState({ x: -9999, y: -9999 });

  useEffect(() => {
    const ids = ['about', 'skills', 'projects', 'experience', 'education'];
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const onMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <div className="relative w-full font-sans text-[#111827] bg-transparent">
      <div
        className="cursor-glow"
        style={{ left: `${mousePos.x}px`, top: `${mousePos.y}px` }}
      />

      <SideHudNav activeSection={activeSection} />

      <Section
        id="about"
        prompt="#About.system"
        subtitle="System Diagnostic & Developer Specifications"
      >
        <AboutSystem />
      </Section>

      <Section
        id="skills"
        prompt="#Skills.matrix"
        subtitle="Technology inventory mapped to proficiency & usage context"
      >
        <SkillsMatrix />
      </Section>

      <Section
        id="projects"
        prompt="#Projects.modules"
        subtitle="Live and pinned repositories — rendered directly from the GitHub API"
      >
      </Section>

      <Section
        id="education"
        prompt="#Education.history"
        subtitle="Formal academic journey (reverse chronological)"
      >
        <Education />
      </Section>

      <footer className="w-full mt-8 border-t border-[#D9DEE6] bg-[#FFFFFF]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 space-y-6 text-sm">
          <div className="grid md:grid-cols-3 gap-6 items-start">
            <div className="space-y-2">
              <div className="font-mono text-[#2563EB] font-bold tracking-wider">AVIKAL_PANDEY</div>
              <p className="text-[#475569] text-xs leading-relaxed">
                Backend Engineer · Java / Spring Boot · Distributed Systems · Geospatial Databases
              </p>
            </div>
            <div className="space-y-2">
              <div className="font-mono text-xs text-[#2563EB] uppercase font-bold tracking-wider">
                :: Links
              </div>
              <div className="flex flex-wrap gap-3 text-xs">
                <a href="mailto:avikalpandey2004@gmail.com" className="text-[#475569] hover:text-[#2563EB] transition-colors">Email</a>
                <a href="https://github.com/avikal2808" target="_blank" rel="noopener noreferrer" className="text-[#475569] hover:text-[#2563EB] transition-colors">GitHub</a>
                <a href="https://www.linkedin.com/in/avikal-pandey-459a16297/" target="_blank" rel="noopener noreferrer" className="text-[#475569] hover:text-[#2563EB] transition-colors">LinkedIn</a>
                <a href="https://leetcode.com/u/avikal_2808/" target="_blank" rel="noopener noreferrer" className="text-[#475569] hover:text-[#2563EB] transition-colors">LeetCode</a>
              </div>
            </div>
            <div className="space-y-2 text-xs text-[#475569] font-mono">
              <div><span className="text-[#2563EB]">&gt;</span> build_date: <span className="text-[#111827]">2026-09</span></div>
              <div><span className="text-[#2563EB]">&gt;</span> stack: <span className="text-[#111827]">Java · Spring Boot · React · Vite</span></div>
              <div><span className="text-[#2563EB]">&gt;</span> status: <span className="text-[#0F9D8A] font-bold">ONLINE · OPEN_TO_WORK</span></div>
            </div>
          </div>
          <div className="pt-4 border-t border-[#D9DEE6] text-center text-xs text-[#94A3B8] font-mono">
            © {new Date().getFullYear()} Avikal Pandey · Designed with engineering precision · Built with React + Vite
          </div>
        </div>
      </footer>
    </div>
  );
}
