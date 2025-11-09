import { useState } from 'react'
import { Menu, X, Github, Linkedin, Youtube } from 'lucide-react'
import { siteConfig } from '../site.config'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#projects', label: 'Projects' },
    { href: '#about', label: 'About Me' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-md border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="font-semibold text-slate-900 tracking-tight">{siteConfig.name} • {siteConfig.role.split('&')[0].trim()}</a>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-slate-700 hover:text-slate-900 transition-colors">
                {item.label}
              </a>
            ))}
            <div className="w-px h-6 bg-slate-200" />
            <div className="flex items-center gap-3">
              <a aria-label="LinkedIn" href={siteConfig.socials.linkedin} target="_blank" rel="noreferrer" className="text-slate-700 hover:text-slate-900"><Linkedin size={20} /></a>
              <a aria-label="YouTube" href={siteConfig.socials.youtube} target="_blank" rel="noreferrer" className="text-slate-700 hover:text-slate-900"><Youtube size={20} /></a>
              <a aria-label="GitHub" href={siteConfig.socials.github} target="_blank" rel="noreferrer" className="text-slate-700 hover:text-slate-900"><Github size={20} /></a>
            </div>
          </nav>

          <button className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200">
          <div className="px-4 py-3 space-y-2">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="block text-slate-700 hover:text-slate-900" onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ))}
            <div className="flex items-center gap-4 pt-2">
              <a aria-label="LinkedIn" href={siteConfig.socials.linkedin} target="_blank" rel="noreferrer" className="text-slate-700 hover:text-slate-900"><Linkedin size={20} /></a>
              <a aria-label="YouTube" href={siteConfig.socials.youtube} target="_blank" rel="noreferrer" className="text-slate-700 hover:text-slate-900"><Youtube size={20} /></a>
              <a aria-label="GitHub" href={siteConfig.socials.github} target="_blank" rel="noreferrer" className="text-slate-700 hover:text-slate-900"><Github size={20} /></a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
