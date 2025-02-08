import { BrowserRouter as Router } from "react-router-dom"
import Header from "./components/Header/Header"
import IntroductionPage from "./components/IntroductionPage/IntroductionPage"
import TechStack from "./components/TechStack/TechStack"
import Projects from "./components/Projects/Projects"
import Education from "./components/Education/Education"

const App = () => {
  return (
    <>
      <Header/>
      <main className="font-montserrat overflow-hidden">
        <IntroductionPage/>
        <TechStack/>
        <Projects/>
        <Education/>
      </main>
    </>
  )
}

export default App

