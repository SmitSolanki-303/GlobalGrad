import { Github } from "lucide-react"


const ProjectCard = ({ title, description, image, link, tags }) => {
    return (
        <div className="group relative overflow-hidden rounded-lg bg-white  shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="relative aspect-video">
                <img
                src={image || "/placeholder.svg"}
                alt={title}
                className="object-cover w-full h-full transition-transform group-hover:scale-110 duration-300"
                />
                <div className="absolute inset-0 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-white bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-full transition-colors duration-300"
                >
                    <Github className="h-5 w-5" />
                    View on GitHub
                </a>
                </div>
            </div>
            
            <div className="p-6">
                <h3 className="font-semibold text-xl mb-2 text-gray-800">{title}</h3>
                <p className="text-sm text-gray-600 mb-4">{description}</p>
                <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                    <span
                    key={tag}
                    className="inline-flex items-center rounded-full bg-purple-100 px-3 py-1 text-xs font-medium text-purple-800 ring-1 ring-inset ring-purple-500/10"
                    >
                    {tag}
                    </span>
                ))}
                </div>
            </div>
        </div>
    )
}

export default ProjectCard

