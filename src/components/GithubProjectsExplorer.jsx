import React, { useState, useEffect } from 'react';

// ─── Rich pinned project data ────────────────────────────────────────────────
const PINNED_PROJECTS = [
  {
    codename: 'TERRANEST',
    title: 'TerraNest — Real Estate Analytics & PostGIS Search',
    desc: 'An end-to-end real estate analytics platform built with Core Java & Spring Boot following strict OOP principles. Features PostGIS geospatial search with R-Tree indexing and KNN algorithms, significantly reducing spatial query latency across large property datasets.',
    language: 'Java',
    languageColor: '#b07219',
    stack: ['Spring Boot', 'PostgreSQL', 'PostGIS', 'Python', 'Maven', 'JUnit'],
    status: 'In Progress',
    statusColor: 'teal',
    metrics: [
      { icon: '◈', text: 'R-Tree Indexing & KNN spatial search' },
      { icon: '⚙', text: 'JWT Authentication & MVC architecture' },
      { icon: '✓', text: 'Automated JUnit test coverage' },
    ],
    html_url: 'https://github.com/avikal2808',
    accentClass: 'border-[#E5E2DC] bg-[#FFFFFF] hover:border-[#0D9488]/50',
    accentText: 'text-[#0D9488]',
    badgeClass: 'bg-[#CCFBF1] border-[#0D9488]/30 text-[#0D9488]',
    tagClass: 'bg-[#EEF0F7] border-[#E5E2DC] text-[#4338CA]',
  },
  {
    codename: 'BARTR',
    title: 'BARTR — Peer-to-Peer Marketplace',
    desc: 'A full-stack peer-to-peer marketplace platform built with Java, Spring Boot backend, and React frontend. Achieved ~30% reduction in data fetch latency through targeted PostgreSQL indexing, optimized SQL schema design, and efficient JPA query strategies.',
    language: 'Java',
    languageColor: '#b07219',
    stack: ['React', 'Spring Boot', 'PostgreSQL', 'Vercel', 'Render', 'JWT'],
    status: 'Deployed',
    statusColor: 'indigo',
    metrics: [
      { icon: '⚡', text: '~30% query latency reduction via indexing' },
      { icon: '☁', text: 'Full-stack deploy: Render + Vercel' },
      { icon: '⚙', text: 'Strict data integrity & JWT auth' },
    ],
    html_url: 'https://github.com/avikal2808',
    accentClass: 'border-[#E5E2DC] bg-[#FFFFFF] hover:border-[#4338CA]/50',
    accentText: 'text-[#4338CA]',
    badgeClass: 'bg-[#EEF0F7] border-[#4338CA]/30 text-[#4338CA]',
    tagClass: 'bg-[#EEF0F7] border-[#E5E2DC] text-[#4338CA]',
  },
  {
    codename: 'ULTRON',
    title: 'ULTRON — Desktop AI Speech Assistant',
    desc: 'A lightweight desktop AI assistant with continuous hotword detection and speech-to-text capabilities. Executes custom voice commands via OpenRouter API with sub-2s response latency. Reduced overall latency by 40% using multithreaded async API calls — all within a 30MB RAM footprint.',
    language: 'Python',
    languageColor: '#3572A5',
    stack: ['Python', 'OpenRouter API', 'Tkinter', 'Multithreading', 'AsyncIO'],
    status: 'Completed',
    statusColor: 'teal',
    metrics: [
      { icon: '⚡', text: 'Sub-2s latency (40% speedup via async)' },
      { icon: '◉', text: 'Ultra-light 30MB RAM listener footprint' },
      { icon: '◈', text: 'Offline Tkinter desktop GUI' },
    ],
    html_url: 'https://github.com/avikal2808',
    accentClass: 'border-[#E5E2DC] bg-[#FFFFFF] hover:border-[#0D9488]/50',
    accentText: 'text-[#0D9488]',
    badgeClass: 'bg-[#CCFBF1] border-[#0D9488]/30 text-[#0D9488]',
    tagClass: 'bg-[#EEF0F7] border-[#E5E2DC] text-[#4338CA]',
  },
  {
    codename: 'RENTORA',
    title: 'Rentora — Peer-to-Peer Item Rental Platform',
    desc: 'A full-stack marketplace for renting items that are impractical to buy — cameras, tools, instruments, and more. Engineered from scratch with structured SQL queries for efficient data fetch & integrity. Features real-time chat via WebSockets with wave-loading UX for heavy message threads, a user feedback & star-rating trust system, and Razorpay payment API integration (planned).',
    language: 'Java',
    languageColor: '#b07219',
    stack: ['React', 'Spring Boot', 'PostgreSQL', 'WebSockets', 'Razorpay API'],
    status: 'In Progress',
    statusColor: 'amber',
    metrics: [
      { icon: '⚡', text: 'Real-time chat via WebSockets + wave-load UX' },
      { icon: '◈', text: 'Optimised SQL schema for efficient data fetch' },
      { icon: '★', text: 'User trust: feedback & star-rating system' },
    ],
    html_url: 'https://github.com/avikal2808',
    accentClass: 'border-[#E5E2DC] bg-[#FFFFFF] hover:border-amber-500/50',
    accentText: 'text-amber-700',
    badgeClass: 'bg-amber-50 border-amber-200 text-amber-800',
    tagClass: 'bg-[#EEF0F7] border-[#E5E2DC] text-[#4338CA]',
  },
];

