import React, { useEffect, useRef, useState } from "react";

const SKILLS = [
  { name: "Java", icon: "☕", detail: "Core backend language (OOP, Collections, Multithreading, JVM internals)" },
  { name: "Spring Boot", icon: "🍃", detail: "REST APIs, Spring Data JPA, Security, AOP, Microservices foundations" },
  { name: "Python", icon: "🐍", detail: "Scripting, automation, data pipelines" },
  { name: "PostgreSQL", icon: "🐘", detail: "Advanced SQL, indexes, joins, stored procedures" },
  { name: "PostGIS", icon: "🗺️", detail: "Geospatial indexing, spatial queries, GIS data" },
  { name: "MongoDB", icon: "🍃", detail: "Document database, aggregation pipelines" },
  { name: "Docker", icon: "🐳", detail: "Containerization, multi-stage builds, deployments" },
  { name: "Git", icon: "🔧", detail: "Version control, branching, rebase, CI workflows" },
  { name: "JUnit", icon: "🧪", detail: "Unit testing, Mockito, test-driven design" },
  { name: "React", icon: "⚛️", detail: "Component architecture, hooks, state, responsive UI" },
  { name: "Tailwind CSS", icon: "🎨", detail: "Utility-first design system" },
  { name: "REST APIs", icon: "🔌", detail: "Resource modeling, JSON contracts & HTTP semantics" },
  { name: "JavaScript", icon: "📜", detail: "ES6+, DOM, async/await, event loop" },
  { name: "JSP / Servlet", icon: "🌐", detail: "Server-side rendering, MVC, JDBC workflows" },
  { name: "Linux / OS", icon: "🐧", detail: "CLI, shells, processes, memory management" },
  { name: "Data Structures", icon: "🧱", detail: "Arrays, Trees, Graphs, Hashing, Dynamic Programming" },
  { name: "Spring Data JPA", icon: "💽", detail: "ORM, Repositories, Criteria API, Hibernate" },
];

const clamp = (x, a, b) => Math.max(a, Math.min(b, x));

