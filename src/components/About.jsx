import React from 'react'
import { Github, Linkedin, Mail } from "lucide-react"

const About = () => {
    return (
        <section id="about" className="py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Full Stack Developer
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Building digital experiences with modern technologies. Focused on creating elegant solutions to complex
                problems.
                </p>
            </div>
            <div className="space-x-4">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <button className="p-2 border border-gray-300 rounded-md hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700">
                    <Github className="h-4 w-4" />
                    <span className="sr-only">GitHub</span>
                </button>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <button className="p-2 border border-gray-300 rounded-md hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700">
                    <Linkedin className="h-4 w-4" />
                    <span className="sr-only">LinkedIn</span>
                </button>
                </a>
                <a href="mailto:hello@example.com">
                <button className="p-2 border border-gray-300 rounded-md hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700">
                    <Mail className="h-4 w-4" />
                    <span className="sr-only">Email</span>
                </button>
                </a>
            </div>
            </div>
        </div>
        </section>
    )
}

export default About

