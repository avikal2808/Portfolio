import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('TRANSMITTING_PAYLOAD...');

    const templateParams = {
      sender_name: formData.name,
      return_path_email: formData.email,
      payload_message: formData.message,
    };

    const SERVICE_ID = 'service_4n8z5ah';
    const PUBLIC_KEY = 'LXZPIgshV0sKeVXlb';
    const ADMIN_TEMPLATE_ID = 'template_h3x5lzd';
    const REPLY_TEMPLATE_ID = 'template_4f0x0wa';

    try {
      // 1. Send notification to admin inbox
      await emailjs.send(SERVICE_ID, ADMIN_TEMPLATE_ID, templateParams, PUBLIC_KEY);

      // 2. Send auto-reply confirmation back to visitor
      await emailjs.send(SERVICE_ID, REPLY_TEMPLATE_ID, templateParams, PUBLIC_KEY);

      setStatus('TRANSMISSION_SUCCESSFUL [200 OK]');
      setTimeout(() => {
        setIsModalOpen(false);
        setStatus('');
        setFormData({ name: '', email: '', message: '' });
      }, 2000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('TRANSMISSION_FAILED [500 ERROR]');
    }
  };

  return (
    <>
      {/* Top Fixed Header */}
      <header className="fixed top-0 left-0 w-full z-40 bg-[#FFFFFF]/90 backdrop-blur-md border-b border-[#E5E2DC] px-6 py-3 font-mono shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          <a href="#hero" className="text-[#4338CA] font-extrabold text-lg tracking-wider hover:opacity-90 transition-opacity">
            AVIKAL_PANDEY
          </a>

          <nav className="hidden md:flex items-center space-x-8 text-[#5C6670] font-sans text-sm font-medium">
            <a href="#education" className="hover:text-[#4338CA] transition-colors">Education</a>
            <a href="#skills" className="hover:text-[#4338CA] transition-colors">Skills</a>
            <a href="#projects" className="hover:text-[#4338CA] transition-colors">Projects</a>
            <a href="#experience" className="hover:text-[#4338CA] transition-colors">Experience</a>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            {/* Resume Button */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#FFFFFF] hover:bg-[#EEF0F7] text-[#4338CA] border border-[#4338CA]/30 font-semibold text-xs sm:text-sm px-3.5 py-1.5 rounded transition-all active:scale-95 shadow-sm"
            >
              <svg className="w-4 h-4 text-[#4338CA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Resume
            </a>

            {/* Connect Button */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 bg-[#4338CA] hover:bg-[#3730A3] text-white font-bold text-xs sm:text-sm px-4 py-1.5 rounded transition-all active:scale-95 shadow-sm"
            >
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Connect
            </button>
          </div>

        </div>
      </header>

      {/* Overlay Modal (Separate Screen View) */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-fade-in font-mono text-sm">
          <div className="relative w-full max-w-xl bg-[#FFFFFF] border border-[#E5E2DC] rounded-xl shadow-2xl overflow-hidden">
            
            {/* Modal Header Bar */}
            <div className="bg-[#F8F7F4] px-5 py-3 border-b border-[#E5E2DC] flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs text-[#5C6670]">
                <span className="text-[#4338CA] font-bold">&gt;</span>
                <span className="font-semibold text-[#1A1A1A]">ESTABLISH_CONNECTION</span>
              </div>
              
              {/* Subtle Close Cross */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-[#5C6670] hover:text-[#1A1A1A] p-1 rounded-md hover:bg-[#E5E2DC]/50 transition-colors"
                aria-label="Close modal"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Body / Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div className="text-xs text-[#5C6670] pb-2 border-b border-[#E5E2DC]">
                <p>POST /api/v1/connect HTTP/1.1</p>
                <p>Host: api.avikal.dev</p>
              </div>

              {/* Name Field */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-[#4338CA]">sender_name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g., Alex Mercer"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#F8F7F4] border border-[#E5E2DC] rounded px-3 py-2 text-[#1A1A1A] placeholder-[#5C6670]/60 focus:outline-none focus:border-[#4338CA] focus:bg-white transition-colors"
                />
              </div>

              {/* Email Field */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-[#4338CA]">return_path_email *</label>
                <input
                  type="email"
                  required
                  placeholder="recruiter@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#F8F7F4] border border-[#E5E2DC] rounded px-3 py-2 text-[#1A1A1A] placeholder-[#5C6670]/60 focus:outline-none focus:border-[#4338CA] focus:bg-white transition-colors"
                />
              </div>

              {/* Message Field */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-[#4338CA]">payload_message *</label>
                <textarea
                  required
                  rows="4"
                  placeholder="Type your message or project details..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[#F8F7F4] border border-[#E5E2DC] rounded px-3 py-2 text-[#1A1A1A] placeholder-[#5C6670]/60 focus:outline-none focus:border-[#4338CA] focus:bg-white transition-colors"
                ></textarea>
              </div>

              {/* Status Indicator */}
              {status && (
                <div className="text-xs font-semibold text-[#0D9488] pt-1">{status}</div>
              )}

              {/* Submit Action */}
              <div className="pt-2 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 bg-transparent text-[#5C6670] hover:text-[#1A1A1A] text-xs transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-[#4338CA] hover:bg-[#3730A3] text-white font-bold text-xs rounded transition-transform active:scale-95 shadow-sm"
                >
                  Send Transmission
                </button>
              </div>
            </form>

          </div>
        </div>
      )}
    </>
  );
}
