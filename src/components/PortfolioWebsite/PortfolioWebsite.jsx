import Lenis from '@studio-freight/lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Header from "./Header/Header"
import IntroductionPage from "./IntroductionPage/IntroductionPage"
import TechStack from "./TechStack/TechStack"
import Projects from "./Projects/Projects"
import Education from "./Education/Education"
import Experience from "./Experience/Experience"
import Footer from "./Footer/Footer"
import Contact from "./ContactMe/Contact"
import Achievements from './Achievements/Achievements'

import { useEffect, useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

const PortfolioWebsite = () => {    

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
            <Contact/>
        </main>
        <Footer/>
        </>
    )
}

export default PortfolioWebsite
