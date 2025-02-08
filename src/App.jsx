import Lenis from '@studio-freight/lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Header from "./components/Header/Header"
import IntroductionPage from "./components/IntroductionPage/IntroductionPage"
import TechStack from "./components/TechStack/TechStack"
import Projects from "./components/Projects/Projects"
import Education from "./components/Education/Education"
import Experience from "./components/Experience/Experience"
import Footer from "./components/Footer/Footer"
import { useEffect, useRef } from 'react'
import Achievements from './components/Achievements/Achievements'

gsap.registerPlugin(ScrollTrigger)

const App = () => {

  const lenisRef = useRef()

  useEffect(() => {
    lenisRef.current = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: 'true',
      smoothTouch: 'false',
      touchMultiplier: 2
    })

    lenisRef.current.on('scroll',ScrollTrigger.update)

    gsap.ticker.add((time) => {
      lenisRef.current?.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)

    return () => {
      lenisRef.current?.destroy()
      gsap.ticker.remove(lenisRef.current?.raf)
    }
  }, [])

  return (
    <>
      <Header lenis={lenisRef}/>
      <main className="font-montserrat overflow-hidden">
        <IntroductionPage/>
        <TechStack/>
        <Projects/>
        <Education/>
        <Experience/>
        <Achievements/>
      </main>
      <Footer/>
    </>
  )
}

export default App

