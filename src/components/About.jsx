export default function About() {
  const skills = ['Python', 'Pandas', 'NumPy', 'SQL', 'Visualization', 'Statistics', 'Experimentation', 'Teaching', 'Content Strategy']

  return (
    <section id="about" className="py-24 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">About Me</h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            I'm a data analyst and educational content creator. I turn raw data into clear, actionable insights and make complex topics accessible through step-by-step tutorials and real-world examples. My work spans analytics, forecasting, experimentation, and data storytelling.
          </p>
          <p className="mt-4 text-slate-700">
            On YouTube, I share lessons on Python, data analysis, and practical workflows for real projects. I care about clean visuals, reproducible work, and clear communication.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-slate-900">Core Skills</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {skills.map((s) => (
              <span key={s} className="rounded-full bg-white border border-slate-200 text-slate-800 text-sm px-3 py-1.5 shadow-sm">{s}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
