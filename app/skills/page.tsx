import { skills, certifications } from "@/data/resume";

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

        {/* Certifications & Training */}
        <div className="mt-12">
          <h2 className="text-xl font-bold text-navy-700 mb-2">Certifications &amp; Training</h2>
          <div className="section-divider"></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {certifications.map((cert) => {
              const badgeColor =
                cert.category === "Safety & Compliance" ? "bg-red-100 text-red-700 border-red-200" :
                cert.category === "Technical"            ? "bg-blue-100 text-blue-700 border-blue-200" :
                cert.category === "Software"             ? "bg-purple-100 text-purple-700 border-purple-200" :
                                                           "bg-green-100 text-green-700 border-green-200";
              return (
                <div key={cert.name} className={`border rounded-lg p-4 ${badgeColor}`}>
                  <p className="font-semibold text-sm leading-snug mb-1">{cert.name}</p>
                  <p className="text-xs opacity-75">{cert.provider}</p>
                  <p className="text-xs opacity-60 mt-1">{cert.date} &middot; {cert.expiry}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
