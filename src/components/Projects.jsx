import './Projects.css'

const projects = [
  {
    title: "ACiD'S TREATS",
    description: 'Restaurant ordering app with an admin panel.',
    tags: ['Flask', 'Ordering', 'Admin'],
    live: '',
    code: '',
    featured: true,
  },
  {
    title: 'Job Application Tracker',
    description: 'Capstone team project built by a team of 6.',
    tags: ['Capstone', 'Team'],
    live: '',
    code: '',
    featured: false,
  },
  {
    title: 'Author Lead Tracker',
    description: 'Tool for freelancers to track author leads and outreach.',
    tags: ['Leads', 'Outreach'],
    live: '',
    code: '',
    featured: false,
  },
]

function ProjectCard({ title, description, tags, live, code, featured }) {
  return (
    <article className={featured ? 'project-card featured' : 'project-card'}>
      {featured && <div className="project-thumb">Screenshot goes here</div>}

      <h3>{title}</h3>
      <p className="project-description">{description}</p>

      <ul className="tags">
        {tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>

      <div className="project-links">
        {live && <a href={live}>Live demo ↗</a>}
        {code && <a href={code}>Code ↗</a>}
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <section className="projects" id="work">
      <h2 className="section-title">Selected work</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  )
}