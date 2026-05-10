"use client";

import { ExternalLink, Github, Plus } from "lucide-react";
import type { Project } from "@/data/projects";
import { MotionDiv } from "./Motion";
import { ProjectVisual } from "./ProjectVisual";

type ProjectCardProps = {
  project: Project;
  featured?: boolean;
  onOpen: (project: Project) => void;
};

export function ProjectCard({ project, featured = false, onOpen }: ProjectCardProps) {
  return (
    <MotionDiv
      layout
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45 }}
      className={`glass group flex h-full flex-col rounded-lg p-3 transition duration-300 hover:-translate-y-1 hover:border-cyan-200/35 ${featured ? "md:p-4" : ""}`}
    >
      <ProjectVisual project={project} compact={!featured} />
      <div className="flex flex-1 flex-col p-2 pt-5">
        <div className="mb-3 flex items-center justify-between gap-3">
          <span className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-[11px] uppercase text-cyan-100">
            {project.status}
          </span>
          <span className="text-sm text-slate-500">{project.year}</span>
        </div>
        <h3 className="font-display text-2xl font-semibold text-white">{project.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-6 text-slate-300">{project.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.slice(0, 4).map((tech) => (
            <span key={tech} className="rounded-md bg-white/[0.06] px-2.5 py-1 text-xs text-slate-300">
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-6 flex items-center justify-between gap-3">
          <button
            className="focus-ring inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium text-white transition hover:bg-white/10"
            onClick={() => onOpen(project)}
          >
            <Plus className="h-4 w-4" />
            Details
          </button>
          <div className="flex gap-2">
            <a className="focus-ring grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/5 text-slate-300 transition hover:text-white" href={project.github} aria-label={`${project.title} GitHub`}>
              <Github className="h-4 w-4" />
            </a>
            <a className="focus-ring grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/5 text-slate-300 transition hover:text-white" href={project.demo} aria-label={`${project.title} live demo`}>
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </MotionDiv>
  );
}
