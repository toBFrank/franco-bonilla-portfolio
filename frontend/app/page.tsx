import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="about-wrapper">
      <section className="about-hero">
        <div className="about-hero-inner">
          <div className="about-photo-socials">
            <div className="about-photo">
              <Image
                src="/profile_pic.jpg"
                alt="Profile Picture"
                width={400}
                height={400}
              />
            </div>
            <div className="about-socials">
              <Link
                href="https://www.linkedin.com/in/tobfrank/"
                target="_blank"
              >
                <Image
                  src="/icons/linkedin_icon.png"
                  alt="LinkedIn"
                  width={24}
                  height={24}
                />
              </Link>
              <Link
                href="https://www.linkedin.com/in/tobfrank/"
                target="_blank"
              >
                <Image
                  src="/icons/linkedin_icon.png"
                  alt="LinkedIn"
                  width={24}
                  height={24}
                />
              </Link>
              <Link
                href="https://www.linkedin.com/in/tobfrank/"
                target="_blank"
              >
                <Image
                  src="/icons/linkedin_icon.png"
                  alt="LinkedIn"
                  width={24}
                  height={24}
                />
              </Link>
            </div>
          </div>
          <div className="about-bio">
            <h1 className="about-name">Franco Bonilla</h1>
            <p className="about-intro">
              I’m a Computer Science Graduate and Full Stack Software Engineer,
              passionate about building scalable, feature-rich products that
              modernize workflows and deliver measurable business impact.
              <br />
              <br />
              Throughout my 4 internships at Formidable Designs, I shipped
              customer-facing cross-platform applications and led API
              architecture initiatives that improved developer velocity and
              product strategy. I’m driven to build user-focused features driven
              by data.
              <br />
              <br />
              Outside of tech, you'll find me hiking in the woods, trying to
              pick up German, absorbed in a book, or just spending time with my
              loved ones.
              <br />
              <br />
              My current personal project is rooted in solving the global
              loneliness epidemic, as I believe technology should be inclusive
              and human-first.
            </p>
            <div className="about-cta-row">
              <a href="/resume" className="btn">
                View Resume →
              </a>
              <a href="/contact" className="btn">
                Contact Me →
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="about-skills-section">
        <h2 className="page-title">Key Skills</h2>
        <ul className="about-skills-grid">
          {[
            "TypeScript",
            "JavaScript",
            "Python",
            "Node.js",
            "Django",
            "React",
            "SQL/NoSQL",
            "REST APIs",
          ].map((skill) => (
            <li key={skill} className="tag">
              {skill}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
