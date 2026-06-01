import Link from "next/link";
import { profile } from "@/data/resume";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-800 text-white min-h-[90vh] flex items-center">
        <div className="section-container text-center">
          <p className="text-gold-400 text-sm font-semibold tracking-widest uppercase mb-4">
            Environmental Engineer & Patent Holder
          </p>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
            {profile.name}
          </h1>
          <p className="text-xl text-gray-300 mb-3 font-light">{profile.title}</p>
          <p className="text-lg text-gold-400 font-medium mb-10">{profile.tagline}</p>

          {/* Stats */}
          <div className="flex justify-center gap-10 mb-12 flex-wrap">
            {[
              { value: "20+", label: "Years Experience" },
              { value: "7", label: "Patents Held" },
              { value: "165+", label: "Units Sold Globally" },
              { value: "4", label: "US Patents" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold text-gold-400">{stat.value}</div>
                <div className="text-gray-300 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-4 flex-wrap">
            <Link href="/experience" className="btn-primary">
              View Experience
            </Link>
            <Link href="/patents" className="btn-outline">
              View Patents
            </Link>
            <Link href="/contact" className="btn-outline">
              Contact Me
            </Link>
          </div>
        </div>
      </section>

      {/* Quick About Strip */}
      <section className="bg-gray-50 py-16">
        <div className="section-container">
          <p className="text-center text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            {profile.summary}
          </p>
        </div>
      </section>

      {/* Highlights Grid */}
      <section className="py-16">
        <div className="section-container">
          <h2 className="section-title text-center">What I Bring</h2>
          <div className="section-divider mx-auto"></div>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            {[
              {
                icon: "🔬",
                title: "EPA-Grade Expertise",
                desc: "Deep knowledge of USEPA methods 524.2, 552.2 and drinking water compliance standards.",
              },
              {
                icon: "📜",
                title: "7 Patents",
                desc: "4 US and 3 international patents in THM analyzer technology for carcinogenic compound detection.",
              },
              {
                icon: "🌍",
                title: "Global Impact",
                desc: "165+ analyzer units sold globally. Key customers include American Water and East Bay MUD.",
              },
            ].map((item) => (
              <div key={item.title} className="card text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-navy-700 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
