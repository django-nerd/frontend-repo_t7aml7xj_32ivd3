import Spline from '@splinetool/react-spline'
import { siteConfig } from '../site.config'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] pt-24 flex items-center">
      <div className="absolute inset-0">
        <Spline scene={siteConfig.splineScene} style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <p className="inline-block rounded-full bg-slate-900 text-white px-4 py-1 text-sm">{siteConfig.availability}</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
            Hi, I'm <span className="text-blue-600">{siteConfig.name}</span>
          </h1>
          <p className="text-xl text-slate-700">{siteConfig.role}</p>
          <p className="max-w-xl text-slate-600">{siteConfig.tagline}</p>
          <div className="flex flex-wrap gap-3">
            <a href="#projects" className="rounded-md bg-blue-600 text-white px-5 py-2.5 font-medium hover:bg-blue-700">Explore Projects</a>
            <a href="#contact" className="rounded-md border border-slate-300 px-5 py-2.5 font-medium text-slate-800 hover:bg-slate-50">Get in Touch</a>
            <a href={siteConfig.resumePath} download className="rounded-md bg-slate-900 text-white px-5 py-2.5 font-medium hover:bg-slate-800">
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
