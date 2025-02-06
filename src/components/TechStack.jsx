const TechStack = () => {

    const technologies = [
        {
            category: "Frontend",
            skills: ["React", "Vite", "JavaScript", "TailwindCSS", "Redux", "GraphQL"],
        },
        {
            category: "Backend",
            skills: ["Node.js", "Express", "Python", "Django", "PostgreSQL", "MongoDB"],
        },
        {
            category: "DevOps",
            skills: ["Docker", "AWS", "CI/CD", "Git", "Linux", "Nginx"],
        },
        {
            category: "Tools",
            skills: ["VS Code", "Postman", "Figma", "Jest", "GitHub", "Vercel"],
        },
    ]

    return (
        <section className="py-12 md:py-24 lg:py-32">
            <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">Tech Stack</h2>
            <div className="grid gap-6 md:grid-cols-2">
                {technologies.map((tech) => (
                <div key={tech.category} className="p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                    <h3 className="text-lg font-semibold mb-4">{tech.category}</h3>
                    <div className="flex flex-wrap gap-2">
                    {tech.skills.map((skill) => (
                        <span
                        key={skill}
                        className="inline-flex items-center rounded-md bg-blue-100 px-2 py-1 text-sm font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 dark:bg-blue-900 dark:text-blue-300"
                        >
                        {skill}
                        </span>
                    ))}
                    </div>
                </div>
                ))}
            </div>
            </div>
        </section>
    )
}

export default TechStack  

