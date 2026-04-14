export default function Resume() {
  return (
    <div className="page-wrapper">
      <div className="resume-header">
        <h1 className="page-title" style={{ border: "none", paddingBottom: 0 }}>
          Resume
        </h1>
        <a href="/resume.pdf" className="btn">
          Download PDF ↓
        </a>
      </div>

      <section className="resume-section">
        <h2 className="section-heading">Experience</h2>
        {[
          {
            role: "Senior Developer",
            company: "Company Name",
            period: "2022 – Present",
          },
          {
            role: "Frontend Engineer",
            company: "Company Name",
            period: "2020 – 2022",
          },
          {
            role: "Junior Developer",
            company: "Company Name",
            period: "2018 – 2020",
          },
        ].map((e) => (
          <div key={e.role + e.period} className="resume-entry">
            <div className="resume-entry-header">
              <div>
                <p className="resume-role">{e.role}</p>
                <p className="resume-company">{e.company}</p>
              </div>
              <p className="resume-period">{e.period}</p>
            </div>
            <p className="resume-desc">
              [Responsibilities placeholder] — Describe key achievements,
              technologies used, and impact. Quantify results where possible
              (e.g., "improved load time by 40%").
            </p>
          </div>
        ))}
      </section>

      <section className="resume-section">
        <h2 className="section-heading">Education</h2>
        <div className="resume-entry">
          <div className="resume-entry-header">
            <div>
              <p className="resume-role">B.Sc. Computer Science</p>
              <p className="resume-company">University Name</p>
            </div>
            <p className="resume-period">2014 – 2018</p>
          </div>
        </div>
      </section>

      <section className="resume-section">
        <h2 className="section-heading">Skills</h2>
        <ul className="resume-tags">
          {[
            "TypeScript",
            "JavaScript",
            "Python",
            "Java",
            "Swift",
            "C#",
            "HTML/CSS",
            "React",
            "React Native",
            "Vue",
            "SwiftUI",
            "Node.js",
            "Spring Boot",
            "Django",
            "SQL/NoSQL",
            "Git",
            "Android Studio",
            "Xcode",
            "Docker",
            "Figma",
          ].map((s) => (
            <li key={s} className="tag">
              {s}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
