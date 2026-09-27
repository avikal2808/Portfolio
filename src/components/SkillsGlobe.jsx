import React, { useEffect, useRef, useState } from 'react';

const SKILLS_LIST = [
  { name: 'Java', category: 'Languages', color: '#4338CA', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' },
  { name: 'Spring Boot', category: 'Backend', color: '#0D9488', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg' },
  { name: 'PostgreSQL', category: 'Database', color: '#0D9488', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
  { name: 'PostGIS', category: 'Spatial DB', color: '#0D9488', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-plain.svg' },
  { name: 'Python', category: 'Languages', color: '#4338CA', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
  { name: 'Docker', category: 'DevOps', color: '#4338CA', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
  { name: 'React.js', category: 'Frontend', color: '#0D9488', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
  { name: 'Node.js', category: 'Backend', color: '#0D9488', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
  { name: 'Git', category: 'DevOps', color: '#4338CA', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
  { name: 'C++', category: 'Languages', color: '#4338CA', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg' },
  { name: 'JavaScript', category: 'Languages', color: '#4338CA', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
  { name: 'MySQL', category: 'Database', color: '#0D9488', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
  { name: 'MongoDB', category: 'Database', color: '#0D9488', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
  { name: 'Postman', category: 'Tools', color: '#4338CA', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg' },
  { name: 'JUnit', category: 'Testing', color: '#0D9488', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/junit/junit-original.svg' },
  { name: 'Linux', category: 'Tools', color: '#4338CA', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg' },
  { name: 'Vercel', category: 'DevOps', color: '#4338CA', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg' },
  { name: 'HTML5', category: 'Frontend', color: '#0D9488', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
  { name: 'CSS3', category: 'Frontend', color: '#0D9488', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
  { name: 'GitHub', category: 'DevOps', color: '#1A1A1A', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg' },
];

export default function SkillsGlobe() {
  const canvasRef = useRef(null);
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [isAutoRotate, setIsAutoRotate] = useState(true);

  const hoveredSkillRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = canvas.parentElement.clientWidth);
    let height = (canvas.height = 680); // Taller canvas for wide distant spacing

    const handleResize = () => {
      if (canvas && canvas.parentElement) {
        width = canvas.width = canvas.parentElement.clientWidth;
        height = canvas.height = Math.min(720, Math.max(520, window.innerHeight * 0.7));
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();

    // Preload logo images
    const loadedImages = {};
    SKILLS_LIST.forEach((skill) => {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.src = skill.iconUrl;
      img.onload = () => {
        loadedImages[skill.name] = img;
      };
    });

    // Expanded sphere radius for wide distant spacing between skills
    const count = SKILLS_LIST.length;
    const getRadius = () => Math.min(width, height) * 0.48; // Spaced out distant radius

    let nodes = SKILLS_LIST.map((skill, i) => {
      const phi = Math.acos(-1 + (2 * i + 1) / count);
      const theta = Math.sqrt(count * Math.PI) * phi;
      const r = getRadius();
      return {
        ...skill,
        x: r * Math.cos(theta) * Math.sin(phi),
        y: r * Math.sin(theta) * Math.sin(phi),
        z: r * Math.cos(phi),
        screenX: 0,
        screenY: 0,
        scale: 1,
        alpha: 1,
        hoverScale: 1,
        hoverGlow: 0,
      };
    });

    let angleX = 0.002;
    let angleY = 0.003;
    let mouseX = 0;
    let mouseY = 0;
    let isDragging = false;
    let lastMouseX = 0;
    let lastMouseY = 0;

    const onMouseDown = (e) => {
      isDragging = true;
      lastMouseX = e.clientX;
      lastMouseY = e.clientY;
    };

    const onMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const currentX = e.clientX - rect.left;
      const currentY = e.clientY - rect.top;

      if (isDragging) {
        const deltaX = e.clientX - lastMouseX;
        const deltaY = e.clientY - lastMouseY;
        angleY = deltaX * 0.004;
        angleX = -deltaY * 0.004;
        lastMouseX = e.clientX;
        lastMouseY = e.clientY;
      } else {
        const cx = width / 2;
        const cy = height / 2;
        mouseX = (currentX - cx) / cx;
        mouseY = (currentY - cy) / cy;
      }

      // Check hover on nodes
      let foundHover = null;
      nodes.forEach((node) => {
        const iconRadius = 32 * node.scale;
        const dx = currentX - node.screenX;
        const dy = currentY - node.screenY;
        if (Math.sqrt(dx * dx + dy * dy) < iconRadius && node.alpha > 0.4) {
          foundHover = node;
        }
      });
      hoveredSkillRef.current = foundHover ? foundHover.name : null;
      setHoveredSkill(foundHover);
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    const container = canvas.parentElement;
    container.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    // Touch support
    const onTouchStart = (e) => {
      if (e.touches.length === 1) {
        isDragging = true;
        lastMouseX = e.touches[0].clientX;
        lastMouseY = e.touches[0].clientY;
      }
    };
    const onTouchMove = (e) => {
      if (isDragging && e.touches.length === 1) {
        const deltaX = e.touches[0].clientX - lastMouseX;
        const deltaY = e.touches[0].clientY - lastMouseY;
        angleY = deltaX * 0.004;
        angleX = -deltaY * 0.004;
        lastMouseX = e.touches[0].clientX;
        lastMouseY = e.touches[0].clientY;
      }
    };
    const onTouchEnd = () => {
      isDragging = false;
    };
    container.addEventListener('touchstart', onTouchStart);
    container.addEventListener('touchmove', onTouchMove);
    container.addEventListener('touchend', onTouchEnd);

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const radius = getRadius();
      const centerX = width / 2;
      const centerY = height / 2;

      // Rotation dampening / auto rotate
      if (!isDragging && isAutoRotate) {
        angleX = mouseY * 0.002 + 0.001;
        angleY = mouseX * 0.002 + 0.002;
      } else if (!isDragging) {
        angleX *= 0.95;
        angleY *= 0.95;
      }

      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);
      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);

      // Rotate nodes around 3D axes
      nodes.forEach((node) => {
        let y1 = node.y * cosX - node.z * sinX;
        let z1 = node.z * cosX + node.y * sinX;

        let x2 = node.x * cosY + z1 * sinY;
        let z2 = z1 * cosY - node.x * sinY;

        node.x = x2;
        node.y = y1;
        node.z = z2;

        const focalLength = 450;
        const scale = focalLength / (focalLength + z2 + radius * 0.85);
        node.scale = scale;
        node.screenX = centerX + node.x * scale * 1.25;
        node.screenY = centerY + node.y * scale * 1.25;
        node.alpha = Math.max(0.15, (z2 + radius) / (2 * radius));

        // LERP Smooth interpolation for hover scale and glow
        const isHovered = hoveredSkillRef.current === node.name;
        const targetScale = isHovered ? 1.4 : 1.0;
        const targetGlow = isHovered ? 1.0 : 0.0;

        node.hoverScale += (targetScale - node.hoverScale) * 0.12;
        node.hoverGlow += (targetGlow - node.hoverGlow) * 0.12;
      });

      // 1. SUBTLE CLEAN LIGHT WIREFRAME MESH CONNECTING LINES
      ctx.save();
      ctx.lineWidth = 1.2;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].screenX - nodes[j].screenX;
          const dy = nodes[i].screenY - nodes[j].screenY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 180) {
            const minAlpha = Math.min(nodes[i].alpha, nodes[j].alpha);
            const lineAlpha = (1 - dist / 180) * 0.45 * minAlpha;
            if (lineAlpha > 0.03) {
              const isHoverLine = (nodes[i].hoverGlow > 0.2) || (nodes[j].hoverGlow > 0.2);
              ctx.strokeStyle = isHoverLine ? '#4338CA' : `rgba(67, 56, 202, ${Math.min(0.4, lineAlpha)})`;
              ctx.shadowColor = isHoverLine ? '#4338CA' : 'transparent';
              ctx.shadowBlur = isHoverLine ? 8 : 0;
              ctx.lineWidth = isHoverLine ? 2.0 : 1.0;
              ctx.beginPath();
              ctx.moveTo(nodes[i].screenX, nodes[i].screenY);
              ctx.lineTo(nodes[j].screenX, nodes[j].screenY);
              ctx.stroke();
            }
          }
        }
      }
      ctx.restore();

      // 2. SORT NODES BY Z FOR ACCURATE 3D DEPTH RENDERING
      nodes.sort((a, b) => a.z - b.z);

      // 3. DRAW LOGO ICON NODES (LIGHT CLEAN BACKINGS)
      nodes.forEach((node) => {
        const isFront = node.alpha > 0.55 || node.hoverGlow > 0.1;
        const iconSize = Math.max(26, 48 * node.scale * node.hoverScale);
        const circleRadius = iconSize * (0.8 + 0.05 * node.hoverGlow);

        ctx.save();
        ctx.globalAlpha = Math.min(1, node.alpha + 0.2 + 0.2 * node.hoverGlow);

        // Smooth background aura on hover
        if (node.hoverGlow > 0.01) {
          ctx.shadowColor = 'rgba(67, 56, 202, 0.35)';
          ctx.shadowBlur = 20 * node.hoverGlow;
          ctx.fillStyle = '#FFFFFF';
          ctx.strokeStyle = '#4338CA';
          ctx.lineWidth = 2.5 * node.hoverGlow;
        } else {
          ctx.shadowBlur = 0;
          ctx.fillStyle = isFront ? '#FFFFFF' : '#F8F7F4';
          ctx.strokeStyle = isFront ? '#E5E2DC' : '#E5E2DC';
          ctx.lineWidth = 1;
        }

        ctx.beginPath();
        ctx.arc(node.screenX, node.screenY, circleRadius, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        // Draw devicon SVG logo image
        const img = loadedImages[node.name];
        if (img && img.complete) {
          try {
            ctx.drawImage(
              img,
              node.screenX - iconSize / 2,
              node.screenY - iconSize / 2,
              iconSize,
              iconSize
            );
          } catch (e) {
            // fallback
          }
        } else {
          ctx.font = `700 ${Math.max(11, 15 * node.scale * node.hoverScale)}px monospace`;
          ctx.fillStyle = node.color || '#4338CA';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(node.name.substring(0, 2).toUpperCase(), node.screenX, node.screenY);
        }

        // SMOOTHLY ANIMATED SKILL NAME LABEL DIRECTLY BELOW LOGO
        const fontSize = Math.max(9.5, Math.floor(12 * node.scale * (1 + (node.hoverScale - 1) * 0.45)));
        ctx.font = `${node.hoverGlow > 0.2 ? '700' : '600'} ${fontSize}px "JetBrains Mono", monospace`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        const labelY = node.screenY + circleRadius + fontSize * 0.75 + (4 + 4 * node.hoverGlow);

        if (node.hoverGlow > 0.05) {
          ctx.fillStyle = '#4338CA';
        } else {
          ctx.fillStyle = isFront ? '#1A1A1A' : '#5C6670';
        }

        ctx.fillText(node.name, node.screenX, labelY);
        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      container.removeEventListener('touchstart', onTouchStart);
      container.removeEventListener('touchmove', onTouchMove);
      container.removeEventListener('touchend', onTouchEnd);
    };
  }, [isAutoRotate]);

  return (
    <div className="relative w-full bg-[#FFFFFF] border border-[#E5E2DC] rounded-2xl p-4 sm:p-6 overflow-hidden shadow-xl">
      {/* Globe Top Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#E5E2DC] pb-3 mb-2 font-mono text-xs">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#4338CA] animate-pulse"></span>
          <span className="text-[#4338CA] font-bold">&gt; 3D_SKILL_SPHERE</span>
          <span className="text-[#5C6670] hidden sm:inline">[DRAG TO ROTATE 360°]</span>
        </div>

        {/* Hovered Skill Tooltip Badge */}
        {hoveredSkill ? (
          <div className="px-3 py-1 bg-[#EEF0F7] border border-[#4338CA]/30 text-[#4338CA] rounded font-mono text-xs font-bold animate-pulse flex items-center gap-2 shadow-sm">
            <span>&gt; {hoveredSkill.name}</span>
            <span className="text-[#5C6670] font-normal">({hoveredSkill.category})</span>
          </div>
        ) : (
          <div className="text-[#5C6670] font-mono text-xs hidden md:block">
            Hover over any logo node for details
          </div>
        )}

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsAutoRotate(!isAutoRotate)}
            className={`px-3 py-1 rounded border transition-all ${
              isAutoRotate
                ? 'bg-[#EEF0F7] border-[#4338CA]/30 text-[#4338CA] font-semibold shadow-sm'
                : 'bg-[#F1F0EC] border-[#E5E2DC] text-[#5C6670]'
            }`}
          >
            {isAutoRotate ? 'Auto-Spin: ON' : 'Auto-Spin: OFF'}
          </button>
        </div>
      </div>

      {/* 3D Canvas Container */}
      <div className="relative w-full cursor-grab active:cursor-grabbing flex justify-center items-center py-2">
        <canvas ref={canvasRef} className="w-full block" />
      </div>

      {/* Footer Info Legend */}
      <div className="flex flex-wrap justify-between items-center gap-3 pt-3 border-t border-[#E5E2DC] font-mono text-[11px] text-[#5C6670]">
        <div className="flex flex-wrap items-center gap-4">
          <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-[#4338CA]"></span> Languages</span>
          <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-[#0D9488]"></span> Backend & APIs</span>
          <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-[#D97706]"></span> Databases & PostGIS</span>
          <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-[#4338CA]"></span> DevOps & Tools</span>
        </div>
        <span className="text-[#5C6670] text-[10px]">Rotatable 3D Tech Logo Sphere</span>
      </div>
    </div>
  );
}
