export default function About() {
  return (
    <div className="page-wrapper">
      <h1 className="page-title">About Me</h1>

      <div className="about-layout">
        <div className="about-photo">
          PHOTO
          <br />
          400×400
        </div>

        <div className="about-content">
          <section className="about-section">
            <h2 className="section-heading">Professional Journey</h2>
            <p>
              [Background placeholder] — Started my career in web development in
              YEAR after studying FIELD at UNIVERSITY. Worked at COMPANY A as a
              junior developer, then moved to COMPANY B where I led a team of X
              engineers.
            </p>
          </section>

          <section className="about-section">
            <h2 className="section-heading">Technical Skills</h2>
            <ul className="about-skills-list">
              {[
                "JavaScript / TypeScript",
                "React / Next.js",
                "Node.js / Express",
                "SQL / NoSQL",
                "Git / CI-CD",
                "AWS / Vercel",
              ].map((s) => (
                <li key={s} className="before:content-['—'] before:mr-2">
                  {s}
                </li>
              ))}
            </ul>
          </section>

          <section className="about-section">
            <h2 className="section-heading">Interests & Hobbies</h2>
            <p>
              [Personal touch placeholder] — Outside of coding, I enjoy HOBBY A,
              HOBBY B, and HOBBY C. I also volunteer at LOCAL ORGANIZATION doing
              X.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
