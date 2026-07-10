const projects = [
  {
    id: 1,
    title: "Baby Product Management App",
    technologies: ["Java", "TypeScript", "Python", "React", "Next.js", "Spring Boot", "PostgreSQL", "Docker"],
    description: "Engineered the backend service to track household inventory and aggregate external store data by building robust APIs using Java and Spring Boot for a Next.js frontend."
  },
  {
    id: 2,
    title: "Distributed Social Network App",
    technologies: ["JavaScript", "Python", "React", "Django", "PostgreSQL", "Heroku"],
    description: "Designed a decentralized social platform in Django and React, enabling cross-node messaging and content sharing."
  },
  {
    id: 3,
    title: "AI Reinforcement Learning Agent",
    technologies: ["Python"],
    description: "Developed a self-reflective reinforcement learning algorithm, achieving 90% faster convergence than Q-learning."
  },
];

export default function Projects() {
  return (
    <div className="page-wrapper">
      <h1 className="page-title">Projects</h1>

      <div className="projects-list">
        {projects.map((p) => (
          <article key={p.id} className="project-card">
            <div className="project-meta">
              <h2 className="project-title">{p.title}</h2>
              <p className="project-desc">{p.description}</p>
              
              <div className="mt-2 flex flex-wrap gap-1 items-center">
                <span className="text-[10px] uppercase font-bold tracking-wider mr-1 text-foreground">
                  Technologies:
                </span>
                {p.technologies.map((tech) => (
                  <span key={tech} className="tag text-[10px] py-0 px-1.5">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="project-links">
              <a href="https://github.com/toBFrank" target="_blank" rel="noopener noreferrer" className="btn">GitHub ↗</a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}