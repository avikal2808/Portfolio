import React, { useState } from 'react';

export default function HeroConsole() {
  const [activeTab, setActiveTab] = useState('cli');
  const [isCopied, setIsCopied] = useState(false);

  const copyCommand = () => {
    navigator.clipboard?.writeText('curl -s https://api.avikal.dev/v1/profile');
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <section id="hero" className="w-full min-h-screen bg-transparent flex flex-col justify-center items-center p-4 pt-24 pb-16 relative overflow-hidden">

      {/* Background Subtle Ambient Glows (reduced) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#2563EB]/4 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[300px] bg-[#0F9D8A]/4 rounded-full blur-[100px] pointer-events-none" />

      <div className="w-full max-w-5xl space-y-8 z-10">

        {/* Top Hero Text Intro */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#CBD5E1] bg-[#FFFFFF] text-[#334155] text-xs font-mono font-semibold tracking-wider animate-slide-in-up shadow-card">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0F9D8A] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0F9D8A]"></span>
            </span>
            SYSTEM.KERNEL :: v2.5.0 ONLINE &bull; NOIDA, INDIA
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-[#111827] tracking-tight leading-tight">
            Hi, I'm <span className="text-[#2563EB]">Avikal Pandey</span>
          </h1>

          <p className="text-[#475569] text-base sm:text-lg font-normal max-w-2xl mx-auto leading-relaxed">
            <span className="text-[#2563EB] font-mono font-semibold">&lt;Backend Engineer /&gt;</span> Specializing in Java, Spring Boot, distributed backend architectures, PostGIS geospatial indexing, and real-time systems.
          </p>

          {/* Quick Info Badges */}
          <div className="flex flex-wrap justify-center gap-2 pt-2">
            {['JAVA (OOP/Collections)', 'SPRING BOOT', 'POSTGRESQL', 'POSTGIS', 'PYTHON', 'REST APIs', 'DOCKER', 'JUNIT'].map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 bg-[#F8FAFC] border border-[#D9DEE6] text-[#334155] text-[11px] font-mono font-medium rounded hover:bg-[#EFF6FF] hover:border-[#2563EB] hover:text-[#2563EB] transition-colors cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Interactive Terminal Window */}
        <div className="bg-[#FFFFFF] rounded-xl border border-[#D9DEE6] shadow-card-lg overflow-hidden font-mono text-xs sm:text-sm">

          {/* Terminal Header Bar */}
          <div className="bg-[#F8FAFC] px-4 py-3 flex items-center justify-between border-b border-[#D9DEE6]">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
              <span className="text-[#475569] text-xs ml-2 hidden sm:inline">bash — avikal@system-arch</span>
            </div>

            {/* Tab Switcher */}
            <div className="flex bg-[#FFFFFF] p-1 rounded-md border border-[#D9DEE6]">
              <button
                onClick={() => setActiveTab('cli')}
                className={`px-3 py-1 rounded text-xs transition-all ${
                  activeTab === 'cli' ? 'bg-[#2563EB] text-white font-bold shadow-sm' : 'text-[#475569] hover:text-[#111827]'
                }`}
              >
                Terminal Output
              </button>
              <button
                onClick={() => setActiveTab('java')}
                className={`px-3 py-1 rounded text-xs transition-all ${
                  activeTab === 'java' ? 'bg-[#2563EB] text-white font-bold shadow-sm' : 'text-[#475569] hover:text-[#111827]'
                }`}
              >
                Avikal.java
              </button>
            </div>

            <button
              onClick={copyCommand}
              className="text-[#475569] hover:text-[#2563EB] text-xs flex items-center gap-1 transition-colors"
              title="Copy curl command"
            >
              {isCopied ? <span className="text-[#0F9D8A] font-bold">Copied!</span> : <span>Copy cURL</span>}
            </button>
          </div>

          {/* Terminal Body */}
          <div className="p-5 sm:p-6 space-y-6 text-[#111827] min-h-[320px] bg-[#FFFFFF]">
            {activeTab === 'cli' ? (
              <>
                {/* First Call: Profile */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-[#2563EB] font-bold">&gt;</span>
                    <span className="text-[#334155] font-semibold">curl -X GET https://api.avikal.dev/v1/profile</span>
                  </div>

                  <div className="bg-[#F8FAFC] p-4 rounded-lg border border-[#D9DEE6] space-y-1 text-xs sm:text-sm">
                    <div>&#123;</div>
                    <div className="pl-6">
                      <span className="text-[#2563EB] font-medium">"name"</span>: <span className="text-[#0F766E]">"Avikal Pandey"</span>,
                    </div>
                    <div className="pl-6">
                      <span className="text-[#2563EB] font-medium">"degree"</span>: <span className="text-[#0F766E]">"B.Tech in Computer Science (2023 - 2027)"</span>,
                    </div>
                    <div className="pl-6">
                      <span className="text-[#2563EB] font-medium">"institution"</span>: <span className="text-[#0F766E]">"JSS Academy of Technical Education, Noida"</span>,
                    </div>
                    <div className="pl-6">
                      <span className="text-[#2563EB] font-medium">"role"</span>: <span className="text-[#0F766E]">"Backend Developer & Systems Architect"</span>,
                    </div>
                    <div className="pl-6">
                      <span className="text-[#2563EB] font-medium">"dsa_solved"</span>: <span className="text-[#0F766E]">"150+ DSA Problems on LeetCode (Java)"</span>,
                    </div>
                    <div className="pl-6">
                      <span className="text-[#2563EB] font-medium">"status"</span>: <span className="text-[#0F9D8A] font-bold">"200 OK — Ready for Opportunities"</span>
                    </div>
                    <div>&#125;</div>
                  </div>
                </div>

                {/* Second Call: Contact */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-[#2563EB] font-bold">&gt;</span>
                    <span className="text-[#334155] font-semibold">curl -X GET https://api.avikal.dev/v1/contact</span>
                  </div>

                  <div className="bg-[#F8FAFC] p-4 rounded-lg border border-[#D9DEE6] space-y-1 text-xs sm:text-sm">
                    <div>&#123;</div>
                    <div className="pl-6">
                      <span className="text-[#2563EB] font-medium">"email"</span>: <a href="mailto:avikalpandey2004@gmail.com" className="text-[#2563EB] hover:underline">"avikalpandey2004@gmail.com"</a>,
                    </div>
                    <div className="pl-6">
                      <span className="text-[#2563EB] font-medium">"phone"</span>: <span className="text-[#0F766E]">"+91 9793441704"</span>,
                    </div>
                    <div className="pl-6">
                      <span className="text-[#2563EB] font-medium">"github"</span>: <a href="https://github.com/avikal2808" target="_blank" rel="noopener noreferrer" className="text-[#2563EB] hover:underline">"github.com/avikal2808"</a>
                    </div>
                    <div>&#125;</div>
                  </div>
                </div>

                {/* Prompt Line */}
                <div className="flex items-center space-x-2 pt-1 text-[#475569]">
                  <span className="text-[#2563EB] font-bold">&gt;</span>
                  <span className="text-[#2563EB] animate-pulse">_</span>
                </div>
              </>
            ) : (
              <div className="space-y-1 leading-relaxed overflow-x-auto text-xs sm:text-sm bg-[#F8FAFC] p-4 rounded-lg border border-[#D9DEE6]">
                <div><span className="text-[#2563EB] font-semibold">package</span> com.avikal.portfolio;</div>
                <br />
                <div><span className="text-[#2563EB] font-semibold">import</span> org.springframework.stereotype.Service;</div>
                <div><span className="text-[#2563EB] font-semibold">import</span> java.util.List;</div>
                <br />
                <div><span className="text-[#0F9D8A] font-semibold">@Service</span></div>
                <div><span className="text-[#2563EB] font-semibold">public class</span> <span className="text-[#111827] font-bold">AvikalEngine</span> &#123;</div>
                <div className="pl-6 text-[#475569]">// Core technical specs</div>
                <div className="pl-6"><span className="text-[#2563EB] font-semibold">private final</span> String name = <span className="text-[#0F766E]">"Avikal Pandey"</span>;</div>
                <div className="pl-6"><span className="text-[#2563EB] font-semibold">private final</span> String focus = <span className="text-[#0F766E]">"Spring Boot REST APIs & Distributed Systems"</span>;</div>
                <br />
                <div className="pl-6"><span className="text-[#2563EB] font-semibold">public</span> List&lt;String&gt; <span className="text-[#2563EB] font-medium">getCoreStack</span>() &#123;</div>
                <div className="pl-12"><span className="text-[#2563EB] font-semibold">return</span> List.of(<span className="text-[#0F766E]">"Java"</span>, <span className="text-[#0F766E]">"Spring Boot"</span>, <span className="text-[#0F766E]">"PostgreSQL"</span>, <span className="text-[#0F766E]">"PostGIS"</span>, <span className="text-[#0F766E]">"Docker"</span>);</div>
                <div className="pl-6">&#125;</div>
                <div>&#125;</div>
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
