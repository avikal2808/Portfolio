import React from 'react';

export default function HeroConsole() {
  return (
    <section id="hero" className="w-full min-h-screen bg-[#0a0d14] flex items-center justify-center p-4 pt-20">
      <div className="w-full max-w-4xl bg-[#111622] rounded-lg border border-gray-800/80 shadow-2xl overflow-hidden font-mono text-sm">
        
        {/* Terminal Header Bar */}
        <div className="bg-[#181f2e] px-4 py-2.5 flex items-center border-b border-gray-800/80">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
            <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
          </div>
          <div className="flex-1 text-center text-gray-400 text-xs font-medium">
            bash - avikal@system-arch
          </div>
        </div>

        {/* Terminal Body */}
        <div className="p-6 space-y-6 text-gray-200">
          
          {/* First Call: Profile */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <span className="text-[#3ed882] font-bold">&gt;</span>
              <span className="text-white">curl -X GET https://api.avikal.dev/v1/profile</span>
            </div>

            <div className="bg-[#0b0e14] p-4 rounded-md border border-gray-800/50 space-y-1">
              <div>&#123;</div>
              <div className="pl-6">
                <span className="text-[#3ed882]">"name"</span>: <span className="text-[#3ed882]">"Avikal Pandey"</span>,
              </div>
              <div className="pl-6">
                <span className="text-[#3ed882]">"role"</span>: <span className="text-[#3ed882]">"Backend Developer & Scalable System Designer"</span>,
              </div>
              <div className="pl-6">
                <span className="text-[#3ed882]">"focus"</span>: <span className="text-[#3ed882]">"Clean architecture, REST APIs, and distributed systems"</span>,
              </div>
              <div className="pl-6">
                <span className="text-[#3ed882]">"status"</span>: <span className="text-[#e2b714]">"200 OK"</span>
              </div>
              <div>&#125;</div>
            </div>
          </div>

          {/* Second Call: Contact */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <span className="text-[#3ed882] font-bold">&gt;</span>
              <span className="text-white">curl -X GET https://api.avikal.dev/v1/contact</span>
            </div>

            <div className="bg-[#0b0e14] p-4 rounded-md border border-gray-800/50 space-y-1">
              <div>&#123;</div>
              <div className="pl-6">
                <span className="text-[#3ed882]">"email"</span>: <span className="text-[#3ed882]">"avikalpandey2004@gmail.com"</span>,
              </div>
              <div className="pl-6">
                <span className="text-[#3ed882]">"github"</span>: <span className="text-[#3ed882]">"github.com/avikal2808"</span>
              </div>
              <div>&#125;</div>
            </div>
          </div>

          {/* Cursor Prompt */}
          <div className="flex items-center space-x-2 pt-2">
            <span className="text-gray-500">-</span>
          </div>

        </div>
      </div>
    </section>
  );
}
