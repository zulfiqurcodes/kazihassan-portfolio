import { profile } from "@/data/resume";

export default function AboutPage() {
  return (
    <section className="bg-white">
      <div className="section-container">
        <h1 className="section-title">About Me</h1>
        <div className="section-divider"></div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
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

            <div className="card">
              <h3 className="text-lg font-bold text-navy-700 mb-3">Certifications</h3>
              <p className="text-gray-700">
                OSHA 40-Hour HAZWOPER Training certified. US Citizen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
