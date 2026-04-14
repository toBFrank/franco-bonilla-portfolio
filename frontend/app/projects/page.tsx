const projects = [
  { id: 1, title: "Project Alpha", tech: "React, Node.js, PostgreSQL", description: "[Project description placeholder] — A full-stack application that solves X problem by doing Y. Increased efficiency by Z%." },
  { id: 2, title: "Project Beta", tech: "Next.js, Tailwind, Prisma", description: "[Project description placeholder] — An e-commerce platform featuring real-time inventory management and seamless checkout flow." },
  { id: 3, title: "Project Gamma", tech: "TypeScript, Express, Redis", description: "[Project description placeholder] — A REST API service handling high-throughput data pipelines with caching and rate limiting." },
];

export default function Projects() {
  return (
    <div className="page-wrapper">
      <h1 className="page-title">Projects</h1>

      <div className="projects-list">
        {projects.map((p) => (
          <article key={p.id} className="project-card">
            <div className="project-screenshot">
              [SCREENSHOT / DEMO PLACEHOLDER]
              <br />
              1200 × 630
            </div>

            <div className="project-meta">
              <h2 className="project-title">{p.title}</h2>
              <p className="project-tech">{p.tech}</p>
              <p className="project-desc">{p.description}</p>
            </div>

            <div className="project-links">
              <a href="#" className="btn">Live Demo ↗</a>
              <a href="#" className="btn">GitHub ↗</a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}