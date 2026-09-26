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
      
      {/* Background Subtle Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#4338CA]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[300px] bg-[#0D9488]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="w-full max-w-5xl space-y-8 z-10">
        
        {/* Top Hero Text Intro */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#4338CA]/25 bg-[#EEF0F7] text-[#4338CA] text-xs font-mono font-semibold tracking-wider animate-slide-in-up shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0D9488] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0D9488]"></span>
            </span>
            SYSTEM.KERNEL :: v2.5.0 ONLINE &bull; NOIDA, INDIA
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-[#1A1A1A] tracking-tight leading-tight">
            Hi, I'm <span className="text-[#4338CA]">Avikal Pandey</span>
          </h1>

          <p className="text-[#5C6670] text-base sm:text-lg font-normal max-w-2xl mx-auto leading-relaxed">
            <span className="text-[#4338CA] font-mono font-semibold">&lt;Backend Engineer /&gt;</span> Specializing in Java, Spring Boot, distributed backend architectures, PostGIS geospatial indexing, and real-time systems.
          </p>

          {/* Quick Info Badges */}
          <div className="flex flex-wrap justify-center gap-2 pt-2">
            {['JAVA (OOP/Collections)', 'SPRING BOOT', 'POSTGRESQL', 'POSTGIS', 'PYTHON', 'REST APIs', 'DOCKER', 'JUNIT'].map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 bg-[#EEF0F7] border border-[#E5E2DC] text-[#4338CA] text-[11px] font-mono font-medium rounded hover:border-[#4338CA]/50 hover:bg-[#E0E4F2] transition-colors cursor-default shadow-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Interactive Terminal Window */}
        <div className="bg-[#FFFFFF] rounded-xl border border-[#E5E2DC] shadow-xl overflow-hidden font-mono text-xs sm:text-sm">
          
          {/* Terminal Header Bar */}
          <div className="bg-[#F8F7F4] px-4 py-3 flex items-center justify-between border-b border-[#E5E2DC]">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
              <span className="text-[#5C6670] text-xs ml-2 hidden sm:inline">bash — avikal@system-arch</span>
            </div>

            {/* Tab Switcher */}
            <div className="flex bg-[#EEF0F7] p-1 rounded-md border border-[#E5E2DC]">
              <button
                onClick={() => setActiveTab('cli')}
                className={`px-3 py-1 rounded text-xs transition-all ${
                  activeTab === 'cli' ? 'bg-[#4338CA] text-white font-bold shadow-sm' : 'text-[#5C6670] hover:text-[#1A1A1A]'
                }`}
              >
                Terminal Output
              </button>
              <button
                onClick={() => setActiveTab('java')}
                className={`px-3 py-1 rounded text-xs transition-all ${
                  activeTab === 'java' ? 'bg-[#4338CA] text-white font-bold shadow-sm' : 'text-[#5C6670] hover:text-[#1A1A1A]'
                }`}
              >
                Avikal.java
              </button>
            </div>

            <button
              onClick={copyCommand}
              className="text-[#5C6670] hover:text-[#4338CA] text-xs flex items-center gap-1 transition-colors"
              title="Copy curl command"
            >
              {isCopied ? <span className="text-[#0D9488] font-bold">Copied!</span> : <span>Copy cURL</span>}
            </button>
          </div>

          {/* Terminal Body */}
          <div className="p-5 sm:p-6 space-y-6 text-[#1A1A1A] min-h-[320px] bg-[#FFFFFF]">
            {activeTab === 'cli' ? (
              <>
                {/* First Call: Profile */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-[#4338CA] font-bold">&gt;</span>
                    <span className="text-[#1A1A1A] font-semibold">curl -X GET https://api.avikal.dev/v1/profile</span>
                  </div>

                  <div className="bg-[#F8F7F4] p-4 rounded-lg border border-[#E5E2DC] space-y-1 text-xs sm:text-sm">
                    <div>&#123;</div>
                    <div className="pl-6">
                      <span className="text-[#4338CA] font-medium">"name"</span>: <span className="text-[#0D9488]">"Avikal Pandey"</span>,
                    </div>
                    <div className="pl-6">
                      <span className="text-[#4338CA] font-medium">"degree"</span>: <span className="text-[#0D9488]">"B.Tech in Computer Science (2023 - 2027)"</span>,
                    </div>
                    <div className="pl-6">
                      <span className="text-[#4338CA] font-medium">"institution"</span>: <span className="text-[#0D9488]">"JSS Academy of Technical Education, Noida"</span>,
                    </div>
                    <div className="pl-6">
                      <span className="text-[#4338CA] font-medium">"role"</span>: <span className="text-[#0D9488]">"Backend Developer & Systems Architect"</span>,
                    </div>
                    <div className="pl-6">
                      <span className="text-[#4338CA] font-medium">"dsa_solved"</span>: <span className="text-[#0D9488]">"150+ DSA Problems on LeetCode (Java)"</span>,
                    </div>
                    <div className="pl-6">
                      <span className="text-[#4338CA] font-medium">"status"</span>: <span className="text-[#0D9488] font-bold">"200 OK — Ready for Opportunities"</span>
                    </div>
                    <div>&#125;</div>
                  </div>
                </div>

                {/* Second Call: Contact */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-[#4338CA] font-bold">&gt;</span>
                    <span className="text-[#1A1A1A] font-semibold">curl -X GET https://api.avikal.dev/v1/contact</span>
                  </div>

                  <div className="bg-[#F8F7F4] p-4 rounded-lg border border-[#E5E2DC] space-y-1 text-xs sm:text-sm">
                    <div>&#123;</div>
                    <div className="pl-6">
                      <span className="text-[#4338CA] font-medium">"email"</span>: <a href="mailto:avikalpandey2004@gmail.com" className="text-[#4338CA] hover:underline">"avikalpandey2004@gmail.com"</a>,
                    </div>
                    <div className="pl-6">
                      <span className="text-[#4338CA] font-medium">"phone"</span>: <span className="text-[#0D9488]">"+91 9793441704"</span>,
                    </div>
                    <div className="pl-6">
                      <span className="text-[#4338CA] font-medium">"github"</span>: <a href="https://github.com/avikal2808" target="_blank" rel="noopener noreferrer" className="text-[#4338CA] hover:underline">"github.com/avikal2808"</a>
                    </div>
                    <div>&#125;</div>
                  </div>
                </div>

                {/* Prompt Line */}
                <div className="flex items-center space-x-2 pt-1 text-[#5C6670]">
                  <span className="text-[#4338CA] font-bold">&gt;</span>
                  <span className="text-[#4338CA] animate-pulse">_</span>
                </div>
              </>
            ) : (
              <div className="space-y-1 leading-relaxed overflow-x-auto text-xs sm:text-sm bg-[#F8F7F4] p-4 rounded-lg border border-[#E5E2DC]">
                <div><span className="text-[#4338CA] font-semibold">package</span> com.avikal.portfolio;</div>
                <br />
                <div><span className="text-[#4338CA] font-semibold">import</span> org.springframework.stereotype.Service;</div>
                <div><span className="text-[#4338CA] font-semibold">import</span> java.util.List;</div>
                <br />
                <div><span className="text-[#0D9488] font-semibold">@Service</span></div>
                <div><span className="text-[#4338CA] font-semibold">public class</span> <span className="text-[#1A1A1A] font-bold">AvikalEngine</span> &#123;</div>
                <div className="pl-6 text-[#5C6670]">// Core technical specs</div>
                <div className="pl-6"><span className="text-[#4338CA] font-semibold">private final</span> String name = <span className="text-[#0D9488]">"Avikal Pandey"</span>;</div>
                <div className="pl-6"><span className="text-[#4338CA] font-semibold">private final</span> String focus = <span className="text-[#0D9488]">"Spring Boot REST APIs & Distributed Systems"</span>;</div>
                <br />
                <div className="pl-6"><span className="text-[#4338CA] font-semibold">public</span> List&lt;String&gt; <span className="text-[#4338CA] font-medium">getCoreStack</span>() &#123;</div>
                <div className="pl-12"><span className="text-[#4338CA] font-semibold">return</span> List.of(<span className="text-[#0D9488]">"Java"</span>, <span className="text-[#0D9488]">"Spring Boot"</span>, <span className="text-[#0D9488]">"PostgreSQL"</span>, <span className="text-[#0D9488]">"PostGIS"</span>, <span className="text-[#0D9488]">"Docker"</span>);</div>
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

