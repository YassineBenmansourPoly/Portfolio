"use client";

import { useMemo, useState } from "react";
import { ArrowRight, Github, Linkedin, Mail, Search, Sparkles } from "lucide-react";
import { categories, projects, type Project, type ProjectCategory } from "@/data/projects";
import { MotionDiv, MotionSection } from "@/components/Motion";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectModal } from "@/components/ProjectModal";

const languages = ["Java", "C#", "HTML", "CSS", "PHP", "JavaScript", "Swift", "SQL"];

const tools = ["Visual Studio", "VS Code", ".NET", "GitHub", "Xcode", "MySQL", "SQL Server", "Figma"];

const navItems = [
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" }
];

function SectionHeader({ label, title, description }: { label: string; title: string; description: string }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <p className="mb-3 font-mono text-xs uppercase text-cyan-200">{label}</p>
      <h2 className="font-display text-3xl font-semibold tracking-normal text-white sm:text-5xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-slate-400">{description}</p>
    </div>
  );
}

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");
  const [query, setQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const featuredProjects = projects.filter((project) => project.featured);
  const visibleProjects = useMemo(() => {
    const search = query.trim().toLowerCase();

    return projects.filter((project) => {
      const matchesCategory = activeCategory === "All" || project.category === activeCategory;
      const haystack = [project.title, project.description, project.category, ...project.tech].join(" ").toLowerCase();
      return matchesCategory && (!search || haystack.includes(search));
    });
  }, [activeCategory, query]);

  return (
    <main className="relative min-h-screen overflow-hidden bg-ink text-white">
      <div className="subtle-grid pointer-events-none absolute inset-x-0 top-0 h-[760px]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(14,165,233,0.14),transparent_34rem)]" />

      <header className="sticky top-0 z-40 border-b border-white/10 bg-ink/72 backdrop-blur-xl">
        <nav className="mx-auto max-w-7xl px-5 py-3 sm:px-8 md:py-4">
          <div className="flex items-center justify-between gap-4">
            <a href="#top" className="font-display text-base font-semibold text-white sm:text-lg">Yassine Benmansour</a>
            <div className="hidden items-center gap-7 text-sm text-slate-300 md:flex">
              {navItems.map((item) => (
                <a key={item.href} className="transition hover:text-white" href={item.href}>{item.label}</a>
              ))}
            </div>
            <a className="focus-ring inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100" href="mailto:yassine@example.com">
              <Mail className="h-4 w-4" />Email
            </a>
          </div>
          <div className="mt-3 grid grid-cols-4 gap-2 text-center text-xs text-slate-300 md:hidden">
            {navItems.map((item) => (
              <a key={item.href} className="focus-ring rounded-lg border border-white/10 bg-white/[0.04] px-2 py-2 transition hover:bg-white/10 hover:text-white" href={item.href}>{item.label}</a>
            ))}
          </div>
        </nav>
      </header>

      <section id="top" className="relative mx-auto grid min-h-[calc(100vh-73px)] max-w-7xl content-center items-center gap-x-12 gap-y-8 px-5 py-14 sm:px-8 lg:grid-cols-[1fr_0.78fr]">
        <MotionDiv className="text-center lg:col-span-2 lg:self-end" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
          <h1 className="font-display text-4xl font-semibold leading-[1.08] tracking-normal text-white sm:text-5xl xl:whitespace-nowrap xl:text-[66px] 2xl:text-[72px]">Yassine Benmansour&apos;s Portfolio</h1>
        </MotionDiv>
        <MotionDiv initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.05 }}>
          <p className="mt-3 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">I&apos;m Yassine, a third year student developer studying programming at Bahrain Polytechnic, building projects across web, mobile, desktop, and backend systems.</p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a className="focus-ring inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-200 px-5 py-3 text-sm font-semibold text-slate-950 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_14px_40px_rgba(34,211,238,0.28)]" href="#projects">View projects<ArrowRight className="h-4 w-4" /></a>
            <a className="focus-ring inline-flex items-center justify-center gap-2 rounded-lg border border-white/12 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:border-pink-200/40 hover:bg-pink-300/10 hover:shadow-[0_14px_40px_rgba(255,79,216,0.18)]" href="#contact">Contact me</a>
          </div>
        </MotionDiv>

        <MotionDiv className="glass relative overflow-hidden rounded-lg p-4" initial={{ opacity: 0, y: 28, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.7, delay: 0.12 }}>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,79,216,0.28),transparent_14rem),radial-gradient(circle_at_80%_60%,rgba(34,211,238,0.2),transparent_18rem)]" />
          <div className="relative rounded-lg border border-white/10 bg-black/35 p-5">
            <div className="mb-5 flex items-center justify-between"><span className="font-mono text-xs uppercase text-pink-200">portfolio studio</span><Sparkles className="h-5 w-5 text-cyan-200" /></div>
            <div className="rounded-lg border border-white/10 bg-white/[0.06] p-5">
              <div className="flex items-center gap-3">
                <div className="grid h-14 w-14 place-items-center rounded-lg bg-gradient-to-br from-pink-300 to-cyan-200 font-display text-xl font-bold text-slate-950">YB</div>
                <div><p className="font-display text-2xl font-semibold text-white">Programming Student</p><p className="text-sm text-slate-400">Java / C# / PHP / Swift / JavaScript</p></div>
              </div>
              <div className="mt-6 rounded-lg bg-slate-950/55 p-4"><p className="font-display text-4xl font-semibold text-cyan-100">18</p><p className="mt-1 text-sm leading-6 text-slate-400">projects completed across coursework, personal builds, and practice apps</p></div>
            </div>
            <div className="mt-4 rounded-lg border border-pink-200/20 bg-pink-300/10 p-4 text-sm leading-6 text-pink-50">Building coursework, web apps, mobile experiments, database projects, and backend systems with clean, readable code.</div>
          </div>
        </MotionDiv>
      </section>

      <MotionSection id="projects" className="relative border-y border-white/10 bg-white/[0.025] px-5 py-24 sm:px-8" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
        <div className="mx-auto max-w-7xl">
          <SectionHeader label="Featured work" title="Projects with a reason to exist." description="Each project is framed around the problem it solved, the decisions behind it, and the stack used to ship it." />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">{featuredProjects.map((project) => <ProjectCard key={project.id} project={project} featured onOpen={setSelectedProject} />)}</div>
        </div>
      </MotionSection>

      <section className="border-b border-white/10 px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader label="Project library" title="Search the build archive." description="A clean project system for many projects: filter by category, search by stack or title, then open the detail view." />
          <div className="mb-8 grid gap-4 lg:grid-cols-[1fr_auto]">
            <label className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.06] px-4 py-3 transition focus-within:ring-4 focus-within:ring-cyan-300/30"><Search className="h-5 w-5 text-slate-400" /><input className="w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-500" placeholder="Search projects, tools, or tech stack" value={query} onChange={(event) => setQuery(event.target.value)} /></label>
            <div className="flex flex-wrap gap-2">{categories.map((category) => <button key={category} className={`focus-ring rounded-lg border px-4 py-2 text-sm font-medium transition ${activeCategory === category ? "border-cyan-200/60 bg-cyan-200 text-slate-950" : "border-white/10 bg-white/[0.05] text-slate-300 hover:bg-white/10 hover:text-white"}`} onClick={() => setActiveCategory(category)}>{category}</button>)}</div>
          </div>
          {visibleProjects.length ? (
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">{visibleProjects.map((project) => <ProjectCard key={project.id} project={project} onOpen={setSelectedProject} />)}</div>
          ) : (
            <div className="rounded-lg border border-white/10 bg-white/[0.04] px-5 py-12 text-center">
              <p className="font-display text-2xl font-semibold text-white">No projects found</p>
              <p className="mt-2 text-sm text-slate-400">Try another keyword or switch back to the All category.</p>
            </div>
          )}
        </div>
      </section>

      <section id="about" className="border-b border-white/10 bg-gradient-to-b from-transparent to-pink-950/10 px-5 py-24 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div><p className="mb-3 font-mono text-xs uppercase text-cyan-200">About me</p><h2 className="font-display text-4xl font-semibold text-white sm:text-5xl">I&apos;m learning by building things I can explain, improve, and be proud of.</h2></div>
          <div className="space-y-6 text-lg leading-8 text-slate-300"><p>I&apos;m Yassine, a third year programming student at Bahrain Polytechnic. I enjoy taking class concepts and turning them into working projects, especially when I can connect the logic, database, and interface together.</p><p>I&apos;m still growing as a developer, but I care about writing cleaner code each time, understanding why something works, and building a portfolio that shows real progress instead of just listing technologies.</p></div>
        </div>
      </section>

      <section id="skills" className="border-b border-white/10 px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader label="Skills and tools" title="Languages, software, and tools I use." description="A clearer view of the programming languages I work with and the tools I am familiar with from coursework and personal projects." />
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="rounded-lg border border-white/10 bg-white/[0.04] p-5"><h3 className="mb-4 font-display text-xl font-semibold text-white">Languages Used</h3><div className="grid gap-3 sm:grid-cols-2">{languages.map((skill) => <div key={skill} className="rounded-lg border border-white/10 bg-white/[0.05] px-4 py-4 text-sm font-medium text-slate-200 transition duration-300 hover:-translate-y-1 hover:border-pink-200/35 hover:bg-pink-300/10">{skill}</div>)}</div></div>
            <div className="rounded-lg border border-white/10 bg-white/[0.04] p-5"><h3 className="mb-4 font-display text-xl font-semibold text-white">Software and Tools</h3><div className="grid gap-3 sm:grid-cols-2">{tools.map((skill) => <div key={skill} className="rounded-lg border border-white/10 bg-white/[0.05] px-4 py-4 text-sm font-medium text-slate-200 transition duration-300 hover:-translate-y-1 hover:border-cyan-200/35 hover:bg-cyan-300/10">{skill}</div>)}</div></div>
          </div>
        </div>
      </section>

      <section id="contact" className="grid min-h-[70vh] place-items-center px-5 py-24 sm:px-8">
        <div className="glass mx-auto max-w-5xl rounded-lg p-8 text-center sm:p-12">
          <h2 className="font-display text-4xl font-semibold text-white sm:text-5xl">Looking forward to working with you :)</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-300">I&apos;m open to internships, student teams, freelance projects, and job opportunities.</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a className="focus-ring inline-flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition duration-300 hover:-translate-y-1 hover:bg-cyan-100 hover:shadow-[0_14px_40px_rgba(34,211,238,0.28)]" href="mailto:yassine@example.com"><Mail className="h-4 w-4" />yassine@example.com</a>
            <a className="focus-ring inline-flex items-center justify-center gap-2 rounded-lg border border-white/12 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:border-pink-200/40 hover:bg-pink-300/10 hover:shadow-[0_14px_40px_rgba(255,79,216,0.18)]" href="https://github.com"><Github className="h-4 w-4" />GitHub</a>
            <a className="focus-ring inline-flex items-center justify-center gap-2 rounded-lg border border-white/12 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:border-pink-200/40 hover:bg-pink-300/10 hover:shadow-[0_14px_40px_rgba(255,79,216,0.18)]" href="https://linkedin.com"><Linkedin className="h-4 w-4" />LinkedIn</a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-8 text-center text-sm text-slate-500 sm:px-8"><p>Designed and built by Yassine Benmansour. Programming portfolio for Java, C#, PHP, JavaScript, Swift, and .NET web apps.</p></footer>
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </main>
  );
}
