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
      badgeColor: 'border-[#D9DEE6] text-[#334155] bg-[#F8FAFC] hover:bg-[#EFF6FF] hover:border-[#2563EB] hover:text-[#2563EB]',
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
      badgeColor: 'border-[#D9DEE6] text-[#334155] bg-[#F8FAFC] hover:bg-[#EFF6FF] hover:border-[#2563EB] hover:text-[#2563EB]',
    },
  ];

  return (
    <section id="experience" className="w-full bg-transparent py-16 px-4 font-mono text-sm border-t border-[#D9DEE6]">
      <div className="max-w-5xl mx-auto space-y-6">

        {/* Section Header */}
        <div className="border-b border-[#D9DEE6] pb-4 flex items-center justify-between">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111827] tracking-wide flex items-center gap-2">
            <span className="text-[#2563EB]">&gt;</span>
            <span className="text-[#111827]">Execution_Log</span>
            <span className="text-[#475569] text-base sm:text-lg font-normal">(Simulations)</span>
          </h2>
          <span className="text-xs text-[#475569] font-mono hidden sm:inline">[LOG_LEVEL: VERBOSE]</span>
        </div>

        {/* Outer Console Card */}
        <div className="bg-[#FFFFFF] border border-[#D9DEE6] rounded-xl p-6 sm:p-8 space-y-8 text-[#111827] shadow-card">

          {experiences.map((exp, idx) => (
            <React.Fragment key={exp.company}>
              {idx > 0 && <div className="border-t border-[#D9DEE6] pt-2"></div>}

              <div className="space-y-4">
                {/* Log Header */}
                <div className="flex flex-wrap justify-between items-center text-xs sm:text-sm text-[#475569] gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-[#2563EB] font-bold">[SIMULATION]</span>
                    <span className="text-[#111827] font-bold text-base sm:text-lg">{exp.company}</span>
                    <span className="text-[#475569]">• {exp.role}</span>
                  </div>
                  <div className="text-[#475569] font-mono text-xs">[{exp.thread}]</div>
                </div>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-2">
                  {exp.stack.map((s) => (
                    <span key={s} className={`text-xs px-2.5 py-0.5 rounded border transition-colors ${exp.badgeColor}`}>
                      {s}
                    </span>
                  ))}
                </div>

                {/* Log Content Body */}
                <div className="border-l-2 border-[#2563EB] pl-4 space-y-2">
                  <p className="text-[#111827] font-medium flex items-center gap-2 text-xs sm:text-sm">
                    <span className="text-[#2563EB]">&rarr;</span> Executing Backend Architecture & Integration Specs...
                  </p>
                  <ul className="space-y-2 text-[#475569] text-xs sm:text-sm pl-2">
                    {exp.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2 leading-relaxed">
                        <span className="text-[#2563EB] select-none">▸</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </React.Fragment>
          ))}

          {/* End of File Indicator */}
          <div className="pt-2 flex items-center justify-between text-xs border-t border-[#D9DEE6]">
            <span className="text-[#2563EB] font-bold">EOF_ LOG_STREAM_COMPLETE</span>
            <span className="text-[#0F9D8A] font-semibold">STATUS: 200 SUCCESS</span>
          </div>

        </div>
      </div>
    </section>
  );
}