// ─── Status dot colour map ────────────────────────────────────────────────────
const STATUS_DOT = {
  cyan:   'bg-[#0D9488]',
  teal:   'bg-[#0D9488]',
  purple: 'bg-[#4338CA]',
  indigo: 'bg-[#4338CA]',
  green:  'bg-[#0D9488]',
  amber:  'bg-amber-500',
};

// ─── Fallback / live repo list ────────────────────────────────────────────────
const FALLBACK_REPOS = [
  { name: 'TerraNest',                    language: 'Java',       languageColor: '#b07219', updatedAt: 'Updated 2 days ago',   html_url: 'https://github.com/avikal2808', isPinned: true,  stars: 12, forks: 3 },
  { name: 'BARTR',                         language: 'Java',       languageColor: '#b07219', updatedAt: 'Updated 1 week ago',   html_url: 'https://github.com/avikal2808', isPinned: true,  stars: 18, forks: 5 },
  { name: 'ULTRON',                        language: 'Python',     languageColor: '#3572A5', updatedAt: 'Updated 2 weeks ago',  html_url: 'https://github.com/avikal2808', isPinned: true,  stars: 24, forks: 7 },
  { name: 'Software-Engineering-Sims',     language: 'Java',       languageColor: '#b07219', updatedAt: 'Updated 1 month ago',  html_url: 'https://github.com/avikal2808', isPinned: true,  stars: 15, forks: 4 },
  { name: 'Java-DSA-LeetCode',             language: 'Java',       languageColor: '#b07219', updatedAt: 'Updated 1 month ago',  html_url: 'https://github.com/avikal2808', isPinned: false, stars: 31, forks: 9 },
  { name: 'Developer-Portfolio',           language: 'JavaScript', languageColor: '#f1e05a', updatedAt: 'Updated 3 days ago',   html_url: 'https://github.com/avikal2808', isPinned: false, stars:  9, forks: 2 },
];

const LANG_COLORS = {
  Java: '#b07219', Python: '#3572A5', TypeScript: '#3178c6',
  JavaScript: '#d97706', 'C++': '#f34b7d', HTML: '#e34c26', CSS: '#563d7c',
};

