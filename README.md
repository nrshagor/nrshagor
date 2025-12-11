```ts
import { DeveloperProfile } from "@/nrshagor/runtime"

// Booting Developer Runtime...
import { Developer } from "./core/runtime";

const ShagorRuntime = new Developer({
  id: "nr-shagor",
  name: "Noore Rabbi Shagor",
  role: "Senior Full-Stack Web Developer (Team Lead)",
  location: "Dhaka, Bangladesh",
  portfolio: "https://nrshagor.com",
  email: "noorerabbishagor@gmail.com",
  version: "1.0.0"
});

ShagorRuntime.initialize();
// → System Ready ✔

// ⚙️ Runtime Boot Log //

> Initializing Developer Runtime…
✓ NodeJS Engine Booted
✓ TypeScript Compiler Loaded
✓ React / Next.js Modules Linked
✓ NestJS Container Injected
✓ PostgreSQL Database Connected
✓ Laravel Kernel Loaded
✓ TailwindCSS Processor Activated
✓ MongoDB & MySQL Drivers Ready

SYSTEM STATUS: OPERATIONAL ✔

// 📟 CLI: developer --whoami //

$ developer --whoami

👤 Name: Noore Rabbi Shagor
💼 Role: Senior Full-Stack Web Developer (Team Lead)
🛠️ Stack: React • Next.js • NestJS • Laravel • PostgreSQL • MongoDB • TypeScript
🚀 Experience: 4+ Years (Full-Stack | System Design | Team Lead)
🌐 Portfolio: nrshagor.com
📧 Email: noorerabbishagor@gmail.com

// 🔌 API: /api/developer/shagor //

{
  "name": "Noore Rabbi Shagor",
  "role": "Senior Full-Stack Web Developer (Team Lead)",
  "location": "Dhaka, Bangladesh",
  "specialization": [
    "Next.js", "React", "NestJS",
    "Laravel", "PostgreSQL", "MongoDB"
  ],
  "status": "Building scalable SaaS, APIs & high-traffic production systems"
}

// 🧱 Module: AboutMe.ts //

export const AboutMe = () => ({
  intro:
    `I build scalable, production-grade web applications
    with clean architecture performance-first patterns,
    and pixel-perfect UI.`,

  experience: {
    totalYears: "4+ years",
    companies: [
      "Ghorer Bazar — Full Stack Developer (2024 – Present)",
      "Ecomclips — Full Stack Developer (2022 – 2023)",
      "Doer Services Ltd — IT Officer",
      "Quantanite — Data Analyst"
    ]
  },

  core_strengths: [
    "Full-Stack Architecture",
    "System Design",
    "API Engineering",
    "Large-scale Frontend Development"
  ]
});

// 📦 Module: Skills.ts //

export const Skills = {
  frontend: [
    "React.js",
    "Next.js (App Router)",
    "Tailwind CSS",
    "TypeScript",
    "Redux / Zustand"
  ],

  backend: [
    "NestJS",
    "Node.js",
    "Express",
    "Laravel",
    "PHP"
  ],

  database: [
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "Prisma",
    "TypeORM"
  ],

  devops: [
    "Docker",
    "Nginx",
    "CI/CD (GitHub Actions)",
    "PM2",
    "Linux VPS"
  ],

  other: ["Chrome Extension Dev", "Web Scraping", "SEO Optimization"]
};

// 🏢 Experience Registry (YAML)

- company: "Ghorer Bazar"
  position: "Full Stack Web Developer"
  duration: "27 Feb 2024 – Present"
  responsibilities:
    - "Developed full-stack apps using Next.js & NestJS"
    - "Created REST APIs for ERP & E-commerce"
    - "Designed PostgreSQL databases for large systems"
    - "Implemented Tailwind CSS responsive UI"
    - "Ensured clean code + SEO-optimized architecture"
    - "Collaborated with cross-functional teams"
    - "Used Git/GitHub for collaborative workflow"

- company: "Isharify"
  position: "Full Stack Web Developer"
  duration: "25 Mar 2022 – 31 Oct 2023"
  responsibilities:
    - "Led the developer team on multiple projects"
    - "Built E-commerce platforms using Laravel, React, Next.js"
    - "Converted Figma UI into functional interfaces"
    - "Performed code reviews & mentored junior developers"
    - "Used GitHub, cPanel, Asana for project lifecycle"
    - "Focused heavily on clean code & SEO"

- company: "Doer Services Limited"
  position: "Junior IT Officer"
  duration: "01 May 2021 – 02 Nov 2021"
  responsibilities:
    - "Solved issues in Isabel Customer Care system"
    - "Handled IP/network troubleshooting"
    - "Improved internal software reliability"

- company: "Quantanite"
  position: "Data Analyst"
  duration: "01 May 2020 – 02 Sep 2020"
  responsibilities:
    - "Analyzed map datasets"
    - "Created structured insights & reporting"
    - "Supported GIS-based analysis workflows"

// 🚀 Projects — Exported Module

export const projects = [
  {
    name: "Event Manager",
    url: "https://event-management.nrshagor.com/",
    tech: ["Pure PHP", "MySQL", "Bootstrap", "Vanilla CSS"],
    features: ["Event creation & management", "Attendance reporting"]
  },

  {
    name: "Keyword Explorer (Chrome Extension)",
    url: "https://chromewebstore.google.com/detail/keyword-explorer/folafhnmabfodamicdpnobbneikljpdc",
    tech: ["JavaScript", "Chrome Extension API"],
    features: [
      "Keyword analysis",
      "Meta & link inspector",
      "Image optimization",
      "SEO suggestions",
      "Dark/Light mode"
    ]
  },

  {
    name: "MyQbits",
    role: "Project Leader",
    url: "https://myqbits.com/",
    tech: ["Laravel", "MySQL", "Bootstrap", "Asana"],
    description: "Integrated E-commerce & ERP system with team coordination."
  },

  {
    name: "School Management System",
    url: "https://school.codenrs.com/",
    tech: ["Laravel", "MySQL", "Bootstrap"],
    features: ["Full school operations management"]
  },

  {
    name: "Location API",
    url: "https://location-api.nrshagor.com/",
    tech: ["NestJS", "NextJS", "PostgreSQL", "Tailwind CSS"],
    features: ["Location dataset API", "Hierarchy mapping", "Fast geo-search"]
  },

  {
    name: "JSON View Pro (Chrome Extension)",
    url: "https://chromewebstore.google.com/detail/json-view-pro/glbhdpoibkjcldiklkmkikmcmmaaiipa",
    tech: ["JavaScript"],
    features: ["JSON visualization", "Theme modes", "Instant copy", "Download JSON"]
  },

  {
    name: "cookie-handler-pro (NPM Package)",
    url: "https://www.npmjs.com/package/cookie-handler-pro",
    docs: "https://nrshagor.github.io/cookie-handler-pro-document/",
    tech: ["TypeScript"],
    features: ["Lightweight API", "Zero dependency", "Simple implementation"]
  }
];

// 🖥️ Developer Mode Log

> Running DeveloperProfile --verbose

[ OK ] Compiling UI Engine (Next.js + Tailwind)
[ OK ] Connecting to API Layer (NestJS)
[ OK ] Migrating Database Schema (PostgreSQL)
[ OK ] Building Cloud Deployment Pipeline (VPS + Nginx)
[ OK ] Activating Frontend Rendering Optimizations
[ OK ] Loading Developer Stats…

Developer Mode: ENABLED



// 🎓 Education Model
{
  "degree": "B.Sc. in Computer Science & Engineering",
  "institution": "Daffodil International University",
  "cgpa": "3.02 / 4.00",
  "passing_year": 2019
}

// 🎮 Interests Function

function getInterests() {
  return [
    "Music",
    "Designing",
    "Online Gaming",
    "Traveling",
    "Teaching",
    "Problem Solving",
    "Joking 😄"
  ];
}

// 🖨️ CLI Output — Describe Profile

$ shagor-dev --describe --pretty

DeveloperProfile {
  name: "Noore Rabbi Shagor",
  role: "Senior Web Developer",

  PORTFOLIO_URL: "https://nrshagor.com",
  EMAIL: "noorerabbishagor@gmail.com",
  LOCATION: "Dhaka, Bangladesh",

  status: "Open for full-stack opportunities"
}

✔ Completed in 428ms

// 🔻 Shutdown Sequence

ShagorRuntime.shutdown();
// → Closing Active Connections…
```
