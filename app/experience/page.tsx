import { experience } from "@/data/resume";

export default function ExperiencePage() {
  return (
    <section className="bg-gray-50">
      <div className="section-container">
        <h1 className="section-title">Experience</h1>
        <div className="section-divider"></div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-navy-500 hidden md:block"></div>

          <div className="space-y-10">
            {experience.map((job, index) => (
              <div key={index} className="relative md:pl-14">
                {/* Timeline dot */}
                <div className="absolute left-2 top-6 w-5 h-5 rounded-full bg-gold-500 border-4 border-white shadow hidden md:block"></div>

                <div className="card">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <h2 className="text-xl font-bold text-navy-700">{job.title}</h2>
                      <p className="text-gray-600 font-medium">
                        {job.company} — {job.location}
                      </p>
                    </div>
                    <span className="bg-navy-50 text-navy-600 text-sm font-semibold px-3 py-1 rounded-full whitespace-nowrap border border-navy-100">
                      {job.startDate} – {job.endDate}
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {job.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-700">
                        <span className="text-gold-500 font-bold mt-1 flex-shrink-0">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
