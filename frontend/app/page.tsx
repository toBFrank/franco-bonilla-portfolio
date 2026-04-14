export default function Home() {
  return (
    <div className="home-wrapper">
      <section className="home-hero">
        <div className="home-hero-inner">
          <div className="home-photo">
            PHOTO
            <br />
            200×200
          </div>
          <div className="home-bio">
            <h1 className="home-name">Your Name</h1>
            <p className="home-intro">
              [Brief introduction placeholder] — Full-stack web developer with X
              years of experience building scalable web applications. Passionate
              about clean code and great user experiences.
            </p>
            <div className="home-cta-row">
              <a href="/projects" className="btn">View Projects →</a>
              <a href="/contact" className="btn">Contact Me →</a>
            </div>
          </div>
        </div>
      </section>

      <section className="home-skills-section">
        <h2 className="page-title">Key Skills</h2>
        <ul className="home-skills-grid">
          {["React / Next.js", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS", "Docker"].map(
            (skill) => (
              <li key={skill} className="tag">{skill}</li>
            )
          )}
        </ul>
      </section>
    </div>
  );
}