export default function SkillsGlobe() {
  const [idx, setIdx] = useState(-1);
  const [autoSpin, setAutoSpin] = useState(true);

  const wrap = useRef(null);
  const svgRef = useRef(null);

  const size = 780;
  const F = 380;
  const ptsRef = useRef([]);
  const spinRef = useRef(0);
  const tiltRef = useRef((-18 * Math.PI) / 180);
  const dragRef = useRef({
    dx: 0, dy: 0, dragging: false, startX: 0, startY: 0, lastX: 0, lastY: 0,
  });
  const animRef = useRef(0);
  const idxRef = useRef(-1);

  useEffect(() => {
    idxRef.current = idx;
  }, [idx]);

  const makePoints = () => {
    const n = SKILLS.length;
    const result = [];
    const phi = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < n; i++) {
      const y = 1 - (i / (n - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      const th = phi * i;
      const x = Math.cos(th) * r;
      const z = Math.sin(th) * r;
      result.push({ x, y, z });
    }
    ptsRef.current = result;
  };

  const project = (x, y, z) => {
    const s = spinRef.current;
    const cx = Math.cos(s) * x + Math.sin(s) * z;
    const cz = -Math.sin(s) * x + Math.cos(s) * z;
    const t = tiltRef.current;
    const cy = Math.cos(t) * y - Math.sin(t) * cz;
    const _z_ = Math.sin(t) * y + Math.cos(t) * cz;
    const scale = F / (F + _z_ * 300);
    return {
      x: size / 2 + cx * 300 * scale,
      y: size / 2 + cy * 300 * scale,
      scale,
      z: _z_,
    };
  };

  const hitTest = (mx, my) => {
    let best = -1;
    let bestD = 1e9;
    const pts = ptsRef.current;
    for (let i = 0; i < pts.length; i++) {
      const p = project(pts[i].x, pts[i].y, pts[i].z);
      if (p.scale < 0.55) continue;
      const dx = mx - p.x;
      const dy = my - p.y;
      const d = dx * dx + dy * dy;
      if (d < 3600 && d < bestD) {
        bestD = d;
        best = i;
      }
    }
    return best;
  };

  const onDown = (e) => {
    const pt = wrap.current.getBoundingClientRect();
    dragRef.current.dragging = true;
    dragRef.current.startX = (e.touches ? e.touches[0].clientX : e.clientX) - pt.left;
    dragRef.current.startY = (e.touches ? e.touches[0].clientY : e.clientY) - pt.top;
    dragRef.current.lastX = dragRef.current.startX;
    dragRef.current.lastY = dragRef.current.startY;
    dragRef.current.dx = 0;
    dragRef.current.dy = 0;
  };

  const onMove = (e) => {
    const pt = wrap.current.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    const x = clientX - pt.left;
    const y = clientY - pt.top;
    if (dragRef.current.dragging) {
      dragRef.current.dx = x - dragRef.current.lastX;
      dragRef.current.dy = y - dragRef.current.lastY;
      spinRef.current += (x - dragRef.current.lastX) * 0.006;
      tiltRef.current = clamp(
        tiltRef.current + (y - dragRef.current.lastY) * 0.006,
        -0.8, 0.8
      );
      dragRef.current.lastX = x;
      dragRef.current.lastY = y;
      const i = hitTest(x, y);
      idxRef.current = i;
      setIdx(i);
    } else {
      const i = hitTest(x, y);
      idxRef.current = i;
      setIdx(i);
    }
  };

  const onUp = () => {
    dragRef.current.dragging = false;
  };

  const draw = () => {
    const svg = svgRef.current;
    if (!svg) return;
    const nodes = svg.querySelectorAll("[data-role='node']");
    const conns = svg.querySelectorAll("[data-role='conn']");
    const labels = svg.querySelectorAll("[data-role='label']");
    const pts = ptsRef.current;
    const projected = pts.map((p) => project(p.x, p.y, p.z));
    const active = idxRef.current;

    for (let i = 0; i < projected.length; i++) {
      const p = projected[i];
      const node = nodes[i];
      const label = labels[i];
      if (node) {
        const isActive = active === i;
        const r = clamp(p.scale, 0.3, 1.4);
        const op = clamp(0.45 + p.scale * 0.55, 0.3, 1);
        node.setAttribute("cx", p.x);
        node.setAttribute("cy", p.y);
        node.setAttribute("r", 22 * r + (isActive ? 4 : 0));
        node.setAttribute("fill", isActive ? "#EFF6FF" : "#FFFFFF");
        node.setAttribute("stroke", isActive ? "#2563EB" : "#E2E8F0");
        node.setAttribute("stroke-width", isActive ? "2.2" : "1.4");
        node.setAttribute("opacity", op);
        node.style.cursor = "pointer";
      }
      if (label) {
        label.setAttribute("x", p.x);
        label.setAttribute("y", p.y + 6 * (p.scale * 1.05));
        label.setAttribute("font-size", Math.max(10, 13 * clamp(p.scale, 0.7, 1.1)));
        label.setAttribute("opacity", clamp(0.4 + p.scale * 0.6, 0.2, 1));
        label.setAttribute("fill", active === i ? "#111827" : "#334155");
      }
    }

    let ci = 0;
    for (let i = 0; i < projected.length; i++) {
      for (let j = i + 1; j < projected.length; j++) {
        const a = projected[i];
        const b = projected[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const line = conns[ci++];
        if (!line) continue;
        const threshold = 155 + 70 * Math.min(a.z + 1.5, 2);
        if (dist > threshold) {
          line.setAttribute("opacity", 0);
          continue;
        }
        const isActive = active === i || active === j;
        const base = isActive ? 0.9 : 0.4;
        const op = Math.max(0.1, base - dist / 600);
        line.setAttribute("x1", a.x);
        line.setAttribute("y1", a.y);
        line.setAttribute("x2", b.x);
        line.setAttribute("y2", b.y);
        line.setAttribute("stroke", isActive ? "#93C5FD" : "#CBD5E1");
        line.setAttribute("stroke-opacity", isActive ? op * 0.55 : op);
        line.setAttribute("stroke-width", isActive ? 1.4 : 1);
      }
    }
  };

  useEffect(() => {
    makePoints();
    const loop = () => {
      if (!dragRef.current.dragging && autoSpin) {
        spinRef.current += 0.0025;
      }
      if (!dragRef.current.dragging) {
        if (Math.abs(dragRef.current.dx) > 0.01) {
          spinRef.current += dragRef.current.dx * 0.015;
          tiltRef.current = clamp(
            tiltRef.current + dragRef.current.dy * 0.015,
            -0.8, 0.8
          );
          dragRef.current.dx *= 0.92;
          dragRef.current.dy *= 0.92;
        }
      }
      draw();
      animRef.current = requestAnimationFrame(loop);
    };
    animRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animRef.current);
  }, [autoSpin]);

  return (
    <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      {/* Header */}
      <div className="mb-6 sm:mb-8">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-2 font-mono text-sm sm:text-base">
            <span className="inline-flex h-2 w-2 rounded-full bg-[#2563EB]"></span>
            <span className="text-[#2563EB]">&gt;</span>
            <span className="text-[#111827] font-bold tracking-tight">3D_SKILL_SPHERE</span>
            <span className="text-[#64748B] font-normal text-xs sm:text-sm ml-1 hidden sm:inline">
              [DRAG TO ROTATE 360°]
            </span>
          </div>
          <button
            onClick={() => setAutoSpin((s) => !s)}
            className={`text-xs sm:text-sm px-3 py-1.5 rounded-lg border transition-all font-mono font-semibold ${
              autoSpin
                ? "bg-[#EFF6FF] text-[#2563EB] border-[#2563EB]"
                : "bg-white text-[#475569] border-[#D9DEE6]"
            }`}
          >
            {autoSpin ? "⏸ Auto-spin ON" : "▶ Auto-spin OFF"}
          </button>
        </div>
        {idx >= 0 ? (
          <div className="mt-4 pl-6 text-sm text-[#475569]">
            <span className="font-mono font-bold text-[#2563EB]">
              → {SKILLS[idx].name}
            </span>
            <span className="mx-2 text-[#94A3B8]">|</span>
            <span>{SKILLS[idx].detail}</span>
          </div>
        ) : (
          <p className="mt-2 pl-6 text-sm text-[#475569]">
            Interact with the nodes to inspect each technology in the stack.
          </p>
        )}
      </div>

      <div
        ref={wrap}
        className="relative w-full aspect-square max-w-[780px] mx-auto select-none touch-none"
        onMouseDown={onDown}
        onMouseMove={onMove}
        onMouseUp={onUp}
        onMouseLeave={onUp}
        onTouchStart={onDown}
        onTouchMove={onMove}
        onTouchEnd={onUp}
      >
        <div className="absolute inset-0 rounded-2xl bg-white border border-[#D9DEE6] overflow-hidden shadow-card scanline">
          <svg ref={svgRef} viewBox={`0 0 ${size} ${size}`} className="w-full h-full">
            <defs>
              <radialGradient id="orb-gradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#EFF6FF" stopOpacity="0.55" />
                <stop offset="60%" stopColor="#F7F8FA" stopOpacity="0" />
              </radialGradient>
              <filter id="soft-blur">
                <feGaussianBlur stdDeviation="0.4" />
              </filter>
            </defs>

            <circle cx={size / 2} cy={size / 2} r={330} fill="url(#orb-gradient)" />
            <circle
              cx={size / 2}
              cy={size / 2}
              r={320}
              fill="none"
              stroke="#E7EBF0"
              strokeOpacity="0.6"
            />
            <circle
              cx={size / 2}
              cy={size / 2}
              r={240}
              fill="none"
              stroke="#E7EBF0"
              strokeOpacity="0.5"
              strokeDasharray="2 8"
            />
            <circle
              cx={size / 2}
              cy={size / 2}
              r={160}
              fill="none"
              stroke="#E7EBF0"
              strokeOpacity="0.45"
              strokeDasharray="2 10"
            />

            {Array.from({ length: (SKILLS.length * (SKILLS.length - 1)) / 2 }).map((_, i) => (
              <line key={`conn-${i}`} data-role="conn" data-idx={i} />
            ))}

            {SKILLS.map((s, i) => (
              <g key={`g-${i}`}>
                <circle
                  key={`n-${i}`}
                  data-role="node"
                  data-name={s.name}
                  onClick={() => setIdx((cur) => (cur === i ? -1 : i))}
                />
                <text
                  key={`t-${i}`}
                  data-role="label"
                  textAnchor="middle"
                  fontWeight="600"
                  fontFamily="Inter, system-ui"
                >
                  {s.icon} {s.name}
                </text>
              </g>
            ))}
          </svg>
        </div>
      </div>

      {/* Tech list */}
      <div className="mt-8 grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-7 gap-2">
        {SKILLS.map((s, i) => {
          const active = idx === i;
          return (
            <button
              key={s.name}
              onMouseEnter={() => setIdx(i)}
              onMouseLeave={() => setIdx(-1)}
              onClick={() => setIdx((cur) => (cur === i ? -1 : i))}
              className={`px-2.5 py-1.5 text-[11px] sm:text-xs font-mono border rounded-md transition-all text-left flex items-center gap-1.5 ${
                active
                  ? "bg-[#EFF6FF] border-[#2563EB] text-[#2563EB] shadow-sm"
                  : "bg-[#F8FAFC] border-[#D9DEE6] text-[#334155] hover:bg-[#FFFFFF] hover:border-[#CBD5E1]"
              }`}
            >
              <span aria-hidden>{s.icon}</span>
              <span className="truncate">{s.name}</span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
