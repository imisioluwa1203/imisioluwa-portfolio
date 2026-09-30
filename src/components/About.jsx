import './About.css'

const skills = ['Python', 'Flask', 'PostgreSQL', 'React', 'Git']

export default function About() {
  return (
    <section className="about" id="about">
      <h2 className="section-title">About me</h2>
      <div className="about-card">
        <p>
          I'm a final-year software engineering student at the University of
          Osun State (UNIOSUN) who enjoys turning ideas into working products.
          I built ACiD'S TREATS, a restaurant ordering app with an admin panel,
          in Flask, and worked in a team of six on a job application tracker,
          splitting the work across backend, frontend and mobile. I'm looking
          for a role where I can keep learning and help ship software that real
          people rely on.
        </p>

        <ul className="tags">
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}