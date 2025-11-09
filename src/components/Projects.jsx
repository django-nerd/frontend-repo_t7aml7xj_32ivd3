import { siteConfig } from '../site.config'

export default function Projects() {
  const { projects } = siteConfig

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Projects</h2>
          <p className="mt-3 text-slate-600">Selected work spanning analytics, machine learning, and education.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <a key={p.title} href={p.link} target="_blank" rel="noreferrer" className="group block rounded-xl border border-slate-200 p-5 hover:shadow-lg hover:border-slate-300 transition-all bg-white">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-semibold text-slate-900 group-hover:text-blue-700">{p.title}</h3>
              </div>
              <p className="mt-2 text-slate-600">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span key={s} className="rounded-full bg-slate-100 text-slate-700 text-xs px-2.5 py-1">{s}</span>
                ))}
              </div>
              <span className="mt-4 inline-block text-blue-700 font-medium">View more →</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
