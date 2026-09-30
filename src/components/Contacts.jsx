import './Contacts.css'

const socials = [
  { label: 'GitHub', href: 'https://github.com/imisioluwa1203' },
  // { label: 'LinkedIn', href: 'https://www.linkedin.com/in/your-name' },
  { label: 'Email', href: 'akinsulireimisioluwa@gmail.com' },
]

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-card">
        <h2>Let's build something</h2>
        <p>Have a project in mind? I reply within a day.</p>
        <a className="button primary" href="akinsulireimisioluwa@gmail.com">
          Email me
        </a>
      </div>

      <ul className="socials">
        {socials.map((social) => (
          <li key={social.label}>
            <a href={social.href} target="_blank" rel="noreferrer">
              {social.label}
            </a>
          </li>
        ))}
      </ul>

      <p className="copyright">
        © {new Date().getFullYear()} Imisioluwa
      </p>
    </section>
  )
}