"use client"

export default function Resume() {
  const experiences = [
    {
      role: "Software Engineer Intern",
      company: "Formidable Designs",
      location: "St. Albert, AB, CA",
      period: "Jan 2024 – Aug 2024",
      highlights: [
        "Enabled 250,000+ active devices to sync seamlessly for 1,000+ users by designing relational database schemas and developing scalable APIs",
        "Delivered 15+ RESTful API endpoints for pattern customization with response times under 100ms by writing efficient query expressions and utilizing ORM frameworks",
        "Eliminated a critical privilege-escalation vulnerability by engineering server-side role-based access control (RBAC) with hierarchical permission tiers, enforcing secure authorization across all endpoints",
        "Optimized system performance and scalability by refactoring a monolithic automotive financing service into decoupled microservices, reducing average object coupling from 14 to 4",
        "Streamlined cloud deployment workflows and eliminated manual server configuration by utilizing GitHub Actions to build CI/CD pipelines that deploy Docker containerized applications directly to AWS",
        "Accelerated feature delivery by 30% by utilizing AI copilots to automate boilerplate code generation",
      ],
      technologies: ["MSSQL", "C#", ".NET Core", "EF Core", "Docker", "AWS", "AI copilots"],
    },
    {
      role: "Software Engineer Intern",
      company: "Formidable Designs",
      location: "St. Albert, AB, CA",
      period: "May 2023 – Dec 2023",
      highlights: [
        "Reduced user data-entry errors by 70% by replacing legacy digital contracts and forms with a dynamic, multi-step frontend",
        "Engineered end-to-end product features across 20+ responsive web screens by consuming REST APIs and implementing modular frontend components in an Agile development environment",
        "Accelerated team velocity by 20% by maintaining a library of 40+ modular UI components in collaboration with design and product",
        "Achieved 86% code coverage across critical API paths by writing comprehensive unit and integration tests, ensuring zero major regressions during bi-weekly production releases",
        "Consistently delivered committed sprint work on time across 8 consecutive sprints by participating in standups, backlog grooming, and planning using Azure DevOps within an engineering team",
      ],
      technologies: ["Angular", "TypeScript", "HTML", "CSS", "Azure DevOps"],
    },
  ];

  const leadership = [
    {
      role: "President",
      organization: "University of Alberta Friends Across Campus Club",
      location: "Edmonton, AB, CA",
      period: "Sep 2025 – May 2026",
    },
    {
      role: "Teaching Assistant",
      organization: "University of Alberta Department of Computer Science",
      location: "Edmonton, AB, CA",
      period: "Sep 2022 – May 2026",
    },
  ];

  const skills = {
    languages: [
      "C#",
      "SQL/NoSQL",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Python",
      "Java",
      "Bash",
      "Swift",
    ],
    frameworks: [
      ".NET Core",
      "ASP.NET",
      "Entity Framework Core",
      "Angular",
      "Spring Boot",
      "React",
      "Next.js",
      "React Native",
    ],
    tools: [
      "Microsoft SQL Server",
      "PostgreSQL",
      "Git",
      "GitHub",
      "GitHub Actions",
      "GitHub Copilot",
      "Azure DevOps",
      "Xcode",
      "VS Code",
      "Android Studio",
    ],
  };

  const downloadPdf = () => {
    const link = document.createElement("a");
    link.href = "Franco_Bonilla_Resume.pdf";
    link.download = "Franco_Bonilla_Resume.pdf";
    link.click();
  };

  return (
    <div className="bg-[url('/images/beach_portrait.jpg')] bg-fixed bg-center bg-cover bg-no-repeat px-4 py-12">
    <div className="page-wrapper">
      <div className="resume-header">
        <h1 className="page-title" style={{ border: "none", paddingBottom: 0 }}>
          Resume
        </h1>
        {/* <a href="/public/Franco_Bonilla_Resume.pdf" className="btn" rel="noopener noreferrer">
          Download PDF ↓
        </a> */}
        <button onClick={downloadPdf} className="btn">Download PDF ↓</button>
      </div>

      <section className="resume-section">
        <h2 className="section-heading">Experience</h2>
        {experiences.map((e, index) => (
          <div key={e.role + e.period + index} className="resume-entry">
            <div className="resume-entry-header">
              <div>
                <p className="resume-role">{e.role}</p>
                <p className="resume-company">
                  {e.company} — {e.location}
                </p>
              </div>
              <p className="resume-period">{e.period}</p>
            </div>
            <ul className="list-disc pl-4 mt-2 flex flex-col gap-1">
              {e.highlights.map((highlight, idx) => (
                <li key={idx} className="resume-desc">
                  {highlight}
                </li>
              ))}
            </ul>
            {/* <div className="mt-2 flex flex-wrap gap-1 items-center">
              <span className="text-[10px] uppercase font-bold tracking-wider mr-1">
                Technologies:
              </span>
              {e.technologies.map((tech) => (
                <span key={tech} className="tag text-[10px] py-0 px-1.5">
                  {tech}
                </span>
              ))}
            </div> */}
          </div>
        ))}
      </section>

      <section className="resume-section">
        <h2 className="section-heading">Leadership Experience</h2>
        {leadership.map((l, index) => (
          <div key={l.role + l.period + index} className="resume-entry">
            <div className="resume-entry-header">
              <div>
                <p className="resume-role">{l.role}</p>
                <p className="resume-company">
                  {l.organization} — {l.location}
                </p>
              </div>
              <p className="resume-period">{l.period}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="resume-section">
        <h2 className="section-heading">Education</h2>
        <div className="resume-entry">
          <div className="resume-entry-header">
            <div>
              <p className="resume-role">Bachelor of Science in Computer Science</p>
              <p className="resume-company">
                University of Alberta — Edmonton, AB, CA
              </p>
            </div>
            <p className="resume-period">June 2026</p>
          </div>
        </div>
      </section>

      <section className="resume-section">
        <h2 className="section-heading">Skills</h2>
        <div className="flex flex-col gap-4">
          <div>
            <h3 className="text-xs uppercase font-bold tracking-wider mb-2 text-tertiary">Languages</h3>
            <ul className="resume-tags">
              {skills.languages.map((s) => (
                <li key={s} className="tag">
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xs uppercase font-bold tracking-wider mb-2 text-tertiary">Frameworks</h3>
            <ul className="resume-tags">
              {skills.frameworks.map((s) => (
                <li key={s} className="tag">
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xs uppercase font-bold tracking-wider mb-2 text-tertiary">Tools</h3>
            <ul className="resume-tags">
              {skills.tools.map((s) => (
                <li key={s} className="tag">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
    </div>
  );
}
