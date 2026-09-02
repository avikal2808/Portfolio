import React from 'react';

export default function ExperienceLog() {
  return (
    <section id="experience" className="w-full bg-[#0a0d14] py-16 px-4 font-mono text-sm">
      <div className="max-w-5xl mx-auto space-y-6">
        
        {/* Section Header */}
        <div className="border-b border-gray-800/80 pb-4">
          <h2 className="text-3xl font-bold text-[#3ed882] tracking-wide flex items-center gap-2">
            <span className="text-[#3ed882]">#</span> Execution_Log
          </h2>
        </div>

        {/* Outer Console Card */}
        <div className="bg-[#0b0e14] border border-gray-800/80 rounded-lg p-6 sm:p-8 space-y-8 text-gray-300 shadow-2xl">
          
          {/* Entry 1: Telstra */}
          <div className="space-y-3">
            {/* Log Header */}
            <div className="flex justify-between items-center text-gray-500 text-xs sm:text-sm">
              <div>
                <span className="text-gray-500">[INFO]</span>{' '}
                <span className="text-gray-400">2023-Present</span> --{' '}
                <span className="text-gray-300 font-medium">Telstra</span>
              </div>
              <div className="text-gray-500">[Thread-Main]</div>
            </div>

            {/* Log Content Body */}
            <div className="border-l-2 border-[#3ed882] pl-4 space-y-2">
              <p className="text-white font-medium flex items-center gap-2">
                <span className="text-[#3ed882]">&rarr;</span> Initializing Backend Engineer Protocol...
              </p>
              <ul className="space-y-1.5 text-gray-400 pl-4">
                <li className="flex items-start gap-2">
                  <span className="text-gray-600">-</span>
                  <span>Developed scalable Java REST APIs.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-600">-</span>
                  <span>
                    Optimized data flow resulting in{' '}
                    <strong className="text-[#3ed882] font-semibold">20% redundancy reduction</strong>.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-600">-</span>
                  <span>Implemented robust error handling routines.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-800/60 pt-2"></div>

          {/* Entry 2: JP Morgan Chase */}
          <div className="space-y-3">
            {/* Log Header */}
            <div className="flex justify-between items-center text-gray-500 text-xs sm:text-sm">
              <div>
                <span className="text-gray-500">[INFO]</span>{' '}
                <span className="text-gray-400">2021-2023</span> --{' '}
                <span className="text-gray-300 font-medium">JP Morgan Chase</span>
              </div>
              <div className="text-gray-500">[Thread-Worker-1]</div>
            </div>

            {/* Log Content Body */}
            <div className="border-l-2 border-[#3ed882] pl-4 space-y-2">
              <p className="text-white font-medium flex items-center gap-2">
                <span className="text-[#3ed882]">&rarr;</span> Executing System Optimization Routine...
              </p>
              <ul className="space-y-1.5 text-gray-400 pl-4">
                <li className="flex items-start gap-2">
                  <span className="text-gray-600">-</span>
                  <span>Architected Spring Boot microservices.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-600">-</span>
                  <span>
                    Refactored legacy queries to achieve{' '}
                    <strong className="text-[#3ed882] font-semibold">sub-10ms latency</strong>.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-600">-</span>
                  <span>Maintained 99.99% uptime across core trading modules.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* End of File Indicator */}
          <div className="pt-2 text-[#3ed882] text-xs font-bold">
            EOF_
          </div>

        </div>
      </div>
    </section>
  );
}
