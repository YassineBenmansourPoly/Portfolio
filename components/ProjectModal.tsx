"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, Github, X } from "lucide-react";
import type { Project } from "@/data/projects";
import { ProjectVisual } from "./ProjectVisual";

type ProjectModalProps = {
  project: Project | null;
  onClose: () => void;
};

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <AnimatePresence>
      {project ? (
        <motion.div
          className="fixed inset-0 z-50 grid place-items-center bg-black/70 p-4 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.article
            className="glass max-h-[90vh] w-full max-w-3xl overflow-auto rounded-lg p-5 sm:p-6"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.22 }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-5 flex items-start justify-between gap-4">
              <div>
                <p className="mb-2 font-mono text-xs uppercase text-cyan-200">
                  {project.category} / {project.year}
                </p>
                <h3 className="font-display text-3xl font-semibold text-white">{project.title}</h3>
              </div>
              <button
                className="focus-ring grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-white/10 bg-white/5 text-slate-300 transition hover:bg-white/10 hover:text-white"
                onClick={onClose}
                aria-label="Close project details"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <ProjectVisual project={project} />
            <div className="mt-6 grid gap-6 md:grid-cols-[1fr_0.7fr]">
              <div>
                <h4 className="mb-2 font-display text-xl font-semibold text-white">What it does</h4>
                <p className="text-base leading-7 text-slate-300">{project.longDescription}</p>
                <p className="mt-4 rounded-lg border border-cyan-200/15 bg-cyan-300/10 p-4 text-sm leading-6 text-cyan-50">
                  {project.impact}
                </p>
              </div>
              <div>
                <h4 className="mb-3 font-display text-xl font-semibold text-white">Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-slate-200">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-6 grid gap-3">
                  <a className="focus-ring inline-flex items-center justify-center gap-2 rounded-lg bg-white px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100" href={project.demo}>
                    <ExternalLink className="h-4 w-4" />
                    Live demo
                  </a>
                  <a className="focus-ring inline-flex items-center justify-center gap-2 rounded-lg border border-white/12 bg-white/5 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/10" href={project.github}>
                    <Github className="h-4 w-4" />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </motion.article>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
