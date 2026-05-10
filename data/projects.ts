import { BrainCircuit, Code2, Database, GraduationCap, LayoutDashboard, Smartphone } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type ProjectCategory = "All" | "Web Apps" | "AI" | "Mobile" | "Data" | "School";

export type Project = {
  id: string;
  title: string;
  category: Exclude<ProjectCategory, "All">;
  year: string;
  status: "Live" | "In progress" | "Case study";
  description: string;
  longDescription: string;
  impact: string;
  tech: string[];
  github: string;
  demo: string;
  accent: string;
  icon: LucideIcon;
  featured?: boolean;
};

export const categories: ProjectCategory[] = ["All", "Web Apps", "AI", "Mobile", "Data", "School"];

export const projects: Project[] = [
  {
    id: "campus-navigator",
    title: "Campus Navigator",
    category: "Web Apps",
    year: "2026",
    status: "Live",
    description: "A map-first campus guide that helps new students find buildings, labs, and quiet study spots.",
    longDescription:
      "Built as a practical student tool with searchable locations, category filters, saved spots, and a clean route preview. The goal was to make orientation week less confusing without burying users in menus.",
    impact: "Reduced a 40-building directory into a fast searchable interface.",
    tech: ["Next.js", "React", "Map UI", "Tailwind"],
    github: "https://github.com",
    demo: "https://vercel.com",
    accent: "from-cyan-300 to-blue-500",
    icon: GraduationCap,
    featured: true
  },
  {
    id: "studyflow-ai",
    title: "StudyFlow AI",
    category: "AI",
    year: "2026",
    status: "Case study",
    description: "An AI study planner that turns messy notes and deadlines into a realistic weekly plan.",
    longDescription:
      "Designed around the actual chaos of student life: short sessions, shifting deadlines, and exam weeks. It includes note summaries, priority scoring, and a daily focus queue.",
    impact: "Converted unstructured notes into ranked study tasks and review blocks.",
    tech: ["React", "OpenAI API", "Framer Motion", "TypeScript"],
    github: "https://github.com",
    demo: "https://vercel.com",
    accent: "from-violet-300 to-fuchsia-500",
    icon: BrainCircuit,
    featured: true
  },
  {
    id: "club-ops",
    title: "Club Ops Dashboard",
    category: "Data",
    year: "2025",
    status: "Live",
    description: "A lightweight dashboard for tracking club events, attendance, budgets, and volunteer tasks.",
    longDescription:
      "Made for student organizations that need operational clarity without enterprise software. Includes event snapshots, budget health, and member task ownership.",
    impact: "Helped a club leadership team replace scattered spreadsheets.",
    tech: ["Next.js", "Charts", "Supabase", "Tailwind"],
    github: "https://github.com",
    demo: "https://vercel.com",
    accent: "from-emerald-300 to-teal-500",
    icon: LayoutDashboard,
    featured: true
  },
  {
    id: "code-journal",
    title: "Code Journal",
    category: "School",
    year: "2025",
    status: "In progress",
    description: "A personal build log for class projects, debugging notes, snippets, and weekly progress.",
    longDescription:
      "Part portfolio, part learning archive. The app makes it easy to capture what was hard, what changed, and what I would improve next time.",
    impact: "Turns projects into readable engineering stories, not just screenshots.",
    tech: ["React", "MDX", "Prism", "Tailwind"],
    github: "https://github.com",
    demo: "https://vercel.com",
    accent: "from-amber-200 to-orange-500",
    icon: Code2,
    featured: true
  },
  {
    id: "budget-buddy",
    title: "Budget Buddy",
    category: "Mobile",
    year: "2025",
    status: "Case study",
    description: "A student budget tracker with recurring expenses, friendly limits, and visual spending patterns.",
    longDescription:
      "Focused on quick check-ins instead of complex accounting. Built around weekly habits, simple categories, and readable trend cards.",
    impact: "Made personal finance feel approachable for first-year students.",
    tech: ["React Native", "Expo", "SQLite", "Charts"],
    github: "https://github.com",
    demo: "https://vercel.com",
    accent: "from-sky-300 to-indigo-500",
    icon: Smartphone
  },
  {
    id: "lab-inventory",
    title: "Lab Inventory",
    category: "Web Apps",
    year: "2024",
    status: "Live",
    description: "A small inventory tracker for lab equipment, checkout status, and repair notes.",
    longDescription:
      "Built for a classroom lab where equipment moved between students often. The interface prioritizes quick scanning and simple status updates.",
    impact: "Made missing equipment easier to spot before class started.",
    tech: ["Next.js", "Postgres", "React Hook Form", "Tailwind"],
    github: "https://github.com",
    demo: "https://vercel.com",
    accent: "from-lime-300 to-emerald-500",
    icon: Database
  }
];
