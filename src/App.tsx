import { About } from './components/About'
import { Consultation } from './components/Consultation'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Portfolio } from './components/Portfolio'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Portfolio />
        <About />
        <Consultation />
      </main>
      <Footer />
    </>
  )
}

export default App
