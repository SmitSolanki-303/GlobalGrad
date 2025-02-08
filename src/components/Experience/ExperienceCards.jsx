import { motion } from "framer-motion"
import { Check } from "lucide-react"

const ExperienceCards = ({ company, position, startDate, endDate, description = [] }) => {
    return (
        <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        key={company}
        className="bg-white rounded-lg shadow-xl p-6"
        >
        <h3 className="text-2xl font-bold mb-1">
            {position} <span className="text-purple-600">@ {company}</span>
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
            {startDate} - {endDate}
        </p>

        <ul className="space-y-4">
            {description.map((item, index) => (
            <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-3"
            >
                <Check className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                <span className="text-gray-600 ">{item}</span>
            </motion.li>
            ))}
        </ul>
        </motion.div>
    )
}

export default ExperienceCards

