import { motion } from "framer-motion"
import { Award, ExternalLink } from "lucide-react"

const AchievementsCard = ({ title, description, tags = [], index }) => {
    return (
        <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="group relative bg-white rounded-lg shadow-lg overflow-hidden"
        >
        <div className="absolute top-0 left-0 w-2 h-full bg-purple-600" />

        <div className="p-6">
            <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
                <Award className="w-6 h-6 text-purple-600" />
                <h3 className="font-bold text-xl text-gray-800">{title}</h3>
            </div>
            </div>

            <p className="text-gray-600 mb-4">{description}</p>

            <div className="flex flex-wrap gap-2">
            {tags.map((tag, tagIndex) => (
                <motion.span
                key={tagIndex}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 + tagIndex * 0.1 }}
                className="inline-flex items-center rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-800"
                >
                {tag}
                </motion.span>
            ))}
            </div>
        </div>

        <div className="absolute inset-0 border-2 border-transparent group-hover:border-purple-600/20 rounded-lg transition-colors duration-300" />
        </motion.div>
    )
}

export default AchievementsCard

