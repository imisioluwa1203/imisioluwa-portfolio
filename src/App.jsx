import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Projects from './components/Projects'
import Experience from './components/Experience'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Contacts from './components/Contacts'
import Reveal from './components/Reveal'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Reveal><Stats /></Reveal>
        <Reveal><Projects /></Reveal>
        <Reveal><Experience /></Reveal>
        <Reveal><About /></Reveal>
        <Reveal><Testimonials /></Reveal>
        <Reveal><Contacts /></Reveal>
      </main>
    </>
  )
}