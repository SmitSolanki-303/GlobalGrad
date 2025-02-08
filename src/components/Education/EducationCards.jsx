import { motion } from "framer-motion"

const EducationCard = ({ universityName, courseName, courseStart, courseEnd, achievements = [], isLeft }) => {
    return (
        <motion.div
            className={`mb-8 flex justify-between items-center w-full ${
                isLeft ? "flex-row-reverse left-timeline" : "right-timeline"
            }`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: isLeft ? 0 : 0.2 }}
        >
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-purple-400 shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto font-semibold text-lg text-white">{isLeft ? "🎓" : "🎓"}</h1>
            </div>
            <motion.div
                className="order-1 bg-white  rounded-lg shadow-xl w-5/12 px-6 py-4"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
            >
                <h3 className="mb-3 font-bold text-purple-600  text-xl">{universityName}</h3>
                <h4 className="mb-3 font-semibold text-gray-800  text-lg">{courseName}</h4>
                <p className="text-sm text-gray-600  mb-3">
                {courseStart} - {courseEnd}
                </p>
                <ul className="text-sm text-gray-600  list-disc pl-5">
                {achievements.map((achievement, index) => (
                    <li key={index} className="mb-1">
                    {achievement}
                    </li>
                ))}
                </ul>
            </motion.div>
        </motion.div>
    )
}

export default EducationCard

