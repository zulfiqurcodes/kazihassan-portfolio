import { profile, certifications } from "@/data/resume";

const categoryColors: Record<string, string> = {
  "Safety & Compliance": "bg-red-100 text-red-800",
  "Technical":           "bg-blue-100 text-blue-800",
  "Professional Development": "bg-green-100 text-green-800",
  "Software":            "bg-purple-100 text-purple-800",
};

export default function AboutPage() {
  return (
    <section className="bg-white">
      <div className="section-container">
        <h1 className="section-title">About Me</h1>
        <div className="section-divider"></div>

        {/* Bio + Key Achievements */}
        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          <div>
            <h2 className="text-2xl font-bold text-navy-700 mb-4">Professional Summary</h2>
            <p className="text-gray-700 leading-relaxed text-lg mb-6">{profile.summary}</p>
            <div className="space-y-2 text-gray-600">
              <p><span className="font-semibold text-navy-700">Location:</span> {profile.location}</p>
              <p>
                <span className="font-semibold text-navy-700">Email:</span>{" "}
                <a href={`mailto:${profile.email}`} className="text-blue-600 hover:underline">
                  {profile.email}
                </a>
              </p>
              <p><span className="font-semibold text-navy-700">Phone:</span> {profile.phone}</p>
              <p><span className="font-semibold text-navy-700">Citizenship:</span> US Citizen</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="card">
              <h3 className="text-lg font-bold text-navy-700 mb-3">Key Achievements</h3>
              <ul className="space-y-3 text-gray-700">
                {[
                  "Developed Parker's THM Analyzer from concept to 165+ units sold globally",
                  "Holds 4 US patents and 3 international patents",
                  "Subject matter expert in US EPA water quality compliance",
                  "Managed R&D contracts up to $2 million",
                  "Speaker at American Water Works Association conferences",
                  "Collaborated with universities and national laboratories",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-gold-500 font-bold mt-1">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card">
              <h3 className="text-lg font-bold text-navy-700 mb-3">International Experience</h3>
              <p className="text-gray-700">
                Gained international experience in manufacturing polyester, sanitary products, and
                conducting catalytic research across{" "}
                <strong>Bangladesh, Thailand, and Singapore</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* Certifications & Training */}
        <div>
          <h2 className="text-2xl font-bold text-navy-700 mb-2">Certifications &amp; Professional Training</h2>
          <div className="section-divider"></div>
          <p className="text-gray-500 text-sm mb-6">
            All training completed during tenure at Parker Hannifin Corp. (2005–2019) and on record.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert) => (
              <div key={cert.name} className="card flex items-start gap-4">
                <div className="bg-navy-800 text-gold-400 w-10 h-10 rounded-lg flex items-center justify-center text-lg flex-shrink-0">
                  🏅
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-navy-800 text-sm leading-snug mb-1">{cert.name}</p>
                  <p className="text-gray-500 text-xs mb-2">{cert.provider} &middot; {cert.date}</p>
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${categoryColors[cert.category]}`}>
                    {cert.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
