import './Testimonials.css'

const testimonials = [
  {
    quote: 'Replace this with a real quote from one of your clients.',
    name: 'Client name',
    role: 'Their role or company',
  },
]

function TestimonialCard({ quote, name, role }) {
  return (
    <figure className="testimonial-card">
      <blockquote>{quote}</blockquote>
      <figcaption>
        <span className="testimonial-name">{name}</span>
        <span className="testimonial-role">{role}</span>
      </figcaption>
    </figure>
  )
}

export default function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <h2 className="section-title">What clients say</h2>
      <div className="testimonials-list">
        {testimonials.map((item) => (
          <TestimonialCard key={item.name} {...item} />
        ))}
      </div>
    </section>
  )
}