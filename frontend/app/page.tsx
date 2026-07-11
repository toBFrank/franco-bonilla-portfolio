import Image from "next/image";
import Link from "next/link";
import GithubIcon from "@/public/icons/github_icon.svg";
import LinkedinIcon from "@/public/icons/linkedin_icon.svg";
import InstagramIcon from "@/public/icons/instagram_icon.svg";

export default function Home() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  return (
    <div 
      className={`bg-fixed bg-center bg-cover bg-no-repeat px-4 py-12`}
      style={{ backgroundImage: `url('${basePath}/images/mountains_1.jpg')` }}
    >
    <div className="about-wrapper">
      <section className="about-hero">
        <div className="about-hero-inner">
          <div className="about-photo-socials">
            <div className="about-photo">
              <Image
                src={`${basePath}/profile_pic.jpg`}
                alt="Profile Picture"
                className="rounded-full"
                width={400}
                height={400}
              />
            </div>

            <div className="about-socials mt-4 flex justify-between">
              <Link
                href="https://github.com/toBFrank"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon width={36} height={36} fill={"var(--foreground)"} className="hover:opacity-80 transition-opacity"/>
              </Link>
              <Link
                href="https://linkedin.com/in/tobfrank"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedinIcon width={36} height={36} fill={"var(--foreground)"} className="hover:opacity-80 transition-opacity"/>
              </Link>
              <Link
                href="https://instagram.com/tobfrankwu/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon width={36} height={36} fill={"var(--foreground)"} className="hover:opacity-80 transition-opacity"/>
              </Link>
            </div>

            <div className="about-cta-row">
              <a href="/resume" className="btn">
                View Resume →
              </a>
              <a href="/contact" className="btn">
                Contact Me →
              </a>
            </div>
          </div>
          <div className="about-bio">
            <h1 className="about-name">Hi, I'm Franco.</h1>
            <p className="about-intro">
              I’m a Computer Science Graduate and Full Stack Software Engineer,
              passionate about building scalable, feature-rich products that deliver measurable business impact.
              <br />
              <br />
              Throughout my work experience, I shipped
              customer-facing cross-platform applications and led API
              architecture initiatives that improved developer velocity and
              product strategy. I’m driven to build user-focused features driven
              by data.
              <br />
              <br />
              Outside of tech, you'll find me hiking in the woods, trying to
              pick up a new language, absorbed in a book, or just spending time with my
              loved ones.
              <br />
              <br />
              My current personal project is rooted in solving the global
              loneliness epidemic, as I believe technology should be inclusive
              and human-first.
            </p>
          </div>
        </div>
      </section>
    </div>
    </div>
  );
}
