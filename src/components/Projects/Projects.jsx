import ProjectCard from "./ProjectCard"
import Image1 from './Image1.jpg';



const Projects = () => {
    const projects = [
        {
        title: "E-commerce Platform",
        description: "A full-stack e-commerce platform built with React, Node.js, and Stripe integration.",
        image: Image1,
        link: "https://github.com",
        tags: ["React", "Node.js", "Stripe"],
        },
        {
        title: "Task Management App",
        description: "A real-time task management application with team collaboration features.",
        image: Image1,
        link: "https://github.com",
        tags: ["React", "Node.js", "Socket.io"],
        },
        {
        title: "AI Chat Interface",
        description: "An AI-powered chat interface with natural language processing capabilities.",
        image: Image1,
        link: "https://github.com",
        tags: ["OpenAI", "React", "TailwindCSS"],
        },
    ]

    return (
        <section id="projects" className="w-screen overflow-hidden px-4 sm:px-6 md:px-8 py-12 md:py-24 lg:py-32">
        <div className="max-w-6xl mx-auto">
            <h2 className="font-semibold text-3xl sm:text-4xl md:text-5xl mb-8 text-center">My Projects</h2>
            <p className="text-lg sm:text-xl md:text-2xl mb-12 text-center text-gray-600 ">
            Here are some of my recent works:
            </p>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
            ))}
            </div>
        </div>
        </section>
    )
}

export default Projects

