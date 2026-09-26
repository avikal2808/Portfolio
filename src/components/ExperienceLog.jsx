import React from 'react';

export default function ExperienceLog() {
  const experiences = [
    {
      company: 'JP Morgan Chase & Co.',
      role: 'Software Engineering Simulation',
      period: 'Training / Simulation',
      thread: 'Thread-Financial-Routing',
      stack: ['Java', 'Spring Boot', 'JUnit', 'REST APIs'],
      highlights: [
        'Architected Spring Boot REST controllers and service components to process and validate transactional data streams for financial routing.',
        'Implemented comprehensive JUnit unit tests to validate core payment flows and edge cases, ensuring secure API endpoint functionality and reliable bug handling.',
      ],
      badgeColor: 'border-[#4338CA]/25 text-[#4338CA] bg-[#EEF0F7]',
    },
    {
      company: 'Telstra',
      role: 'Software Engineering Simulation',
      period: 'Training / Simulation',
      thread: 'Thread-Telecom-Service',
      stack: ['Java', 'Spring Boot', 'REST APIs', 'OOP', 'Git'],
      highlights: [
        'Developed 5 robust RESTful API endpoints in Java to execute CRUD operations and manage telecommunications routing logic under professional development workflows.',
        'Refactored legacy architecture using clean object-oriented principles, exception handling standards, and version control best practices to reduce code redundancy by 20%.',
      ],
      badgeColor: 'border-[#0D9488]/25 text-[#0D9488] bg-[#CCFBF1]',
    },
  ];

  return (
    <section id="experience" className="w-full bg-transparent py-16 px-4 font-mono text-sm border-t border-[#E5E2DC]">
      <div className="max-w-5xl mx-auto space-y-6">
        
        {/* Section Header */}
        <div className="border-b border-[#E5E2DC] pb-4 flex items-center justify-between">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#4338CA] tracking-wide flex items-center gap-2">
            <span className="text-[#4338CA]">#</span> Execution_Log (Simulations)
          </h2>
          <span className="text-xs text-[#5C6670] font-mono hidden sm:inline">[LOG_LEVEL: VERBOSE]</span>
        </div>

        {/* Outer Console Card */}
        <div className="bg-[#FFFFFF] border border-[#E5E2DC] rounded-xl p-6 sm:p-8 space-y-8 text-[#1A1A1A] shadow-xl">
          
          {experiences.map((exp, idx) => (
            <React.Fragment key={exp.company}>
              {idx > 0 && <div className="border-t border-[#E5E2DC] pt-2"></div>}
              
              <div className="space-y-4">
                {/* Log Header */}
                <div className="flex flex-wrap justify-between items-center text-xs sm:text-sm text-[#5C6670] gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-[#4338CA] font-bold">[SIMULATION]</span>
                    <span className="text-[#1A1A1A] font-bold text-base sm:text-lg">{exp.company}</span>
                    <span className="text-[#5C6670]">• {exp.role}</span>
                  </div>
                  <div className="text-[#5C6670] font-mono text-xs">[{exp.thread}]</div>
                </div>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-2">
                  {exp.stack.map((s) => (
                    <span key={s} className={`text-xs px-2.5 py-0.5 rounded border ${exp.badgeColor}`}>
                      {s}
                    </span>
                  ))}
                </div>

                {/* Log Content Body */}
                <div className="border-l-2 border-[#4338CA] pl-4 space-y-2">
                  <p className="text-[#1A1A1A] font-medium flex items-center gap-2 text-xs sm:text-sm">
                    <span className="text-[#4338CA]">&rarr;</span> Executing Backend Architecture & Integration Specs...
                  </p>
                  <ul className="space-y-2 text-[#5C6670] text-xs sm:text-sm pl-2">
                    {exp.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2 leading-relaxed">
                        <span className="text-[#4338CA] select-none">▸</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </React.Fragment>
          ))}

          {/* End of File Indicator */}
          <div className="pt-2 flex items-center justify-between text-xs border-t border-[#E5E2DC]">
            <span className="text-[#4338CA] font-bold">EOF_ LOG_STREAM_COMPLETE</span>
            <span className="text-[#0D9488] font-semibold">STATUS: 200 SUCCESS</span>
          </div>

        </div>
      </div>
    </section>
  );
}

