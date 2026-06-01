import { skills } from "@/data/resume";

export default function SkillsPage() {
  return (
    <section className="bg-gray-50">
      <div className="section-container">
        <h1 className="section-title">Skills</h1>
        <div className="section-divider"></div>

        <div className="space-y-12">
          {skills.map((group) => (
            <div key={group.category} className="card">
              <h2 className="text-xl font-bold text-navy-700 mb-6">{group.category}</h2>
              <div className="space-y-5">
                {group.items.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-gold-600 font-semibold text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-navy-700 h-2.5 rounded-full transition-all duration-700"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Instruments Quick Tags */}
        <div className="mt-12">
          <h2 className="text-xl font-bold text-navy-700 mb-4">Instrumentation Quick Reference</h2>
          <div className="flex flex-wrap gap-3">
            {[
              "TOC Analyzer", "THM Analyzer (Lab)", "THM Analyzer (On-Line)",
              "pH Meter", "Turbidity Meter", "UV Analyzer",
              "Particle Counter", "Chlorine Analyzer", "Gas Chromatography",
              "Mass Spectroscopy", "HPLC", "Fluorescence Analyzer",
              "SAW Detector", "Purge & Trap System",
            ].map((tool) => (
              <span
                key={tool}
                className="bg-navy-800 text-white text-sm px-3 py-1.5 rounded-full font-medium"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
