import './Experience.css'

const timeline = [
  {
    title: 'Capstone: Job Application Tracker',
    detail: 'Team of 6 across backend, frontend and mobile.',
    current: true,
  },
  {
    title: "Built ACiD'S TREATS",
    detail: 'Full restaurant ordering flow in Flask.',
    current: false,
  },
  {
    title: 'Final-year software engineering',
    detail: 'Osun State University (UNIOSUN)',
    current: false,
  },
]

function TimelineItem({ title, detail, current }) {
  return (
    <li className={current ? 'timeline-item current' : 'timeline-item'}>
      <h3>{title}</h3>
      <p>{detail}</p>
    </li>
  )
}

export default function Experience() {
  return (
    <section className="experience" id="experience">
      <h2 className="section-title">Experience</h2>
      <ol className="timeline">
        {timeline.map((item) => (
          <TimelineItem key={item.title} {...item} />
        ))}
      </ol>
    </section>
  )
}