import ProjectCard from "./ProjectCard"

const Projects = () => {
    const projects = [
        {
        title: "E-commerce Platform",
        description: "A full-stack e-commerce platform built with React, Node.js, and Stripe integration.",
        image: "/placeholder.svg",
        link: "https://github.com",
        tags: ["React", "Node.js", "Stripe"],
        },
        {
        title: "Task Management App",
        description: "A real-time task management application with team collaboration features.",
        image: "/placeholder.svg",
        link: "https://github.com",
        tags: ["React", "Node.js", "Socket.io"],
        },
        {
        title: "AI Chat Interface",
        description: "An AI-powered chat interface with natural language processing capabilities.",
        image: "/placeholder.svg",
        link: "https://github.com",
        tags: ["OpenAI", "React", "TailwindCSS"],
        },
    ]

    return (
        <section id="projects" className="py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">Projects</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
            ))}
            </div>
        </div>
        </section>
    )
}

export default Projects

