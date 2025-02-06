import { BrowserRouter as Router } from "react-router-dom"
import Header from "./components/Header"
import About from "./components/About"
import Projects from "./components/Projects"
import TechStack from "./components/TechStack"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
        <Header />

        <main className="container mx-auto px-4 md:px-6">
          <About />
          <Projects />
          <TechStack />
          <Contact />
        </main>

        <Footer />
      </div>
    </Router>
  )
}

export default App

