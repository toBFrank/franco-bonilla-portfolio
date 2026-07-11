import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Baby Product Management App",
    technologies: ["Java", "TypeScript", "Python", "React", "Next.js", "Spring Boot", "PostgreSQL", "Docker"],
    description: "Engineered the backend service to track household inventory and aggregate external store data by building robust APIs using Java and Spring Boot for a Next.js frontend.",
    source_code: undefined,
    demo: "http://[2605:fd00:4:1001:f816:3eff:fee0:cbe1]/"
  },
  {
    id: 2,
    title: "Distributed Social Network App",
    technologies: ["JavaScript", "Python", "React", "Django", "PostgreSQL", "Heroku"],
    description: "Designed a decentralized social platform in Django and React, enabling cross-node messaging and content sharing.",
    source_code: "https://github.com/toBFrank/tavern-social-distribution-app",
    demo: "https://www.youtube.com/watch?v=1eEFIIfovMM"
  },
  {
    id: 3,
    title: "AI Reinforcement Learning Agent",
    technologies: ["Python"],
    description: "Developed a self-reflective reinforcement learning algorithm, achieving 90% faster convergence than Q-learning.",
    source_code: "https://github.com/toBFrank/self-reflection-pathfinding",
    demo: undefined
  },
];

export default function Projects() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  return (
    <div className={`bg-[url('${basePath}/images/creek_1.jpg')] bg-fixed bg-center bg-cover bg-no-repeat px-4 py-12`}>
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
              {p.source_code && (
              <a 
              href={p.source_code}
              target="_blank"
              rel="noopener noreferrer"
              className="btn">Source Code ↗</a>
              )}
              {p.demo && (
              <a
              href={p.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn">Demo ↗</a>
              )}
              {/* <a href="https://github.com/toBFrank" target="_blank" rel="noopener noreferrer" className="btn">GitHub ↗</a> */}
            </div>
          </article>
        ))}
      </div>
    </div>
    </div>
  );
}