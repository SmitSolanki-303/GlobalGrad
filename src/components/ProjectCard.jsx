import { Github } from "lucide-react"

const ProjectCard = ({ title, description, image, link, tags }) => {
    return (
        <div className="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700">
        <div className="relative aspect-video">
            <img
            src={image || "/placeholder.svg"}
            alt={title}
            className="object-cover w-full h-full transition-transform hover:scale-105"
            />
        </div>
        <div className="p-4">
            <h3 className="font-semibold text-xl mb-2">{title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{description}</p>
            <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
                <span
                key={tag}
                className="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10 dark:bg-gray-700 dark:text-gray-300"
                >
                {tag}
                </span>
            ))}
            </div>
        </div>
        <div className="p-4 pt-0">
            <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm hover:underline"
            >
            <Github className="h-4 w-4" />
            View on GitHub
            </a>
        </div>
        </div>
    )
}

export default ProjectCard

