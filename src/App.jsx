import React, { useState, useRef } from 'react'
import Spline from '@splinetool/react-spline'
import { motion, useInView } from 'framer-motion'
import { Menu, X, ArrowRight, Github, Linkedin, Mail } from 'lucide-react'

function Section({ id, children, className = '' }) {
  return (
    <section id={id} className={`py-24 sm:py-28 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  )
}

function Reveal({ children, delay = 0 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  )
}

function Navbar() {
  const [open, setOpen] = useState(false)
  const links = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-white/60 p-3 backdrop-blur-xl shadow-xl">
          <div className="flex items-center justify-between">
            <a href="#" className="text-lg font-bold tracking-tight">
              <span className="bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">MyPortfolio</span>
            </a>
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
              {links.map((l) => (
                <a key={l.href} href={l.href} className="text-zinc-700 hover:text-zinc-900 transition-colors">
                  {l.label}
                </a>
              ))}
            </nav>
            <button className="md:hidden p-2 rounded-lg hover:bg-white/60" onClick={() => setOpen(!open)} aria-label="Toggle menu">
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
          {open && (
            <div className="md:hidden mt-3 grid gap-2">
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 text-zinc-800 hover:bg-white/70">
                  {l.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <div className="relative h-[92vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/40 via-white/0 to-white/90" />

      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight bg-gradient-to-br from-zinc-900 via-fuchsia-700 to-cyan-600 bg-clip-text text-transparent">
              Creative Developer crafting immersive web experiences
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-2xl text-base sm:text-lg text-zinc-700">
              I blend modern UI, motion, and playful 3D to build fast, delightful, and accessible products.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-600 to-cyan-600 px-5 py-3 text-white shadow-lg shadow-fuchsia-600/30">
                View Projects <ArrowRight size={18} />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-xl border border-zinc-300 bg-white/80 px-5 py-3 text-zinc-900 backdrop-blur">
                Contact Me
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-8 flex items-center gap-4">
              <a aria-label="GitHub" href="https://github.com" className="rounded-full border border-zinc-300 bg-white/70 p-2 hover:bg-white">
                <Github size={20} />
              </a>
              <a aria-label="LinkedIn" href="https://linkedin.com" className="rounded-full border border-zinc-300 bg-white/70 p-2 hover:bg-white">
                <Linkedin size={20} />
              </a>
              <a aria-label="Email" href="#contact" className="rounded-full border border-zinc-300 bg-white/70 p-2 hover:bg-white">
                <Mail size={20} />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  )
}

function About() {
  return (
    <Section id="about">
      <Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">About Me</h2>
            <p className="mt-4 text-zinc-700">
              I’m a front-end engineer focused on building stunning, performant interfaces. I love motion design, WebGL, and design systems. My toolkit includes React, Tailwind, Framer Motion, and Three/Spline for interactive 3D.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-xl border border-zinc-200 bg-white p-4 shadow-sm">5+ years experience</div>
              <div className="rounded-xl border border-zinc-200 bg-white p-4 shadow-sm">UI Animation Lover</div>
              <div className="rounded-xl border border-zinc-200 bg-white p-4 shadow-sm">Accessibility-first</div>
              <div className="rounded-xl border border-zinc-200 bg-white p-4 shadow-sm">Remote-friendly</div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-fuchsia-200 to-cyan-200 blur-2xl opacity-60" />
            <div className="relative rounded-3xl border border-zinc-200 bg-white p-6 shadow-xl">
              <div className="h-56 w-full rounded-2xl bg-gradient-to-br from-fuchsia-500/70 to-cyan-500/70" />
              <p className="mt-4 text-sm text-zinc-600">
                A snapshot of my design explorations, concept UIs, and micro-interactions.
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}

function Projects() {
  const items = [
    {
      title: 'Neon Storefront',
      desc: 'E-commerce UI with 3D hero and parallax product cards.',
      tags: ['React', 'Spline', 'Tailwind'],
    },
    {
      title: 'Motion Dashboard',
      desc: 'Analytics dashboard with fluid chart transitions and gestures.',
      tags: ['Framer Motion', 'React'],
    },
    {
      title: 'XR Landing',
      desc: 'Marketing site with depth, glassmorphism, and scroll scenes.',
      tags: ['Three.js', 'Design'],
    },
  ]

  return (
    <Section id="projects" className="bg-gradient-to-b from-white to-zinc-50">
      <Reveal>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Selected Work</h2>
      </Reveal>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((p, i) => (
          <Reveal key={p.title} delay={0.05 * i}>
            <div className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
              <div className="absolute -inset-10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-70 bg-gradient-to-r from-fuchsia-300 to-cyan-300" />
              <div className="relative z-10">
                <div className="h-40 rounded-xl bg-gradient-to-br from-zinc-100 to-zinc-200" />
                <h3 className="mt-4 text-xl font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-zinc-600">{p.desc}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full border border-zinc-200 bg-white px-2.5 py-1 text-xs text-zinc-700">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

function Skills() {
  const skills = ['React', 'TypeScript', 'Tailwind', 'Framer Motion', 'Three.js', 'Spline', 'Node.js', 'FastAPI']
  return (
    <Section id="skills">
      <Reveal>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Skills</h2>
      </Reveal>
      <Reveal delay={0.1}>
        <div className="mt-6 flex flex-wrap gap-3">
          {skills.map((s) => (
            <span key={s} className="rounded-xl border border-zinc-200 bg-white px-3 py-1.5 text-sm text-zinc-800 shadow-sm">
              {s}
            </span>
          ))}
        </div>
      </Reveal>
    </Section>
  )
}

function Contact() {
  return (
    <Section id="contact" className="bg-gradient-to-t from-white to-zinc-50">
      <Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Let’s build something together</h2>
            <p className="mt-4 text-zinc-700">
              Reach out for collaborations, projects, or just to say hi.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a href="mailto:you@example.com" className="inline-flex items-center gap-2 rounded-xl border border-zinc-300 bg-white/80 px-4 py-2">
                <Mail size={18} /> you@example.com
              </a>
              <a href="https://github.com" className="inline-flex items-center gap-2 rounded-xl border border-zinc-300 bg-white/80 px-4 py-2">
                <Github size={18} /> GitHub
              </a>
              <a href="https://linkedin.com" className="inline-flex items-center gap-2 rounded-xl border border-zinc-300 bg-white/80 px-4 py-2">
                <Linkedin size={18} /> LinkedIn
              </a>
            </div>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <div className="grid gap-4">
              <div>
                <label className="text-sm font-medium">Name</label>
                <input className="mt-1 w-full rounded-xl border border-zinc-300 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-fuchsia-400" placeholder="Your name" />
              </div>
              <div>
                <label className="text-sm font-medium">Email</label>
                <input type="email" className="mt-1 w-full rounded-xl border border-zinc-300 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-fuchsia-400" placeholder="you@example.com" />
              </div>
              <div>
                <label className="text-sm font-medium">Message</label>
                <textarea rows="4" className="mt-1 w-full rounded-xl border border-zinc-300 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-fuchsia-400" placeholder="Tell me about your project" />
              </div>
              <button className="mt-2 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-fuchsia-600 to-cyan-600 px-5 py-3 text-white shadow-lg shadow-fuchsia-600/30">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </Reveal>
    </Section>
  )
}

function Footer() {
  return (
    <footer className="py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 text-sm text-zinc-600">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top_left,rgba(168,85,247,0.08),transparent_40%),radial-gradient(ellipse_at_bottom_right,rgba(34,211,238,0.08),transparent_40%)]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
