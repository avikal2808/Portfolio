import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./components/Header";
import HeroConsole from "./components/HeroConsole";
import Portfolio from "./components/Portfolio";
import SkillsGlobe from "./components/SkillsGlobe";
import GithubProjectsExplorer from "./components/GithubProjectsExplorer";
import ExperienceLog from "./components/ExperienceLog";

const MainApp = () => {
  return (
    <div className="relative w-full min-h-screen font-sans text-[#111827]">
      <Header />
      <HeroConsole />
      <Portfolio />
      <SkillsGlobeWrapper />
      <ProjectsWrapper />
      <ExperienceLog />
    </div>
  );
};

const SkillsGlobeWrapper = () => (
  <div id="skills" className="relative w-full scroll-mt-24 border-t border-[#D9DEE6] bg-transparent py-0">
    <SkillsGlobe />
  </div>
);

const ProjectsWrapper = () => (
  <section id="projects" className="relative w-full max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16 scroll-mt-24">
    <div className="mb-8 sm:mb-10">
      <div className="flex items-center gap-2 font-mono text-sm sm:text-base">
        <span className="text-[#2563EB]">&gt;</span>
        <span className="text-[#111827] font-bold tracking-tight">#Projects.modules</span>
      </div>
      <p className="mt-2 pl-6 text-sm sm:text-base text-[#475569]">
        Live and pinned repositories — rendered directly from the GitHub API
      </p>
    </div>
    <GithubProjectsExplorer />
  </section>
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MainApp />
  </React.StrictMode>
);
