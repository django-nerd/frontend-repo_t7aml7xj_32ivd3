import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="font-inter text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
      <footer className="border-t border-slate-200 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-sm text-slate-600 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Your Name — All rights reserved.</p>
          <p>Built with React, Tailwind CSS, and FastAPI.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