// ─── Component ────────────────────────────────────────────────────────────────
export default function GithubProjectsExplorer() {
  const [repos, setRepos]               = useState(FALLBACK_REPOS);
  const [activeProject, setActiveProject] = useState(null); // null = show grid

  useEffect(() => {
    async function fetchRepos() {
      try {
        const res = await fetch('https://api.github.com/users/avikal2808/repos?sort=updated&per_page=30');
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data) && data.length > 0) {
            setRepos(
              data.map((r) => ({
                name:          r.name,
                language:      r.language || 'Java',
                languageColor: LANG_COLORS[r.language] || '#4338CA',
                updatedAt:     `Updated ${new Date(r.updated_at).toLocaleDateString()}`,
                html_url:      r.html_url,
                isPinned:      r.stargazers_count > 0 || ['TerraNest','BARTR','ULTRON'].includes(r.name),
                stars:         r.stargazers_count || 0,
                forks:         r.forks_count || 0,
              }))
            );
          }
        }
      } catch (_) { /* silently fall back */ }
    }
    fetchRepos();
  }, []);

  return (
    <div className="w-full space-y-6 font-mono">

      {/* ── Main 2-column layout ── */}
      <div className="grid lg:grid-cols-12 gap-6 items-start">

        {/* ── Left: repo list ── */}
        <div className="lg:col-span-4 bg-[#FFFFFF] border border-[#E5E2DC] rounded-xl overflow-hidden shadow-xl flex flex-col" style={{ maxHeight: 700 }}>

          {/* panel header */}
          <div className="bg-[#F8F7F4] px-4 py-3 border-b border-[#E5E2DC] flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2 text-xs font-bold text-[#1A1A1A]">
              <svg className="w-4 h-4 text-[#4338CA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
              </svg>
              <span>Repositories</span>
            </div>
            <span className="px-2 py-0.5 rounded-full bg-[#EEF0F7] text-[#4338CA] text-[11px] font-semibold border border-[#E5E2DC]">
              {repos.length}
            </span>
          </div>

          {/* scrollable list */}
          <div className="divide-y divide-[#E5E2DC] overflow-y-auto flex-1"
            style={{ scrollbarWidth: 'thin', scrollbarColor: '#E5E2DC transparent' }}>
            {repos.map((repo) => (
              <div
                key={repo.name}
                onClick={() => window.open(repo.html_url, '_blank', 'noopener,noreferrer')}
                className="p-4 cursor-pointer transition-all hover:bg-[#F8F7F4] group"
              >
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-sm font-bold text-[#1A1A1A] group-hover:text-[#4338CA] truncate transition-colors flex items-center gap-1.5">
                    <span>{repo.name}</span>
                    <svg className="w-3 h-3 text-[#5C6670] group-hover:text-[#4338CA] transition-colors opacity-0 group-hover:opacity-100"
                      fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </h4>
                  {repo.isPinned && (
                    <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-[#EEF0F7] text-[#4338CA] border border-[#4338CA]/30 font-bold tracking-wider">
                      PINNED
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-3 text-xs text-[#5C6670]">
                  {repo.language && (
                    <span className="flex items-center gap-1 text-[11px]">
                      <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: repo.languageColor }} />
                      {repo.language}
                    </span>
                  )}
                  {repo.stars > 0 && <span>⭐ {repo.stars}</span>}
                  <span className="text-[10px]">{repo.updatedAt}</span>
                </div>
              </div>
            ))}
          </div>

          {/* GitHub profile link footer */}
          <a
            href="https://github.com/avikal2808"
            target="_blank" rel="noopener noreferrer"
            className="p-3 bg-[#F8F7F4] border-t border-[#E5E2DC] text-center text-xs text-[#5C6670]
              hover:text-[#4338CA] hover:bg-[#EEF0F7] transition-colors flex items-center justify-center gap-2 shrink-0"
          >
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57
                0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695
                -.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99
                .105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225
                -.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405
                c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225
                0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3
                0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            <span>github.com/avikal2808 — View all repos ↗</span>
          </a>
        </div>

        {/* ── Right: Pinned projects ── */}
        <div className="lg:col-span-8 space-y-4">

          {/* sub-header */}
          <div className="flex items-center justify-between border-b border-[#E5E2DC] pb-2">
            <h3 className="text-xs font-bold text-[#5C6670] uppercase tracking-wider flex items-center gap-2">
              <span className="text-[#4338CA]">📌</span> Pinned Projects
            </h3>
            <span className="text-[11px] text-[#5C6670]">Click any card → opens on GitHub</span>
          </div>

          {/* project cards grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {PINNED_PROJECTS.map((p) => (
              <a
                key={p.codename}
                href={p.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className={`rounded-xl border ${p.accentClass} p-5 flex flex-col gap-3
                  transition-all duration-300 hover:scale-[1.02] shadow-md group cursor-pointer
                  hover:shadow-lg`}
              >
                {/* card top row */}
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <div className={`font-mono text-[10px] ${p.accentText} uppercase tracking-widest mb-0.5 font-semibold`}>
                      PROJECT::{p.codename}
                    </div>
                    <h4 className="text-[#1A1A1A] text-sm font-bold leading-snug group-hover:text-[#4338CA] transition-colors">
                      {p.title}
                    </h4>
                  </div>
                  {/* GitHub icon */}
                  <svg className={`w-5 h-5 shrink-0 mt-0.5 ${p.accentText} opacity-60 group-hover:opacity-100 transition-opacity`}
                    fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57
                      0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695
                      -.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99
                      .105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225
                      -.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405
                      c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225
                      0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3
                      0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                </div>

                {/* status badge */}
                <span className={`self-start inline-flex items-center gap-1.5 font-mono text-[10px] px-2.5 py-0.5 rounded border ${p.badgeClass}`}>
                  <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${STATUS_DOT[p.statusColor]}`} />
                  {p.status}
                </span>

                {/* description */}
                <p className="text-[#5C6670] text-[11px] font-sans leading-relaxed line-clamp-3">
                  {p.desc}
                </p>

                {/* metrics */}
                <div className="space-y-1 border-t border-[#E5E2DC] pt-2">
                  {p.metrics.map((m) => (
                    <div key={m.text} className={`font-mono text-[10px] text-[#5C6670] flex items-center gap-1.5`}>
                      <span className="text-[#4338CA] text-[9px]">▸</span>
                      <span>{m.text}</span>
                    </div>
                  ))}
                </div>

                {/* tech stack tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className={`font-mono text-[9px] px-2 py-0.5 rounded border ${p.tagClass}`}
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {/* footer: language + open link */}
                <div className="flex items-center justify-between pt-1 border-t border-[#E5E2DC] text-[10px] text-[#5C6670]">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: p.languageColor }} />
                    {p.language}
                  </span>
                  <span className={`${p.accentText} flex items-center gap-1 group-hover:underline font-semibold`}>
                    Open on GitHub ↗
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
