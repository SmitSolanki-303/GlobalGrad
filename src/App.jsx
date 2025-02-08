import { BrowserRouter as Router } from "react-router-dom"
import Header from "./components/Header/Header"
import IntroductionPage from "./components/IntroductionPage/IntroductionPage"
import TechStack from "./components/TechStack/TechStack"
import Projects from "./components/Projects/Project"
import Education from "./components/Education/Education"
import Experience from "./components/Experience/Experience"

const App = () => {
  return (
    <>
      <Header/>
      <main className="font-montserrat overflow-hidden">
        <IntroductionPage/>
        <TechStack/>
        <Projects/>
        <Education/>
        <Experience/>
      </main>
    </>
  )
}

export default App

