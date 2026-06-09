import { profile } from "@/data/resume";

export default function ContactPage() {
  return (
    <section className="bg-gray-50">
      <div className="section-container">
        <h1 className="section-title">Contact</h1>
        <div className="section-divider"></div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-navy-700 mb-6">Get In Touch</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              I am actively seeking new opportunities in environmental engineering, water quality
              technology, and R&D management. Feel free to reach out directly.
            </p>

            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="bg-navy-800 text-gold-400 w-12 h-12 rounded-full flex items-center justify-center text-xl flex-shrink-0">
                  ✉
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Email</p>
                  <a href={`mailto:${profile.email}`} className="text-navy-700 font-semibold hover:text-gold-600">
                    {profile.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-navy-800 text-gold-400 w-12 h-12 rounded-full flex items-center justify-center text-xl flex-shrink-0">
                  📞
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Phone</p>
                  <a href={`tel:${profile.phone}`} className="text-navy-700 font-semibold hover:text-gold-600">
                    {profile.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-navy-800 text-gold-400 w-12 h-12 rounded-full flex items-center justify-center text-xl flex-shrink-0">
                  📍
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Location</p>
                  <p className="text-navy-700 font-semibold">{profile.location}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-navy-800 text-gold-400 w-12 h-12 rounded-full flex items-center justify-center text-xl flex-shrink-0">
                  💼
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">LinkedIn</p>
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-navy-700 font-semibold hover:text-gold-600"
                  >
                    linkedin.com/in/kazi-hassan-phd-042140b3
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form - static HTML, requires a form service like Formspree for actual sending */}
          <div className="card">
            <h2 className="text-xl font-bold text-navy-700 mb-6">Send a Message</h2>
            <p className="text-sm text-gray-500 mb-4">
              This form requires a free{" "}
              <a href="https://formspree.io" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                Formspree
              </a>{" "}
              account to activate. Add your endpoint to the action below.
            </p>
            <form
              action="https://formspree.io/f/YOUR_FORM_ID"
              method="POST"
              className="space-y-4"
            >
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-navy-500"
                  placeholder="Jane Smith"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-navy-500"
                  placeholder="jane@company.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-navy-500"
                  placeholder="I'd like to discuss an opportunity..."
                ></textarea>
              </div>
              <button type="submit" className="btn-primary w-full text-center">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
