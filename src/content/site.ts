import retrievalImage from "@/assets/project-retrieval.jpg";
import codeImage from "@/assets/project-code.jpg";
import securityImage from "@/assets/project-security.jpg";
import journalImage from "@/assets/journal-notebook.jpg";
import blogImage from "@/assets/blog-evaluation.jpg";
import retrievalBlogImage from "@/assets/blog-retrieval.jpg";
import rustBlogImage from "@/assets/blog-rust-api.jpg";
import infrastructureBlogImage from "@/assets/blog-infrastructure.jpg";
import localFirstBlogImage from "@/assets/blog-local-first.jpg";
import writingBlogImage from "@/assets/blog-writing.jpg";
import type {
  BlogPost,
  ExternalReference,
  JournalEntry,
  OpenSourceContribution,
  Project,
  Technology,
} from "./types";

export const site = {
  name: "Akshay Atam",
  role: "Software & AI Engineer",
  email: "akshay@akshayatam.dev",
  intro:
    "I build thoughtful software and AI systems—turning ambiguous problems into reliable products people can understand and use.",
  socials: {
    github: "https://github.com/akshayatam",
    linkedin: "https://linkedin.com/in/akshayatam",
    instagram: "https://instagram.com/akshayatam",
  },
};
const project = (
  title: string,
  slug: string,
  description: string,
  tags: string[],
  date: string,
  thumbnail: string,
  featured = false,
  status = "Active",
): Project => ({
  title,
  slug,
  description,
  tags,
  date,
  thumbnail,
  featured,
  status,
  githubUrl: "https://github.com/",
  seo: { title: `${title} — Akshay Atam`, description },
  content: [
    { type: "heading", text: "Overview" },
    { type: "paragraph", text: description },
    { type: "heading", text: "Problem" },
    {
      type: "paragraph",
      text: "The system began with a practical constraint: make a complex workflow dependable without hiding its trade-offs from the people using it.",
    },
    { type: "heading", text: "Approach" },
    {
      type: "paragraph",
      text: "I started with observable, testable primitives, then composed them into a small architecture with explicit boundaries. Evaluation was part of the development loop rather than a final gate.",
    },
    {
      type: "code",
      language: "python",
      code: 'def evaluate(result, context):\n    grounded = score_grounding(result, context)\n    return {"grounded": grounded, "passed": grounded > 0.82}',
    },
    { type: "heading", text: "Results" },
    {
      type: "list",
      items: [
        "Reduced operational ambiguity with traceable outputs",
        "Made failure states visible and actionable",
        "Kept the system modular enough to evolve independently",
      ],
    },
    { type: "heading", text: "What I learned" },
    {
      type: "quote",
      text: "The most useful AI systems make uncertainty legible instead of pretending it does not exist.",
    },
  ],
});
export const projects: Project[] = [
  project(
    "Trace—RAG evaluation workbench",
    "trace-rag",
    "An evaluation-first workspace for inspecting retrieval quality, citations, and failure modes in production RAG systems.",
    ["AI", "RAG", "Python"],
    "2026-08-18",
    retrievalImage,
    true,
  ),
  project(
    "Lattice code intelligence",
    "lattice-code-intelligence",
    "A local-first code exploration tool that maps dependencies and explains unfamiliar repositories with evidence.",
    ["LLMs", "Rust", "Open Source"],
    "2026-06-02",
    codeImage,
    true,
  ),
  project(
    "Boundary policy engine",
    "boundary-policy-engine",
    "A compact authorization engine for expressing and auditing high-confidence application access policies.",
    ["Security", "Rust", "Open Source"],
    "2026-03-14",
    securityImage,
    true,
    "Stable",
  ),
  project(
    "Signal incident copilot",
    "signal-incident-copilot",
    "An incident assistant that assembles timelines from noisy operational events without replacing human judgment.",
    ["AI", "Python", "Web Development"],
    "2025-12-09",
    retrievalImage,
  ),
  project(
    "Parcel streaming toolkit",
    "parcel-streaming-toolkit",
    "Composable primitives for resilient event consumers with retries, idempotency, and observability built in.",
    ["Rust", "Open Source"],
    "2025-09-21",
    codeImage,
  ),
  project(
    "Small Models Lab",
    "small-models-lab",
    "A reproducible benchmark suite for comparing compact language models on focused product tasks.",
    ["Machine Learning", "LLMs", "Python"],
    "2025-05-03",
    retrievalImage,
    false,
    "Research",
  ),
  project(
    "Quiet Metrics",
    "quiet-metrics",
    "A privacy-conscious product analytics dashboard designed around questions rather than vanity numbers.",
    ["React", "Web Development"],
    "2024-11-12",
    securityImage,
    false,
    "Archived",
  ),
];
const post = (
  title: string,
  slug: string,
  excerpt: string,
  tags: string[],
  date: string,
  readingTime: number,
  coverImage: string,
  coverImageAlt: string,
  featured = false,
  researchPapers?: ExternalReference[],
): BlogPost => ({
  title,
  slug,
  excerpt,
  tags,
  publishedAt: date,
  readingTime,
  coverImage,
  coverImageAlt,
  featured,
  ...(researchPapers?.length ? { researchPapers } : {}),
  seo: { title: `${title} — Akshay Atam`, description: excerpt },
  content: [
    { type: "paragraph", text: excerpt },
    { type: "heading", text: "Start with the failure model" },
    {
      type: "paragraph",
      text: "Good engineering starts by naming what can go wrong. With AI systems, the failure surface includes the model, context, retrieval, tools, and the interaction between them.",
    },
    {
      type: "quote",
      text: "A useful evaluation does not merely produce a score; it helps a team decide what to change next.",
    },
    { type: "heading", text: "Build the smallest useful loop" },
    {
      type: "list",
      items: [
        "Capture representative traces",
        "Label the decisions that matter",
        "Measure changes against stable examples",
        "Review surprising failures as a team",
      ],
    },
    {
      type: "code",
      language: "typescript",
      code: "const result = await runCase(example)\nexpect(result.citations).toSupport(result.answer)",
    },
    { type: "heading", text: "Closing thought" },
    {
      type: "paragraph",
      text: "Reliable systems emerge from short feedback loops, explicit assumptions, and teams willing to inspect the uncomfortable examples.",
    },
  ],
});
export const blogPosts: BlogPost[] = [
  post(
    "Evaluation is a product feature",
    "evaluation-is-a-product-feature",
    "Why AI evaluation belongs in the product loop—not in a spreadsheet at the end of development.",
    ["AI", "Engineering"],
    "2026-09-02",
    7,
    blogImage,
    "Layered technical drawings representing evaluation systems",
    true,
    [
      {
        title: "Attention Is All You Need",
        authors: "Vaswani et al.",
        source: "arXiv",
        url: "https://arxiv.org/abs/1706.03762",
        type: "arxiv",
      },
    ],
  ),
  post(
    "Designing retrieval systems for debuggability",
    "retrieval-for-debuggability",
    "A practical architecture for tracing what was retrieved, why it mattered, and where an answer went wrong.",
    ["RAG", "Architecture"],
    "2026-07-19",
    10,
    retrievalBlogImage,
    "Layered translucent diagrams representing observable retrieval paths",
    true,
    [
      {
        title: "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks",
        authors: "Lewis et al.",
        source: "arXiv",
        url: "https://arxiv.org/abs/2005.11401",
        type: "arxiv",
      },
    ],
  ),
  post(
    "What Rust changed about how I design APIs",
    "rust-and-api-design",
    "Lessons in making invalid states hard to represent, even when working outside Rust.",
    ["Rust", "Engineering"],
    "2026-05-11",
    6,
    rustBlogImage,
    "Interlocking metal components joined by a rust-colored thread",
    true,
  ),
  post(
    "The case for boring infrastructure",
    "boring-infrastructure",
    "Choosing calm, legible operational systems over impressive but fragile stacks.",
    ["Infrastructure", "Engineering"],
    "2026-02-06",
    5,
    infrastructureBlogImage,
    "A calm row of compact server modules with neatly routed cables",
  ),
  post(
    "Local-first tools for technical work",
    "local-first-technical-tools",
    "Where local-first design creates meaningful leverage for engineering workflows.",
    ["Product", "Open Source"],
    "2025-10-22",
    8,
    localFirstBlogImage,
    "Compact personal workstation with local storage and connected tools",
  ),
  post(
    "Notes on useful technical writing",
    "useful-technical-writing",
    "How to explain technical decisions with precision without losing the reader.",
    ["Writing", "Engineering"],
    "2025-07-14",
    4,
    writingBlogImage,
    "Open notebook with geometric technical sketches and a pencil",
  ),
];
const note = (
  date: string,
  type: JournalEntry["type"],
  text: string,
  title?: string,
  tags?: string[],
  extra: Partial<JournalEntry> = {},
): JournalEntry => ({ date, type, title, tags, content: [{ type: "paragraph", text }], ...extra });
export const journalEntries: JournalEntry[] = [
  note(
    "2026-09-13",
    "Learning",
    "Spent an hour understanding how KV caching affects LLM inference today. One of those concepts that suddenly makes several other things click.",
    "A note on KV caching",
    ["LLMs"],
    { slug: "kv-caching-clicks" },
  ),
  note(
    "2026-09-05",
    "Building",
    "Reworked the trace viewer around questions engineers actually ask: what context arrived, what was ignored, and why did this answer change?",
    "Building a better trace viewer",
    ["RAG", "Product"],
    {
      slug: "better-trace-viewer",
      image: journalImage,
      imageAlt: "Open notebook with a hand-drawn system diagram beside a keyboard",
      imageCaption: "Working through the trace viewer’s information flow on paper.",
    },
  ),
  note(
    "2026-08-26",
    "Thought",
    "Software quality is often the cumulative result of dozens of tiny acts of consideration.",
  ),
  note(
    "2026-08-11",
    "Life",
    "A long walk with no headphones remains an underrated debugging tool.",
    "Away from the keyboard",
  ),
  note(
    "2026-07-28",
    "Instagram",
    "A small field note from an afternoon studying visual systems and wayfinding.",
    "Patterns in public systems",
    ["Design"],
    { externalPlatform: "Instagram", externalUrl: "https://instagram.com/" },
  ),
  note(
    "2026-07-08",
    "Building",
    "Prototyped a local index that can answer dependency questions without uploading a repository.",
    "Local code maps",
    ["Rust"],
    { slug: "local-code-maps" },
  ),
  note(
    "2026-06-22",
    "Note",
    "The best abstractions tend to make the next change obvious, not merely possible.",
  ),
];
export const technologies: Technology[] = [
  {
    name: "Python",
    category: "Languages",
    icon: "python",
    detail: "AI systems, services, evaluation",
  },
  {
    name: "TypeScript",
    category: "Languages",
    icon: "typescript",
    detail: "Product applications and tooling",
  },
  { name: "Rust", category: "Languages", icon: "rust", detail: "Reliable systems and local tools" },
  { name: "React", category: "Frontend", icon: "react" },
  { name: "TanStack", category: "Frontend", icon: "tanstack" },
  { name: "Node.js", category: "Backend", icon: "nodejs" },
  { name: "FastAPI", category: "Backend", icon: "fastapi" },
  { name: "PyTorch", category: "AI / Machine Learning", icon: "pytorch" },
  { name: "Hugging Face", category: "AI / Machine Learning", icon: "hugging-face" },
  { name: "PostgreSQL", category: "Databases", icon: "postgresql" },
  { name: "Redis", category: "Databases", icon: "redis" },
  { name: "Cloudflare", category: "Infrastructure / Cloud", icon: "cloudflare" },
  { name: "Docker", category: "Infrastructure / Cloud", icon: "docker" },
  { name: "GitHub Actions", category: "Developer Tools", icon: "github-actions" },
  { name: "Neovim", category: "Developer Tools", icon: "neovim" },
];
export const openSourceContributions: OpenSourceContribution[] = [
  {
    repository: "open-evals",
    organization: "Community AI",
    title: "Added trace-level citation evaluation",
    description:
      "Introduced a focused evaluator and documentation for checking whether generated claims are supported by retrieved passages.",
    type: "pull-request",
    status: "merged",
    githubUrl: "https://github.com/",
    date: "2026-08-07",
    pullRequestNumber: 284,
  },
  {
    repository: "local-index",
    organization: "Open Tools",
    title: "Documented incremental indexing workflows",
    description:
      "Clarified update semantics and added practical examples for teams adopting the local-first indexing API.",
    type: "documentation",
    status: "approved",
    githubUrl: "https://github.com/",
    date: "2026-05-19",
    pullRequestNumber: 91,
  },
  {
    repository: "policy-kit",
    title: "Reported an ambiguous wildcard policy edge case",
    description:
      "Isolated a precedence issue, supplied a minimal reproduction, and proposed expected behavior for nested rules.",
    type: "bug-fix",
    status: "in-review",
    githubUrl: "https://github.com/",
    date: "2026-02-11",
    issueNumber: 143,
  },
];
export const experience = [
  {
    company: "Perfect Solutions Group Inc",
    position: "AI/ML Engineer",
    dates: "Jul 2025 - Present",
    location: "Irving, TX / Remote",
    description:
      "Building production ML pipelines, automated training and deployment systems, and predictive analytics integrated into ERP and CRM workflows.",
  },
  {
    company: "Bright Mind Enrichment and Schooling",
    position: "Data Analyst",
    dates: "Oct 2024 - Jul 2025",
    location: "San Francisco, CA / Remote",
    description:
      "Built Python data pipelines, validation systems, and automated reporting workflows for operational and compliance data.",
  },
  {
    company: "Stevens Institute of Technology",
    position: "Graduate Course Assistant",
    dates: "Sep 2023 - Dec 2023",
    location: "Hoboken / Remote",
    description:
      "Automated assignment grading with Python and Matplotlib while supporting students through structured technical feedback.",
  },
  {
    company: "BellaVita Pharmaceuticals",
    position: "Inventory Manager",
    dates: "Jun 2021 - Jul 2022",
    location: "Lucknow, India",
    description:
      "Managed inventory, shipments, and fulfillment through MARG ERP while coordinating supply and logistics operations.",
  },
  {
    company: "OpenGenus IQ",
    position: "Machine Learning Developer Intern",
    dates: "Feb 2021 - Oct 2021",
    location: "Remote",
    description:
      "Created technical content translating machine learning and deep learning concepts into practical implementations for developers.",
  },
  {
    company: "Bolt IoT",
    position: "Student Partner Intern",
    dates: "Jan 2021 - Mar 2021",
    location: "Remote",
    description:
      "Led educational outreach introducing students to practical IoT and machine learning applications.",
  },
];
export const education = [
  {
    company: "Stevens Institute of Technology",
    position: "M.S. in Machine Learning",
    dates: "Sep 2022 - May 2024",
    location: "Hoboken, NJ",
    description:
      "Studied statistical learning, deep learning, optimization, and scalable AI systems, with technical research on modern ML architectures and deployment.",
  },
  {
    company: "Arizona State University",
    position: "AI and Machine Learning Professional Certification",
    dates: "Oct 2021 - Mar 2022",
    location: "Tempe, AZ / Online",
    description:
      "Studied statistical machine learning, AI, and knowledge representation and reasoning, including logic-based inference systems with Clingo.",
  },
  {
    company: "Indian Institute of Information Technology and Management",
    position: "Integrated B.Tech (IT) and M.Tech (IT)",
    dates: "Jul 2016 - Jun 2021",
    location: "Gwalior, India",
    description:
      "Completed a five-year IT program with research in EEG-based emotion recognition and machine-learning approaches to deepfake detection.",
  },
];
export const journalTypes = [
  "Thought",
  "Learning",
  "Building",
  "Life",
  "Photo",
  "Instagram",
  "Note",
] as const;
