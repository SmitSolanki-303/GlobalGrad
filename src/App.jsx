import { BrowserRouter as Router } from "react-router-dom"
import Header from "./components/Header/Header"
import IntroductionPage from "./components/IntroductionPage/IntroductionPage"
import TechStack from "./components/TechStack/TechStack"
import Projects from "./components/Projects/Projects"

const App = () => {
  return (
    <>
      <Header/>
      <main className="font-montserra overflow-hidden">
        <IntroductionPage/>
        <TechStack/>
        <Projects/>
      </main>
    </>
  )
}

export default App

