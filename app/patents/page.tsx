import { patents } from "@/data/resume";

export default function PatentsPage() {
  const usPatents = patents.filter((p) => p.type === "US");
  const intlPatents = patents.filter((p) => p.type === "International");

  return (
    <section className="bg-white">
      <div className="section-container">
        <h1 className="section-title">Patents</h1>
        <div className="section-divider"></div>

        <p className="text-gray-600 text-lg mb-10 max-w-2xl">
          Holder of <strong>4 US patents</strong> and <strong>3 international patents</strong> for
          developing analyzers to detect carcinogenic compounds, ensuring compliance with US EPA
          regulations for clean drinking water.
        </p>

        {/* Stats Banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {[
            { value: "4", label: "US Patents" },
            { value: "3", label: "International" },
            { value: "7", label: "Total Patents" },
            { value: "165+", label: "Units Sold" },
          ].map((s) => (
            <div key={s.label} className="bg-navy-800 text-white rounded-xl p-5 text-center">
              <div className="text-3xl font-bold text-gold-400">{s.value}</div>
              <div className="text-sm text-gray-300 mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-navy-700 mb-4">US Patents</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {usPatents.map((p, i) => (
            <div key={i} className="card border-l-4 border-gold-500">
              <div className="flex items-start gap-3">
                <span className="bg-navy-800 text-gold-400 text-xs font-bold px-2 py-1 rounded uppercase tracking-wide flex-shrink-0 mt-0.5">
                  US
                </span>
                <div>
                  <h3 className="font-bold text-navy-700 mb-1">{p.title}</h3>
                  <p className="text-gold-600 text-xs font-semibold mb-1">{p.number} · Issued {p.issued}</p>
                  <p className="text-gray-600 text-sm">{p.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-navy-700 mb-4">International Patents</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {intlPatents.map((p, i) => (
            <div key={i} className="card border-l-4 border-navy-500">
              <div className="flex items-start gap-3">
                <span className="bg-gold-500 text-navy-800 text-xs font-bold px-2 py-1 rounded uppercase tracking-wide flex-shrink-0 mt-0.5">
                  UK
                </span>
                <div>
                  <h3 className="font-bold text-navy-700 mb-1">{p.title}</h3>
                  <p className="text-gold-600 text-xs font-semibold mb-1">{p.number} · Issued {p.issued}</p>
                  <p className="text-gray-600 text-sm">{p.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
