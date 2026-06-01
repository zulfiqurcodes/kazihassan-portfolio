import { education } from "@/data/resume";

export default function EducationPage() {
  return (
    <section className="bg-white">
      <div className="section-container">
        <h1 className="section-title">Education</h1>
        <div className="section-divider"></div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {education.map((edu, index) => (
            <div key={index} className="card text-center hover:border-gold-500 transition-colors">
              <div className="text-5xl mb-4">
                {index === 0 ? "🎓" : index === 1 ? "📚" : "🏛️"}
              </div>
              <div className="inline-block bg-gold-500 text-navy-800 text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wide">
                {edu.degree}
              </div>
              <h2 className="text-lg font-bold text-navy-700 mb-1">{edu.field}</h2>
              <p className="text-gray-700 font-medium mb-1">{edu.school}</p>
              <p className="text-gray-500 text-sm">{edu.location}</p>
            </div>
          ))}
        </div>

        <div className="card bg-navy-800 text-white">
          <h2 className="text-xl font-bold text-gold-400 mb-4">Professional Training & Certifications</h2>
          <ul className="space-y-3 text-gray-300">
            {[
              "OSHA 40-Hour HAZWOPER Certified",
              "Conference Guest Speaker — American Water Works Association (AWWA)",
              "ETL & UL Certification Experience (Intertek Laboratories)",
              "Innovative Product Development / Winovation Process Methodology",
              "Technology Evaluator & R&D Contract Manager",
            ].map((cert) => (
              <li key={cert} className="flex items-start gap-2">
                <span className="text-gold-400 font-bold mt-1 flex-shrink-0">✓</span>
                <span>{cert}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
